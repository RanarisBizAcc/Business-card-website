const citiesArray = [
    {Id: 1, Name: 'stpitersburg', Title:'Санкт-Петербург', Description: 'Большой город с интересной историей'},
    {Id: 2, Name: 'tbilisi', Title:'Тбилиси', Description: 'Красивое место с духом Европы'},
    {Id: 3, Name: 'yerevan', Title:'Ереван', Description: 'Неожиданно и очень приятно'},
    {Id: 4, Name: 'kazan', Title:'Казань', Description: 'Колорит, независимость и красота'},
    {Id: 5, Name: 'kas', Title:'Каш', Description: 'Описание Каша'},
    {Id: 6, Name: 'nsk', Title:'Новосибирск', Description: 'Описание Новосибирска'},
    {Id: 7, Name: 'nvkz', Title:'Новокузнецк', Description: 'Описание Новокузнецка'},
    {Id: 8, Name: 'vladivostok', Title:'Владивосток', Description: 'Описание Владивостока'},
];
const citiesTextsArray = [
    {CityId: 1, Blocks: [
        'Блок текста про Питер 1',
        'Блок текста про Питер 2'
        ]
    },
    {CityId: 2, Blocks: [
        'Блок текста про Тбилиси 1',
        'Блок текста про Тбилиси 2'
        ]
    },
    {CityId: 3, Blocks: [
        'Блок текста про Ереван 1',
        'Блок текста про Ереван 2'
        ]
    },
    {CityId: 4, Blocks: [
        'Блок текста про Казань 1',
        'Блок текста про Казань 2'
        ]
    },
    {CityId: 5, Blocks: [
        'Блок текста про Каш 1',
        'Блок текста про Каш 2'
        ]
    },
    {CityId: 6, Blocks: [
        'Блок текста про Новосибирск 1',
        'Блок текста про Новосибирск 2'
        ]
    },
    {CityId: 7, Blocks: [
        'Блок текста про Новокузнецк 1',
        'Блок текста про Новокузнецк 2'
        ]
    },
    {CityId: 8, Blocks: [
        'Блок текста про Владивосток 1',
        'Блок текста про Владивосток 2'
        ]
    },
];

function getCityByName(cityName) {
    const city = citiesArray.find(item => item.Name === cityName.replace("#", ""));
    return city;
};

function getCityByTitle(cityTitle) {
    const city = citiesArray.find(item => item.Title === cityTitle);
    return city;
};

function getCityById(cityId) {
    const city = citiesArray.find(item => item.Id == cityId);
    return city;
};

function getAllButOneOfTheCities(exceptCityId) {
    const cities = citiesArray.filter(item => item.Id != exceptCityId);
    return cities;
};

function getPhotosNamesByCityId(cityId) {
    let photosNames = [];

    const city = getCityById(cityId);
    if (city != undefined) {
        photosNames.push(city.Name + '_1.jpg');
        photosNames.push(city.Name + '_2.jpg');
    }

    return photosNames;
};

function getCoverName(cityId) {
    let coverName = 'somewhere.png';

    const city = getCityById(cityId);
    if (city != undefined) {
        coverName = city.Name + '.png';
    }

    return coverName;
};

function getCityTextBlocks(cityId) {
    let textBlocks = [];

    const city = getCityById(cityId);
    if (city != undefined) {
        const cityText = citiesTextsArray.find(item => item.CityId == cityId);
        if (cityText != undefined){
            return cityText.Blocks;
        }
    }

    return textBlocks;
};

function goToSelectedCity(cityId) {
    const city = getCityById(cityId);
    window.location.href = `city.html#${city.Name}`;
};

function goToAnotherCity(cityCard) {
    const cityTitle = cityCard.querySelector('h3').textContent;
    const сity = getCityByTitle(cityTitle);
    window.location.hash = сity.Name;
    fillDocument();
};

function goToAnotherCityById(cityId) {
    const сity = getCityById(cityId);
    window.location.hash = сity.Name;
    fillDocument();
};

function fillDocument() {
    const currentUrlHash = window.location.hash;
    const city = getCityByName(currentUrlHash);
    const anotherCitiesArray = getAllButOneOfTheCities(city.Id);
    const photos = getPhotosNamesByCityId(city.Id);
    const cityTextBlocks = getCityTextBlocks(city.Id);

    let docTitle = document.getElementById('title');
    let docDescription = document.getElementById('description');
    let docCover = document.getElementById('first-image');
    let docParagraphFirst = document.getElementById('paragraph-1');
    let docParagraphSecond = document.getElementById('paragraph-2');
    let docImageFirst = document.getElementById('image-1');
    let docImageSecond = document.getElementById('image-2');
    let docAnotherCityCards = document.getElementById('another-city-cards');

    docTitle.textContent = city.Title;
    docDescription.textContent = city.Description;
    docCover.src = '../resources/covers/' + getCoverName(city.Id);
    docParagraphFirst.textContent = cityTextBlocks[0];
    docParagraphSecond.textContent = cityTextBlocks[1];
    docImageFirst.src = '../resources/photos/' + photos[0];
    docImageSecond.src = '../resources/photos/' + photos[1];

    for(let i = 0; i < docAnotherCityCards.children.length; i++) {
        let cardBlock = docAnotherCityCards.children[i];

        let cardImg = cardBlock.querySelector('img');
        let cardHeader = cardBlock.querySelector('h3');
        let cardDescription = cardBlock.querySelector('p');
        
        let cardCity = anotherCitiesArray[i];

        cardImg.src = '../resources/covers/' + getCoverName(cardCity.Id);
        cardHeader.textContent = cardCity.Title;
        cardDescription.textContent = cardCity.Description;
    };

    window.scrollTo({top: 0});
};

document.addEventListener('DOMContentLoaded', function () {
    const currentUrlHash = window.location.hash;
    if (currentUrlHash != '') {
        fillDocument();
    }
});