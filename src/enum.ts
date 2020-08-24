export {};

enum Months {
  Jan = 1,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

console.log(Months.Jan);
console.log(Months.Nov);

//jsなら下記のようにする

const MonthsJs = {
  Jan: 0,
  Feb: 1,
};

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
}

let green = COLORS.GREEN;

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#080808',
}
