(function(){
  const grid=document.getElementById('cards');
  const search=document.getElementById('search');
  const countEl=document.getElementById('count');
  const burger=document.getElementById('burger');
  const nav=document.getElementById('nav');
  if(burger){burger.addEventListener('click',()=>nav.classList.toggle('open'))}
  let view='grid';
  const viewBtns=document.querySelectorAll('.view-toggle button');
  viewBtns.forEach(b=>b.addEventListener('click',()=>{
    viewBtns.forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    view=b.dataset.view;
    render();
  }));
  function getTags(t){
    if(Array.isArray(t.tags))return t.tags;
    if(t.tags&&typeof t.tags==='object')return Object.values(t.tags).flat().filter(Boolean);
    return [];
  }
  function activeFilters(group){
    return Array.from(document.querySelectorAll(`input[data-group="${group}"]:checked`)).map(i=>i.value);
  }
  function matches(t){
    const q=(search?.value||'').trim().toLowerCase();
    if(q){
      const hay=[t.name,t.description,t.industry,...getTags(t)].join(' ').toLowerCase();
      if(!hay.includes(q))return false;
    }
    const ind=activeFilters('industry');
    if(ind.length&&!ind.includes(t.industryCategory))return false;
    const mode=activeFilters('mode');
    if(mode.length){
      const m=t.backgroundMode==='dark'?'深色底':'淺色底';
      if(!mode.includes(m))return false;
    }
    const layout=activeFilters('layout');
    if(layout.length&&!layout.includes(t.layoutType))return false;
    return true;
  }
  function card(t){
    const tags=getTags(t).slice(0,4);
    const mode=t.backgroundMode==='dark'?'深色底':'淺色底';
    return `<article class="card">
      <div class="thumb">
        <span class="badge-mode">${mode}</span>
        <img src="${t.previewImage}" alt="${t.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/640x400/1a1a20/7c3aed?text='+encodeURIComponent('${t.name}')">
      </div>
      <div class="body">
        <h3>${t.name}</h3>
        <div class="meta">${t.industry} · ${t.layoutType}</div>
        <div class="tags">${tags.map(x=>`<span class="tag">${x}</span>`).join('')}</div>
        <div class="actions">
          <a class="btn primary" href="${t.demoUrl}" target="_blank">預覽網站</a>
          <a class="btn" href="template-detail.html?id=${t.id}">查看詳情</a>
          <a class="btn" href="${t.promptUrl}" target="_blank">查看 Prompt</a>
        </div>
      </div>
    </article>`;
  }
  function render(){
    const list=(window.TEMPLATES_DATA||[]).filter(matches);
    countEl.textContent=list.length;
    grid.className=view==='grid'?'cards-grid':'cards-list';
    grid.innerHTML=list.map(card).join('')||'<p style="grid-column:1/-1;text-align:center;color:var(--muted);padding:40px">沒有符合條件的樣板</p>';
  }
  document.addEventListener('input',e=>{if(e.target.matches('input,select'))render()});
  render();
})();