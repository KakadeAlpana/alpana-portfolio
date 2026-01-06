document.querySelectorAll('.card').forEach(card=>{
 card.onmouseover=()=>card.style.transform="scale(1.05)";
 card.onmouseout=()=>card.style.transform="scale(1)";
});
