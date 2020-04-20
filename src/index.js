import {test} from './javascript/test.js'
import './styles/main.scss';

test();

const timer = document.getElementById('time')
const dateToday = document.getElementById('today')

function insertDate() {
    const date = new Date
    let hour = date.getHours();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    if (minutes < 10) { minutes = `0${minutes}` }
    if (seconds < 10) { seconds = `0${seconds}` }
    dateToday.innerHTML = `${date.getUTCDate()} ${date.getUTCMonth() + 1}`
    timer.innerHTML = `${hour}:${minutes}:${seconds}`
    setTimeout(insertDate, 1000);
}

insertDate();
