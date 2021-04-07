//求一个数组中最大的数字
let test = (arr) =>{
    let a = arr
    let b = arr[0]
    for (let i = 0; i < a.length; i += 1) {
        b < arr[i]? b = arr[i]:null
    }
    console.log(b)
}