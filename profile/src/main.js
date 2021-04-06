let html = document.querySelector(`#content`)
let style = document.querySelector(`#style`)
let profile = `/*你好，我是一名前端新人
接下来我要给简历加样式了
我要加的样式是*/
body {
    color:red
}`
let n = 0
let profileStep = ``

let change = () => {
    setTimeout(() => {
        //如果字符是回车，就加<br>
        //如果不是回车，就写进去
        //profileStep += profile[n] === `\n` ? `<br>` : profile[n]
        if(profile[n] === `\n`){
            profileStep += `<br>`
        }else if(profile[n] === ` `){
            profileStep += `&nbsp;`
        }else if(profile[n] + profile[n+1] === `/*` || profile[n] + profile[n+1] === `*/` ){
            profileStep += `&nbsp;`
            n += 1
        }else{
            profileStep += profile[n]
        }
        html.innerHTML = profileStep
        style.innerHTML = profile.substring(0,n)
        n += 1
        n < profile.length ? change():null
    }, 50)
}
setTimeout(()=>
    change()
,1000)