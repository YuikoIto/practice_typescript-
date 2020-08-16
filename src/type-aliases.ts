export {};

type Mojiretsu = string;

const fooString: string = 'hello';
const fooMojiretsu: Mojiretsu = 'hello';

type Profile = {
  name: string;
  age: number;
};

const example1: Profile = {
  name: 'yui',
  age: 26,
};

const example2: Profile2 = {
  name: 'ayuha',
  age: 26,
};

type Profile2 = typeof example1;
