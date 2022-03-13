import {Module} from '../core/module.js'


export class CastomMsg extends Module {
    constructor(type, text){
        super(type, text)
    }
    trigger(){

        const block = document.createElement('div')
        const message = document.createElement('p')
        const check = document.querySelector('.timerModal')
    
        check ? check.remove(): null
        
        block.className = 'timerModal'
    
        const text = message.textContent = 'THIT IS HACATHON!!!'
        block.append(text)
    
        document.body.append(block)
    
        setTimeout(() => {
            block.remove()
        },3000)

    }
}