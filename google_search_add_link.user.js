// ==UserScript==
// @name           Add new link to Google search results
// @author         Fsiki
// @namespace      http://www.fsiki.com/
// @include        about:addons
// @include        http://www.google*
// @include        https://www.google*
// ==/UserScript==

//  (*) Never show Instant results.

(function() {
	var anchorObject = '<img src="data:image/gif;base64,R0lGODlhCgAKAIABAAAAzP///yH5BAEKAAEALAAAAAAKAAoAAAITjI8By2uQ1ItQploRpvO+xkRJAQA7" width="10" height="10" alt="New window" style="border:none;vertical-align:middle;margin-bottom:3px;" />';
	var anchors = document.getElementsByTagName('a');
	//alert(anchors.length);
	for(var i = 0; i < anchors.length; i++){
		var anchor = anchors[i];
		var c = anchor.className;
		if(c != "clickable-dropdown-arrow ab_button" && c != "gbgt"){
//		if(c != "q qs" && c != "clickable-dropdown-arrow ab_button" && c != "fl"){
//		if(c == 'l'){
			var winAnchor = document.createElement('a');
			var AnchorEvent = anchor.getAttribute('onmousedown');
			winAnchor.innerHTML = anchorObject;
			winAnchor.setAttribute('href',anchor.href);
			winAnchor.setAttribute('target','_blank');
//			if(anchor.getAttribute('onmousedown')){
//				winAnchor.setAttribute('onmousedown',AnchorEvent);
//			}
			winAnchor.style.marginRight = '0.3em';
			anchor.parentNode.insertBefore(winAnchor,anchor);
			anchor.parentNode.replaceChild(winAnchor,anchor);
			winAnchor.parentNode.appendChild(anchor);
		}
		i = i + 1;
	}
	var inputs = document.getElementsByTagName('input');
	for(var i = 0; i < inputs.length; i++){
		var input = inputs[i];
		var c = input.className;
		if(c == "gbqfif"){
		var newElement = document.createElement("scan"); 
		newElement.style.marginRight = '2em';
		newElement.style.marginLeft = '2em';
		newElement.innerHTML = anchorObject
//		newElement.innerHTML = '&nbsp;&nbsp;'; 
		input.insertBefore(newElement); 
//		input.parentNode.insertBefore(newElement,input); 
//		input.parentNode.replaceChild(newElement,input); 
//		newElement.parentNode.appendChild(input);
		}
	}
})();
