const URL = "https://6283bdb838279cef71dbbcec.mockapi.io/api/v1/qeschions";

const refs = {
    formQeschions: document.querySelector('.questions__form'),
    listQeschions: document.querySelector('.qeschions-list'),
    btnPut: document.querySelector('#qeschions'),
    qeschionsBlock: document.querySelector('.qeschions')
}

refs.formQeschions.addEventListener('submit', setQeschion);
refs.btnPut.addEventListener('click', renderList);

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
<li >
 <p><span>${id}</span>.  ${message}</p>
</li>`;
        refs.listQeschions.insertAdjacentHTML('beforeend', render);   
      
    }));
    
}

// const deleteMessage = ()=>axios.delete("https://6283bdb838279cef71dbbcec.mockapi.io/api/v1/qeschions/7");
// deleteMessage()