const tabs = document.querySelectorAll('tab');
const content = document.querySelectorAll('content')

for ( let i = 0; i < tebs.lenght; i++){
    tabs[i].addEventListener( 'click', (event) => {
        let tabsChildren = event.target.parentElement.children
        for( t = 0; t< tabsChildren.lenght; t++){
            tabsChildren[t].classList.remove('active')
        }
        tabs[i].classList.add('active')
        const tabsContent = event.target.parentElement.nextElementSibling.children
        for( c = 0; c< tabsContent.lenght; c++){
            tabsContent[c].classList.remove('actiev')
        }
        content[i].classList.add('active')
    }
    )
}