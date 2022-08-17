const connection = require('../config/connection');
const { NormalUser, ServiceUser, ServiceCategory, ServiceComment, ServiceType } = require('../models');

// NormalUser Data
const normalUserSeed = [
    {
        firstName: 'normalUserFirst',
        lastName: 'normalUserLast',
        email: 'normalUserEmail',
        password: 'normalUserPassword',
        location: 'normalUserLocation'
    },
];

// ServiceUser Data
const serviceUserSeed = [
    {
        firstName: 'serviceUserFirst1',
        lastName: 'serviceUserLast1',
        email: 'serviceUserEmail1',
        password: 'serviceUserPassword1',
        photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
        bio: 'First testing bio',
        location: 'serviceUserLocation1',
    },
    {
      firstName: 'serviceUserFirst2',
      lastName: 'serviceUserLast2',
      email: 'serviceUserEmail2',
      password: 'serviceUserPassword2',
      photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
      bio: 'Second testing bio',
      location: 'serviceUserLocation2',
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
        serviceCategory: serviceCategorySeed[0].categoryName
    },
    {
        serviceName: 'Haircut and Beard Trim',
        servicePrice: 25,
        serviceCategory: serviceCategorySeed[0].categoryName
    },
    {
        serviceName: 'Eyelash Extensions',
        servicePrice: 50,
        serviceCategory: serviceCategorySeed[2].categoryName
    },
    {
        serviceName: 'Pedicure',
        servicePrice: 30,
        serviceCategory: serviceCategorySeed[3].categoryName
    },
]

const serviceCommentSeed = [
    {
        commentText: 'Nice haircut, lookin fabulous! Thanks Brian!',
        commentCreated: Date.now(),
        serviceRating: 5,
        normalUser: normalUserSeed[0].firstName,
        serviceUser: serviceUserSeed[0].firstName
    },
    {
      commentText: 'Nails did, lookin fabulous! Thanks Kevin!',
      commentCreated: Date.now(),
      serviceRating: 4,
      normalUser: normalUserSeed[0].firstName,
      serviceUser: serviceUserSeed[1].firstName
  },
]


connection.once('open', async () => {
    await NormalUser.deleteMany({});
    await ServiceUser.deleteMany({});
    await ServiceCategory.deleteMany({});
    await ServiceType.deleteMany({});
    await ServiceComment.deleteMany({});

    await NormalUser.collection.insertMany(normalUserSeed);
    console.log('SUCCESSFULLY SEEDED NORMAL USERS');
    await ServiceUser.collection.insertMany(serviceUserSeed);
    console.log('SUCCESSFULLY SEEDED SERVICE USERS');
    await ServiceCategory.collection.insertMany(serviceCategorySeed);
    console.log('SUCCESSFULLY SEEDED SERVICE CATEGORIES');
    await ServiceType.collection.insertMany(serviceTypeSeed);
    console.log('SUCCESSFULLY SEEDED SERVICE TYPES');
    await ServiceComment.collection.insertMany(serviceCommentSeed);
    console.log('SUCCESSFULLY SEEDED SERVICE COMMENTS');


    process.exit(0);
})