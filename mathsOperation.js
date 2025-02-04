// check for prime numbers 
exports.isPrimeNumber = (num)=>{
    if(num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false 
    }
    return true
}

// check for perfect numbers 
exports.isPerfectNumber = (num)=>{
    if(num < 2) return false
    let sum = 1
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum +=i
            if(i !== num/i) sum += num/i
        }
    }
    return sum === num
}

// get the digit sum of a number 
exports.digitSum = (num)=>{
    const toStr = num.toString().split('')
    let sum = 0

    for (const num of toStr) {
        sum += Number(num)
    }
    return sum
}

// check for an armstrong numbers 
const isArmstrong = (num)=>{
    const toStr = num.toString().split('')
    const power = toStr.length
    let sum = 0

    for (const num of toStr) {
        sum += Math.pow(Number(num),power)
    }
    return sum === num
}

// get the properties of a number (armstrong, odd and even)
exports.getProperties = (num)=>{
    const properties= []
    if(isArmstrong(num)) properties.push('Armstrong')
    properties.push(num % 2 === 0?'Even':'Odd')
    return properties
}

// gets a fun fact from Number Api
exports.fun_fact = async(num)=>{
    const res = await fetch(`http://numbersapi.com/${num}/math?json`)
    const data = await res.json()
    return data.text
}