function soma(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(`A soma dos numeros [${numbers}] é ${soma(numbers)}`);
