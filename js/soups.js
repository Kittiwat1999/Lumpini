function soups() {
    soups = [
        {
            name: 'Green Curry',
            cost: 10.05,
            description: 'Gluten Free, Thai green curry cook in coconut milk, vegetable and thai aubergine. Choice of mild, medium or hot. Choice of chicken, prawn and vegetable (v).',
            img: 'img/menu-green-kurry.jpeg',
        },
        {
            name: 'Tom Yum Soup',
            cost: 9.95,
            description: 'A very famous thai style hot and sour soup with lemongrass and lime leave. Choice of mild, medium or hot. Choice of chicken, prawn, mixed seafood or mushroom (v).',
            img: 'img/menu-tom-yum-soup.jpeg',
        },
        {
            name: 'Tom Kha Soup',
            cost: 9.95,
            description: 'Thai style hot and sour spicy soup with coconut milk. Choice of mild, medium or hot. Choice of chicken, prawn, mixed seafood or mushroom (v).',
            img: 'img/menu-tom-kha-soup.jpeg',
        },
    ];

    return soups;
}

function map_soups_data(){
    const soupsItem = document.getElementById('soups-item');
    var soupsData = soups();
    var soupMap = soupsData.map(soup => {
        return `
        <div class="menu-item">
            <div class="menu-img">
                <img src="${soup.img}" alt="Image">
            </div>
            <div class="menu-text">
                <h3><span>${soup.name}</span> <strong>£${soup.cost}</strong></h3>
                <p>${soup.description}</p>
            </div>
        </div>
        `;
    });

    soupsItem.innerHTML = soupMap;
}

map_soups_data();

