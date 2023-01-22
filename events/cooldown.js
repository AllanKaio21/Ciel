let array = [];
let time = [];

function add(id){
  array.push(id);
}

function remove(id){
  array.splice(array.indexOf(id), 1);
}

function is(id){
  return array.includes(id);
}

function setTime(timer, id){
  time[id] = timer;
  return time;
}

function getTime(id){
  return time[id];
}

module.exports = {
  add: add,
  remove: remove,
  is: is,
  setTime: setTime,
  getTime: getTime

}