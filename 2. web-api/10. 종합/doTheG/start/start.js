
const $select = document.querySelectorAll('.select .char')
const $btn = document.querySelector('.btn')

// for(let $s of [...$select]) {
//     $s.addEventListener('click', e => { 
//         $s.style.border = '5px solid black';
//         console.log($s)
//     })
// }


for(let i=0; i<$select.length; i++) {
    $select[i].addEventListener('click', e=> {
        if(!$select[i].classList.contains('border')){
            for(let j=0; j<$select.length; j++){
                $select[j].style.border = 'none'
                $select[i].style.border = '5px solid black';
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