function buy(){
    const homeSection=document.getElementById('home-screen')
    homeSection.classList.add('hidden');
    const ticketCollectSection=document.getElementById('ticket-collect')
    ticketCollectSection.classList.remove('hidden');
}







var buttons = document.getElementsByClassName('btn btn-outline btn-success');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        setButtonColorToGreen(this);
    });
}
function setButtonColorToGreen(clickedButton) {
    clickedButton.style.backgroundColor = 'orange';
}
