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


/**
 * State
 */
const state = {
  pomodoro: 2, //длина таймера
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
//Запускает таймер
const play = () => {
  let min = 0
  document.getElementById("play").style.display = 'none'
  document.getElementById("pause").style.display = 'block'
  pauseInterval = setInterval(() => {
    ++state.timerValue
    state.timerValue < 10 ? document.querySelector('.sec').innerHTML = '0' + state.timerValue : document.querySelector('.sec').innerHTML = state.timerValue
    if (state.timerValue == 59) {
      state.timerValue = 0
      ++min
      min < 10 ? document.querySelector('.min').innerHTML = '0' + min : document.querySelector('.min').innerHTML = min
    }
    console.log(state.timerValue)
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
  // code
};