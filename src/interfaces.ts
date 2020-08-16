export {};

type ObjectType = {
  name: string;
  age: number;
};

interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'yui',
  age: 26,
};

//aliasesは変数として型を作る　interfaceはObjectとして型を作る
