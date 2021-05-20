var main = document.querySelector('.content')

async function gotoHome() {
    if (localStorage.page == "Home") {
        let holder = document.createElement('div')
        holder.className = 'holder'
        main.appendChild(holder)
        await getMemes(50)

    }
}