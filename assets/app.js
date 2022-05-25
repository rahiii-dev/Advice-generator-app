  
quote();

function quote() {
    fetch('https://api.adviceslip.com/advice')
.then( res => res.json())
.then( (data) => {
    const advice_id_el = document.getElementById('advice_id');  
const advice_slip_el = document.getElementById('advice_slip');
    advice_id_el.innerHTML = data.slip.id;
    advice_slip_el.innerHTML = data.slip.advice;
})
}

const reloadBtn = document.querySelector('.container .dice');

reloadBtn.addEventListener('click', () => {
    quote();
})


