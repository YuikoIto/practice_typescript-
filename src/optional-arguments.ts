export {};

let bmi: (height: any, weight: any, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log(bmi);
  }
  return bmi;
};
bmi(1.6, 50, true);

//bmi(身長, 体重, console.logで出力するかどうか)

//(bmi(1.6, 50, true)); =>出力する
//(bmi(1.6, 50, false)); =>出力しない
