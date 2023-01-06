const todoNameEle = document.querySelector('#name');
const todoDescriptionEle = document.querySelector('#description');
const tableBody = document.querySelector('table tbody');



function submitHandler(e){
  e.preventDefault();

let todoName = todoNameEle.value;
let todoDescription = todoDescriptionEle.value;


render({todoName: todoName , todoDescription: todoDescription});

}

const date = new Date();

const convertedArry = date.toString().split(' ');


const minutes = date.getMinutes() > 9 ?  date.getMinutes() : '0' + date.getMinutes();


const formateHoure = date.getHours() % 12 || 12 ;


const hours = formateHoure > 9 ? formateHoure : '0' + formateHoure;

const amPm = formateHoure > 12 ? 'PM' : "AM";


const time = `${hours} : ${minutes} ${amPm}`;
const formatedDate = convertedArry.slice(1 , 4 ).join(' ');


function render(formData){
  tableBody.innerHTML += `<tr>
    <td>${formData.todoName}</td>
    <td>${formData.todoDescription}</td>
    <td>${formatedDate}</td>
    <td>${time}</td>
  <td>
  <button type="button"  name="button" class= "deleteBtn" >Delete</button>
  </td>
  </tr>`;

  todoNameEle.value = '';
  todoDescriptionEle.value = '' ;


const deleteBtn  = document.querySelectorAll('.deleteBtn');


for(let i = 0; i < deleteBtn.length; i++){
deleteBtn[i].addEventListener('click' , function(e){
removeEle(e.target.parentNode.parentNode)
})
}

}


function removeEle(ele){
  ele.remove();
}
