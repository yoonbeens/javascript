const $icon = document.querySelector('.icon');
const $type = document.querySelector('.main .type');
const $span = document.querySelector('.main .lnr');
const $todolist = document.querySelector('#todoList')
const $li = document.querySelector('#todoList li')
const $lii = document.querySelectorAll('#todoList li')
const $input = document.querySelector('.type input');
const $leftext = document.querySelector('.left .text')
const $rightremove = document.querySelectorAll('.right .lnr-cross-circle');
const $papa = document.querySelector('#todoList .papa');



// let $shallowClone;

$icon.addEventListener('click', function (e) {
    // if(e.target!==$icon && e.target!==$span){
    // alert("할 일이 너무 많아요~~~");
    const $inputValue = $input.value;
    // console.log($inputValue);
    $input.value = '';
    //     return;
    // }
    console.log($papa)
    // const $li2 = document.createElement('li');
    // console.log($li)
    const $shallowClone = $papa.cloneNode(true);
    // console.log($shallowClone.children[0].children[1])
    $shallowClone.children[0].children[0].children[1].textContent = $inputValue;
    // console.log($shallowClone)

    const $removeButton = $shallowClone.querySelector('.right .lnr-cross-circle');
    $removeButton.addEventListener('click', function (e) {
        $shallowClone.classList.add('test');
        setTimeout(function () {
            e.target.parentNode.parentNode.parentNode.remove();
        }, 1000);
    });
    $shallowClone.classList.remove('test')

    if ($shallowClone.children[0].children[0].children[1].textContent === '') {
        alert('빈칸은 입력할 수 없습니다! 입력해주세요.')
        return;
    }
    $todolist.appendChild($shallowClone)
    // $li2.textContent = $inputValue;
    // console.log($li2)
    // $todolist.appendChild($li2); 



})

$input.addEventListener('keyup', function (e) {
    // console.log($input)
    if (e.key === 'Enter') { //keycode === 13 , enter와 같음
        // alert("할 일이 너무 많아요~~~");
        const $inputValue = $input.value;
        $input.value = '';
        const $shallowClone = $papa.cloneNode(true);
        const content = $shallowClone.children[0].children[0].children[1]
        content.textContent = $inputValue;
        if (content.textContent === '') {
            alert('빈칸은 입력할 수 없습니다! 입력해주세요.')
            return;
        }



        // $shallowClone.classList.add('test');
        const $removeButton = $shallowClone.querySelector('.right .lnr-cross-circle');

        $removeButton.addEventListener('click', function (e) {
            // const $target = $shallowClone;
            // $target.classList.add('test');
            // setTimeout(function () {
            //     $target.remove();
            // }, 3000);
            $shallowClone.classList.add('test');
            setTimeout(function () {
                e.target.parentNode.parentNode.parentNode.remove();
            }, 1000);
        });

        $shallowClone.classList.remove('test')

        // console.log($shallowClone)
        $todolist.appendChild($shallowClone);

    } else if (e.key === 'Escape') {
        $input.value = '';
    }
})


for (let $riri of $rightremove) {

    $riri.addEventListener('click', function (e) {


        // console.log($lii)
        // console.log($rightremove);
        // console.log($todolist)

        // e.target.closest('li').remove();


        e.target.parentNode.parentNode.parentNode.classList.add('test');
        console.log(e.currentTarget.parentNode.parentNode.parentNode)
        setTimeout(function () {
            // if (e.currentTarget.parentNode.parentNode) {
            e.target.parentNode.parentNode.parentNode.remove();
            // }
        }, 1000);

        // let $liii = document.querySelectorAll('li');
        // for(let $iplus of $liii){
        // if(e.target===$iplus.querySelector('.rightremove')){
        //     $iplus.remove();
        // }
        // }
        // for(let $iplus of $lii){

        //     if(e.target===$iplus){
        //         $iplus.remove();
        //     }
        //     // if($iplus===e.target){

        //     // }
        // }
    })
}

const $undo = document.querySelectorAll('.lnr')
const $check = document.querySelectorAll('input[type="checkbox"]')
const $text = document.querySelectorAll('.text')
const $left = document.querySelectorAll('.left')
const $textarea = document.createElement('input');
const $todo = document.getElementById('todoList');

