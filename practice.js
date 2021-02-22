let isVisible = false;
const onclickk = document.querySelector('.row1');
onclickk.addEventListener('click',onClick);
const onclickk2 = document.querySelector('.row1new');
onclickk2.addEventListener('click',onClick);
const onclickk3 = document.querySelector('.row2');
onclickk3.addEventListener('click',onClick);
const onclickk4 = document.querySelector('.row2new');
onclickk4.addEventListener('click',onClick);

function onClick(){
    const row1 = document.querySelector('.row1');
    const row1new = document.querySelector('.row1new');
    const row2 = document.querySelector('.row2');
    const row2new = document.querySelector('.row2new');

    isVisible =!isVisible;
    if(isVisible){
        row1new.classList.remove('hidden');
        row1.classList.add('hidden');
        row2new.classList.remove('hidden');
        row2.classList.add('hidden');
        
    }else{
        row1new.classList.add('hidden');
        row1.classList.remove('hidden');
        row2new.classList.add('hidden');
        row2.classList.remove('hidden');
    }
}