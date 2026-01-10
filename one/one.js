const buttons = document.querySelectorAll('.buttons');
const body = document.body;
buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(event){
        body.style.backgroundColor = event.target.id;
        
    });
});