module.exports = function solveEquation(equation) {
  // your implementation
  let a,b,c,D,x1,x2,sqrtD;
    let arr = equation.split(" ");


    a = Number(arr[0]);
    b = arr[3] == "+" ? Number(arr[4]) : -Number(arr[4]);
    c = arr[7] == "+" ? Number(arr[8]) : -Number(arr[8]);

    D = b * b - 4 * a * c;

    sqrtD = Math.sqrt(D);
    x1 =+ ((-b - sqrtD) / (2 * a)).toFixed();
    x2 =+ ((-b + sqrtD) / (2 * a)).toFixed();
    return x1 < x2 ? [x1,x2] : [x2,x1];

    
}
