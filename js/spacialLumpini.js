function spacials() {
    spacials = [
        {
            name: 'Weeping Tiger',
            cost: 14.95,
            description: 'Sirloin steak, grilled with garlic and soy sauce served on sizzling dish. Choice of rare, medium or well done.',
            img: 'img/menu-weeping-tiger.jpeg',
        },
        {
            name: 'Duck Tamarind Sauce',
            cost: 13.95,
            description: 'Roast duck, topped with tamarind sauce.',
            img: 'img/menu-duck-tamarind-sauce.jpeg',
        },
        {
            name: 'Sizzling Spicy Prawns',
            cost: 16.95,
            description: 'Prawns with sweet chili paste and vegetables.',
            img: 'img/menu-sizzling-spicy-prawns.jpeg',
        },
    ];

    return spacials;
}

function map_spacials_data(){
    const spacialsItem = document.getElementById('spacial-lumpini-item');
    var spacialsData = spacials();
    var spacialMap = spacialsData.map(spacial => {
        return `
        <div class="menu-item">
            <div class="menu-img">
                <img src="${spacial.img}" alt="Image">
            </div>
            <div class="menu-text">
                <h3><span>${spacial.name}</span> <strong>£${spacial.cost}</strong></h3>
                <p>${spacial.description}</p>
            </div>
        </div>
        `;
    });

    spacialsItem.innerHTML = spacialMap;
}

map_spacials_data();

