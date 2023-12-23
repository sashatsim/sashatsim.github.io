import { ProductCardComponent } from "../../Components/product-card/index.js";
import { ajax } from "../../Modules/ajax.js";
import { urls } from "../../Modules/urls.js";
import { groupId } from "../../Modules/consts.js";
import { ProductPage } from "../products/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page');
    }

    getHTML() {
        return `
            <div id="main-page" class="d-flex flex-column">
                <div id="product-cards-container" class="d-flex flex-wrap"></div>
                <button id="refresh-button" class="refresh-button mt-3">Вернуть все карточки</button>
            </div>
        `;
    }

    renderData(items) {
        const productCardsContainer = document.getElementById('product-cards-container');
    
        if (!productCardsContainer) {
            console.error("Product cards container not found.");
            return;
        }
    
        productCardsContainer.innerHTML = '';
    
        items.forEach((item) => {
            const productCard = new ProductCardComponent(productCardsContainer);
            productCard.render(item, this.clickCard.bind(this));
        });
    }

    updateDataWithGroupId() {
        ajax.post(urls.getGroupMembers(groupId), (data) => {
            this.renderData(data.response.items);
        });
    }

    getData() {
        this.updateDataWithGroupId();
    }

    clickCard(e) {
        const cardId = e.target.dataset.id;
        const productPage = new ProductPage(this.parent, cardId);
        productPage.render();
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
    
        this.getData();
    
        const refreshButton = document.getElementById('refresh-button');
        refreshButton.addEventListener('click', () => {
            this.updateDataWithGroupId();
        });
    }
}
