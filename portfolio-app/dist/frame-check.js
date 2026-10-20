setTimeout(function(){
  var d=document.getElementById('f').contentDocument;
  var e=d.documentElement;
  var imgs=Array.prototype.map.call(d.images,function(i){return i.naturalWidth>0?'OK':'FAIL'});
  var p=document.createElement('pre');p.id='R';
  p.textContent='MOBILE cw='+e.clientWidth+' sw='+e.scrollWidth+
    ' OVER='+(e.scrollWidth>e.clientWidth?'YES':'NONE')+
    ' IMG='+imgs.join(',')+
    ' NAV='+(d.querySelector('.nav-brand')?d.querySelector('.nav-brand').textContent.trim():'-')+
    ' ABOUT='+(d.querySelector('.about-identity-name')?d.querySelector('.about-identity-name').textContent.trim():'-')+
    ' FOOTER='+(d.querySelector('.footer-label')?d.querySelector('.footer-label').textContent.trim():'-');
  document.body.appendChild(p);
},4000);
