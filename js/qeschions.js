const URL = "https://6283bdb838279cef71dbbcec.mockapi.io/api/v1/qeschions";

const refs = {
    formQeschions: document.querySelector('.questions__form'),
    listQeschions: document.querySelector('.qeschions-list'),
    btnPut: document.querySelector('.button-put'),
    qeschionsBlock: document.querySelector('.qeschions')
}

refs.formQeschions.addEventListener('submit', setQeschion);
refs.btnPut.addEventListener('click', renderList);

let items = [];

function setQeschion(evt) {
    evt.preventDefault();
    const message= evt.target.elements.questions.value;
    const newItem = {
    message
    };
    createTodo(newItem);

}
const createTodo = (newItem) =>
  axios.post(URL, newItem).then(({ data }) => items.push(data));

const fetchMessage = () =>
    axios.get(URL).then((resp) => {
        return resp.data
    });

 

function renderList() {
    
    refs.listQeschions.innerHTML = '';
    fetchMessage().then((data) => data.map(({ message }) => { 
    const render =       
 `
<li >
 <p class="qest">"${message}"</p>
</li>`;
        refs.listQeschions.insertAdjacentHTML('beforeend', render);   
      
    }));
    
}