const add = document.querySelector('.add');
const userList = document.querySelector('ul');
const icon = document.querySelectorAll('i');
const listTag = document.querySelectorAll('li');

add.addEventListener('submit', e => {
    e.preventDefault();

    let li = document.createElement('li');
    let icon = document.createElement('i');
    let value = add.add.value.trim();

    icon.classList.add('far', 'fa-trash-alt', 'delete');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    li.textContent = value;
    li.append(icon)

    userList.append(li)

})

// listTag.forEach((list, index) => {

//     list.addEventListener('click', e => {
//         if(e.target.tagName === 'I') {
//             list.remove()
//         }
//     })

// })
