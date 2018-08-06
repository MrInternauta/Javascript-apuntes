const fibonacciRecursivo = (num)=> (num == 1) ? 0 : (num == 2) ? 1 : fibonacci(num - 1) + fibonacci(num - 2)

const fibonacciMemorizacion = (num, memoria = {}) => memoria[num] ? memoria[num] : (num == 1) ? 0 : (num == 2) ? 1 : memoria[num] = fibonacciMemorizacion(num - 1, memoria) + fibonacciMemorizacion(num - 2, memoria)

fibonacci(1) //0
fibonacci(2) //1
fibonacci(3) //1
fibonacci(4) //2
fibonacci(5) //3
fibonacci(6) //5
fibonacci(7) //8
