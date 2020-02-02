import fizzbuzz from '../libs/fizzbuzz'

const fizzbuzzController = {
    generate : (req, res) => {
        const { query : { count = 15 } = {} } = req
        try {
            const fizzbuzzLength = parseInt(count)
            if(fizzbuzzLength == count && Number.isInteger(fizzbuzzLength) && fizzbuzzLength > 0){
                const fizzbizzObj = fizzbuzz(fizzbuzzLength)
                res.send(fizzbizzObj)
            } else {
                res.send({err : 'Count should be a positive number'})
            }
        } catch(e) {
            console.log(e)
        }
    }
}

export default fizzbuzzController