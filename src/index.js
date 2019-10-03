module.exports = function zeros(expression) {
    let items = expression.split(/\*/)
    let two = 0;
    let five = 0;

    for (number in items) {
        let item = items[number].replace(/!+/, '')
        let power = items[number].match(/!/g).length

        five+= count(item, 5, power)
        two+= count(item, 2, power)
    }

    return Math.min(two, five)
}

function count (limit, number, power) {
    let sum = 0
    let start = limit % 2 ? 1 : 2

    for (let i = start; i <= limit; i+= power) {
        if (i % number === 0) {
            sum+= getSum(i, number)
        }
    }

    return sum
}

function getSum (number, base) {
    sum = 1
    balance = Math.floor(number / base)

    if (balance % base === 0) {
        sum+= getSum(balance, base)
    }

    return sum
}
