//forEach , map, reduce, find , filter, some , every

//1.forEach2
Array.prototype.forEach2 = function (callback) {
  var arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    return callback(this[i], i);
  }
};

//2. map2
Array.prototype.map2 = function (callback) {
  var arr = [];
  var arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    var result = callback(this[i], i);
    arr.push(result);
  }
  return arr;
};

//3.reduce2
Array.prototype.reduce2 = function (callback, initinalValue) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    initinalValue = this[0];
  }
  var arrLength = this.length;
  for (; i < arrLength; i++) {
    var initinalValue = callback(initinalValue, this[i], i, this);
  }
  return initinalValue;
};

//4.find2
Array.prototype.find2 = function (callback) {
  var arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    if (callback(this[i], i)) {
      return true;
    }
    return false;
  }
};

//5.filter2
Array.prototype.filter2 = function (callback) {
  var arr = [];
  var arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    if (callback(this[i], i)) {
      arr.push(this[i]);
    }
    return arr;
  }
};

//5.some2
Array.prototype.some2 = function (callback) {
  var arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    if (!callback(this[i], i)) {
      return false;
    }
    return true;
  }
};

//5.every
Array.prototype.every2 = function (callback) {
  var arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    if (callback(this[i], i)) {
      return true;
    }
    return false;
  }
};

///
// hasOwnProerty
