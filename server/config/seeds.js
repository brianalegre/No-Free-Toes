const db = require('./connection');
const { NormalUser, ServiceUser, ServiceCategory, ServiceComment, ServiceType } = require('../models');
const moment = require('moment');
const currentDate = moment(Date.now()).format('ll')

db.once('open', async () => {
    // DELETE SERVICECATEGORY DATA
    await ServiceCategory.deleteMany();

    // INSERTMANY SERVICECATEGORY DATA
    const serviceCategorySeed = await ServiceCategory.insertMany([
        { categoryName: 'Haircut', categoryIcon: '.././assets/icons/haircut_icon.svg' },
        { categoryName: 'Massage', categoryIcon: '.././assets/icons/massage_icon.svg' },
        { categoryName: 'Eyelashes', categoryIcon: '.././assets/icons/eyelashes_icon.svg' },
        { categoryName: 'Nailcare', categoryIcon: '.././assets/icons/nailcare_icon.svg' },
        { categoryName: 'Dance', categoryIcon: '.././assets/icons/dance_icon.svg' },
        { categoryName: 'Fitness', categoryIcon: '.././assets/icons/personaltraining_icon.svg' },
        { categoryName: 'Pet Care', categoryIcon: '.././assets/icons/petcare_icon.svg' },
        { categoryName: 'Tutoring', categoryIcon: '.././assets/icons/tutoring_icon.svg' },
        { categoryName: 'Media', categoryIcon: '.././assets/icons/media_icon.svg' },
        { categoryName: 'Singing', categoryIcon: '.././assets/icons/singing_icon.svg' },
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

    // CREATE SERVICEUSER DATA
    const serviceUserSeedSix = await ServiceUser.create(
        {
            firstName: 'Nick',
            lastName: 'Graffis',
            email: 'nick@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[5]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'Sixth testing bio',
            location: 'San francisco, CA',
        },
    );

    // CREATE SERVICEUSER DATA
    const serviceUserSeedSeven = await ServiceUser.create(
        {
            firstName: 'Erik',
            lastName: 'Hirsch',
            email: 'erik@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[6]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'Seventh testing bio',
            location: 'Orange, CA',
        },
    );

    // CREATE SERVICEUSER DATA
    const serviceUserSeedEight = await ServiceUser.create(
        {
            firstName: 'Tony',
            lastName: 'Vallescas',
            email: 'tony@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[7]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'Tony testing bio',
            location: 'Los Angeles, CA',
        },
    );

    // CREATE SERVICEUSER DATA
    const serviceUserSeedNine = await ServiceUser.create(
        {
            firstName: 'Vy',
            lastName: 'Nguyen',
            email: 'vy@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[8]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'Vy testing bio',
            location: 'Fountain Valley, CA',
        },
    );

    // CREATE SERVICEUSER DATA
    const serviceUserSeedTen = await ServiceUser.create(
        {
            firstName: 'Marina',
            lastName: 'Huisken',
            email: 'marina@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[9]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'Marina testing bio',
            location: 'Fountain Valley, CA',

        },
    );

    // CREATE SERVICEUSER DATA
    const serviceUserSeedEleven = await ServiceUser.create(
        {
            firstName: 'Ghazaleh',
            lastName: 'Javadi',
            email: 'ghazaleh@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[0]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'Ghazaleh testing bio',
            location: 'Orange, CA',
        },
    );

    // CREATE SERVICEUSER DATA
    const serviceUserSeedTwelve = await ServiceUser.create(
        {
            firstName: 'John',
            lastName: 'Hull',
            email: 'john@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[1]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'John testing bio',
            location: 'Orange County, CA',
        },
    );

    // CREATE SERVICEUSER DATA
    const serviceUserSeedThirteen = await ServiceUser.create(
        {
            firstName: 'Darryl ',
            lastName: 'Le',
            email: 'darryl@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[2]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'fifth testing bio',
            location: 'Irvine, CA',
        },
    );

    // CREATE SERVICEUSER DATA
    const serviceUserSeedFourteen = await ServiceUser.create(
        {
            firstName: 'Connor',
            lastName: 'Mictcher',
            email: 'conner@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[3]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'Connor testing bio',
            location: 'Orange County, CA',
        },
    );

    // CREATE SERVICEUSER DATA
    const serviceUserSeedFifteen = await ServiceUser.create(
        {
            firstName: 'Matt',
            lastName: 'Dunston',
            email: 'matt@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[4]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'Matt testing bio',
            location: 'Los Angeles, CA',
        },
    );

    // CREATE SERVICEUSER DATA
    const serviceUserSeedSixteen = await ServiceUser.create(
        {
            firstName: 'Ian',
            lastName: 'Irwin',
            email: 'ian@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[5]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'Ian testing bio',
            location: 'Orange, CA',
        },
    );

    // CREATE SERVICEUSER DATA
    const serviceUserSeedSeventeen = await ServiceUser.create(
        {
            firstName: 'Wilson',
            lastName: 'Soetomo',
            email: 'wilson@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[6]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'Wilson testing bio',
            location: 'Irvine, CA',
        },
    );

    // CREATE SERVICEUSER DATA
    const serviceUserSeedEighteen = await ServiceUser.create(
        {
            firstName: 'Liberato',
            lastName: 'Garced',
            email: 'liberto@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[7]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'Liberato testing bio',
            location: 'Irvine, CA',
        },
    );

    // CREATE SERVICEUSER DATA
    const serviceUserSeedNineteen = await ServiceUser.create(
        {
            firstName: 'Luna',
            lastName: 'Kiira',
            email: 'luna@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[8]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'Luna testing bio',
            location: 'Monterey Park, CA',
        },
    );

    // CREATE SERVICEUSER DATA
    const serviceUserSeedTwenty = await ServiceUser.create(
        {
            firstName: 'Jasmine',
            lastName: 'Tsao',
            email: 'jasmine@gmail.com',
            password: 'test1234',
            serviceCategory: serviceCategorySeed[9]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'Jasmine testing bio',
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
