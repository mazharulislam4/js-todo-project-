const todoNameEle = document.querySelector('#name');
const todoDescriptionEle = document.querySelector('#description');
const todo = document.querySelector('.todo');



const date = new Date();

const convertedArry = date.toString().split(' ');


const minutes = date.getMinutes() > 9 ?  date.getMinutes() : '0' + date.getMinutes();


const formateHoure = date.getHours() % 12 || 12 ;


const hours = formateHoure > 9 ? formateHoure : '0' + formateHoure;

const amPm = formateHoure > 12 ? 'PM' : "AM";


const time = `${hours} : ${minutes} ${amPm}`;
const formatedDate = convertedArry.slice(1 , 4 ).join(' ');



// submitHandler


function submitHandler(e){
  e.preventDefault();

let todoName = todoNameEle.value;
let todoDescription = todoDescriptionEle.value;


render({todoName: todoName , todoDescription: todoDescription});

}

// html rendering

function render(formData){

if(!document.querySelector('.todo table')){
  todo.innerHTML = `<table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Date</th>
          <th>Time</th>
          <th>Delete</th>
        </tr>
      </thead>

  <tbody>

  </tbody>

    </table>`;

}


const table = document.querySelector('.todo table');
const tableBody = document.querySelector('table tbody');

table.style.visibility = "visible";

const tr = document.createElement('tr') ;

tr.innerHTML = `
<td>${formData.todoName}</td>
<td>${formData.todoDescription}</td>
<td>${formatedDate}</td>
<td>${time}</td>
<td>
<button type="button"  name="button" class= "deleteBtn" >Delete</button>
</td>
`;


tableBody.insertAdjacentElement('beforeend' , tr)

    todoNameEle.value = '';
    todoDescriptionEle.value = '' ;


  const deleteBtn  = document.querySelectorAll('.deleteBtn');


  for(let i = 0; i < deleteBtn.length; i++){
  deleteBtn[i].addEventListener('click' , function(e){
  removeEle(e.target.parentNode.parentNode)
  })
  }


}




// remove table row 

function removeEle(ele){
  ele.remove();

const table = document.querySelector('.todo table');


if(table.querySelector('tbody').children.length == 0){
  table.style.visibility = "hidden";
}else {
  table.style.visibility = "visible";
}


}
