var e=document.getElementById("largeImg");document.getElementById("thumbs").addEventListener("click",function(t){t.preventDefault();var a,r=t.target;switch(r.tagName){case"A":a=r;break;case"IMG":a=r.parentNode;break;case"LI":a=r.children[0];break;default:return}e.src=a.href});
//# sourceMappingURL=index.483c82e0.js.map
