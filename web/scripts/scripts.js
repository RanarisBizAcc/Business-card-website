const currentUrlHash = window.location.hash;
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
    let city = citiesArray.find(item => item.Name === cityName.replace("#", ""));
    return city;
};

function getCityById(cityId) {
    let city = citiesArray.find(item => item.Id == cityId);
    return city;
};

function getAllButOneOfTheCities(exceptCityId) {
    let cities = citiesArray.filter(item => item.Id != exceptCityId);
    return cities;
};

function getPhotosNamesByCityId(cityId) {
    let photosNames = [];

    let city = getCityById(cityId);
    if (city != undefined) {
        photosNames.push(city.Name + '_1.jpg');
        photosNames.push(city.Name + '_2.jpg');
    }

    return photosNames;
};

function getCoverName(cityId) {
    let coverName = 'somewhere.png';

    let city = getCityById(cityId);
    if (city != undefined) {
        coverName = city.Name + '.png';
    }

    return coverName;
};

function getCityTextBlocks(cityId) {
    let textBlocks = [];

    let city = getCityById(cityId);
    if (city != undefined) {
        let cityText = citiesTextsArray.find(item => item.CityId == cityId);
        if (cityText != undefined){
            return cityText.Blocks;
        }
    }

    return textBlocks;
};

function goToSelectedCity(cityId) {
    let city = getCityById(cityId);
    window.location.href = `city.html#${city.Name}`;
};

function fillDocument() {
    let docTitle = document.getElementById('title');
    let docDescription = document.getElementById('description');
    let docCover = document.getElementById('first-image');
    let docParagraphFirst = document.getElementById('paragraph-1');
    let docParagraphSecond = document.getElementById('paragraph-2');
    let docImageFirst = document.getElementById('image-1');
    let docImageSecond = document.getElementById('image-2');
    
    let city = getCityByName(currentUrlHash);
    let photos = getPhotosNamesByCityId(city.Id);
    let cityTextBlocks = getCityTextBlocks(city.Id);

    docTitle.innerText = city.Title;
    docDescription.innerText = city.Description;
    docCover.src = '../resources/covers/' + getCoverName(city.Id);
    docParagraphFirst.innerText = cityTextBlocks[0];
    docParagraphSecond.innerText = cityTextBlocks[1];
    docImageFirst.src = '../resources/photos/' + photos[0];
    docImageSecond.src = '../resources/photos/' + photos[1];
};

document.addEventListener('DOMContentLoaded', function () {
    if (currentUrlHash != '') {
        fillDocument();
    }
});