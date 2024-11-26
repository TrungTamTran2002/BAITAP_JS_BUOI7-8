//khai báo mảng
let numbers = [];

//thêm số vào mảng
function addNumber() {
    const num = document.getElementById('inputNumber').value*1;

    numbers.push(num);

    document.getElementById('arrayDisplay').innerHTML = `<p>Mảng hiện tại: [${numbers}]</p>`;
}

// reset
function resetArray() {
    numbers = [];
    document.getElementById('arrayDisplay').innerHTML = `${numbers}`;

}

function sumPositiveNumbers() {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }

    document.getElementById('result').innerHTML = `<p>Tổng số dương: ${sum}</p>`;
}

function countPositiveNumbers() {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }

    document.getElementById('result').innerHTML = `<p>Có tổng cộng ${count} số dương trong mảng</p>`;
}

function findSmallestNumber() {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    document.getElementById('result').innerHTML = `<p>Số nhỏ nhất trong mảng: ${min}</p>`;
}

function findSmallestPositiveNumber() {
    let minPositive = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > 0 && numbers[i] < minPositive) {
            minPositive = numbers[i];
        }
    }

    document.getElementById('result').innerHTML = `<p>Số dương nhỏ nhất trong mảng: ${minPositive}</p>`;
}

function findLastEvenNumber() {
    let lastEven = -1;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            lastEven = numbers[i];
        }
    }

    document.getElementById('result').innerHTML = `<p>Số chẵn cuối cùng trong mảng: ${lastEven}</p>`;
}

function swapValues() {
    const index1 = prompt('Nhập vị trí 1: ')*1;
    const index2 = prompt('Nhập vị trí 2: ')*1;

    if (index1 < 0 || index1 >= numbers.length || index2 < 0 || index2 >= numbers.length) {
        alert('Vị trí không hợp lệ');
        return;
    }

    const temp = numbers[index1];
    numbers[index1] = numbers[index2];
    numbers[index2] = temp;

    document.getElementById('arrayDisplay').innerHTML = `<p>Mảng sau khi đổi: [${numbers}]</p>`;
}

function sortArray() {
    numbers.sort((a, b) => a - b);

    document.getElementById('arrayDisplay').innerHTML = `<p>Mảng sau khi sắp xếp: [${numbers}]</p>`;
}

function findFirstPrime() {
    let foundPrime = false;  // kiểm tra nếu tìm thấy số nguyên tố

    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            document.getElementById('result').innerHTML = `<p>Số nguyên tố đầu tiên trong mảng: ${numbers[i]}</p>`;
            foundPrime = true;  // Đánh dấu đã tìm thấy số nguyên tố
            break; // Dừng vòng lặp khi tìm thấy số nguyên tố đầu tiên
        }
    }

    // Nếu không tìm thấy số nguyên tố
    if (!foundPrime) {
        document.getElementById('result').innerHTML = `<p>Không có số nguyên tố trong mảng</p>`;
    }
}

function isPrime(num) {
    if (num < 2) {
        return false; // Số nhỏ hơn 2 không phải số nguyên tố
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Nếu chia hết cho i thì không phải số nguyên tố
        }
    }

    return true; // Nếu không chia hết cho số nào thì là số nguyên tố
}


function countIntegers() {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i])) {
            count++;
        }
    }

    document.getElementById('result').innerHTML = `<p>Có tổng cộng ${count} số nguyên trong mảng</p>`;
}

function comparePosNeg() {
    let countPositive = 0;
    let countNegative = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            countPositive++;
        } else if (numbers[i] < 0) {
            countNegative++;
        }
    }

    let resultMessage = '';
    if (countPositive > countNegative) {
        resultMessage = `<p>Có nhiều số dương hơn số âm trong mảng.</p>`;
    } else if (countPositive < countNegative) {
        resultMessage = `<p>Có nhiều số âm hơn số dương trong mảng.</p>`;
    } else {
        resultMessage = `<p>Số dương và số âm trong mảng bằng nhau.</p>`;
    }

    resultMessage += `<p>Số dương: ${countPositive}</p>`;
    resultMessage += `<p>Số âm: ${countNegative}</p>`;

    document.getElementById('result').innerHTML = resultMessage;
}
