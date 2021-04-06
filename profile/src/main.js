let html = document.querySelector(`#content`)
let time = document.querySelector(`#time`)
let style = document.querySelector(`#style`)
let seeYou = document.getElementById('seeYou')
let profile = `/*你好，我是DesnLee，李佳坤
我将会通过这个页面展示我的前端功底
我准备通过一个八卦图来展示
我先把字体调整一下，以便你看得清楚*/

* {
    font-size: 16px;
    line-height: 28px;
}

/*开始画八卦之前我要先准备一个画板*/

#artBoard {
    width: 300px;
    height: 300px;
    border: 1px solid red;
}

/*接下来我把画板变成一个八卦图

注意看好了
首先，我要把画板变成八卦的底*/

#artBoard {
    border-radius: 50%;
    box-shadow: 0 6px 16px rgba(0,0, 0, 0.25);
    border: none;
}

/*八卦有双色，一黑一白*/

#artBoard {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/* 然后做出阴阳鱼的眼睛 */

#artBoard::before {
    content: "";
    display: block;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 24%, rgba(255,255,255,1) 24%, rgba(255,255,255,1) 100%);
    left: 50%;
    transform: translate(50%);
}

#artBoard::after {
    content: "";
    display: block;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 24%, rgba(0,0,0,1) 24%, rgba(0,0,0,1) 100%);
    left: 50%;
    transform: translate(50%);
}

/* 接下来，我要开始施法了*/

#artBoard{
    animation: 8s rotate infinite ease-in;
}
`

let n = 0
let t = 0
let timeString = `321`
let profileStep = ``

let change = () => {
    setTimeout(() => {
        if(profile[n] === `\n`){
            profileStep += `<br>`
        }else if(profile[n] === ` `){
            profileStep += `&nbsp;`
        }else if(profile[n] + profile[n+1] === `/*` || profile[n] + profile[n+1] === `*/` ){
            n += 1
        }else{
            profileStep += profile[n]
        }
        html.innerHTML = profileStep
        style.innerHTML = profile.substring(0,n)
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        n += 1
        n < profile.length ? change():setTimeout(()=>{seeYou.classList.add('seeYouEnd')},2000)
    }, 30)
}

let start =() => {
    setTimeout(() =>{
        if (t < timeString.length) {
            time.innerHTML = timeString[t]
            t += 1
            start()
        }else {
            time.innerHTML = `Start!`
            setTimeout(() =>{
                time.remove()
                change()
            },1000)
        }
    },1000)
}

start()