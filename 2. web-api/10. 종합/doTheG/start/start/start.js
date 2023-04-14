
const $select = document.querySelectorAll('.select .char')
const $btn = document.querySelector('.btn')

// for(let $s of [...$select]) {
//     $s.addEventListener('click', e => { 
//         $s.style.border = '5px solid black';
//         console.log($s)
//     })
// }
const $support = document.querySelector('.support')
$support.addEventListener('click',function(){
    location.href='./support.html'
})

$btn.addEventListener('click',function(){
    location.href='/2. web-api/10. 종합/doTheG/main/index.html'
})

function autoPopup(url, width, height) {
    window.open(url, '_blank', 'width=' + width + ',height=' + height + ',top=180,left=1000');
}
  
  
autoPopup('./support.html', 700, 700);

for(let i=0; i<$select.length; i++) {
    $select[i].addEventListener('click', e=> {
        if(!$select[i].classList.contains('border')){
            for(let j=0; j<$select.length; j++){
                $select[j].style.border = 'none'
                $select[i].style.border = '5px solid goldenrod';
                $select[i].classList.add('border')
                console.log($select[i])
            }
        } else if($select[i].classList.contains('border')) {
            $select[i].style.border = 'none';
            $select[i].classList.remove('border')
        }

        // console.log($select[i])
    })
}