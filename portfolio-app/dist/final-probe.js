window.__e=[];var ce=console.error;console.error=function(){window.__e.push('E:'+[].join.call(arguments,' '));ce.apply(console,arguments)};
window.addEventListener('error',function(e){window.__e.push('X:'+e.message)});
window.addEventListener('unhandledrejection',function(e){window.__e.push('R:'+e.reason)});
setTimeout(function(){
  var d=document.documentElement,cw=d.clientWidth,over=[];
  document.querySelectorAll('*').forEach(function(el){
    var r=el.getBoundingClientRect();
    if(r.right>cw+1&&r.width>0){
      var cs=getComputedStyle(el);
      if(cs.visibility==='hidden')return;
      over.push(el.tagName+'.'+(typeof el.className==='string'?el.className:'')+' w='+Math.round(r.width));
    }
  });
  var imgs=Array.prototype.map.call(document.images,function(i){return i.currentSrc.split('/').pop()+':'+(i.naturalWidth>0?'OK'+i.naturalWidth:'FAIL')});
  var p=document.createElement('pre');p.id='RESULT';
  p.textContent='ERRS='+window.__e.length+' ['+window.__e.join(' ;; ')+'] sw='+d.scrollWidth+'/'+cw+
    ' OVER='+(over.length?over.slice(0,5).join(' ;; '):'NONE')+
    ' IMG='+imgs.join(',')+
    ' TITLE='+(document.querySelector('.hero-title')?document.querySelector('.hero-title').textContent.trim():'-');
  document.body.appendChild(p);
},3000);
