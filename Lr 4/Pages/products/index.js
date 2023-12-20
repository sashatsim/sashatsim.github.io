// pages/products/index.js

import { ProductComponent } from "../../Components/products/index.js";
import { BackButtonComponent } from "../../Components/back-button/index.js";
import { MainPage } from "../main/index.js";
import { ajax } from "../../Modules/ajax.js";
import { urls } from "../../Modules/urls.js";

export class ProductPage {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id;
    }

    getData() {
        ajax.post(urls.getUserInfo(this.id), '', (data) => {
            this.renderData(data.response[0]);
        });
    }

    renderData(user) {
        const product = new ProductComponent(this.pageRoot);
        product.render(user);
    }

    get pageRoot() {
        return document.getElementById('product-page');
    }

    getHTML() {
        return `<div id="product-page"></div>`;
    }

    clickBack() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        const backButton = new BackButtonComponent(this.pageRoot);
        backButton.render(this.clickBack.bind(this));

        this.getData();
    }
}
