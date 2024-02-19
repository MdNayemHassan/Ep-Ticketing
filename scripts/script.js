function buy(){
    const homeSection=document.getElementById('home-screen')
    homeSection.classList.add('hidden');
    const ticketCollectSection=document.getElementById('ticket-collect')
    ticketCollectSection.classList.remove('hidden');

}

function remove(){
    const ticketSection=document.getElementById('ticket-coupon')
    ticketSection.classList.add('hidden');

}
var buttons = document.getElementsByClassName('btn btn-outline btn-success');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        setButtonColorToGreen(this);
    });
}
function setButtonColorToGreen(clickedButton) {
    clickedButton.style.backgroundColor = 'green';
}

// const currentTicketElement=document.getElementById('clicked-button');
// const currentTicket=currentTicketElement.innerText;
// const expectedticket=currentTicket.toLowerCase();

// if(customerClick===expectedticket){
//     console.log('you got a point')
//     const ticketClickButton=document.getElementById('clicked-button')
//     const ticketClickText=ticketClickButton.innerText;
//     const ticketClick=parseInt(ticketClickText);
//     console.log(ticketClick);
//     const newTicket=ticketClick+1;
//     ticketClickButton.innerText=newTicket;
    
// }
// else{
//     const ticketClickButton=document.getElementById('ticket-seat')
//     const ticketClickText=ticketClickButton.innerText;
//     const ticketClick=parseInt(ticketClickText);
//     const newTicket=ticketClick-1;
//     ticketClickButton.innerText=newTicket;
// }
function getTextElementValueById(elementId){
    const element=document.getElementById(elementId);
    const elementValueText=element.innerText;
    const value=parseInt(elementValueText)
    return value;
}
function setTextElementValueById(elementId,value){
    const element=document.getElementById(elementId);
    element.innerText=value;
}
if(customerClick===expectedticket){
    console.log('you got a point')
const currentTicket=getTextElementValueById('clicked-button')
// console.log(currentTicket);
const newTicket=ticketClick+1;
setTextElementValueById('clicked-button',newTicket)
}