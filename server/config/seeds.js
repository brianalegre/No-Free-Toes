const db = require("./connection");
const {
  NormalUser,
  ServiceUser,
  ServiceCategory,
  ServiceComment,
  ServiceType,
  TimeSlot,
  Appointment
} = require("../models");
const moment = require("moment");
const currentDate = moment(Date.now()).format("ll");

db.once("open", async () => {



  // CLEAR EXISTING TIMESLOTS SEEDS
  await TimeSlot.deleteMany()

  // // CREATE TIMESLOT DATA
  // await TimeSlot.insertMany([
  //   {
  //     timeSlot: 1650456000,
  //     serviceUser: serviceUserSeedOne._id,
  //     serviceType: [serviceTypeSeed[0]._id, serviceTypeSeed[4]._id],
  //   },
  //   {
  //     timeSlot: 1618920000,
  //     serviceUser: serviceUserSeedOne._id,
  //     serviceType: [serviceTypeSeed[2]._id, serviceTypeSeed[0]._id],
  //   },
  // ])

  // CREATE TIMESLOT DATA
  const timeSlot95 = await TimeSlot.insertMany([
    // 9/5/22
    {
      // 9/5 @ 0900
      timeSlot: 1662393600,
    },
    {
      // 9/5 @ 1000
      timeSlot: 1662397200,
    },
    {
      // 9/5 @ 1100
      timeSlot: 1662400800,
    },
    {
      // 9/5 @ 1200
      timeSlot: 1662404400,
    },
    {
      // 9/5 @ 1300
      timeSlot: 1662408000,
    },
    {
      // 9/5 @ 1400
      timeSlot: 1662411600,
    },
    {
      // 9/5 @ 1500
      timeSlot: 1662415200,
    },
    {
      // 9/5 @ 1600
      timeSlot: 1662418800,
    },
    {
      // 9/5 @ 1700
      timeSlot: 1662422400,
    },
  ]);

  const timeSlot96 = await TimeSlot.insertMany([
    // 9/6/22
    {
      // 9/6 @ 0900
      timeSlot: 1662480000,
    },
    {
      // 9/6 @ 1000
      timeSlot: 1662483600,
    },
    {
      // 9/6 @ 1100
      timeSlot: 1662487200,
    },
    {
      // 9/6 @ 1200
      timeSlot: 1662490800,
    },
    {
      // 9/6 @ 1300
      timeSlot: 1662494400,
    },
    {
      // 9/6 @ 1400
      timeSlot: 1662498000,
    },
    {
      // 9/6 @ 1500
      timeSlot: 1662501600,
    },
    {
      // 9/6 @ 1600
      timeSlot: 1662505200,
    },
    {
      // 9/6 @ 1700
      timeSlot: 1662508800,
    },

  ])

  // LOG TO BACKEND CONSOLE
  console.log("SUCCESSFULLY SEEDED TIMESLOTS");

  // DELETE SERVICECATEGORY DATA
  await ServiceCategory.deleteMany();

  // INSERTMANY SERVICECATEGORY DATA
  const serviceCategorySeed = await ServiceCategory.insertMany([
    {
      categoryName: "Haircut",
      categoryIcon: ".././assets/icons/haircut_icon.svg",
    },
    {
      categoryName: "Massage",
      categoryIcon: ".././assets/icons/massage_icon.svg",
    },
    {
      categoryName: "Eyelashes",
      categoryIcon: ".././assets/icons/eyelashes_icon.svg",
    },
    {
      categoryName: "Nailcare",
      categoryIcon: ".././assets/icons/nailcare_icon.svg",
    },
    { categoryName: "Dance", categoryIcon: ".././assets/icons/dance_icon.svg" },
    {
      categoryName: "Fitness",
      categoryIcon: ".././assets/icons/personaltraining_icon.svg",
    },
    {
      categoryName: "Pet Care",
      categoryIcon: ".././assets/icons/petcare_icon.svg",
    },
    {
      categoryName: "Tutoring",
      categoryIcon: ".././assets/icons/tutoring_icon.svg",
    },
    { categoryName: "Media", categoryIcon: ".././assets/icons/media_icon.svg" },
    {
      categoryName: "Singing",
      categoryIcon: ".././assets/icons/singing_icon.svg",
    },
  ]);

  // LOG TO BACKEND CONSOLE
  console.log("SUCCESSFULLY SEEDED SERVICE CATEGORIES");

  // DELETE EXISTING SERVICETYPE DATA
  await ServiceType.deleteMany();

  // CREATE SERVETYPE DATA
  const serviceTypeSeed = await ServiceType.insertMany([
    // Haircuts [0-6]
    {
      serviceName: "Haircut",
      servicePrice: 40,
      serviceDuration: 45,
      serviceDescription: "Fades, Tapers, etc + lineup (if requested)",
      serviceCategory: serviceCategorySeed[0]._id,
    },
    {
      serviceName: "Fade and Shave",
      servicePrice: 25,
      serviceDuration: 60,
      serviceDescription: "Fade cut and Beard Clean/Shape Up",
      serviceCategory: serviceCategorySeed[0]._id,
    },
    {
      serviceName: "Barber Facial",
      servicePrice: 35,
      serviceDuration: 30,
      serviceDescription:
        "Hot towel, face mask /exfoliating treatment, lotion and oils fin, ished with face massage",
      serviceCategory: serviceCategorySeed[0]._id,
    },
    {
      serviceName: "Haircut, Beard Trim, and Eyebrows",
      servicePrice: 60,
      serviceDuration: 60,
      serviceDescription:
        "Full haircut experience with beard trim and eyebrow shaping",
      serviceCategory: serviceCategorySeed[0]._id,
    },
    {
      serviceName: "Kids Haircut",
      servicePrice: 30,
      serviceDuration: 30,
      serviceDescription: "Kids under 12 years old, no straight razor used",
      serviceCategory: serviceCategorySeed[0]._id,
    },

    // Massage [5-9]
    {
      serviceName: "Swedish Massage",
      servicePrice: 80,
      serviceDuration: 60,
      serviceDescription:
        "Swedish massage is a gentle type of full-body massage thats ideal for people who are new to massage and want to relax without deeper work",
      serviceCategory: serviceCategorySeed[1]._id,
    },
    {
      serviceName: "Deep Tissue Massage",
      servicePrice: 80,
      serviceDuration: 60,
      serviceDescription:
        "Finger pressure and the stroking of deep layers to massage tissue areas, ideal for people with tight/knotted muscles",
      serviceCategory: serviceCategorySeed[1]._id,
    },
    {
      serviceName: "Lymphatic Massage",
      servicePrice: 80,
      serviceDuration: 60,
      serviceDescription:
        "Slow and circular motions and pressure to move lymph fluid throughout the lymphatic system",
      serviceCategory: serviceCategorySeed[1]._id,
    },
    {
      serviceName: "Sports Massage",
      servicePrice: 80,
      serviceDuration: 60,
      serviceDescription:
        "Sports massage is designed to prepare the athlete for their best performance, reduce fatigue, and relieve muscle swelling and tension.",
      serviceCategory: serviceCategorySeed[1]._id,
    },
    {
      serviceName: "Tuning Stimulation & Sinuses Accupressure",
      servicePrice: 40,
      serviceDuration: 30,
      serviceDescription:
        "Tuning fork instrument to stimulate the olfactory nerve and the sinus receptors through your sinus points. Then accupressure to relieve sinus pressure",
      serviceCategory: serviceCategorySeed[1]._id,
    },

    // Eyelashes [10-14]
    {
      serviceName: "Eyelash Extensions - Curl",
      servicePrice: 50,
      serviceDuration: 40,
      serviceDescription: "The curl of lashes used in a set will depend on the style desired",
      serviceCategory: serviceCategorySeed[2]._id,
    },
    {
      serviceName: "Eyelash Extensions - Express",
      servicePrice: 50,
      serviceDuration: 40,
      serviceDescription: "Individual synthetic mink lashes are applied across the lash line to provide beautiful lashes",
      serviceCategory: serviceCategorySeed[2]._id,
    },
    {
      serviceName: "Eyelash Extensions - Russian",
      servicePrice: 50,
      serviceDuration: 40,
      serviceDescription: "A technique that uses more than one lash to create a personalised fan",
      serviceCategory: serviceCategorySeed[2]._id,
    },
    {
      serviceName: "Eyelash Extensions - Hybrid",
      servicePrice: 50,
      serviceDuration: 40,
      serviceDescription: "Hybrid lash extensions are a blend of two lash types - Classic lashes and Russian lashes",
      serviceCategory: serviceCategorySeed[2]._id,
    },
    {
      serviceName: "Eyelash Extensions - Classic",
      servicePrice: 50,
      serviceDuration: 40,
      serviceDescription: "Uses high quality synthetic eyelash, ABG approved",
      serviceCategory: serviceCategorySeed[2]._id,
    },

    // Nailcare [15-21]
    {
      serviceName: "Acrylic Full Set",
      servicePrice: 70,
      serviceDuration: 120,
      serviceDescription:
        "Full set of acrylics any shape. Set includes gel polish, cuticle clean, and proper nail care",
      serviceCategory: serviceCategorySeed[3]._id,
    },
    {
      serviceName: "Encapsulated Acrylic Full Set",
      servicePrice: 100,
      serviceDuration: 120,
      serviceDescription:
        "Encapsulated glitter, natural flowers, colored acrylic powder and others. Set includes gel top coat, cuticle clean, and proper nail care",
      serviceCategory: serviceCategorySeed[3]._id,
    },
    {
      serviceName: "Sculpted Acrylic Full Set",
      servicePrice: 90,
      serviceDuration: 120,
      serviceDescription:
        "Full set of acrylics done with free forms, this set includes pinching of the nails. Set also includes gel polish, cuticle clean, and proper nail care",
      serviceCategory: serviceCategorySeed[3]._id,
    },
    {
      serviceName: "Hard Gel Full Set",
      servicePrice: 90,
      serviceDuration: 120,
      serviceDescription:
        "Full Set of hard gel done with tips. Set includes gel polish, cuticle clean, and proper nail care",
      serviceCategory: serviceCategorySeed[3]._id,
    },
    {
      serviceName: "Hard Gel Sculpted Set",
      servicePrice: 100,
      serviceDuration: 120,
      serviceDescription:
        "Sculpted full set of hard gel, made with free forms/nail forms. Set includes gel polish, cuticle clean, and proper nail care",
      serviceCategory: serviceCategorySeed[3]._id,
    },
    {
      serviceName: "Gel Manicure",
      servicePrice: 50,
      serviceDuration: 120,
      serviceDescription:
        "Gel polish on natural nails. Service includes removal of past gel polish, cuticle clean, nail trim/file and one color gel polish.",
      serviceCategory: serviceCategorySeed[3]._id,
    },
    {
      serviceName: "Gel Pedicure",
      servicePrice: 60,
      serviceDuration: 120,
      serviceDescription:
        "Gel polish on natural nails. Service includes removal of past gel polish, cuticle clean, nail trim/file and one color gel polish.",
      serviceCategory: serviceCategorySeed[3]._id,
    },

    // Dance [22-29]
    {
      serviceName: "Belly Dance",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "Belly dance is a beautiful dance that is sensual and fun. It is a great way to get in shape and have fun at the same time.",
      serviceCategory: serviceCategorySeed[4]._id,
    },
    {
      serviceName: "Ballet",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "This is in the form of a ballet, in which the dance is choreographed with classical music.",
      serviceCategory: serviceCategorySeed[4]._id,
    },
    {
      serviceName: "Ballroom",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "Ballroom is a popular form of competitive dance, or dancesport, with competitions being held all over the world.",
      serviceCategory: serviceCategorySeed[4]._id,
    },
    {
      serviceName: "Contemporary",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "Drawing on classical, modern and jazz dance styles, contemporary dance has evolved to incorporate many characteristics of a broader range of dance forms.",
      serviceCategory: serviceCategorySeed[4]._id,
    },
    {
      serviceName: "Hip-Hop",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "Hip-hop dancing include Breaking, Locking and Popping, with derivative styles emerging out of these including Memphis Jookin, Turfing, Jerkin and Krumping.",
      serviceCategory: serviceCategorySeed[4]._id,
    },
    {
      serviceName: "Jazz",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "Jazz dancing builds on African American vernacular dance styles that emerged along with Jazz music in the US.",
      serviceCategory: serviceCategorySeed[4]._id,
    },
    {
      serviceName: "Tap Dancing",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "Tap dancing characterises a range of dances including flamenco, rhythm, classical, broadway and postmodern tap",
      serviceCategory: serviceCategorySeed[4]._id,
    },
    {
      serviceName: "Salsa",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "Cuban son and Afro-Cuban rumba used diverse musical instruments to create the basis of a rhythm known as the Salsa",
      serviceCategory: serviceCategorySeed[4]._id,
    },

    // FITNESS [30-38]
    {
      serviceName: "Personal Training",
      servicePrice: 100,
      serviceDuration: 60,
      serviceDescription:
        "Personal training service includes training you to be the best you can be",
      serviceCategory: serviceCategorySeed[5]._id,
    },
    {
      serviceName: "Yoga",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription: "Yoga service includes teaching you how to do yoga",
      serviceCategory: serviceCategorySeed[5]._id,
    },
    {
      serviceName: "Pilates",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "Pilates service includes teaching you how to do pilates",
      serviceCategory: serviceCategorySeed[5]._id,
    },
    {
      serviceName: "Spin Class(Cycling)",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "Intervals, rolling hills, sprints, climbs, runs, surges and jumps all to music hand-picked to motivate and inspire!",
    },
    {
      serviceName: "Kickboxing",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "Cardio induced workout that invloves punching and kicking",
      serviceCategory: serviceCategorySeed[5]._id,
    },
    {
      serviceName: "Zumba",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription: "Cardio induced workout that invloves dancing",
      serviceCategory: serviceCategorySeed[5]._id,
    },
    {
      serviceName: "Crossfit",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "Weight lifting and cardio induced workout that invloves a variety of exercises",
      serviceCategory: serviceCategorySeed[5]._id,
    },
    {
      serviceName: "Weightlifting",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "Weightlifting service includes having a personal trainer teach you how to lift weights",
      serviceCategory: serviceCategorySeed[5]._id,
    },
    {
      serviceName: "Running",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "Cardio induced workout that invloves having a personal trainer runs with you",
      serviceCategory: serviceCategorySeed[5]._id,
    },

    // Pet Services [39-45]
    {
      // PET GROOMING
      serviceName: "Small Dog Grooming",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "Small dog grooming service includes bath, nail trim, ear cleaning, and hair cut",
      serviceCategory: serviceCategorySeed[6]._id,
    },
    {
      serviceName: "Medium Dog Grooming",
      servicePrice: 60,
      serviceDuration: 60,
      serviceDescription:
        "Medium dog grooming service includes bath, nail trim, ear cleaning, and hair cut",
      serviceCategory: serviceCategorySeed[6]._id,
    },
    {
      serviceName: "Large Dog Grooming",
      servicePrice: 70,
      serviceDuration: 60,
      serviceDescription:
        "Large dog grooming service includes bath, nail trim, ear cleaning, and hair cut",
      serviceCategory: serviceCategorySeed[6]._id,
    },
    {
      serviceName: "Cat Grooming",
      servicePrice: 40,
      serviceDuration: 60,
      serviceDescription:
        "Cat grooming service includes bath, nail trim, ear cleaning, and hair cut",
      serviceCategory: serviceCategorySeed[6]._id,
    },
    {
      // PET SITTING
      serviceName: "Pet Sitting(1hr)",
      servicePrice: 40,
      serviceDuration: 60,
      serviceDescription:
        "Pet sitting service includes feeding, walking, and playing with your pet for 1 hour",
      serviceCategory: serviceCategorySeed[6]._id,
    },
    {
      serviceName: "Pet Sitting(OVER NIGHT)",
      servicePrice: 100,
      serviceDuration: 720,
      serviceDescription:
        "Pet sitting service includes feeding, walking, and playing with your pet overnight",
    },
    {
      // PET WALKING
      serviceName: "Pet Walking",
      servicePrice: 30,
      serviceDuration: 30,
      serviceDescription:
        "Pet walking service includes giving your pet the bestest walk of their life",
      serviceCategory: serviceCategorySeed[6]._id,
    },

    // Tutoring [46-51]
    {
      serviceName: "Math Tutoring",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "Math tutoring service includes help with math homework, and math problems",
      serviceCategory: serviceCategorySeed[7]._id,
    },
    {
      serviceName: "English Tutoring",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "English tutoring service includes help with english homework, and english problems",
      serviceCategory: serviceCategorySeed[7]._id,
    },
    {
      serviceName: "Science Tutoring",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "Science tutoring service includes help with science homework, and science problems",
      serviceCategory: serviceCategorySeed[7]._id,
    },
    {
      serviceName: "History Tutoring",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "History tutoring service includes help with history homework, and history problems",
      serviceCategory: serviceCategorySeed[7]._id,
    },
    {
      serviceName: "Foreign Language Tutoring",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "Foreign language tutoring service includes help with foreign language homework, and foreign language problems",
      serviceCategory: serviceCategorySeed[7]._id,
    },
    {
      serviceName: "Computer Science Tutoring",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "Computer science tutoring service includes help with computer science homework, and computer science problems",
      serviceCategory: serviceCategorySeed[7]._id,
    },

    // MEDIA [52-57]
    {
      serviceName: "Photography",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription:
        "Photography service includes taking pictures of you and your loved ones",
      serviceCategory: serviceCategorySeed[8]._id,
    },
    {
      serviceName: "Videography",
      servicePrice: 100,
      serviceDuration: 120,
      serviceDescription:
        "Videography service includes taking videos of you and your loved ones",
      serviceCategory: serviceCategorySeed[8]._id,
    },
    {
      serviceName: "Graphic Design",
      servicePrice: 60,
      serviceDuration: 60,
      serviceDescription:
        "Graphic design service includes designing logos, flyers, and other graphics",
      serviceCategory: serviceCategorySeed[8]._id,
    },
    {
      serviceName: "Web Design",
      servicePrice: 120,
      serviceDuration: 60,
      serviceDescription: "Web design service includes designing websites",
      serviceCategory: serviceCategorySeed[8]._id,
    },
    {
      serviceName: "Music Production",
      servicePrice: 100,
      serviceDuration: 60,
      serviceDescription: "Music production service includes producing music",
      serviceCategory: serviceCategorySeed[8]._id,
    },
    {
      serviceName: "Video Editing",
      servicePrice: 50,
      serviceDuration: 60,
      serviceDescription: "Video editing service includes editing videos",
      serviceCategory: serviceCategorySeed[8]._id,
    },

    // SINGING [58-64]
    {
      serviceName: "Opera Singing",
      servicePrice: 100,
      serviceDuration: 60,
      serviceDescription: "Opera singing service includes singing opera",
      serviceCategory: serviceCategorySeed[9]._id,
    },
    {
      serviceName: "Classical Singing",
      servicePrice: 100,
      serviceDuration: 60,
      serviceDescription:
        "Classical singing service includes singing classical music",
      serviceCategory: serviceCategorySeed[9]._id,
    },
    {
      serviceName: "Pop Singing",
      servicePrice: 100,
      serviceDuration: 60,
      serviceDescription: "Pop singing service includes singing pop music",
      serviceCategory: serviceCategorySeed[9]._id,
    },
    {
      serviceName: "R&B Singing",
      servicePrice: 100,
      serviceDuration: 60,
      serviceDescription: "R&B singing service includes singing R&B music",
      serviceCategory: serviceCategorySeed[9]._id,
    },
    {
      serviceName: "Jazz Singing",
      servicePrice: 100,
      serviceDuration: 60,
      serviceDescription: "Jazz singing service includes singing jazz music",
      serviceCategory: serviceCategorySeed[9]._id,
    },
    {
      serviceName: "Country Singing",
      servicePrice: 100,
      serviceDuration: 60,
      serviceDescription:
        "Country singing service includes singing country music",
      serviceCategory: serviceCategorySeed[9]._id,
    },
    {
      serviceName: "Rock Singing",
      servicePrice: 100,
      serviceDuration: 60,
      serviceDescription: "Rock singing service includes singing rock music",
      serviceCategory: serviceCategorySeed[9]._id,
    },
  ]);

  // LOG TO BACKEND CONSOLE
  console.log("SUCCESSFULLY SEEDED SERVICE TYPES");

  // DELETE NORMALUSER DATA
  await NormalUser.deleteMany();

  // CREATE NORMALUSER DATA
  const normalUserSeedOne = await NormalUser.create({
    firstName: "Michael",
    lastName: "Myers",
    email: "test@gmail.com",
    password: "test1234",
    photo:
      "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    location: "Test Location, CA",
  });

  // CREATE NORMALUSER DATA
  const normalUserSeedTwo = await NormalUser.create({
    firstName: "Freddy",
    lastName: "Krueger",
    email: "normalUserEmail@gmail.com",
    password: "normalUserPassword",
    photo:
      "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    location: "normalUserLocation",
  });
  // LOG TO BACKEND CONSOLE
  console.log("SUCCESSFULLY SEEDED NORMAL USERS");

  // DELETE SERVICEUSER DATA
  await ServiceUser.deleteMany();

  // CREATE SERVICEUSER DATA
  // HARICUT CATEGORY
  const serviceUserSeedOne = await ServiceUser.create({
    firstName: "Brian",
    lastName: "Alegre",
    email: "brian@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[0]._id,
    photo:
      ".././assets/images/man.png",
    bio: "I began cutting my own hair in high school and continued on through his college days. For over fifteen years, I have been a family and community barber",
    location: "Garden Grove, CA",
    serviceType: [serviceTypeSeed[0]._id, serviceTypeSeed[2]._id, serviceTypeSeed[4]._id],
    timeSlots: [timeSlot95[0]._id, timeSlot95[1]._id, timeSlot95[2]._id, timeSlot95[3]._id, timeSlot95[4]._id, timeSlot95[5]._id, timeSlot95[6]._id, timeSlot95[7]._id, timeSlot95[8]._id,
    timeSlot96[0]._id, timeSlot96[1]._id, timeSlot96[2]._id, timeSlot96[3]._id, timeSlot96[4]._id, timeSlot96[5]._id, timeSlot96[6]._id, timeSlot96[7]._id, timeSlot96[8]._id,
    ],
  });

  // CREATE SERVICEUSER DATA
  // MASSAGE CATEGORY
  const serviceUserSeedTwo = await ServiceUser.create({
    firstName: "Kevin",
    lastName: "Lazaro",
    email: "kevin@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[1]._id,
    photo:
      ".././assets/images/man.png",
    bio: "Hi, my name is Kevin, owner of Nelipot’s Mind & Body Rejuvenation. I attended Anthem College in Brookfield and earned my associates degree in massage therapy in 2012. My goal is to help people live better lives by utilizing the healing benefits of massage and Reiki.",
    location: "Hacienda Heights, CA",
    serviceType: [serviceTypeSeed[6]._id, serviceTypeSeed[8]._id, serviceTypeSeed[9]._id]
  });

  // CREATE SERVICEUSER DATA
  // EYELASH CATEGORY
  const serviceUserSeedThree = await ServiceUser.create({
    firstName: "Allec",
    lastName: "Arzadon",
    email: "allec@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[2]._id,
    photo:
      ".././assets/images/man.png",
    bio: "As a certified eyelash artist,  I guarantee the highest level of technical and artistic skill, specializing in a safe and healthy application.",
    location: "Anaheim, CA",
    serviceType: [serviceTypeSeed[10]._id, serviceTypeSeed[12]._id, serviceTypeSeed[14]._id]
  });

  // CREATE SERVICEUSER DATA
  // NAIL CARE CATEGORY
  const serviceUserSeedFour = await ServiceUser.create({
    firstName: "Philip",
    lastName: "Hwang",
    email: "philip@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[3]._id,
    photo:
      ".././assets/images/man.png",
    bio: "Nails: one thing you can get into shape without exercise.",
    location: "Irvine, CA",
    serviceType: [serviceTypeSeed[15]._id, serviceTypeSeed[17]._id, serviceTypeSeed[19]._id, serviceTypeSeed[21]._id]
  });

  // CREATE SERVICEUSER DATA
  // DANCE CATEGORY
  const serviceUserSeedFive = await ServiceUser.create({
    firstName: "Chad",
    lastName: "Tao",
    email: "chad@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[4]._id,
    photo:
      ".././assets/images/man.png",
    bio: "I train in all forms of dance, but especially enjoys modern, contemporary and acro",
    location: "Los Angeles, CA",
    serviceType: [serviceTypeSeed[22]._id, serviceTypeSeed[24]._id, serviceTypeSeed[26]._id, serviceTypeSeed[28]._id]
  });

  // CREATE SERVICEUSER DATA
  // FITNESS CATEGORY
  const serviceUserSeedSix = await ServiceUser.create({
    firstName: "Nick",
    lastName: "Graffis",
    email: "nick@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[5]._id,
    photo:
      ".././assets/images/man.png",
    bio: "I care deeply about my clients, and there’s nothing of more value to me than helping somebody go through an experience that makes them happy, confident, and strong.",
    location: "San francisco, CA",
    serviceType: [serviceTypeSeed[30]._id, serviceTypeSeed[32]._id, serviceTypeSeed[34]._id, serviceTypeSeed[36]._id, serviceTypeSeed[38]._id]
  });


  // CREATE SERVICEUSER DATA
  // PET CARE CATEGORY
  const serviceUserSeedSeven = await ServiceUser.create({
    firstName: "Erik",
    lastName: "Hirsch",
    email: "erik@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[6]._id,
    photo:
      ".././assets/images/man.png",
    bio: "I have loved animals all of my life, always gravitating towards dogs even at a young age.  Growing up with cats and dogs, I eventually pursued dog training before transitioning into dog grooming.",
    location: "Orange, CA",
    serviceType: [serviceTypeSeed[39]._id, serviceTypeSeed[41]._id, serviceTypeSeed[43]._id, serviceTypeSeed[45]._id]
  });

  // CREATE SERVICEUSER DATA
  // TUTORING CATEGORY
  const serviceUserSeedEight = await ServiceUser.create({
    firstName: "Tony",
    lastName: "Vallescas",
    email: "tony@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[7]._id,
    photo:
      ".././assets/images/man.png",
    bio: "Among my 8 As that I attained at UCI, I am most adept in Chemistry",
    location: "Los Angeles, CA",
    serviceType: [serviceTypeSeed[46]._id, serviceTypeSeed[48]._id, serviceTypeSeed[50]._id]
  });


  // CREATE SERVICEUSER DATA
  // MEDIA CATEGORY
  const serviceUserSeedNine = await ServiceUser.create({
    firstName: "Vy",
    lastName: "Nguyen",
    email: "vy@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[8]._id,
    photo:
      ".././assets/images/woman.png",
    bio: "Exceptional images deserve an exceptional presentation.",
    location: "Fountain Valley, CA",
    serviceType: [serviceTypeSeed[52]._id, serviceTypeSeed[54]._id, serviceTypeSeed[56]._id]
  });

  // CREATE SERVICEUSER DATA
  // SINGING CATEGORY
  const serviceUserSeedTen = await ServiceUser.create({
    firstName: "Marina",
    lastName: "Huisken",
    email: "marina@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[9]._id,
    photo:
      ".././assets/images/woman.png",
    bio: "Opera, Pop, Jazz, or Rock - I can teach you how to sing it all!",
    location: "Fountain Valley, CA",
    serviceType: [serviceTypeSeed[58]._id, serviceTypeSeed[60]._id, serviceTypeSeed[62]._id, serviceTypeSeed[64]._id]
  });


  // CREATE SERVICEUSER DATA
  // HAIRCUT CATEGORY
  const serviceUserSeedEleven = await ServiceUser.create({
    firstName: "Ghazaleh",
    lastName: "Javadi",
    email: "ghazaleh@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[0]._id,
    photo:
      ".././assets/images/woman.png",
    bio: "Having more than 20 years of experience, finishing multiple training programs, and winning quite a few awards, I am passionate about bringing my Salon to the top of the industry.",
    location: "Orange, CA",
    serviceType: [serviceTypeSeed[1]._id, serviceTypeSeed[3]._id]
  });

  // CREATE SERVICEUSER DATA
  // MASSAGE CATEGORY
  const serviceUserSeedTwelve = await ServiceUser.create({
    firstName: "John",
    lastName: "Hull",
    email: "john@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[1]._id,
    photo: ".././assets/images/man.png",
    bio: "Massaging is my hobby, I really enjoy doing it. Keep calm and book a massage.Massage is what the body needs. Ahh, the great things that can happen when you kick off your shoes and give your feet a massage",
    location: "Orange County, CA",
    serviceType: [serviceTypeSeed[5]._id, serviceTypeSeed[7]._id]
  });

  // CREATE SERVICEUSER DATA
  // EYELASHES CATEGORY
  const serviceUserSeedThirteen = await ServiceUser.create({
    firstName: "Darryl ",
    lastName: "Le",
    email: "darryl@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[2]._id,
    photo:
      ".././assets/images/man.png",
    bio: "Lashes that amazes everyone. ",
    location: "Irvine, CA",
    serviceType: [serviceTypeSeed[11]._id, serviceTypeSeed[13]._id]
  });

  // CREATE SERVICEUSER DATA
  // NAILCARE CATEGORY
  const serviceUserSeedFourteen = await ServiceUser.create({
    firstName: "Connor",
    lastName: "Mitchener",
    email: "conner@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[3]._id,
    photo:
      ".././assets/images/man.png",
    bio: "Don't cry because it's Monday. Smile because your nails are on point.",
    location: "Orange County, CA",
    serviceType: [serviceTypeSeed[16]._id, serviceTypeSeed[18]._id, serviceTypeSeed[20]._id]
  });

  // CREATE SERVICEUSER DATA
  // DANCE CATEGORY
  const serviceUserSeedFifteen = await ServiceUser.create({
    firstName: "Matt",
    lastName: "Dunston",
    email: "matt@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[4]._id,
    photo:
      ".././assets/images/man.png",
    bio: "I am currently an apprentice with the Next Generation Ballet program at the Patel Conservatory",
    location: "Los Angeles, CA",
    serviceType: [serviceTypeSeed[23]._id, serviceTypeSeed[25]._id, serviceTypeSeed[27]._id, serviceTypeSeed[29]._id]
  });

  // CREATE SERVICEUSER DATA
  // FITNESS CATEGORY
  const serviceUserSeedSixteen = await ServiceUser.create({
    firstName: "Ian",
    lastName: "Irwin",
    email: "ian@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[5]._id,
    photo:
      ".././assets/images/man.png",
    bio: "I am very passionate about helping others find happiness in life and feel good about themselves. I believe that when you FEEL GOOD, you excel in life.",
    location: "Orange, CA",
    serviceType: [serviceTypeSeed[30]._id, serviceTypeSeed[32]._id, serviceTypeSeed[34]._id, serviceTypeSeed[36]._id, serviceTypeSeed[38]._id]
  });

  // CREATE SERVICEUSER DATA
  // PET CARE CATEGORY
  const serviceUserSeedSeventeen = await ServiceUser.create({
    firstName: "Wilson",
    lastName: "Soetomo",
    email: "wilson@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[6]._id,
    photo:
      ".././assets/images/man.png",
    bio: "I have had a lifelong love for animals, and now after a full career at Door Dash, I can finally fulfill my passion to work with clients of the 'fluffy' variety. ",
    location: "Irvine, CA",
    serviceType: [serviceTypeSeed[40]._id, serviceTypeSeed[42]._id, serviceTypeSeed[44]._id]
  });

  // CREATE SERVICEUSER DATA
  // TUTORING CATEGORY
  const serviceUserSeedEighteen = await ServiceUser.create({
    firstName: "Liberato",
    lastName: "Garced",
    email: "liberto@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[7]._id,
    photo:
      ".././assets/images/man.png",
    bio: "Being once an Arts Student, my perspectives that I will provide in our lesson content are largely from historic and literary fields.",
    location: "Irvine, CA",
    serviceType: [serviceTypeSeed[47]._id, serviceTypeSeed[49]._id, serviceTypeSeed[51]._id]
  });

  // CREATE SERVICEUSER DATA
  // MEDIA CATEGORY
  const serviceUserSeedNineteen = await ServiceUser.create({
    firstName: "Luna",
    lastName: "Kiira",
    email: "luna@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[8]._id,
    photo:
      ".././assets/images/woman.png",
    bio: "Quality service. Quality videos. Creating moments, Creating life.",
    location: "Monterey Park, CA",
    serviceType: [serviceTypeSeed[53]._id, serviceTypeSeed[55]._id, serviceTypeSeed[57]._id]
  });

  // CREATE SERVICEUSER DATA
  // SINGING CATEGORY
  const serviceUserSeedTwenty = await ServiceUser.create({
    firstName: "Jasmine",
    lastName: "Tsao",
    email: "jasmine@gmail.com",
    password: "test1234",
    serviceCategory: serviceCategorySeed[9]._id,
    photo:
      ".././assets/images/woman.png",
    bio: "I am a professional singer and voice teacher. I have been teaching voice for over 10 years and have a degree in music education.",
    location: "Los Angeles, CA",
    serviceType: [serviceTypeSeed[58]._id, serviceTypeSeed[61]._id, serviceTypeSeed[63]._id,]
  });

  // LOG TO BACKEND CONSOLE
  console.log("SUCCESSFULLY SEEDED SERVICE USERS");
  //CLEAR EXISTING SERVICE COMMENT SEEDS
  await ServiceComment.deleteMany()

  // CREATE SERVICE COMMENTS DATA
  await ServiceComment.insertMany([
    {
      commentText: "Nice haircut, lookin fabulous! Thanks Brian!",
      commentCreated: currentDate,
      serviceRating: 5,
      normalUser: normalUserSeedOne._id,
      serviceUser: serviceUserSeedOne._id,
    },
    {
      commentText: "TEST 1",
      commentCreated: currentDate,
      serviceRating: 5,
      normalUser: normalUserSeedOne._id,
      serviceUser: serviceUserSeedOne._id,
    },
    {
      commentText: "TEST 2",
      commentCreated: currentDate,
      serviceRating: 3,
      normalUser: normalUserSeedOne._id,
      serviceUser: serviceUserSeedOne._id,
    },
    {
      commentText: "TEST 3",
      commentCreated: currentDate,
      serviceRating: 0,
      normalUser: normalUserSeedOne._id,
      serviceUser: serviceUserSeedOne._id,
    },
    {
      commentText: "TEST 4",
      commentCreated: currentDate,
      serviceRating: 1,
      normalUser: normalUserSeedTwo._id,
      serviceUser: serviceUserSeedFifteen._id,
    },
    {
      commentText: "Nails did, lookin fabulous! Thanks Kevin!",
      commentCreated: currentDate,
      serviceRating: 4,
      normalUser: normalUserSeedTwo._id,
      serviceUser: serviceUserSeedTwo._id,
    },
    {
      commentText: "TESTING 5",
      commentCreated: currentDate,
      serviceRating: 2,
      normalUser: normalUserSeedOne._id,
      serviceUser: serviceUserSeedTen._id,
    },
    {
      commentText: "You are the best your service literally changed my life. God bless!",
      commentCreated: currentDate,
      serviceRating: 3,
      normalUser: normalUserSeedTwo._id,
      serviceUser: serviceUserSeedTwenty._id,
    },
  ]);

  // LOG TO BACKEND CONSOLE
  console.log("SUCCESSFULLY SEEDED SERVICE COMMENTS");

  await Appointment.deleteMany();
  console.log("SUCCESSFULLY DELETED MOCK APPOINTMENT DATA")


  process.exit();
});
