const btn = document.getElementById('btn');


btn.addEventListener('click', function(){
    document.body.classList.toggle('hijau');
   
});

const btnAcak = document.getElementById('btn-acak');

btnAcak.addEventListener('click', function(){
    const r = Math.round(Math.random()*255+1)
    const g =Math.round(Math.random()*255+1)
    const b =Math.round(Math.random()*255+1)
    document.body.style.backgroundColor='rgb('+ r +','+ g +','+ b +')';
} )

const btnMerah = document.getElementById('rMerah')
const btnHijau = document.getElementById('rHijau')
const btnBiru = document.getElementById('rBiru')

btnMerah.addEventListener('change', function(){
    const rRed = btnMerah.value;
    const rGreen =btnHijau.value;
    const rBlue =btnBiru.value;
    document.body.style.backgroundColor=`rgb(${rRed},${rGreen},${rBlue})`
})
btnHijau.addEventListener('change', function(){
    const rRed = btnMerah.value;
    const rGreen =btnHijau.value;
    const rBlue =btnBiru.value;
    document.body.style.backgroundColor=`rgb(${rRed},${rGreen},${rBlue})`
})
btnBiru.addEventListener('change', function(){
    const rRed = btnMerah.value;
    const rGreen =btnHijau.value;
    const rBlue =btnBiru.value;
    document.body.style.backgroundColor=`rgb(${rRed},${rGreen},${rBlue})`
})
