

const promise1 = new Promise((resolve, reject) =>{
    resolve('promise 1 cumprida')
})

const promise2 = new Promise((resolve, reject) =>{
    resolve('promise 2 cumprida')
})

const promise3 = new Promise((resolve, reject) =>{
    resolve('promise 2 cumprida')
})

const resolveAll = Promise.all([promise1, promise2, promise3]).then((data) =>{
    console.log(data)
})

console.log('depois do all()')