(function(){
  // Anti-spam: reveal email on first interaction
  var revealed=false;
  function reveal(){
    if(revealed)return;
    revealed=true;
    document.querySelectorAll('.contact').forEach(function(d){
      var e=d.querySelector('.contact-email');
      if(e){var addr=e.dataset.u+'@'+e.dataset.d;e.href='mailto:'+addr;e.textContent=addr;}
    });
  }
  function revealOnce(){reveal();document.removeEventListener('click',revealOnce);document.removeEventListener('touchstart',revealOnce);}
  document.addEventListener('click',revealOnce);
  document.addEventListener('touchstart',revealOnce);
  // Hamburger / title-toggle menu
  document.querySelectorAll('.topbar').forEach(function(topbar){
    var dd=topbar.querySelector('.menu-dropdown');
    if(!dd)return;
    var burger=topbar.querySelector('.menu-toggle');
    var titleBtn=topbar.querySelector('.title-toggle');
    function toggle(ev){
      ev.stopPropagation();
      var open=dd.classList.toggle('open');
      if(burger)burger.setAttribute('aria-expanded',open);
    }
    if(burger)burger.addEventListener('click',toggle);
    if(titleBtn)titleBtn.addEventListener('click',toggle);
    dd.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){dd.classList.remove('open');if(burger)burger.setAttribute('aria-expanded','false');});
    });
  });
  document.addEventListener('click',function(ev){
    document.querySelectorAll('.menu-dropdown.open').forEach(function(dd){
      var topbar=dd.closest('.topbar');
      if(!topbar||topbar.contains(ev.target))return;
      dd.classList.remove('open');
      var b=topbar.querySelector('.menu-toggle');
      if(b)b.setAttribute('aria-expanded','false');
    });
  });
  // Footer copy buttons
  document.querySelectorAll('.copy-btn').forEach(function(btn){
    btn.addEventListener('click',function(ev){
      ev.stopPropagation();
      var type=btn.dataset.copy;
      var text='';
      if(type==='email'){
        text=document.querySelector('.contact-email').dataset.u+'@'+document.querySelector('.contact-email').dataset.d;
      }else if(type==='tel'){
        text='+33 6 60 24 71 71';
      }else if(type==='linkedin'){
        text='https://linkedin.com/in/gildasfremont';
      }
      navigator.clipboard.writeText(text).then(function(){
        var svg=btn.querySelector('svg');
        svg.style.color='var(--dark)';
        setTimeout(function(){svg.style.color='';},800);
      });
    });
  });
  // Text clamping: truncate entry paragraphs, expand on click anywhere in entry
  document.querySelectorAll('.entry > p:first-of-type').forEach(function(p){
    if(p.closest('.section-salarie'))return;
    var lineH=parseFloat(getComputedStyle(p).lineHeight);
    if(p.scrollHeight>lineH*2.5){
      p.classList.add('clamped');
      var entry=p.closest('.entry');
      entry.classList.add('has-clamp');
      var isEn=document.documentElement.lang==='en';
      var toggle=document.createElement('span');
      toggle.className='clamp-toggle';
      toggle.textContent=(isEn?'See more':'Voir plus')+' \u2193';
      var header=entry.querySelector('.entry-header');
      if(header) header.appendChild(toggle);
      entry.addEventListener('click',function(ev){
        if(ev.target.closest('a'))return;
        var expanded=p.classList.toggle('expanded');
        entry.classList.toggle('expanded',expanded);
        toggle.textContent=expanded?((isEn?'See less':'Voir moins')+' \u2191'):((isEn?'See more':'Voir plus')+' \u2193');
        if(!expanded){
          var rect=entry.getBoundingClientRect();
          if(rect.top<0) entry.scrollIntoView({behavior:'smooth',block:'start'});
        }
      });
    }
  });
  // Fit intro: binary search for max font-size where no line overflows
  (function fitIntro(){
    var el=document.querySelector('.intro');
    if(!el)return;
    var lines=el.querySelectorAll('.intro-line');
    if(!lines.length)return;
    var tid;
    function overflows(size){
      el.style.fontSize=size+'px';
      var cs=getComputedStyle(el);
      var w=el.clientWidth-(parseFloat(cs.paddingLeft)||0)-(parseFloat(cs.paddingRight)||0);
      for(var i=0;i<lines.length;i++){
        var range=document.createRange();
        range.selectNodeContents(lines[i]);
        if(range.getBoundingClientRect().width>w+1)return true;
      }
      return false;
    }
    function fit(){
      var lo=8,hi=150;
      while(hi-lo>0.5){
        var mid=(lo+hi)/2;
        if(overflows(mid)){hi=mid;}else{lo=mid;}
      }
      el.style.fontSize=lo+'px';
    }
    function fitAndShow(){
      fit();
      el.style.opacity='1';
    }
    // Wait for fonts then fit; refit on resize
    if(document.fonts&&document.fonts.ready){
      document.fonts.ready.then(fitAndShow);
    }else{
      fitAndShow();
    }
    window.addEventListener('resize',function(){clearTimeout(tid);tid=setTimeout(fit,80);});
  })();
  // Clickable article entries
  document.querySelectorAll('.article-entry').forEach(function(entry){
    entry.addEventListener('click',function(ev){
      if(ev.target.closest('a'))return;
      var a=entry.querySelector('.article-header a');
      if(a) a.click();
    });
  });

  // Glow feature flag: everything below only runs if <html> has .glow-enabled
  if(!document.documentElement.classList.contains('glow-enabled')) return;

  // Algorithmic glow: generate --glow from title text for elements without one
  function titleToGlow(str){
    var h=0;
    for(var i=0;i<str.length;i++) h=str.charCodeAt(i)+((h<<5)-h);
    h=((h%360)+360)%360;
    var s=0.3,l=0.45;
    var c=(1-Math.abs(2*l-1))*s,x=c*(1-Math.abs((h/60)%2-1)),m=l-c/2;
    var r,g,b;
    if(h<60){r=c;g=x;b=0;}else if(h<120){r=x;g=c;b=0;}else if(h<180){r=0;g=c;b=x;}
    else if(h<240){r=0;g=x;b=c;}else if(h<300){r=x;g=0;b=c;}else{r=c;g=0;b=x;}
    return Math.round((r+m)*255)+','+Math.round((g+m)*255)+','+Math.round((b+m)*255);
  }
  document.querySelectorAll('.article-entry').forEach(function(el){
    var title=el.querySelector('.article-header a');
    if(title) el.style.setProperty('--glow',titleToGlow(title.textContent));
  });
  document.querySelectorAll('.edu-row:not([style*="--glow"])').forEach(function(el){
    var txt=el.querySelector('.left span');
    if(txt) el.style.setProperty('--glow',titleToGlow(txt.textContent));
  });

  // Topbar glow: pick up --glow from the entry behind the navbar
  (function(){
    var topbar=document.querySelector('.topbar');
    if(!topbar)return;
    var glow=document.createElement('div');
    glow.className='topbar-glow';
    topbar.appendChild(glow);
    var lastColor=null;
    function update(){
      var barBottom=topbar.getBoundingClientRect().bottom;
      var hit=null;
      var els=document.querySelectorAll('[style*="--glow"]');
      for(var i=0;i<els.length;i++){
        var r=els[i].getBoundingClientRect();
        if(r.top<barBottom&&r.bottom>0){hit=els[i];break;}
      }
      var color=hit?getComputedStyle(hit).getPropertyValue('--glow').trim():null;
      if(color!==lastColor){
        lastColor=color;
        if(color){
          glow.style.background='rgba('+color+',0.12)';
          glow.style.opacity='1';
        }else{
          glow.style.opacity='0';
        }
      }
      requestAnimationFrame(update);
    }
    update();
  })();

})();
