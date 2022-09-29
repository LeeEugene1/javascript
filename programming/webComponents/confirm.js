const show = document.querySelector('#show')
show.addEventListener('click',()=>{
    const card = new UserCard
    card.openModal()
})

const template = document.createElement('template')
template.innerHTML = `
    <style>
        h3{
            color:coral;
        }
        user-card .on{

        }
    </style>
    <div class="user-card">
        <h3></h3>
        <button id="toggle-info">hideInfo</button>
    </div>
`

class UserCard extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        // this.innerHTML = `John Deo`
        // this.innerHTML = `${this.getAttribute('name')}`
        // this.innerHTML = ``
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.querySelector('h3').innerHTML = this.getAttribute('name')
        // this.shadowRoot.querySelector('img').src = 
    }
    toggleInfo(){
        const check = confirm('blabla')
        if(check){
            test()
        }else{
            test()
        }
    }

    openModal(){
        const card = document.querySelector('user-card')
        card.style.display = 'block'
    }

    connectedCallback(){
        this.shadowRoot.querySelector('#toggle-info').
        addEventListener('click',()=>this.toggleInfo())
    }

    // disconnectCallback(){
    //     this.shadowRoot.querySelector('#toggle-info').
    //     removeEventListener('click',()=>this.toggleInfo())
    // }

}
window.customElements.define('user-card', UserCard);

function test(){
    alert('here!!')
    // const card = document.querySelector('user-card')
    // card.style.display = 'none'
    hideModal()
}

function hideModal(){
    const card = document.querySelector('user-card')
    card.style.display = 'none'
}