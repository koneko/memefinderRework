var home = document.getElementById('Home')
var custom = document.getElementById('Custom')
var info = document.getElementById('Info')
var content = document.querySelector('.content')

if (!localStorage.page) {
    localStorage.page = 'Home'
}

home.onclick = () => {
    localStorage.page = "Home"
    checkPage()
    pageLoad("Home", content)
}
custom.onclick = () => {
    localStorage.page = "Custom"
    checkPage()
    pageLoad("Custom", content)
}
info.onclick = () => {
    localStorage.page = "Info"
    checkPage()
    pageLoad("Info", content)
}

function checkPage() {
    if (localStorage.page == 'Home') {
        // console.log(home)
        home.className = 'current'
        custom.className = ''
        info.className = ''
        pageLoad("Home", content)
    }
    if (localStorage.page == 'Custom') {
        home.className = ''
        custom.className = 'current'
        info.className = ''
        pageLoad("Custom", content)
    }
    if (localStorage.page == "Info") {
        home.className = ''
        custom.className = ''
        info.className = 'current'
        pageLoad("Info", content)
    }
}
// removeChildren(content)
checkPage()