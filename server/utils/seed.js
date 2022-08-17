const connection = require('../config/connection');
const { NormalUser, ServiceUser, ServiceCategory, ServiceComment, ServiceType } = require('../models');

// NormalUser Data
const normalUserSeed = [
    {
        firstName: 'normalUserFirst',
        lastName: 'normalUserLast',
    },
];

// ServiceUser Data
const serviceUserSeed = [
    {
        firstName: 'serviceUserFirst',
        lastName: 'serviceUserLast',
    },
];

// ServiceCategory Data
const serviceCategorySeed = [
    {categoryName: 'Haircut'},
    {categoryName: 'Massage'},
    {categoryName: 'Eyelashes'},
    {categoryName: 'Nailcare'},
    {categoryName: 'Dance'},
    {categoryName: 'Personal Training'},
    {categoryName: 'Pet Care'},
    {categoryName: 'Tutoring'},
    {categoryName: 'Media'},
    {categoryName: 'Singing'},
];

// ServiceType Data
const serviceTypeSeed = [
    {
        serviceName: 'Haircut',
        servicePrice: 20,
        serviceCategory: 'Haircut'
    },
    {
        serviceName: 'Haircut and Beard Trim',
        servicePrice: 25,
        serviceCategory: 'Haircut'
    }
]


connection.once('open', async () => {
    await NormalUser.deleteMany({});
    await ServiceUser.deleteMany({});
    await ServiceCategory.deleteMany({});
    await ServiceType.deleteMany({});

    await NormalUser.collection.insertMany(normalUserSeed);
    console.log('SUCCESSFULLY SEEDED NORMAL USERS');
    await ServiceUser.collection.insertMany(serviceUserSeed);
    console.log('SUCCESSFULLY SEEDED SERVICE USERS');
    await ServiceCategory.collection.insertMany(serviceCategorySeed);
    console.log('SUCCESSFULLY SEEDED SERVICE CATEGORIES');
    await ServiceType.collection.insertMany(serviceTypeSeed);
    console.log('SUCCESSFULLY SEEDED SERVICE TYPES');


    process.exit(0);
})