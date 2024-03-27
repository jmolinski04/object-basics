const isEmpty = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

let schedule = {};
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));
