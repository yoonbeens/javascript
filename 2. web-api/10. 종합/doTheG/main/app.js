// 윤빈님 담당
// 시작 시 캐릭터 선택
// 시간 재기


// 지현 담당
// 클릭 시 커서 변경 및 사운드 이펙트
// 필살기
// 피버타임
// 사운드 이펙트 [BGM]
let moleCount = 0;
const holes = [false, false, false, false, false, false, false, false, false];

// 두더지 생성 및 삭제
const createMole = setInterval(() => {
  const $holes = [...document.querySelectorAll('div[class^=hole] .mask')];
  const idx = chooseMolePosition();
  setTimeout(() => {
    const mole = $holes[idx].firstElementChild;
    if (mole.classList.contains('digdaUp')) {
      mole.className = 'digdaDown';
    } else if (mole.classList.contains('doctrioUp')) {
      mole.className = 'doctrioDown';
    }

    holes[idx] = false;
    moleCount--;
    setTimeout(() => {
      $holes[idx].removeChild(mole);
    }, 1000);
  }, 1000);
}, 500);

// 두더지가 어디에서 나오는지
function chooseMolePosition() {
  const $holes = [...document.querySelectorAll('div[class^=hole] .mask')];
  let idx;

  while (true) {
    idx = Math.floor(Math.random() * 9);
    if (!holes[idx]) break;
  }

  // console.log(idx);
  $holes[idx].appendChild(chooseMoleType());
  holes[idx] = true;
  // console.log(holes);
  moleCount++;

  return idx;
}

// 무슨 두더지가 나오는지
function chooseMoleType() {
  const randomNum = Math.floor(Math.random() * 3);
  // console.log(randomNum);
  const mole = document.createElement('img');
  switch (randomNum) { // 두더지 종류 설정
    case 0: {
      mole.setAttribute('src', './src/normal_digda.png');
      break;
    }

    case 1: {
      mole.setAttribute('src', './src/normal_alora_digda.png');
      break;
    }

    case 2: {
      mole.setAttribute('src', './src/normal_doctrio.png');
      break;
    }

    default: {
      mole.setAttribute('src', './src/normal_digda.png');
    }
  }

  if (randomNum <= 1) { // 디그다, 알로라 디그다 사이즈 및 위치 조정
    mole.style.width = '100%'
    mole.classList.add('digdaUp');

  } else if (randomNum === 2) { // 닥트리오 사이즈 및 위치 조정
    mole.style.width = '70%';
    mole.classList.add('doctrioUp');
  }

  // console.log(mole);
  return mole;
}

// 점수 매기기
const $score = document.querySelector('section.main h1 span');
const $mole = document.querySelector('article.number-wrapper');
$score.textContent = 0;

$mole.addEventListener('click', e => {
  if (e.target.matches('.mask img')) {
    if (e.target.getAttribute('src') === './src/normal_digda.png') {
      e.target.setAttribute('src', './src/sad_digda.png');
      e.target.className = 'sadDigda';
      $score.textContent++;
    }

    if (e.target.getAttribute('src') === './src/normal_alora_digda.png') {
      e.target.setAttribute('src', './src/sad_alora_digda.png');
      e.target.className = 'sadDigda';
      for (let i = 1; i <= 3; i++) {
        $score.textContent++;
      }
    }

    if (e.target.getAttribute('src') === './src/normal_doctrio.png') {
      e.target.setAttribute('src', './src/sad_doctrio.png');
      e.target.className = 'sadDoctrio';
      for (let i = 1; i <= 5; i++) {
        $score.textContent++;
      }
    }
  }
});

// 필살기 버튼 효과
if (document.body.animate) {
  document
    .querySelectorAll(".button")
    .forEach((button) => button.addEventListener("click", pop));
}

function pop(e) {
  for (let i = 0; i < 30; i++) {
    createParticle(e.clientX, e.clientY, e.target.dataset.type);
  }
}

function createParticle(x, y, type) {
  const particle = document.createElement("particle");
  document.body.appendChild(particle);

  const size = Math.floor(Math.random() * 20 + 5);

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  const destinationX = x + (Math.random() - 0.5) * 2 * 75;
  const destinationY = y + (Math.random() - 0.5) * 2 * 75;

  switch (type) {
    case "square":
      particle.style.background = `hsl(${Math.random() * 90 + 270}, 70%, 60%)`;
      particle.style.border = "1px solid white";
      break;
    case "circle":
      particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;
      particle.style.borderRadius = "50%";
      break;
    default:
      particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;
  }

  const animation = particle.animate(
    [
      {
        // Set the origin position of the particle
        // We offset the particle with half its size to center it around the mouse
        transform: `translate(${x - size / 2}px, ${y - size / 2}px)`,
        opacity: 1,
      },
      {
        // We define the final coordinates as the second keyframe
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0,
      },
    ],
    {
      duration: 500 + Math.random() * 1000,
      easing: "cubic-bezier(0, .9, .57, 1)",
      delay: Math.random() * 200,
    }
  );

  animation.onfinish = () => {
    particle.removeParticle;
  };
}

function removeParticle(e) {
  e.srcElement.effect.target.remove();
}

const $cute = document.querySelector('.cute');
const $button = document.querySelector('.button-first');
const $main = document.querySelector('.main');



$button.addEventListener('click', function () {

  // $main.style.display = "none";
  $cute.style.display = 'block';

  setTimeout(function () {
    $main.style.display = 'block';
    $cute.style.display = 'none';
  }, 2000);
})


// 윤빈 타이머

let count = 60;

let timer = setInterval(function(){
  count --;

  document.querySelector('.timer').textContent = count;

  if(count === 0) {
    clearInterval(timer)

    document.querySelector('.timer').textContent = 'FIN'
  }

}, 100);