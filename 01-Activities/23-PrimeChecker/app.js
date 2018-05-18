function isPrime(number) {
    for (i = 2; i < number; i++) {
        if (number % i) {
            return false;
        }
    }
} return number > 1;


isPrime(89);