// NEW SEED FILE USED FOR TESTING

const db = require('./connection');

// const { NormalUser, ServiceUser, ServiceCategory, ServiceComment, ServiceType } = require('../models');
const { NormalUser, ServiceCategory, ServiceUser } = require('../models');
// const moment = require('moment');
const haircutIcon = '.././assets/images/haircut_icon.svg';
const eyelashesIcon = '.././assets/images/eyelashes_icon.svg';
// const currentDate = moment(Date.now()).format('ll')


db.once('open', async () => {
    // DELETE SERVICECATEGORY DATA
    await ServiceCategory.deleteMany();

    // INSERTMANY SERVICECATEGORY DATA
    const categories = await ServiceCategory.insertMany([
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
    console.log('ServiceCategory seeded');


    // DELETE NORMALUSER DATA
    await NormalUser.deleteMany();

    // CREATE NORMALUSER DATA
    await NormalUser.create({
        firstName: 'normalUserFirst',
        lastName: 'normalUserLast',
        email: 'normalUserEmail',
        password: 'normalUserPassword',
        photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
        location: 'normalUserLocation'

    });
    // LOG TO BACKEND CONSOLE
    console.log('NormalUser seeded');


    // DELETE SERVICEUSER DATA
    await ServiceUser.deleteMany();

    // CREATE SERVICEUSER DATA
    await ServiceUser.create([
        {
            firstName: 'Brian',
            lastName: 'Alegre',
            email: 'asdf@yahoo.com',
            password: 'asdf1234',
            serviceCategory: categories[0]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'First testing bio',
            location: 'Garden Grove, CA',
        },
    ]);

    // CREATE SERVICEUSER DATA
    await ServiceUser.create([
        {
            firstName: 'Kevin',
            lastName: 'Lazaro',
            email: 'kevin@yahoo.com',
            password: 'kevin123',
            serviceCategory: categories[1]._id,
            photo: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            bio: 'Second testing bio',
            location: 'Hacienda Heights, CA',
        },
    ]);

    // LOG TO BACKEND CONSOLE
    console.log('ServiceUser seeded');


    process.exit();
});
