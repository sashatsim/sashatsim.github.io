export class ProductComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `
            <div class="card mb-3" style="width: 1500px;">
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src="${data.src}" class="img-fluid" alt="картинка">
                    </div>
                    <div class="col-md-5">
                        <div class="card-body ">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Возьмите добермана с нашего приюта
                          </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">
                          <h4>Вам может показаться, что наши собачки злые. Но на самом деле они очень милые и добрые! Ищем всех, кто неравнодушен к этим воплощениям радости!</h4>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Обеспечение безопасности
                          </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body"> 
                          <h4> Взяв нашего питомца, вы можете быть уверены в собственной безопасности. Доберманы очень верные и преданные собаки!</h4> 
                          <p> В случае летального исхода прохожего в ходе обороны вы можете связаться с нашим юристом Владой: 8 (800) 555-35-35 </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Наполните свою жизнь эстетикой
                          </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">
                          <h4> Наши собачки идеально подойдут для ведения Pinterest. Кстати говоря, все фотографии наших питомцев взяты оттуда! Приходите к нам в приют "LUXURIOUS DOBERMAN"!</h4>
                          </div>
                        </div>
                      </div>
                    </div>   
                        </div>
                        
  
                    </div>
                </div>
            </div>
            `
        );
    }
    

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}