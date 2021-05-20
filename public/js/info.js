var main = document.querySelector('.content')

function gotoRandom() {
    if (localStorage.page != "Info") {} else {
        console.log('Info page active.')
        // document.body.appendChild(document.createElement('h1').innerText = "hello")
        let p = document.createElement('p')
        p.textContent = 'Work in progress!'
        main.appendChild(p)
    }
}