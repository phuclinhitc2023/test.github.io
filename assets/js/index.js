// Tab
    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('.tab-table-active')

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget)
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active')
            })
            tabs.forEach(tab => {
                tab.classList.remove('active')
            })
            tab.classList.add('active')
            target.classList.add('active')
        })
    })


// Modal js
const regBtns = document.querySelectorAll('.js-register') 
const modal = document.querySelector('.js-modal')
const close = document.querySelector('.js-modal-close')
const ModalContainer = document.querySelector('.js-modal-container')

    function ShowRegister(){
        modal.classList.add('open')
    }

    function HideRegister(){
        modal.classList.remove('open')
    }
    for( const Btn of regBtns){
        Btn.addEventListener('click',ShowRegister)
    }

    close.addEventListener('click',HideRegister)
    modal.addEventListener('click',HideRegister)
    ModalContainer.addEventListener('click', function(event){
        event.stopPropagation()
    })
// modal login js

const modalLogin = document.querySelectorAll('.js-login') 
const logmodal = document.querySelector('.js-modal-login')
const closeLogin = document.querySelector('.modal-login-close')
const BoxLogin = document.querySelector('.js-modal-box-login')

    function ShowLogin(){
        logmodal.classList.add('open')
    }

    function HideLogin(){
        logmodal.classList.remove('open')
    }
    for( const modalLg of modalLogin){
        modalLg.addEventListener('click',ShowLogin)
    }

    closeLogin.addEventListener('click',HideLogin)
    logmodal.addEventListener('click',HideLogin)
    BoxLogin.addEventListener('click', function(event){
        event.stopPropagation()
    })
// modal signin js
const modalSignin = document.querySelectorAll('.js-signin') 
const signmodal = document.querySelector('.js-modal-signin')
const closeSignin = document.querySelector('.js-modal-signin-close')
const BoxSingin = document.querySelector('.js-modal-box-signin')

    function ShowSignIn(){
        signmodal.classList.add('open')
    }

    function HideSignIn(){
        signmodal.classList.remove('open')
    }
    for( const modalsg of modalSignin){
        modalsg.addEventListener('click',ShowSignIn)
    }

    closeSignin.addEventListener('click',HideSignIn)
    signmodal.addEventListener('click',HideSignIn)
    BoxSingin.addEventListener('click', function(event){
        event.stopPropagation()
    })

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
$(window).on('load', function(event) { 
	$('body').removeClass('preloading');
	$('.load').delay(1000).fadeOut('slow');
});