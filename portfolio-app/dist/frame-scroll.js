setTimeout(function(){
  var f=document.getElementById('f');
  var d=f.contentDocument;
  var w=f.contentWindow;
  var y=parseInt(f.getAttribute('data-y')||'0',10);
  w.scrollTo(0,y);
  setTimeout(function(){
    var e=d.documentElement;
    var over=[];
    d.querySelectorAll('*').forEach(function(el){
      var r=el.getBoundingClientRect();
      if(r.right>e.clientWidth+1&&r.width>0){
        var cs=w.getComputedStyle(el);
        if(cs.visibility==='hidden')return;
        over.push(el.tagName+'.'+(typeof el.className==='string'?el.className:''));
      }
    });
    var p=document.createElement('pre');p.id='R';
    p.textContent='Y='+y+' cw='+e.clientWidth+' sw='+e.scrollWidth+
      ' OVER='+(over.length?over.slice(0,4).join(' ;; '):'NONE')+
      ' PHOTO='+(d.querySelector('.about-identity-photo img')?'yes':'no')+
      ' HEROPHOTO='+(d.querySelector('.hero-image-photo')?'yes':'no');
    document.body.appendChild(p);
  },600);
},3500);
