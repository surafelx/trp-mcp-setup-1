const KEY = 'trp-entries'

function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}

function load(){
  try{const raw = localStorage.getItem(KEY); return raw?JSON.parse(raw):[] }catch(e){return[]}
}

function saveAll(items){localStorage.setItem(KEY, JSON.stringify(items))}

function render(){
  const list = document.getElementById('entriesList')
  list.innerHTML = ''
  const items = load().slice().reverse()
  if(items.length===0){list.innerHTML = '<li class="entry"><div class="left"><div class="meta">No entries yet.</div></div></li>';return}
  for(const it of items){
    const li = document.createElement('li'); li.className='entry'
    const left = document.createElement('div'); left.className='left'
    const meta = document.createElement('div'); meta.className='meta'
    meta.textContent = new Date(it.date).toLocaleString()
    const text = document.createElement('div'); text.className='text'; text.textContent = it.text || ''
    left.appendChild(meta); left.appendChild(text)
    const actions = document.createElement('div'); actions.className='actions'
    if(it.link){
      const a = document.createElement('a'); a.className='link-btn'; a.href = it.link; a.target='_blank'; a.rel='noopener'; a.textContent='Open'
      actions.appendChild(a)
    }
    const del = document.createElement('button'); del.className='delete-btn'; del.textContent='Delete'
    del.addEventListener('click',()=>{
      const all = load().filter(x=>x.id!==it.id); saveAll(all); render()
    })
    actions.appendChild(del)
    li.appendChild(left); li.appendChild(actions)
    list.appendChild(li)
  }
}

document.getElementById('save').addEventListener('click', ()=>{
  const note = document.getElementById('note').value.trim()
  const linkEl = document.getElementById('link').value.trim()
  if(!note && !linkEl) return alert('Add a note or link first')
  let link = linkEl || ''
  if(link && !/^https?:\/\//i.test(link)) link = 'https://' + link
  const all = load()
  all.push({id:uid(), text:note, link, date: new Date().toISOString()})
  saveAll(all)
  document.getElementById('note').value=''
  document.getElementById('link').value=''
  render()
})

document.getElementById('clearAll').addEventListener('click', ()=>{
  if(!confirm('Clear all entries?')) return
  localStorage.removeItem(KEY); render()
})

// initial render
render()
