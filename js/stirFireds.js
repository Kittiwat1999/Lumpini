function stir_fireds() {
    stir_fireds = [
        {
            name: 'Pad Gaprao',
            cost: 10.50,
            description: 'Stir-fried with garlic, chilli and basil. Choice of mild, medium or hot. Choice of chicken, pork, beef, prawn, squid, roasted duck, tofu (v) or vegetable (v).',
            img: 'img/menu-pad-gaprao.jpeg',
        },
        {
            name: 'Sweet and Sour',
            cost: 9.95,
            description: 'Stir-fried with sweet and sour sauce, pineapple, tomato and cucumber. Choice of chicken, pork, prawn, haddock fish fillet or vegetable (v).',
            img: 'img/menu-sweet-sour.jpeg',
        },
        {
            name: 'Pad Kratiam',
            cost: 10.50,
            description: 'Stir-fried with garlic and white pepper.',
            img: 'img/menu-pad-gratiam.jpeg',
        },
    ];

    return stir_fireds;
}

function map_stir_fireds_data(){
    const stirFiredsItem = document.getElementById('stir-frieds-item');
    var stirFiredsData = stir_fireds();
    var stirFiredMap = stirFiredsData.map(stirFired => {
        return `
        <div class="menu-item">
            <div class="menu-img">
                <img src="${stirFired.img}" alt="Image">
            </div>
            <div class="menu-text">
                <h3><span>${stirFired.name}</span> <strong>£${stirFired.cost}</strong></h3>
                <p>${stirFired.description}</p>
            </div>
        </div>
        `;
    });

    stirFiredsItem.innerHTML = stirFiredMap;
}

map_stir_fireds_data();

