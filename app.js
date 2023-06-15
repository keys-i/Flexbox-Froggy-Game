const butonElement = document.querySelector('button')

function addCSS (){
    const textAreaElement = document.querySelector('textarea')
    const css = textAreaElement.value
    const foreFront = document.querySelector('#forefront')
    foreFront.style.cssText = css
    console.log()
}

butonElement.addEventListener('click',addCSS)