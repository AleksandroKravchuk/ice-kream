const URL = 'https://62ef7097f5521ecad582887f.mockapi.io/queschions';

const refs = {
  formQeschions: document.querySelector('.questions__form'),
  listQeschions: document.querySelector('.qeschions-list'),
  btnPut: document.querySelector('#qeschions'),
  qeschionsBlock: document.querySelector('.qeschions'),
  form: document.querySelector('.form-qeschions'),
};

refs.formQeschions.addEventListener('submit', setQeschion);
refs.btnPut.addEventListener('click', renderList);
refs.listQeschions.addEventListener('click', onDelete);

let items = [];
let newItem = {
  message: '',
  answer: '',
};

function setQeschion(evt, answer) {
  evt.preventDefault();
  const message = evt.target.elements.questions.value;

  if (!message) {
    return;
  }

  (newItem.message = message), createTodo(newItem);
  refs.formQeschions.reset();
}
const createTodo = newItem => axios.post(URL, newItem).then(({ data }) => items.push(data));

const fetchMessage = () =>
  axios.get(URL).then(resp => {
    return resp.data;
  });

function createList() {
  fetchMessage().then(data =>
    data.map(({ id, message, answer }) => {
      const render = `
<li class="qeschion-item >
<div class="qeschion-section">
 <div class="qeschion"><p class"qeschion-text" > <span>${id}</span >. ${message}</p> </div>
 <div class="answer"> <input class="answer-text"  data-id="${id}"  type="text" name="text"><p class="answer-span">${answer}</p></div>
 <button data-id="${id}" class="qeschion-close" type="button">X</bottom>
 
</div>
</li>`;
      refs.listQeschions.insertAdjacentHTML('beforeend', render);
      const inputAnswer = document.querySelectorAll('.answer');

      inputAnswer.forEach(item => {
        const isDone = item.querySelector('.answer-span').textContent;
        if (isDone !== '') {
          const inpText = item.querySelector('.answer-text');
          inpText.classList.add('none');
        }
      });
    })
  );
}

function renderList(evt) {
  evt.preventDefault();
  refs.listQeschions.innerHTML = '';
  createList();
}

refs.form.addEventListener('submit', addAnswer);
function addAnswer(evt) {
  evt.preventDefault();
  const inp = evt.currentTarget.elements.text;
  if (inp.length === undefined) {
    const id = inp.dataset.id;
    newItem = {
      answer: '',
    };
    newItem.answer = inp.value;
    refs.form.reset();
    const сhangeMessage = () =>
      axios
        .put(`https://62ef7097f5521ecad582887f.mockapi.io/queschions/${id}`, newItem)
        .then(({ data }) => items.splice(0, 1, data))
        .then(function fetchMessage() {
          axios.get(URL).then(resp => {
            return resp.data;
          });
          refs.listQeschions.innerHTML = '';
          createList();
        });
    сhangeMessage(newItem);
    newItem.answer = '';
  } else
    inp.forEach(item => {
      if (item.value !== '') {
        const id = item.dataset.id;
        newItem = {
          answer: '',
        };
        newItem.answer = item.value;
        refs.form.reset();

        const сhangeMessage = () =>
          axios
            .put(`https://62ef7097f5521ecad582887f.mockapi.io/queschions/${id}`, newItem)
            .then(({ data }) => items.splice(0, 1, data))
            .then(function fetchMessage() {
              axios.get(URL).then(resp => {
                return resp.data;
              });
              refs.listQeschions.innerHTML = '';
              createList();
            });

        сhangeMessage(newItem);
        newItem.answer = '';
      }
      return;
    });
}

function onDelete(evt) {
  const BTN = evt.target.closest('button');
  if (!BTN) return;
  const { id } = BTN.dataset;

  const deleteMessage = () =>
    axios.delete(`https://62ef7097f5521ecad582887f.mockapi.io/queschions/${id}`);
  deleteMessage();

  refs.listQeschions.innerHTML = '';
  clear(id);
}
function clear(idn) {
  return fetchMessage().then(data =>
    data.map(({ id, message, answer }) => {
      if (id !== idn) {
        const render = `
<li class="qeschion-item >
<div class="qeschion-section">
 <div class="qeschion"><p><span>${id}</span >.  ${message}</p> </div>
 <div class="answer"> <input class="answer-text"  data-id="${id}"  type="text" name="text"><p class="answer-span">${answer}</p></div>
 <button data-id="${id}" class="qeschion-close" type="button">💀</bottom>
 
</div>
</li>`;
        refs.listQeschions.insertAdjacentHTML('beforeend', render);
        const inputAnswer = document.querySelectorAll('.answer');

        inputAnswer.forEach(item => {
          const isDone = item.querySelector('.answer-span').textContent;
          if (isDone !== '') {
            const inpText = item.querySelector('.answer-text');
            inpText.classList.add('none');
          }
        });
      }
    })
  );
}
