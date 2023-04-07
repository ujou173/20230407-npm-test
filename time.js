const moment = require('moment');

const now = new Date();
const currentDay = moment(now).format('YYYY년 MM월 HH시 mm분 ss초');
const transKoreanDayOfWeek = {
  Monday : "월요일",
  Thesday : "월요일",
  Wednessay : "월요일",
  Thursday : "월요일",
  Firday : "월요일",
  Saturday : "월요일",
  Sunday : "일요일",
}
console.log(currentDay);