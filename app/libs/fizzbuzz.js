const fizzbuzz = (index) => {
    let fizzbuzzObj = []
    for(let i=1;i<=index;i++){
        fizzbuzzObj.push((i%3?'':'fizz')+(i%5?'':'buzz')||i)
    }
    return fizzbuzzObj
}

export default fizzbuzz