const URL = "https://6283bdb838279cef71dbbcec.mockapi.io/api/v1/qeschions";

const refs = {
    formQeschions: document.querySelector('.questions__form'),
    listQeschions: document.querySelector('.qeschions-list'),
    btnPut: document.querySelector('#qeschions'),
    qeschionsBlock: document.querySelector('.qeschions'),
}

refs.formQeschions.addEventListener('submit', setQeschion);
refs.btnPut.addEventListener('click', renderList);
refs.listQeschions.addEventListener('click',onDelete)

let items = [];

function setQeschion(evt) {
    evt.preventDefault();
    const message = evt.target.elements.questions.value;
    if (!message) {
        return;
    }
    const newItem = {
    message
    };
    createTodo(newItem);
    refs.formQeschions.reset();
}
const createTodo = (newItem) =>
  axios.post(URL, newItem).then(({ data }) => items.push(data));

const fetchMessage = () =>
    axios.get(URL).then((resp) => {
        return resp.data
    });

 

function renderList(evt) {
    evt.preventDefault();
    refs.listQeschions.innerHTML = '';
    fetchMessage().then((data) => data.map(({id, message }) => { 
    const render =       
 `
<li class="qeschion-item >
<div class="qeschion-section">
 <div class="qeschion"><p><span>${id}</span>.  ${message}</p> </div>
 <div class="answer"> <input class="answer-text" type="text-area"></div>
 <button data-id="${id}" class="qeschion-close" type="button">X</bottom>
 
</div>
 
</li>`;
        refs.listQeschions.insertAdjacentHTML('beforeend', render);   
      
    }));
    
}


  
function onDelete(evt) {
    
    const BTN = evt.target.closest('button');
    if (!BTN) return;
    const { id } = BTN.dataset;
   
   const deleteMessage = ()=> axios.delete(`https://6283bdb838279cef71dbbcec.mockapi.io/api/v1/qeschions/${id}`);
    deleteMessage();

   refs.listQeschions.innerHTML = '';
clear(id)
}
function clear(idn) {
 return   fetchMessage().then((data) => data.map(({ id, message }) => { 
     if (id !== idn) {
         const render =       
 `
<li class="qeschion-item >
<div class="qeschion-section">
 <div class="qeschion"><p><span>${id}</span>.  ${message}</p> </div>
 <div class="answer"> <input class="answer-text" type="text-area"></div>
 <button data-id="${id}" class="qeschion-close" type="button">X</bottom>
</div>
</li>`;
        refs.listQeschions.insertAdjacentHTML('beforeend', render);  }
   
      
    }));
} 
// const deleteMessage = ()=>axios.delete("https://6283bdb838279cef71dbbcec.mockapi.io/api/v1/qeschions/4");
// deleteMessage()