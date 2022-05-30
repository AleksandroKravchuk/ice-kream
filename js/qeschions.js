


const URL = "https://6283bdb838279cef71dbbcec.mockapi.io/api/v1/qeschions";

const refs = {
    formQeschions: document.querySelector('.questions__form'),
    listQeschions: document.querySelector('.qeschions-list'),
    btnPut: document.querySelector('#qeschions'),
    qeschionsBlock: document.querySelector('.qeschions'),
    inputAnswer: document.querySelector(".modal-content"),
    form: document.querySelector(".form-qeschions")
}


refs.formQeschions.addEventListener('submit', setQeschion);
refs.btnPut.addEventListener('click', renderList);
refs.listQeschions.addEventListener('click', onDelete);


let items = [];
let newItem = {
    message:'',
     answer:''
};
let answer = '';
function setQeschion(evt,answer) {
    evt.preventDefault();
    const message = evt.target.elements.questions.value;
    
    if (!message) {
        return;
    }
    
    newItem.message = message,
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
    fetchMessage().then((data) => data.map(({id, message,answer }) => { 
    const render =       
 `
<li class="qeschion-item >
<div class="qeschion-section">
 <div class="qeschion"><p><span>${id}</span >.  ${message}</p> </div>
 <div class="answer"> <input class="answer-text"  data-id="${id}"  type="text" name="text"><p>${answer}</p></div>
 <button data-id="${id}" class="qeschion-close" type="button">X</bottom>
 
</div>
 
</li>`;
        refs.listQeschions.insertAdjacentHTML('beforeend', render);   
    }));
  
}


  refs.form.addEventListener('submit', addAnswer);
    function addAnswer(evt) {
        evt.preventDefault();
        const inp = evt.currentTarget.elements.text;
        inp.forEach((item) => {
            if (item.value !== '') {
                const id = item.dataset.id; 
               newItem.answer = item.value;
                console.log(id)
                console.log(newItem)
                refs.form.reset() 
//                 const сhangeMessage = () => axios.put(`https://6283bdb838279cef71dbbcec.mockapi.io/api/v1/qeschions/${id}`, (reject, response) => {
//                     response= stringify(newItem.answer)
// );
//     сhangeMessage();
            }
              return
        })};


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
 return   fetchMessage().then((data) => data.map(({ id, message,answer }) => { 
     if (id !== idn) {
         const render =       
 `
<li class="qeschion-item >
<div class="qeschion-section">
 <div class="qeschion"><p><span>${id}</span>.  ${message}</p> </div>
 <div class="answer"> <input class="answer-text"data-id="${id}" type="text-area"><p>${answer}</p></div>
 <button data-id="${id}" class="qeschion-close" type="button">X</bottom>
</div>
</li>`;
        refs.listQeschions.insertAdjacentHTML('beforeend', render);  }
 }));
} 