// for (let $un of [...$undo]) {
//     $un.addEventListener('click', e => {
//         if (e.target.className === 'lnr-undo') {
//             $un.className.remove('lnr-undo');
//             $un.className.add('lnr-checkmark-circle');

//         } else if (e.target.className === 'lnr-checkmark-circle') {
//             $un.className.remove('lnr-checkmark-circle');
//             $un.className.add('lnr-undo');
//         }

//     });

// }



// for (let i = 0; i < $todo.length; i++) {
//     $todo[i].addEventListener('click', e => {
//         if(e.target.classList.contains('lnr-undo')) {
//             e.target.classList.remove('lnr-undo');
//             e.target.classList.add('lnr-checkmark-circle');

//             console.log
//             // e.target.parentNode.parentNode.parentNode.children.children.appendChild($textarea)
//             const left = e.target.parentNode.previousElementSibling;
//             left.appendChild($textarea)

//             $textarea.setAttribute('type', 'text');
//             $textarea.setAttribute('placeholder', left.children[1].textContent);
//             left.children[1].style.display = 'none';
//         }
//     })
// }

// for (let i = 0; i < $undo.length; i++) {
//     $todo[i].addEventListener('click', e => {

//             if (e.target.classList.contains('lnr-undo')) {
//                 e.target.classList.remove('lnr-undo');
//                 e.target.classList.add('lnr-checkmark-circle');

//                 const left = e.target.parentNode.previousElementSibling;
//                 console.log(left);

//                 left.appendChild($textarea);

//                 $textarea.setAttribute('type', 'text');
//                 $textarea.setAttribute('placeholder', left.children[1].textContent);
//                 console.log($text[i].textContent);
//                 left.children[1].style.display = 'none';


//             } else if (e.target.classList.contains('lnr-checkmark-circle')) {
//                 e.target.classList.remove('lnr-checkmark-circle');
//                 e.target.classList.add('lnr-undo');

//                 $text[i].style.display = 'block';
//                 if($textarea.value === '') {
//                     $text[i].textContent = $textarea.placeholder;
//                     $textarea.remove($textarea);
//                 } else if($textarea.value !== '') {
//                     $text[i].textContent = $textarea.value;
//                     $textarea.remove($textarea);
//                 }


//                 $textarea.remove($textarea);  
//             }        
//     })
// }




for (let i = 0; i < $check.length; i++) {
    $check[i].addEventListener('click', e => {
        for (let j = 0; j < $text.length; j++) {
            if ($check[i].parentNode === $text[j].parentNode) {
                if ($text[j].className === 'text') {
                    $text[j].classList.remove('text');
                    $text[j].classList.add('line');
                    console.log($text[j])
                } else if ($text[j].className === 'line') {
                    $text[j].classList.remove('line');
                    $text[j].classList.add('text');
                }
            }
        }
    });
}

// for(let i=0; i<$todo.length; i++) {
//     $todo[i].e.target.addEventListener('click', e => {
//         console.log($todo[i].children.children[0])

//     })
// }



// $todo.addEventListener('click', e => {
//     if (e.target.matches('.left input')) {
//         // console.log(e.target);
//         // e.target.nextSibling;
//         console.log(e.target.nextSibling);
//         for (i = 0; i < e.target.nextSibling.length; i++) {
//             if (e.target.nextSibling[i].classList.contains('text')) {
//                 e.target.nextSibling[i].classList.remove('text');
//                 e.target.nextSibling[i].classList.add('line');
//                 console.log('ggggg');
//             } else if (e.target.nextSibling[i].classList.contains('line')) {
//                 e.target.nextSibling[i].classList.remove('line');
//                 e.target.nextSibling[i].classList.add('text');
//             }
//         }
//     }
// });


// for (let $c of [...$check]) {
//     $c.addEventListener('change', e => {
//         console.log($c)
//         for (let $t of $text) {
//             console.log($t)
//             if(e.taraget === ($c)) {
//                 $t.classList.add('line');
//                 $t.classList.remove('text');
//             } else {
//                 $t.classList.add('text');
//                 $t.classList.remove('line');
//             }

//         }

//     });
// }



// lnr lnr-checkmark-circle