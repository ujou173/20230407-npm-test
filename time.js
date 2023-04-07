import moment from 'moment';

function timeFunc() {
  const now = new Date();
  const currentTime = moment(now).format('YYYY년 MM월 HH시 mm분 ss초 dddd');
  return currentTime;
}
console.log(timeFunc());

export default timeFunc;