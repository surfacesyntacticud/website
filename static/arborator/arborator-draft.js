(function () {

/*!
 * arborator script for dependency drawing 
 * version 2.0
 * http://arborator.ilpga.fr/
 *
 * Copyright 2010-2020, Kim Gerdes & Gaël Guibon
 *
 * This program is free software:
 * Licensed under version 3 of the GNU Affero General Public License (the "License");
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at http://www.gnu.org/licenses/agpl-3.0.html
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * See the License for the specific language governing permissions and limitations under the License. 
 *
 */

// global variables:
fontSize = 0; // computed from css value for .token in arborator-draft.css
svgDefaultHeight = 500;
el=10; // type of conll (10, 14, or 4), computed in conllNodesToTree
trees=[]; // list of tree objects
uextras=[]; // list of comments. each comment is a hashtable position(=line)->comment 
conlltrees=[]; // list of conll strings
sentences=[]; // list of sentence strings
theshownfeatures=["FORM", "UPOS", "LEMMA", "MISC.Gloss"]; // recomputed in readConll
shownmetas=['text_en'];
showAllConllButton = false;
progressiveLoading = true; // false to make it load all trees at once (may overload the browser)
reverseMode = false; // set true for right to left conll
conlls = {	
	10: 	{"ID": 0, "FORM":1, "LEMMA": 2, "UPOS": 3, "XPOS":4, "FEATS":5, "HEAD":6, "DEPREL":7, "DEPS":8, "MISC":9}, 
	14: 	{"ID": 0, "FORM":1, "LEMMA": 3, "UPOS": 5, "HEAD":9, "DEPREL":11}, 
	4: 		{"FORM":0, "LEMMA": 0, "UPOS": 1, "HEAD":2, "DEPREL":3} 
};

isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1; // needed for bezier bounding box bug
svgIdIndex = 0;

// debug:
log = console.log.bind(console);

arborator = `<svg
xmlns:dc="http://purl.org/dc/elements/1.1/"
xmlns:cc="http://creativecommons.org/ns#"
xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
xmlns:svg="http://www.w3.org/2000/svg"
xmlns="http://www.w3.org/2000/svg"
version="1.1"
viewBox="-4202 0 5704.1939 1840.839"
style="image-rendering:optimizeQuality;"
height="13"
width="27"
xml:space="preserve">
<path
     style="fill:none;stroke:#4a2769;stroke-width:128.73750305;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;"
     d="m -1890.5398,1002.7933 -1822.5445,615.288 c -261.3344,-190.4146 -424.5469,-433.2903 -424.5469,-661.59345 0,-685.88115 1244.2446,-1296.6446 2780.191,-1296.6446 1534.97478,0 2795.2653,610.76345 2795.2653,1296.6446 0,685.88105 -1252.26757,1244.49535 -2787.2424,1244.49535 -239.9613,0 -490.6091,-19.4301 -718.9123,-43.7176 L -751.94297,618.40481 -882.8496,663.4494" /><path
     style="fill:none;stroke:#dd137b;stroke-width:128.73750305;stroke-miterlimit:4;"
     d="M -864.53567,745.22843 C -964.68477,501.46149 -1354.4152,-183.90675 -1694.5756,-3.2652517 -2014.6556,165.68318 -2049.9732,423.17981 -1871.2632,1084.3717 c 67.0564,232.3776 161.3346,398.0135 238.7197,540.6756" /><path
     style="fill:none;stroke:#4a2769;stroke-width:128.73750305;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;"
     d="M -2068.3297,2157.2657 -751.94297,618.40481"
      />
</svg>`;

const defaultcss = ` 
	.FORM {  font: 18px DejaVu Sans;  fill: black;  font-family:sans-serif;   text-align: center; }
	.LEMMA {  font: 15px DejaVu Sans;  fill: black;  font-family:sans-serif;  text-align: center;  font-style: italic; }   
	.UPOS {  font: 11px DejaVu Sans; fill: rgb(80, 29, 125);  text-align: center; }  
	.MISC-Gloss {font: 15px DejaVu Sans; fill: rgb(124, 96, 86); font-family:sans-serif; text-align: center; font-style: italic;}  
	.DEPREL {  font: 12px Arial;  fill: #1d2ec1;  font-style: oblique;  font-family:sans-serif;  }   
	.arrowhead {  fill: white;  stroke: black;  stroke-width:.8;} 
	.arrowheadxdep { fill: white;stroke: #21ba45;stroke-width:.8;} 
	.xdep {  stroke: #21ba45;  stroke-width: 1;  fill: none;}  
	.curve {  stroke: black;  stroke-width: 1;  fill: none;}  
	.xdeprel { font: 12px Arial;	font-style: oblique; fill: #21ba45; } 
	.svgbox {   overflow-x: auto;  }`;


// public initialisation function
this.ArboratorDraft = function(shownfeatures=false, reverse = false, visuMode = 0) {
	// main function called from html file
	if (shownfeatures) {theshownfeatures = shownfeatures;}
	if(reverse) reverseMode = true;
	if(visuMode==0){
		$( ".expander" ).click(function(){
			$(this).next('conll').toggle();});    
		readConll();
	} 
	else{
		// log('[ArboratorDraft] visumode');
		trees=[]; 
		uextras=[]; 
		conlltrees=[]; 
		sentences=[]; 
		$('conll').hide();
		refresh( $('#conllarea').text() );
	}
}

// public function
ArboratorDraft.prototype.emptyThenRefresh = function(content, reverse = false, toggle = false) {	
	if(reverse) reverseMode = true; // to set reverse or not
	if(toggle) reverseMode = !reverseMode; // to toggle reverse
	empty().done( refresh( content ) );
}

function refresh(content) {
	$('#svgwell').html('');
	$('#svgwell').append( $("<conll></conll>").attr('id', 'transformhere').text( content ) );
	var conll = d3.selectAll('#transformhere')['_groups'][0][0];
	drawConll(conll);
	return;
}

function empty() {
	var def = new jQuery.Deferred();
	clearTimeout(readInsideConllTimeout);
	treelines = [];
	$('#svgwell').html('');
	def.resolve();
	return def.promise();
}

function progressiveReadConll() {
	// draw each conll tags progressively (only conll tags)
	var conllLoop = d3.selectAll('conll')['_groups'][0]; // need to go out d3js to load it progressively
	var i = 0;
	function waitBetweenElements(range) {
		readConllTimeout = setTimeout(function () {
			drawConll(conllLoop[i]);
			i++;
			if (i < range) {
				waitBetweenElements(range);
			}
		}, 10)
	}
	waitBetweenElements(conllLoop.length);
}

function progressiveReadInsideConll(trees, pnode) {
	// draw each tree INSIDE a conll progressively
	var iWait = 0;
	function waitBetweenElements(range) {
		readInsideConllTimeout = setTimeout(function () {
			pushAndDrawSVG(trees[iWait], pnode);
			iWait++;
			if (iWait < range) waitBetweenElements(range);
		}, 10)
	}
	waitBetweenElements(trees.length);
}

function pushAndDrawSVG(element, pnode) {
	conlltrees.push(element);
	var data=conllNodesToTree(element);
	trees.push(data.tree);
	uextras.push(data.uextra)
	sentences.push(data.sentence)

	var toggle = true;
	var divsvgbox = pnode.insert('div').attr("class", 'svgbox');
	var divsentbox = divsvgbox.insert('div').attr("class", 'sentencebox')
	divsentbox.insert('nav').html(`
		<ul>
			<li>
				<a>`+arborator+`</a>
				<ul>
					<li id="showconll`+svgIdIndex+`"><a>🗏 Show CoNLL</a></li>
					<li id="pnglink`+svgIdIndex+`"><a>🖼 Save PNG</a></li>
					<li id="svglink`+svgIdIndex+`"><a>🖍️ Save SVG</a></li>
					<li ><a href="https://github.com/Arborator/arborator-draft" target="_blank">🛈 Info Arborator</a></li>
				</ul>
			</li>
		</ul>`);
	$("#pnglink"+svgIdIndex).click(function(){savePng(this.id);});
	$("#svglink"+svgIdIndex).click(function(){saveSvg(this.id);});
	divsentbox.insert('span').html(data.sentence);
	for (shom of shownmetas) {
		if (shom in data.metas)	
			if (shom.startsWith("text")) divsentbox.insert('div').html("<i>‘"+data.metas[shom]+"’</i>")
			else divsentbox.insert('div').html(data.metas[shom])
	}
	var thisconll = divsentbox.insert('conll').html(element).attr('class', 'conll');
	$("#showconll"+svgIdIndex).click(function(){
		toggle = !toggle;
		thisconll.style("display", toggle ? "none" : "block");
		$(this.childNodes[0]).html(toggle ? "🗏 Show CoNLL": "🗏 Hide CoNLL") //
		});
	thisconll.style("display", toggle ? "none" : "block");
	draw(divsvgbox, data.tree);
	svgIdIndex=svgIdIndex +1;
}

function readConll() {
	// reads the conll representation of the whole treebank that is in the conll field	
	trees=[]; // list of tree objects 
	uextras=[]; // list of comments. each comment is a hashtable position(=line)->comment 
	conlltrees=[]; // list of conll strings, one string per tree
	sentences=[]; // list of sentence strings, one string per tree
	$('conll').hide(); // to hide the huge conll data
	if(progressiveLoading) {
		progressiveReadConll(); // progressive draw
	}
	else {
		d3.selectAll('conll').each(function(d){ drawConll(this); }); // all at once
	}
}

function drawConll(conllElement) { // for each <conll> section:
	var pnode = d3.select(conllElement.parentNode);
	if(showAllConllButton){
		var conll = d3.select(conllElement).attr("class", 'conll'); 
		conll.html(conll.html().trim())
		var toggle = false;
		var showHideConll = pnode.insert('div').html('<div class="center" fit>VIEW CONLL</div> <paper-ripple fit></paper-ripple>').attr("class", 'button raised');	
		var conllContent = conll.html().trim();
		conll.remove(); // remove the old conll because its place wasn't good
		conll = pnode.insert('conll').html(conllContent).attr('class', 'conll'); //re insert to bind the content
		showHideConll.on("click", ()=>{
			conll.style("display", toggle ? "none" : "block");
			showHideConll.html(toggle ? '<div class="center" fit>VIEW CONLL</div> <paper-ripple fit></paper-ripple>': '<div class="center" fit>HIDE CONLL</div> <paper-ripple fit></paper-ripple>');
			toggle = !toggle;
		});
	}
	treelines = conllElement.textContent.trim().split(/\n\s*\n\s*\n*/);	
	if(progressiveLoading) {
		progressiveReadInsideConll(treelines, pnode);
	}
	else {
		for (let singleConll of treelines) { // for each conll tree at once, can block the browser
			pushAndDrawSVG(singleConll, pnode);
		}
	}
}

function conllNodesToTree(treeline) {
	var nodes = treeline.split('\n');
	if(reverseMode) nodes.reverse();
	var tree={};
	var META={}; // sentence features before the actual conll
	var addLines={}; // node position to additional line
	var uextra={}; // todo: check this for reconstruction of conllu
	var lastid=0;
	var skipuntil=0;
	var words=[]
	nodes.forEach(function (nodeline, id) 
	{ // for each conll line:
		nodeline=nodeline.trim().replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
		if (nodeline.charAt(0) == "#") // META
		{
			var [a,v] = nodeline.substring(1).trim().split("=")
			if (v!=null) var [a,v]=[a.trim(),v.trim()]
			META[a]=v
			return true;
		}
		var elements = nodeline.split('\t');
		el=elements.length;
		if(el > 1)
		{
			if (!(el in conlls) && el>10) el=10;
			if (el > 4) id=elements[conlls[el]["ID"]];
			else if (elements[conlls[el]['FORM']] != "_") id++;
			var form=elements[conlls[el]['FORM']];
			var tokids=id.split("-")
			if (tokids.length == 1) { // simple token
				tree[id]={};
				tree[id]["ID"]=id;
				tree[id]['FORM']=form;
				tree[id]["LEMMA"]=elements[conlls[el]["LEMMA"]];
				tree[id]['UPOS']=elements[conlls[el]['UPOS']];
				tree[id]['HEAD']=parseInt(elements[conlls[el]['HEAD']]);
				tree[id]['DEPREL']=elements[conlls[el]['DEPREL']];
				tree[id]["FEATS"]={};
				tree[id]["DEPS"]={};	
				tree[id]["MISC"]={};
				if (id>skipuntil) words.push(form);
				if (el==10) {
					tree[id]["XPOS"] =elements[conlls[el]["XPOS"]];
					tree[id]["FEATS"] =	analyzeFeaturestring(elements[conlls[el]["FEATS"]], '=', '|');
					tree[id]["DEPS"] =	analyzeFeaturestring(elements[conlls[el]["DEPS"]], ':', '|');
					tree[id]["MISC"] =	analyzeFeaturestring(elements[conlls[el]["MISC"]], '=', '|');
				}
			}
			else if (tokids.length == 2){ // n-m type multi-word encoding
				skipuntil = parseInt(tokids[1])
				words.push(elements[conlls[el]['FORM']]);
				if (!(lastid in uextra)) uextra[lastid]=[];
				uextra[lastid].push(nodeline);
			}
			else {
				if (!(lastid in uextra)) uextra[lastid]=[];
				uextra[lastid].push(nodeline);
			}
		}//end if el >1
		else  { // bizarre line
			if (!(lastid in addLines)) addLines[lastid]=[];
			addLines[lastid].push(nodeline);
			if (tokids.length == 2){ // n-m type multi-word encoding
				skipuntil = parseInt(tokids[1])
				words.push(elements[conlls[el]['FORM']]);
			}
			tree[id]['HEAD']=parseInt(elements[conlls[el]['HEAD']]); // todo: think about this
			tree[id]['DEPREL']=elements[conlls[el]['DEPREL']];
		}
		lastid=id;
	});	
	// now always correcting the META.text feature. if this is not desired, uncomment this line:
	// if {tree:tree, uextra:uextra, sentence:META['text']};
	// got to contstruct the sentence
	var sentence = [];
	words.forEach(function (word, i) {
		sentence.push(word);
		if (!("SpaceAfter" in tree[i+1]["MISC"] && tree[i+1]["MISC"]["SpaceAfter"]=="No" )) sentence.push(" ");
		// if(!reverseMode){
		// 	if (i+1 in tree && !(("NoSpaceAfter" in tree[i+1]) && tree[i+1]["NoSpaceAfter"]==false)) sentence.push(" ");
		// } else{ sentence.push(word); }
	});
	META['text'] = sentence.join('')
	if ('shownfeatures' in META) {
		theshownfeatures = META['shownfeatures'].split(/,\s*/);
		console.log(theshownfeatures);
	}
	return {tree:tree, uextra:uextra, sentence:META['text'], metas:META};
}

function analyzeFeaturestring(featstr, eq, spl) {
	o={}
	if (featstr.indexOf(eq) > -1){
		featstr.split(spl).forEach(function (f) // for each feature:
		{
			var fs=f.split(eq)
			if (fs.length >=2) {// if it's not just _
				o[fs[0]]=fs.slice(1).join(eq);
			}
		});
	}
	return o;
}

function getSVGPath(startPoint,endPoint,computedStyle,ymove) {
	// startPoint and endPoint are objects for the corresponding nodes
	var tokDepDist = parseInt(computedStyle.getPropertyValue('--tokDepDist'));
	var depMinHeight = parseInt(computedStyle.getPropertyValue('--depMinHeight'));
	var wordDistanceFactor = parseInt(computedStyle.getPropertyValue('--wordDistanceFactor'));
	if(reverseMode) wordDistanceFactor = -Math.abs(wordDistanceFactor);
	var startOffset = parseInt(computedStyle.getPropertyValue('--startOffset'));
	if(reverseMode) startOffset = -Math.abs(startOffset);
	var startOff=(startPoint['ID']-endPoint['ID']>0)?-startOffset:startOffset
	var x1 = startPoint['x']+startPoint['w']/2+startOff;
	var x2 = endPoint['x']+endPoint['w']/2;
	var y1 = svgDefaultHeight-fontSize*2;
	var y2 = svgDefaultHeight-fontSize*2;
	var x1x2=Math.abs(x1-x2)/2;		
	var yy = Math.max(y1-x1x2-wordDistanceFactor*Math.abs(endPoint['ID']-startPoint['ID']),-tokDepDist);
	var yy = Math.min(yy,y1)-depMinHeight;
	var cstr="M"+x1+","+y1+" C"+x1+","+yy+" "+x2+","+yy+" "+x2+","+(y2-2+ymove); // -2 so that the arrow is really pointed
	//(x0,y0) is start point; (x1,y1),(x2,y2) is control points; (x3,y3) is end point.
	return {cstr:cstr,  x0:x1,y0:y1,  x1:x1,y1:yy,  x2:x2,y2:yy,x3:x2,y3:(y2-2)};
}


function arrowhead(x,y) {
	// gives path for arrowhead x,y startpoint (end of arrow)
	var size = 5;
	var startpoint = x+","+y; // to move the arrowhead lower: (y+size/3);
	var lefttop = "0,0" +(-size/2)+","+(-size*1.5)+" "+(-size/2)+","+(-size*1.5);
	var righttop = (size/2)+"," +(size/2)+" "+(size/2)+"," +(size/2)+ " "+(size)+",0";
	var arrowPath = "M"+ startpoint+"c"+lefttop+ "c"+righttop+ "z";
	return arrowPath;
}


function drawDep(tree, id, govid, label, group, smallestY, curvestyle, relstyle, arrowstyle, rootlabels, ymove) {
	var x = tree[id]['x'] + tree[id]['w'] / 2;
	var depLine = group.append("path")
		.attr("class", curvestyle)
		.attr("d", function (dd) {
			if (govid == 0) // sentence root:
			{
				var y = svgDefaultHeight - fontSize * 2;
				return "M" + x + "," + (y - 2 + ymove) + "L" + x + "," + 0;
			}
			else // normal link:
			{
				pathInfo = getSVGPath(tree[govid], tree[id], getComputedStyle(this), ymove);
				return pathInfo.cstr;
			}
		});
	group.append("path")
		.attr("class", arrowstyle)
		.attr("d", function (dd) {
			return arrowhead(x, svgDefaultHeight - fontSize * 2 +ymove);
		});
	var depLineBbox = depLine.node().getBBox();
	if (govid == 0) // root link:
	{
		rootlabels.push(
			group.append('text')
				.attr("class", relstyle)
				.text(label)
				.attr("x", x+2)
				.attr("y", 0)
			);
	}
	else // normal link:
	{
		group.append('text')
			.attr("class", relstyle)
			.text(label)
			.attr("x", function (d) {
				relFontSize = parseInt(getComputedStyle(this).fontSize, 10);
				var w = this.getComputedTextLength(); //<-- length of this node
				return depLineBbox.x + depLineBbox.width / 2 - w / 2;
			})
			.attr("y", function (d) {
				funcCurveDist = parseInt(getComputedStyle(this).getPropertyValue('--funcCurveDist'));
				if (isFirefox) {
					// firefox needs: stackoverflow.com/questions/24809978/calculating-the-bounding-box-of-cubic-bezier-curve
					const { x0, y0, x1, y1, x2, y2, x3, y3 } = pathInfo; // firefox
					y = bezierMinMax(x0, y0, x1, y1, x2, y2, x3, y3).min.y - funcCurveDist ;
					return y; // firefox
				}
				else {
					// standard Chrome etc
					y = depLineBbox.y - funcCurveDist;
					return y;
				}
			});
		// if not root, check how high we got:
		var smallY = y - relFontSize;
		smallestY = smallY < smallestY ? smallY : smallestY;
	}
	return smallestY
}


function draw(div, tree) {
	// draws json tree on svg in div
	var runningWidth = 0;
	var smallestY = svgDefaultHeight;
	var treeArray = $.map(tree, function(value) {return [value];});
	var svg = div.append("svg:svg")
	.attr("width",  1000)
	.attr("height", svgDefaultHeight);
	var group = svg.append("g");
	var rootlabels = [];
	// write tokens:
	if(reverseMode) treeArray.reverse();
	var eachTexts = group.selectAll("text")
		.data(treeArray)
		.enter();
	eachTexts.append('text') // FORM
		.attr("class", "FORM")
		.text(function(d){ return d["FORM"]; } )
		.attr("ID",function(d) { return d["ID"]; } )
		.attr("x", function(d) {
			var w = this.getComputedTextLength();
			wordDistance = parseInt(getComputedStyle(this).getPropertyValue('--wordDistance'));
			var x = runningWidth; //<-- previous length to return
			runningWidth += w + wordDistance; //<-- total
			tree[d["ID"]]["x"]=x;
			tree[d["ID"]]["w"]=w;
			fontSize = parseInt(getComputedStyle(this).fontSize, 10);
			return x;
		})
		.attr("y", svgDefaultHeight-fontSize);	
	svg.attr("width", runningWidth); // adapt svg width
	// draw dependency links:
	group.selectAll("text").each(function(d) { // for each token:
		var id = d3.select(this).attr("ID");
		var govid = tree[id]["HEAD"];
		var label = tree[id]["DEPREL"];
		smallestY = drawDep(tree, id, govid, label, group, smallestY, "curve", "DEPREL","arrowhead", rootlabels, 0); // standard governor relation
		for (var headid in tree[id]["DEPS"]) { // for each governor of extended dependency
			smallestY = drawDep(tree, id, headid, tree[id]["DEPS"][headid], group, smallestY, "xdep", "xdeprel", "arrowheadxdep", rootlabels, -fontSize/2);
		}
	});	
	var lastheight = 0;
	var h=0;
	
	for (var fea of theshownfeatures) {
		if (fea=="FORM") continue;
		somet=false;		
		eachTexts.append('text')
			.attr("class", fea.replace('.', '-'))
			.text(function(d) {var t=fea.split('.').reduce((value,el) => value[el], d); if(!somet && t) somet=true; return t; } )
			.attr("ID",function(d) {return d["ID"];})
			.attr("x", function(d) {
				// var lemmaLength = this.getComputedTextLength();
				// var w = tree[d["ID"]]["w"];
				wordDistance = parseInt(getComputedStyle(this).getPropertyValue('--wordDistance'));
				h = parseInt(getComputedStyle(this).fontSize, 20);
				return tree[d["ID"]]["x"]; //<-- previous length to return
			})
			.attr("y", svgDefaultHeight-fontSize+lastheight+h)
			.append('title').text(function(d) {return  fea.split('.').slice(-1)[0]+": "+fea.split('.').reduce((value,el) => value[el], d); });
			if (somet) lastheight+=h; // found at least once the feature
	}
	// final adjustments:
	for (rl of rootlabels) rl.attr("y",smallestY+fontSize)
	group.attr("transform", "translate(" + 0 + "," + (-smallestY) + ")");
	svg.attr("height", svgDefaultHeight-smallestY+lastheight+fontSize); // adapt svg height
	svg.attr("id", "svg"+svgIdIndex);
	svg.attr("version", '1.1'); // to prepare ddl of svg
	svg.attr("xmlns", "http://www.w3.org/2000/svg"); // to prepare ddl of svg
}


function bezierMinMax(x0, y0, x1, y1, x2, y2, x3, y3) {
	//(x0,y0) is start point; (x1,y1),(x2,y2) is control points; (x3,y3) is end point.
    var tvalues = [], xvalues = [], yvalues = [], a, b, c, t, t1, t2, b2ac, sqrtb2ac;
    for (var i = 0; i < 2; ++i) {
        if (i == 0) {
            b = 6 * x0 - 12 * x1 + 6 * x2;
            a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
            c = 3 * x1 - 3 * x0;
		} 
		else {
            b = 6 * y0 - 12 * y1 + 6 * y2;
            a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
            c = 3 * y1 - 3 * y0;
        }
        if (Math.abs(a) < 1e-12) {
            if (Math.abs(b) < 1e-12) {
                continue;
            }
            t = -c / b;
            if (0 < t && t < 1) {
                tvalues.push(t);
            }
            continue;
        }
        b2ac = b * b - 4 * c * a;
        if (b2ac < 0) {
            continue;
        }
        sqrtb2ac = Math.sqrt(b2ac);
        t1 = (-b + sqrtb2ac) / (2 * a);
        if (0 < t1 && t1 < 1) {
            tvalues.push(t1);
        }
        t2 = (-b - sqrtb2ac) / (2 * a);
        if (0 < t2 && t2 < 1) {
            tvalues.push(t2);
        }
    }
    var j = tvalues.length, mt;
    while (j--) {
        t = tvalues[j];
        mt = 1 - t;
        xvalues[j] = (mt * mt * mt * x0) + (3 * mt * mt * t * x1) + (3 * mt * t * t * x2) + (t * t * t * x3);
        yvalues[j] = (mt * mt * mt * y0) + (3 * mt * mt * t * y1) + (3 * mt * t * t * y2) + (t * t * t * y3);
    }
    xvalues.push(x0,x3);
    yvalues.push(y0,y3);
    return {
        min: {x: Math.min.apply(0, xvalues), y: Math.min.apply(0, yvalues)},
        max: {x: Math.max.apply(0, xvalues), y: Math.max.apply(0, yvalues)}
    };
}

function svg2Data(svg) {
	var tempCSS = document.createElement("style");
	tempCSS.innerHTML = defaultcss;
	svg.insertBefore(tempCSS, svg.firstChild);
	// svg.appendChild(tempCSS);
	return {svg:svg, tempCSS:tempCSS};
}

function png2Data(svg) {
	var canvas = document.createElement('canvas');
	canvas.height = svg.height.baseVal.value*5;
	canvas.width = svg.width.baseVal.value*5;
	var tempCSS = document.createElement("style");
	tempCSS.innerHTML = defaultcss;
	svg.insertBefore(tempCSS, svg.firstChild);	// === the missing prepend option
	var data = (new XMLSerializer()).serializeToString(svg);
	canvg(canvas, data, {'scaleWidth':canvas.width,'canvas.height':canvas.height,'ignoreDimensions':true});
	return canvas.toDataURL().replace('data:image/png;base64,','');
}

function savePng(btnId) {
	var id = btnId.replace("pnglink","");
	var canvas = document.createElement('canvas');
	var svg = document.getElementById("svg"+id);
	var sdat = svg2Data(svg);	
	canvas.height = svg.height.baseVal.value*5;
	canvas.width = svg.width.baseVal.value*5;
	var ctx = canvas.getContext('2d');
	var data = (new XMLSerializer()).serializeToString(svg);
	var DOMURL = window.URL || window.webkitURL || window;
	var img = new Image(); 
	var svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
	var url = DOMURL.createObjectURL(svgBlob);
	
	img.onload = function () {
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);//, 0, 0, ctx.width, ctx.height);
		DOMURL.revokeObjectURL(url);
		var imgURI = canvas
			.toDataURL('image/png')
			.replace('image/png', 'image/octet-stream');
		var evt = new MouseEvent('click', {
			view: window,
			bubbles: false,
			cancelable: true
		});
		var a = document.createElement('a');
		a.setAttribute('download', sentences[id].match(/[a-zA-Z\u00c0-\u024f\u1e00-\u1eff]+/g).join(' ').split(" ").slice(0,5).join('_').slice(0,50)+'.png');
		a.setAttribute('href', imgURI );
		a.setAttribute('target', '_blank');
		a.dispatchEvent(evt);
	};
	img.src = url;
	
	svg.removeChild(sdat.tempCSS);
}

function saveSvg(btnId) {
	var id = btnId.replace("svglink","");
	var svg = document.getElementById("svg"+id);
	sdat = svg2Data(svg);
	var svgData = svg.outerHTML;
	var svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
	var svgUrl = URL.createObjectURL(svgBlob);
	var downloadLink = document.createElement("a");
	downloadLink.href = svgUrl;
	downloadLink.download = sentences[id].match(/[a-zA-Z\u00c0-\u024f\u1e00-\u1eff]+/g).join(' ').split(" ").slice(0,5).join('_').slice(0,50)+".svg";
	document.body.appendChild(downloadLink);
	downloadLink.click();
	document.body.removeChild(downloadLink);
	svg.removeChild(sdat.tempCSS);
}

function exportPngZip() {
	var filename = document.URL? document.URL.substring(document.URL.lastIndexOf('/')+1, document.URL.lastIndexOf('.')):'trees'
	var zip = new JSZip();
	var folder = zip.folder(filename+".PNGfiles");
	var svgList = $('svg');
	$.each( svgList, function( index, svg ){
		if (svg.id) {
			var pngData = png2Data(svg);
		var sent = sentences[svg.id.replace('svg','')].match(/[a-zA-Z\u00c0-\u024f\u1e00-\u1eff]+/g).join(' ').split(" ").slice(0,5).join('_').slice(0,50)
		folder.file('tree'+svg.id.replace('svg','')+'.'+sent+'.png', pngData, {base64: true});
		}
	});
	zip.generateAsync({type:"blob"})
		.then(function(content) {
			saveAs(content, filename + ".png.export.zip");
		
	});
}

function exportSvgZip() {
	var zip = new JSZip();
	var folder = zip.folder("svgfiles");
	var svgList = $('svg');
	$.each( svgList, function( index, svg ){
		if (svg.id) {
			var svgData = svg2Data(svg);
			var sent = sentences[svg.id.replace('svg','')].match(/[a-zA-Z\u00c0-\u024f\u1e00-\u1eff]+/g).join(' ').split(" ").slice(0,5).join('_').slice(0,50)
			folder.file('tree'+svg.id.replace('svg','')+'.'+sent+'.svg', svgData.svg.outerHTML);
		}
	});
	// TODO:
	// Add an top-level, arbitrary text file with contents
	// zip.file("Hello.txt", "Hello World\n");
	// Generate a directory within the Zip file structure
	// var img = zip.folder("images");
	// Add a file to the directory, in this case an image with data URI as contents
	// img.file("smile.gif", imgData, {base64: true});
	zip.generateAsync({type:"blob"})
		.then(function(content) {
			
			saveAs(content, (document.URL? document.URL.substring(document.URL.lastIndexOf('/')+1, document.URL.lastIndexOf('.')):'trees') + ".svg.export.zip");
	});
}

$("#btnSvgZip").on("click", function (){
	exportSvgZip();
});

$("#btnPngZip").on("click", function (){
	exportPngZip();
});


}());


