// NEW SEED FILE USED FOR TESTING
const db = require('./connection');

const { NormalUser, ServiceUser, ServiceCategory, ServiceComment, ServiceType } = require('../models');
// const { NormalUser, ServiceCategory, ServiceUser, ServiceType } = require('../models');
const moment = require('moment');
const haircutIcon = '.././assets/images/haircut_icon.svg';
const eyelashesIcon = '.././assets/images/eyelashes_icon.svg';
const currentDate = moment(Date.now()).format('ll')

db.once('open', async () => {
    // DELETE SERVICECATEGORY DATA
    await ServiceCategory.deleteMany();

    // INSERTMANY SERVICECATEGORY DATA
    const serviceCategorySeed = await ServiceCategory.insertMany([
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
    ]);

    // LOG TO BACKEND CONSOLE
    console.log('SUCCESSFULLY SEEDED SERVICE CATEGORIES');



    // DELETE NORMALUSER DATA
    await NormalUser.deleteMany();

    // CREATE NORMALUSER DATA
    const normalUserSeed = await NormalUser.create({
        firstName: 'normalUserFirst',
        lastName: 'normalUserLast',
        email: 'normalUserEmail',
        password: 'normalUserPassword',
        photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
        location: 'normalUserLocation'

    });
    // LOG TO BACKEND CONSOLE
    console.log('SUCCESSFULLY SEEDED NORMAL USERS');



    // DELETE SERVICEUSER DATA
    await ServiceUser.deleteMany();

    // CREATE SERVICEUSER DATA
    const serviceUserSeedOne = await ServiceUser.create(
        {
            firstName: 'Brian',
            lastName: 'Alegre',
            email: 'brian@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[0]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'First testing bio',
            location: 'Garden Grove, CA',
        }
    );

    // CREATE SERVICEUSER DATA
    const serviceUserSeedTwo = await ServiceUser.create(
        {
            firstName: 'Kevin',
            lastName: 'Lazaro',
            email: 'kevin@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[1]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'Second testing bio',
            location: 'Hacienda Heights, CA',
        },
    );

    // CREATE SERVICEUSER DATA
    const serviceUserSeedThree = await ServiceUser.create(
        {
            firstName: 'Allec',
            lastName: 'Arzadon',
            email: 'allec@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[2]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'Third testing bio',
            location: 'Anaheim, CA',

        },
    );

    // CREATE SERVICEUSER DATA
    const serviceUserSeedFour = await ServiceUser.create(
        {
            firstName: 'Philip',
            lastName: 'Hwang',
            email: 'philip@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[3]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'fourth testing bio',
            location: 'Irvine, CA',
        },
    );

    // CREATE SERVICEUSER DATA
    const serviceUserSeedFive = await ServiceUser.create(
        {
            firstName: 'Chad',
            lastName: 'Tao',
            email: 'chad@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[4]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'fifth testing bio',
            location: 'Los Angeles, CA',
        },
    );

    // LOG TO BACKEND CONSOLE
    console.log('SUCCESSFULLY SEEDED SERVICE USERS');



    // CREATE SERVETYPE DATA
    await ServiceType.insertMany([
        {
            serviceName: 'Haircut',
            servicePrice: 20,
            serviceDuration: 30,
            serviceDescription: 'Student barber, been cutting hair for two weeks',
            serviceCategory: serviceCategorySeed[0]._id,
        },
        {
            serviceName: 'Haircut and Beard Trim',
            servicePrice: 25,
            serviceDuration: 60,
            serviceDescription: 'Specializing in fades, lineup beard',
            serviceCategory: serviceCategorySeed[0]._id
        },
        {
            serviceName: 'Eyelash Extensions',
            servicePrice: 50,
            serviceDuration: 40,
            serviceDescription: 'Uses high quality synthetic eyelash, ABG approved',
            serviceCategory: serviceCategorySeed[2]._id
        },
        {
            serviceName: 'Pedicure',
            servicePrice: 30,
            serviceDuration: 40,
            serviceDescription: 'Nails did acrylic finish',
            serviceCategory: serviceCategorySeed[3]._id
        },

    ]);

    // LOG TO BACKEND CONSOLE
    console.log('SUCCESSFULLY SEEDED SERVICE TYPES');


    // CREATE SERVICE COMMENTS DATA
    await ServiceComment.insertMany([
        {
            commentText: 'Nice haircut, lookin fabulous! Thanks Brian!',
            commentCreated: currentDate,
            serviceRating: 5,
            normalUser: normalUserSeed._id,
            serviceUser: serviceUserSeedOne._id,
        },
        {
            commentText: 'Nails did, lookin fabulous! Thanks Kevin!',
            commentCreated: currentDate,
            serviceRating: 4,
            normalUser: normalUserSeed._id,
            serviceUser: serviceUserSeedTwo._id
        },
    ]);

    // LOG TO BACKEND CONSOLE
    console.log('SUCCESSFULLY SEEDED SERVICE COMMENTS');


    process.exit();
});
