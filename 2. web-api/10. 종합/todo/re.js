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
const $todoInput = document.querySelector('.todo-input')


function createTodo() {
    //li 생성하고 사용자 입력값 텍스트로 생성.
    const $li = document.createElement('li');
    $li.textContent = $todoInput.value;

    //버튼 생성
    const $delBtn = document.createElement('button');
    $delBtn.textContent = 'X';

    //li에 X버튼을 넣자
    $li.appendChild($delBtn);

    //li를 ul에 추가하자
    document.querySelector('.todo-list').appendChild($li);

    //삭제 버튼 클릭 시 이벤트 발생(요소 생성 시 이벤트 달기)
    // $delBtn.addEventListener('click', () => {
    //     document.querySelector('.todo-list').removeChild($delBtn.parentNode);
    // })
    $todoInput.value = '';
}


$btn2.addEventListener('click', createTodo);

//생성 이후에 ul 안에서 삭제 버튼 클릭 시 이벤트 발생.(이벤트 전파)
const $ul = document.querySelector('.todo-list');

$ul.addEventListener('click', e => {
    if(!e.target.matches('li > button')) {
        return;
    }
    $ul.removeChild(e.target.parentNode);
});