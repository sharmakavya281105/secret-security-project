

var infoButtons = document.querySelectorAll('.info-button')
var infoModal = document.querySelector('#infoModal')

var updateUrl = document.querySelector('#Update')
var username = document.querySelector("#Username")
var pass = document.querySelector("#Password")
var balance = document.querySelector("#Balance")
var email = document.querySelector("#Email")
var mobile = document.querySelector("#Phone")
var sponseredBy = document.querySelector("#Sponsor")
var addAccount = document.querySelector('#AddMember')

var  updateBalanceForm = document.querySelector('#UpdateBalanceForm')
var  creditBalanceForm = document.querySelector('#CreditBalanceForm')

var to = document.querySelectorAll("span.to")


console.log(pass,balance);

function setModalInfo(obj){
}


infoButtons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let url = e.target.getAttribute('info-url')
        let name = e.target.getAttribute('username')
        let td = document.querySelector(`#${name}`)
        updateUrl.setAttribute('href',("/admin/members/update/"+url).replace(/([^:]\/)\/+/g, "$1"))
        updateBalanceForm.setAttribute('action',("/admin/members/updateBalance/"+url).replace(/([^:]\/)\/+/g, "$1"))
        creditBalanceForm.setAttribute('action',("/admin/members/creditBalance/"+url).replace(/([^:]\/)\/+/g, "$1"))


        addAccount.setAttribute('href',`/admin/${name}/addMember`)
        username.innerHTML = name 
        pass.innerHTML = td.querySelector('.password').innerHTML
        balance.innerHTML = td.querySelector('.balance').innerHTML
        email.innerHTML = td.querySelector('.email').innerHTML
        mobile.innerHTML = td.querySelector('.phone').innerHTML
        to.forEach(t=>{
            t.innerHTML = "@"+name
        })
        // sponseredBy.innerHTML = td.querySelector('.balance').innerHTML


        // axios.get(url).then(
        //     data=>{
        //         console.log(data.data);
        //     }
        // )
         
    })
})


var amountInput = document.querySelector('#Amount')
var updateAmountButton = document.querySelector('.update-balance-button')
amountInput.addEventListener('input',(e)=>{
    console.log(e.target.value);
    value = e.target.value
    if(value.startsWith('-')){
        updateAmountButton.innerHTML = "Deduct"
        updateAmountButton.classList.remove('btn-primary')
        updateAmountButton.classList.add('btn-danger')

    } else {
        updateAmountButton.innerHTML = "Add"
        updateAmountButton.classList.remove('btn-danger')
        updateAmountButton.classList.add('btn-primary')
    }
   
})

