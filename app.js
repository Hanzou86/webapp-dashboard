const alert = document.querySelector('.alert');
const alertClose = document.querySelector('.alert-close');
const onOff = document.querySelectorAll('.on-off')
const switchInput = document.querySelectorAll('.switch-input');
const sendBtn = document.querySelector('.send-btn');
const searchUser = document.querySelector('.search-user');
const textUser = document.querySelector('.text-user');
const userForm = document.querySelector('.user-form');
const notifyList = document.querySelector('.notify-list');
const notify = document.querySelector('.notify');
const hourlyData = document.querySelector('.hourly');
const dailyData = document.querySelector('.daily');

function closeElement(btn) {
    btn.parentNode.style.display = 'none';
}

alertClose.addEventListener( 'click', (event) => {
    closeElement(alertClose);
})

for (let i = 0; i < switchInput.length; i++) {
    switchInput[i].addEventListener('click', (event) => {
        if (onOff[i].textContent === 'ON') {
            onOff[i].textContent = 'OFF';
        } else {
            onOff[i].textContent = 'ON';
        }
    })
}


sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (searchUser.value === '') {
        searchUser.value = 'Please Enter User Name';
        searchUser.style.color = 'red';
    } if (textUser.value === '') {
        textUser.value = 'Please Enter Message';
        textUser.style.color = 'red';
    } else if (searchUser.value !== 'Please Enter User Name' | textUser.value !== 'Please Enter Message') {
        window.alert('Message Submitted');
        userForm.reset();
    }
})

searchUser.addEventListener('click', (event) => {
    if (searchUser.value === 'Please Enter User Name' | textUser.value === 'Please Enter Message') {
        userForm.reset();
        searchUser.style.color = 'initial';
        textUser.style.color = 'initial';
    }
}) 

textUser.addEventListener('click', (event) => {
    if (searchUser.value === 'Please Enter User Name' | textUser.value === 'Please Enter Message') {
        userForm.reset();
        textUser.style.color = 'initial';
        searchUser.style.color = 'initial';
    }
}) 

notify.addEventListener('click', (event) => {
    if (notifyList.style.display === 'none'  ) {
        notifyList.style.display = 'flex';
    } else {
        notifyList.style.display = 'none';
    }
})







searchUser.addEventListener('input', (event) => {
    if(event.target.value === 'plum') {
        console.log('Mmmmm')
    }
})


const genObject = {
   propOne: 'Hello',
   propTwo:  27,
   propThree:  ['apple', 'banana', 'orange', 'grapes'],
   propFour:  true,
   propFive:  [{
       name: 'James',
       age: '35',
       height: '5ft 11in'
   },
        {
            name: 'Gloria',
            age: '26',
            height: '6ft'
        }
    ]
    
}

const property = genObject.propFive[1].height;

console.log(property);

