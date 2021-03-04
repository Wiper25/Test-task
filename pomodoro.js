/**
 * статус таймера
 */
const TIMER_STATS = {
  pomodoro: "pomodoro",
  break: "break",
};
/**изменение цвета фона */
const BACKGROUNDS = {
  [TIMER_STATS.pomodoro]: "linear-gradient(90deg, #F78CA0 0%, #F9748F 20.31%, #FD868C 66.67%, #FE9A8B 100%)",
  [TIMER_STATS.break]: "linear-gradient(180deg, #48C6EF 0%, #6F86D6 100%)",
};
let radius = 150;

//Цвет фона по умолчанию
document.querySelector('body').style.backgroundImage = BACKGROUNDS.pomodoro

document.getElementById('setting').addEventListener('click', () => {
  document.querySelector('.modelWin').style.top = 0 + 'px'
})
document.getElementById('close').addEventListener('click', () => {
  document.querySelector('.modelWin').style.top = -1000 + 'px'
})
document.getElementById('done').addEventListener('click', () => {
  document.querySelector('.modelWin').style.top = -1000 + 'px'
  inputPomodoro = document.getElementById("inputPomodoro").value
  inputShort = document.getElementById("inputShort").value
  inputLong = document.getElementById("inputLong").value
  inputNumPomodoro = document.getElementById("inputNumPomodoro").value
  console.log(inputPomodoro)
  console.log(inputShort)
  console.log(inputLong)
  console.log(inputNumPomodoro)
})

/**
 * State
 */
const state = {
  pomodoro: 5, //длина таймера
  round: 0, // количество помидоров
  breakShort: 1, // короткий перерыв
  breakLong: 3, // длинный перерыв
  cicle: 4, // количество циклов, через которые будет длинный перерыв
  dashOffset: 2 * 3.14 * radius, //вычисляем длину окружности, по формуле P=2πR,где R-радиус
  status: TIMER_STATS.pomodoro,
  timerId: null, //id таймера setInterval
  timerValue: 0, //текущее значение таймера (сек)
};


//подтверждаем изменение данных формы
const handleSubmit = (event) => {

};
let iPomodoro = 0
iBreakMin = 0
iBreakMax = 0

//Запускает таймер
const play = () => {
  document.querySelector('body').style.backgroundImage = BACKGROUNDS.pomodoro
  document.getElementById("play").style.display = 'none'
  document.getElementById("pause").style.display = 'block'
  pauseTimerInterval = setInterval(() => {
    if (state.pomodoro == 0 && state.timerValue == 0) {
      if (iPomodoro == 3) {
        clearInterval(pauseTimerInterval);
        console.log("iPomodoro" + "End")
      } else {
        iPomodoro++
        console.log("iPomodoro" + " " + iPomodoro)
        document.querySelector('body').style.backgroundImage = BACKGROUNDS.break
        state.pomodoro = 10
        breakMin()
        clearInterval(pauseTimerInterval);
      }
    }
    state.pomodoro < 10 ? document.querySelector(".min").innerHTML = '0' + state.pomodoro : document.querySelector(".min").innerHTML = state.pomodoro
    state.timerValue < 10 ? document.querySelector(".sec").innerHTML = '0' + state.timerValue : document.querySelector(".sec").innerHTML = state.timerValue
    if (state.timerValue == 0) {
      state.pomodoro--
      state.timerValue = 59
    }
    state.timerValue--
  }, 10)
};

//Запускает таймер короткой паузы
const breakMin = () => {
  document.getElementById("play").style.display = 'none'
  document.getElementById("pause").style.display = 'block'
  pauseBreackMinInterval = setInterval(() => {
    if (state.pomodoro == 0 && state.timerValue == 0) {
      if (iBreakMin > 3) {
        breakMax()
        clearInterval(pauseBreackMinInterval);
        console.log("breakMin" + "End")
      } else {
          iBreakMin++
        console.log("iBreakMin" + " " + iBreakMin)
        state.pomodoro = 10
        play()
        clearInterval(pauseBreackMinInterval);
      }
    }
    state.pomodoro < 10 ? document.querySelector(".min").innerHTML = '0' + state.pomodoro : document.querySelector(".min").innerHTML = state.pomodoro
    state.timerValue < 10 ? document.querySelector(".sec").innerHTML = '0' + state.timerValue : document.querySelector(".sec").innerHTML = state.timerValue
    if (state.timerValue == 0) {
      state.pomodoro--
      state.timerValue = 59
    }
    state.timerValue--
  }, 10)
};

//Запускает таймер длинной паузы
const breakMax = () => {
  document.querySelector('body').style.backgroundImage = BACKGROUNDS.break
  document.getElementById("play").style.display = 'none'
  document.getElementById("pause").style.display = 'block'
  pauseBreackMaxInterval = setInterval(() => {
    if (state.pomodoro == 0 && state.timerValue == 0) {
      if (iBreakMax == 4) {
        console.log("breakMax End")
      } else {
        iBreakMax++
        console.log("iBreakMax" + " " + iBreakMax)
        document.querySelector('body').style.backgroundImage = BACKGROUNDS.break
        clearInterval(pauseInterval);
      }
    }
    state.pomodoro < 10 ? document.querySelector(".min").innerHTML = '0' + state.pomodoro : document.querySelector(".min").innerHTML = state.pomodoro
    state.timerValue < 10 ? document.querySelector(".sec").innerHTML = '0' + state.timerValue : document.querySelector(".sec").innerHTML = state.timerValue
    if (state.timerValue == 0) {
      state.pomodoro--
      state.timerValue = 59
    }
    state.timerValue--
  }, 10)
};

//ставит таймер на паузу
const pause = () => {
  document.getElementById("play").style.display = 'none'
  document.getElementById("pause").style.display = 'none'
  document.getElementById("continue").style.display = 'block'
  document.getElementById("stop").style.display = 'block'
  clearInterval(pauseInterval);
};

//останавливает таймер
const stop = () => {
  document.getElementById("play").style.display = 'block'
  document.getElementById("pause").style.display = 'none'
  document.getElementById("continue").style.display = 'none'
  document.getElementById("stop").style.display = 'none'
};

//Продолжить 
const cont = () => {
  document.getElementById("play").style.display = 'none'
  document.getElementById("pause").style.display = 'block'
  document.getElementById("continue").style.display = 'none'
  document.getElementById("stop").style.display = 'none'
  play()
};
//меняет значение и статус таймера
tick = () => {

};
