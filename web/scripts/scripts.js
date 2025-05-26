const citiesArray = [
    {Id: 1, Name: 'stpitersburg', Title:'Санкт-Петербург'},
    {Id: 2, Name: 'tbilisi', Title:'Тбилиси'},
    {Id: 3, Name: 'yerevan', Title:'Ереван'},
    {Id: 4, Name: 'kazan', Title:'Казань'},
    {Id: 5, Name: 'kas', Title:'Каш'},
    {Id: 6, Name: 'nsk', Title:'Новосибирск'},
    {Id: 7, Name: 'nvkz', Title:'Новокузнецк'},
    {Id: 8, Name: 'vladivostok', Title:'Владивосток'},
];

function getPhotosNamesByCityId(cityId) {
    let photosNames = [];

    let city = citiesArray.find(item => item.Id == cityId)
    if (city != undefined) {
        photosNames.push(city.Name + '_1.jpg');
        photosNames.push(city.Name + '_2.jpg');
    }

    return photosNames;
};

function getCoverName(cityId) {
    let coverName = 'somewhere.png';

    let city = citiesArray.find(item => item.Id == cityId)
    if (city != undefined) {
        coverName = city.Name + '.png';
    }

    return coverName;
};