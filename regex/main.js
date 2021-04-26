const regexInput = document.querySelector('#regexInput')
const exampleInput = document.querySelector('#exampleInput')
const check = document.querySelector('#check')
const resultView = document.querySelector(`#resultView`)
const changeInput = document.querySelector('#changeInput')
const change = document.querySelector('#change')
const changeView = document.querySelector(`#changeView`)
const resultAlert = document.querySelector(`.resultAlert`)

let checker = () => {
    let testReg = new RegExp(regexInput.value)
    let testCase = exampleInput.value.split(`\n`)
    let newArray = []

    if (!testCase[0]){
        alert(`测试用例不能为空`)
    }else if (testReg.toString() === `/(?:)/`) {
        alert(`正则表达式不能为空`)
    }else{
        for (let i = 0; i < testCase.length; i++) {
            if (testReg.test(testCase[i])) {
                newArray.push(testCase[i])
            }
        }
        if (newArray.length === 0){
            resultAlert.innerHTML = `未匹配到结果`
            resultView.value = `未匹配到结果`
        }else{
            resultAlert.innerHTML = `共匹配到${newArray.length}个结果，结果如下：`
            resultView.value = newArray.join(`\r`)
            // resultView.value = `共匹配到${time}个结果，结果如下：\r\r` + newArray.join(`\r`)
        }
    }
}

let changer = () => {
    let testReg = new RegExp(regexInput.value)
    let changeReg = changeInput.value
    let changeCase = resultView.value.split(`\n`)
    let array = []

    if (!changeReg){
        alert(`替换语句不能为空！`)
    }else{
        for (let i = 0; i < changeCase.length; i++){
            array.push(changeCase[i].replace(testReg,changeReg))
        }
        changeView.value = array.join(`\r`)
    }
}

check.addEventListener('click', checker, true)
change.addEventListener('click', changer, true)

