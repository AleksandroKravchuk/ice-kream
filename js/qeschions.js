const URL = "https://6283bdb838279cef71dbbcec.mockapi.io/api/v1/qeschions";

const refs = {
    formQeschions: document.querySelector('.questions__form'),
    listQeschions: document.querySelector('.qeschions-list'),
    btnPut: document.querySelector('#qeschions'),
    qeschionsBlock: document.querySelector('.qeschions'),
    // btnAnswer: document.querySelector(`[data-js="answer"]`),
    inputAnswer: document.querySelector(".modal-content"),
    form: document.querySelector(".form-qeschions")
}

// refs.inputAnswer.addEventListener('click',onSelect);
refs.formQeschions.addEventListener('submit', setQeschion);
refs.btnPut.addEventListener('click', renderList);
refs.listQeschions.addEventListener('click', onDelete);
// refs.listQeschions.addEventListener('click', onSelect);

let items = [];
let newItem = {
    message:'',
     answer:''
};
let answer = '';
function setQeschion(evt) {
    evt.preventDefault();
    const message = evt.target.elements.questions.value;
    if (!message) {
        return;
    }
     newItem.message=message,
        
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
 <div class="qeschion"><p><span>${id}</span>.  ${message}</p> </div>
 <div class="answer"> <input class="answer-text" data-id="${id}"type="text-area"><p>${answer}</p></div>
 <button data-id="${id}" class="qeschion-close" type="button">X</bottom>
 
</div>
 
</li>`;
        refs.listQeschions.insertAdjacentHTML('beforeend', render);   
    }));
  
}


  refs.form.addEventListener('submit', addAnswer);
    function addAnswer(evt) {
        evt.preventDefault();
        console.log(evt.currentTarget.elements[1])
        // console.log(evt.target.nodeName === "INPUT")
//           if (evt.target.nodeName !== "INPUT") {
//     return;
//   }
//             const id = evt.currentTarget;
//             // const { value } = evt.target.query;
//         console.log(id) 
        
        // const { id } = evt.currentTarget.closest('input');
       
        // const inpElement = evt.target.closest('input');
        //  if (!inpElement) return;
        //  const idc = inpElement.dataset.id;
        //     console.log(idc);
        //     console.log(inpElement );
        };

  
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

// function onSelect(evt) {
//     const inpElement = evt.target.closest('input');
    
//     if (!inpElement) return;
//     const idc = inpElement.dataset.id;
//     let answer = '';


    // inpElement.addEventListener('input', ((evt) => {
        
    //     answer = evt.currentTarget.value;
       
      
        
    // }));
// }   
    

//     refs.btnAnswer.addEventListener('click', ((idc, answer) => {
       
      
       
//         // console.log(answer)
//         // console.log(idc)
// // refs.listQeschions.innerHTML = '';
// //     fetchMessage().then((data) => data.map(({id, message,answer }) => { 
// //     const render =       
// //  `
// // <li class="qeschion-item >
// // <div class="qeschion-section">
// //  <div class="qeschion"><p><span>${id}</span>.  ${message}</p> </div>
// //  <div class="answer"> <input class="answer-text" data-id="${id}"type="text-area"><p>${answer}</p></div>
// //  <button data-id="${id}" class="qeschion-close" type="button">X</bottom>
 
// // </div>
 
// // </li>`;
// //         refs.listQeschions.insertAdjacentHTML('beforeend', render);   
// //     }));
// }))
// }
// function addAnswer(idc, answer) {
//     console.log(answer)
//     console.log(idc)
//     fetchMessage().then((data) => data.find((item) => {
//         if (item.id === idc) {
//             // const answerext = `<p>${answer}</p>`;
//         return    newItem.answer = answer;
//             // const answerSektion = document.querySelector('.qeschion-section');
//             // console.log(newItem.answer);
//         //   console.log(answerSektion)
//             //  refs.listQeschions.insertAdjacentHTML('beforeend',answerext); 
//    } 
//     }));console.log(newItem)
// }