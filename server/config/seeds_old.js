
const connection = require('./connection');
const { NormalUser, ServiceUser, ServiceCategory, ServiceComment, ServiceType } = require('../models');
const moment = require('moment');
const haircutIcon = '.././assets/images/haircut_icon.svg';
const eyelashesIcon = '.././assets/images/eyelashes_icon.svg';
const currentDate = moment(Date.now()).format('ll')

// ServiceCategory Data
const serviceCategorySeed = [
    { categoryName: 'Haircut', categoryIcon: haircutIcon },
    { categoryName: 'Massage', categoryIcon: eyelashesIcon },
    { categoryName: 'Eyelashes', categoryIcon: haircutIcon },
    { categoryName: 'Nailcare', categoryIcon: eyelashesIcon },
    { categoryName: 'Dance', categoryIcon: haircutIcon },
    { categoryName: 'Personal Training', categoryIcon: eyelashesIcon },
    { categoryName: 'Pet Care', categoryIcon: haircutIcon },
    { categoryName: 'Tutoring', categoryIcon: eyelashesIcon },
    { categoryName: 'Media', categoryIcon: haircutIcon },
    { categoryName: 'Singing', categoryIcon: eyelashesIcon },
];
// NormalUser Data
const normalUserSeed = [
    {
        firstName: 'normalUserFirst',
        lastName: 'normalUserLast',
        email: 'normalUserEmail',
        password: 'normalUserPassword',
        photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
        location: 'normalUserLocation'
    },
];

// ServiceUser Data
const serviceUserSeed = [
    {
        firstName: 'Brian',
        lastName: 'Alegre',
        email: 'brian@gmail.com',
        password: 'brian123',
        serviceCategory: serviceCategorySeed[0]._id,
        photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
        bio: 'First testing bio',
        location: 'Garden Grove, CA',
    },
    {
        firstName: 'Kevin',
        lastName: 'Lazaro',
        email: 'kevin@gmail.com',
        password: 'kevin123',
        serviceCategory: serviceCategorySeed[1]._id,
        photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
        bio: 'Second testing bio',
        location: 'Hacienda Heights, CA',
    },
    {
        firstName: 'Allec',
        lastName: 'Arzadon',
        email: 'allec@gmail.com',
        password: 'allec123',
        serviceCategory: serviceCategorySeed[2]._id,
        photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
        bio: 'Third testing bio',
        location: 'Anaheim, CA',
    },
    {
        firstName: 'Philip',
        lastName: 'Hwang',
        email: 'philip@gmail.com',
        password: 'philip123',
        serviceCategory: serviceCategorySeed[3]._id,
        photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
        bio: 'fourth testing bio',
        location: 'Irvine, CA',
    },
    {
        firstName: 'Chad',
        lastName: 'Tao',
        email: 'chad@gmail.com',
        password: 'chad123',
        serviceCategory: serviceCategorySeed[4]._id,
        photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
        bio: 'fifth testing bio',
        location: 'Los Angeles, CA',
    },
];


// ServiceType Data
const serviceTypeSeed = [
    {
        serviceName: 'Haircut',
        servicePrice: 20,
        serviceDuration: 30,
        serviceDescription: 'Student barber, been cutting hair for two weeks',
        serviceCategory: serviceCategorySeed[0].categoryName
    },
    {
        serviceName: 'Haircut and Beard Trim',
        servicePrice: 25,
        serviceDuration: 60,
        serviceDescription: 'Specializing in fades, lineup beard',
        serviceCategory: serviceCategorySeed[0].categoryName
    },
    {
        serviceName: 'Eyelash Extensions',
        servicePrice: 50,
        serviceDuration: 40,
        serviceDescription: 'Uses high quality synthetic eyelash, ABG approved',
        serviceCategory: serviceCategorySeed[2].categoryName
    },
    {
        serviceName: 'Pedicure',
        servicePrice: 30,
        serviceDuration: 40,
        serviceDescription: 'Nails did acrylic finish',
        serviceCategory: serviceCategorySeed[3].categoryName
    },
]

const serviceCommentSeed = [
    {
        commentText: 'Nice haircut, lookin fabulous! Thanks Brian!',
        commentCreated: currentDate,
        serviceRating: 5,
        normalUser: normalUserSeed[0].firstName,
        serviceUser: serviceUserSeed[0].firstName
    },
    {
        commentText: 'Nails did, lookin fabulous! Thanks Kevin!',
        commentCreated: currentDate,
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

    await ServiceCategory.collection.insertMany(serviceCategorySeed);
    console.log('SUCCESSFULLY SEEDED SERVICE CATEGORIES');
    await NormalUser.collection.insertMany(normalUserSeed);
    console.log('SUCCESSFULLY SEEDED NORMAL USERS');
    await ServiceUser.collection.insertMany(serviceUserSeed);
    console.log('SUCCESSFULLY SEEDED SERVICE USERS');
    await ServiceType.collection.insertMany(serviceTypeSeed);
    console.log('SUCCESSFULLY SEEDED SERVICE TYPES');
    await ServiceComment.collection.insertMany(serviceCommentSeed);
    console.log('SUCCESSFULLY SEEDED SERVICE COMMENTS');


    process.exit(0);
})