(() => {
 const toggle=document.getElementById('menuToggle'), nav=document.getElementById('mainNav');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));}
 const progress=document.getElementById('scrollProgress');
 const update=()=>{if(progress){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%';}};
 addEventListener('scroll',update,{passive:true});update();
 const revealTargets=document.querySelectorAll('.section,.feature-card,.project-card,.experience-art,.experience-copy,.projects-hero,.detail-hero,.detail-gallery,.detail-bottom');
 revealTargets.forEach(el=>el.classList.add('reveal'));
 if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible','in-view');io.unobserve(entry.target)}}),{threshold:.12});revealTargets.forEach(el=>io.observe(el));}else revealTargets.forEach(el=>el.classList.add('visible','in-view'));
 const form=document.getElementById('contactForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const subject=encodeURIComponent('Portfolio enquiry — '+data.get('name'));const body=encodeURIComponent('Hi Jordin,\\n\\n'+data.get('message')+'\\n\\nFrom: '+data.get('name')+'\\nEmail: '+data.get('email'));location.href='mailto:jordin.jain@gmail.com?subject='+subject+'&body='+body;});}
})();