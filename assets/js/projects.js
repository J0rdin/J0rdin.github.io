(() => {
 const buttons=[...document.querySelectorAll('.filter-chip')],cards=[...document.querySelectorAll('.project-card')],empty=document.getElementById('noResults');
 buttons.forEach(btn=>btn.addEventListener('click',()=>{buttons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');let count=0;cards.forEach(card=>{const show=btn.dataset.filter==='all'||card.dataset.category===btn.dataset.filter;card.hidden=!show;if(show)count++;});if(empty)empty.hidden=count!==0;}));
})();