import {ProductCardComponent} from "../../Components/product-card/index.js";

import {ProductPage} from "../products/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }
    getData() {
        return [
            {
                id: 1,
                src: "https://i.pinimg.com/736x/0e/85/e7/0e85e737b85e2b7f37927f4fe58eac80.jpg",
                title: "Надоело ходить по улице без охраны?" ,
                text: "Кликай ниже, здесь есть решение!"
            },
            {
                id: 2,
                src: "https://i.pinimg.com/736x/12/03/5a/12035a6f6547715cb8c47de7a94fddfc.jpg",
                title: "Устал жить без особого вайба и эстетики?",
                text: "Кликай ниже, здесь есть решение!"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/736x/08/22/41/082241686447cddaa38a36f53c313bb0.jpg",
                title: "Хочешь выглядеть грозно, но не знаешь что для этого нужно?",
                text: "Кликай ниже, здесь есть решение!"
            },
            
        ]
    }
    clickCard(e) {
        const cardId = e.target.dataset.id
    
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }
    
}