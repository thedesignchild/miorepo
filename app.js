// REQUIREMENTS
const { App } = require('@slack/bolt');
const { google } = require('googleapis');
const fs = require('fs');
const credentials = require('./credentials.json');

// TOKENS
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});

const scopes = [
    'https://www.googleapis.com/auth/drive'
];

const auth = new google.auth.JWT(
    credentials.client_email, null,
    credentials.private_key, scopes
);

const drive = google.drive({ version: 'v3', auth });
const sheets = google.sheets({ version: 'v4', auth });


const port = process.env.PORT || 3000;
// FUNCTIONS

// random response
function responseFnc(num) {
    var typeResponse = ["Ayo! 🐱", "Dope! 😸", "Noice Thought 👌", "What? Really? 🐈", "Yos. Don't mind. 😹", "Gotcha! 😺", "Aye Aye! 😸", "You do know I'm a kitty right? 🙀", "Noice 👌", "Okie Dokie! 😸", "I like you hooman! 😻", "Arigato! 😽", "Okieee!", "Toosie Slide! 🐱‍", "It ain't easy being purr-fect 😽", "I'm a purr-ro 🐱‍", "What a cat-astrophe 🙀", "Stay Paw-sitive 😹", "Are you kitten' me?", "I'm feline Goooood", "Catitude is everything! 😼", "I used to previously climb meowtains 🗻", "Oh *paw*lease 🐈", "How about nahhhhh! 😼", "you are puurfect ❤"]
    return typeResponse[num];
}

function googleAPI(method, identify) {

    var timeline = new Date();
    var currentOffset = timeline.getTimezoneOffset();
    var ISTtime = new Date(timeline.getTime() + (330 + currentOffset) * 60000)
    var record = ISTtime.toString().split(' ')
    var dateFinal = record[2] + "-" + record[1] + "-" + record[3];
    console.log(dateFinal)
    console.log(record[4])
    let sheetData = [
        [method, dateFinal, record[4], identify.user.profile.email]
    ];

    sheets.spreadsheets.values.append({
        spreadsheetId: '1O0l3_tAP37Mbv6WS76kqu_Rb_Kt3yCRn1EPsTIK8a0s',
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        range: 'A2',
        resource: {
            range: 'A2',
            majorDimension: 'ROWS',
            values: sheetData,
        },
    });

}

function conversation_tracker(message) {

    let messageData = [
        [message]
    ];

    sheets.spreadsheets.values.append({
        spreadsheetId: '1M3bz7nASoDVMmVbtD-G8DKqXJkxz1ESHUJdUJDLh77Y',
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        range: 'A2',
        resource: {
            range: 'A2',
            majorDimension: 'ROWS',
            values: messageData,
        },
    });
}

function googleAPI_nudge(method, identify, identify2) {


    var timeline = new Date();
    var currentOffset = timeline.getTimezoneOffset();
    var ISTtime = new Date(timeline.getTime() + (330 + currentOffset) * 60000)
    var record = ISTtime.toString().split(' ')
    var dateFinal = record[2] + "-" + record[1] + "-" + record[3];
    console.log(dateFinal)
    console.log(record[4])
    let sheetData = [
        [method, dateFinal, record[4], identify.user.profile.email, identify2.user.profile.email]
    ];
    sheets.spreadsheets.values.append({
        spreadsheetId: '1O0l3_tAP37Mbv6WS76kqu_Rb_Kt3yCRn1EPsTIK8a0s',
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        range: 'A2',
        resource: {
            range: 'A2',
            majorDimension: 'ROWS',
            values: sheetData,
        },
    });
}

// jokes
function jokeFnc(num) {
    var joke = ["What types of cats purr the best? \n *Purrr-sians!*", "What's a cat's favorite subject in school? \n *Hisss-tory!*", "How does a cat sing scales? \n *Do-re-mew!*", "What do cats eat for breakfast? \n *Mice Krispies!*", "What do you call a pile of kittens? \n *A meowntain!*", "Why do cats always win video games? \n *Because they have nine lives!*", "How does a cat decide what it wants from the store? \n *It flips through the cat-alog!*", "What should you say to your cat when you leave the house? \n *'Have a mice day!'*", "Why can't cats play poker in the jungle? \n *Too many cheetahs!*", "Why are cats great singers? \n *Because they're very mewsical!*", "What do baby cats always wear? \n *Diapurrs!*", "What do cats love to do in the morning? \n *Read the mewspaper!*", "How do cats stop crimes? \n *They call claw enforcement!*", "What do you call a cat who lives in an igloo? \n *An eskimew!*", "What's a cat's favorite dessert? \n *Chocolate mouse!*", "What's a cat's favorite color? \n *Purr-ple!*", "What is a cat's favorite movie? \n *The Sound of Mewsic!*", "Why do cats always get their way? \n *They are very purr-suasive!*", "What do cats like to eat on a hot day? \n *A mice-cream cone!*"]
    return blockGenerator_noblock(joke[num]);
}

// letters
function letterFnc() {
    var welText = "*Write a pawsitive letter to your future self* \n\nYour consciousness and thoughts are stored in them and when you read it, it’s like you are being contacted by the old you. ✍💌"
    var links = ["https://personalexcellence.co/blog/letter-to-future-self | Writing a Letter To Your Future Self", "https://www.youtube.com/watch?v=ParnV-N7OAw | How to Write a Letter to Your Future Self", "https://www.youtube.com/watch?v=1ns_QmvDbaE | Why and How to Write a Love Letter to Yourself"]
    var thumb = ["https://personalexcellence.co/files/letter2.jpg", "https://img.youtube.com/vi/ParnV-N7OAw/maxresdefault.jpg", "https://img.youtube.com/vi/1ns_QmvDbaE/maxresdefault.jpg"]
    var context = ["_Imagine writing to your future self 5 years from now — what would you say? What kind of person would you be? What goals..._", "_This video is about writing a letter to your future self. This exercise will help you to set goals..._", "_I talk about one of the most imp-purr-tant self-love strategies - to write a love letter to yourself. It is the most concrete..._"];
    var alt_text = ["Writing Letter", "Youtube Video to Write Letter", "Youtube Video to Write Letter"]
    console.log("letter");
    return blockGenerator(welText, links, thumb, context, alt_text)
}

// recipes
function recipeFnc() {
    var welText = "*Learn a new recipe* \n\nFood has an amazing power to connect people (and kittens). And there’s just nothing better than being cooked something amazing. Remember the last time someone cook something delicious for you. Did you feel special? (give me some fish paw-lease) 🍜🌭"
    var links = ["https://food52.com/blog/25135-easy-coronavirus-quarantine-recipes?__cf_chl_jschl_tk__=a8ccb3c9ce63fe45dbb09881f74c0e3c95b30d1b-1586671899-0-ARL4xw9sOZLqQKCY7xasSmrJ-akCMdKnoEKIr7dLwgT1Es6vjolZ4WRmoOJSQMI3WGMpls0TEHW2IfR2jL0YuANLszZStoJiXPhpS9FnZh0I0hlYX2OG4SX7OkLSPVRVP59N_AGrio8puNtMKhTv-u7I7VLmMZjM-KtMf2eXINjtlXE2DVK4GfBu7YSTVIIvpJlbDKKxbUBa6D_QKD0rAQbGH2lpi7ua-uT_QHGX-NrZ9vjxp6aho1HOb9hcGmofMGLBLqH0Px7ZOaD7Gw0ru6EjJjSw8_vJ1aqw47FDggjNh8h9iEM8lFLsXpH8fmRCuMDZ5DzVKxqZxKgWqUZVGH4 | 13 Easy Recipes We’re Cooking in Quarantine", "https://www.goodtoknow.co.uk/food/recipe-collections/50-recipes-everyone-should-know-how-to-cook | 50 recipes everyone should know how to cook", "https://www.allrecipes.com/recipes/233/world-cuisine/asian/indian | Indian Recipes Collection"]
    var thumb = ["https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&w=1000&q=80", "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2018/09/Basic-recipes-to-learn-how-to-cook-920x605.jpg", "https://images.media-allrecipes.com/images/55319.jpg?width=420&height=237"]
    var context = ["_As we all navigate the global COVID-19 crisis, it's imp-purr-tant that we're still nourishing ourselves—not just our stomachs, but also our minds nad hearts_", "_If you want improve your cooking but don’t know where to start, we’ve got the ultimate recipes everyone should know how to cook to get you going._", "_A collection of top-notch recipes that you can make at home_"];
    var alt_text = ["Recipes", "Recipes", "Recipes"]
    console.log("recipe");
    return blockGenerator(welText, links, thumb, context, alt_text)
}

// photos
function photosFnc() {
    var welText = "*Revist an old paw-oto album* \n\nWhen you see a paw-oto of yourself smiling, you often instinctively smile back, which elicits a feeling of happiness. 🤳📸"
    var links = ["https://www.findandconnectwrblog.info/2015/06/the-importance-of-photos | The importance of photos", "http://blogs.biomedcentral.com/bmcblog/2014/08/11/the-power-of-pictures-how-we-can-use-images-to-promote-and-communicate-science | The power of pictures", "https://www.thecut.com/2017/08/how-taking-photos-affects-your-memory.html | How Taking Photos Affects Your Memory of the Moment Later On"]
    var thumb = ["https://images.unsplash.com/photo-1534531688091-a458257992cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "https://images.unsplash.com/photo-1511992243105-2992b3fd0410?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "https://images.unsplash.com/photo-1455311683036-3e949a996256?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"]
    var context = ["_Photographs play an imp-purr-tant role in everyone’s life – they connect us to our past, they remind us of people, places, feelings, and stories._", "_There is real value in using images to promote scientific content. Images help us learn, images grab attention, images explain tough concepts, and inspire._", "_I found myself reliving the full panoply of emotions from memories long forgotten. Such is the power of photographs_"];
    var alt_text = ["Photos", "Photos", "Photos"]
    console.log("photo");
    return blockGenerator(welText, links, thumb, context, alt_text)
}

// books
function booksFnc() {
    var welText = "*Read a book that you put off.* \n\nReading a book can make one fur-get about their surroundings. It teaches one to focus and concentrate on one thing at a time. 📕📚"
    var links = ["http://www.gutenberg.org | Free eBooks - Project Gutenberg", "https://openlibrary.org/subjects | Open Library Collection", "http://en.childrenslibrary.org |Children's Library"]
    var thumb = ["https://www.camillasenglishpage.org/wp-content/uploads/link-images/project-gutenberg-logo.jpg", "https://repository-images.githubusercontent.com/69609/6d346300-3bc4-11ea-81da-6ff573cc4987", "https://i.pinimg.com/originals/6e/82/78/6e8278b9323166d52cf5a5d7da69eb54.jpg"]
    var context = ["_Project Gutenberg is a library of over 60,000 free eBooks. Choose among free epub and Kindle eBooks..._", "_Open Library is an online project intended to create 'one web page for every book ever published_", "_If you’re looking for free children’s books online, the ICDL is a nonprofit organization with a mission..._"];
    var alt_text = ["Book", "Book", "Book"]
    console.log("books")
    return blockGenerator(welText, links, thumb, context, alt_text)
}

// cleaning
function cleanFnc() {
    var welText = "*Clean your room, sort and rearrange imp-purr-tant stuff* \n\nThe act of cleaning can bring the added benefit of getting you a little extra exercise, which can be great for relieving stress. 🧹🧽"
    var links = ["https://bestlifeonline.com/cleaning-hacks/ | 27 Amazing Cleaning Tips You'll Wish You Knew Sooner", "https://www.bhg.com/homekeeping/house-cleaning/tips/quick-clean-bedroom | Deep cleaning in less than an hour", "https://www.womansday.com/home/organizing-cleaning/tips/a4055/a-quicker-way-to-clean-house-83178 | Clean Efficiently"]
    var thumb = ["https://images.unsplash.com/photo-1531835551805-16d864c8d311?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"]
    var context = ["_There's no need to hire an expensive professional to get those stains out of your upholstery. Instead, rub a little bit of shaving cream..._", "_Create the peaceful bedroom you deserve with our step-by-step cleaning guide. In just an hour, you can have a neat and tidy space primed for sweet dreams._", "_For each task, start at the highest point in the room (if dusting, this might mean high shelves), and move from left to right across the room._"];
    var alt_text = ["Clean", "Clean", "Clean"]
    console.log("clean")
    return blockGenerator(welText, links, thumb, context, alt_text)
}

// calling
function callFnc() {
    var welText = "*Give a call or chat with your loved ones* \n\nPurr-haps one of the most crucial things we can do to help our loved ones through this trying time is to check in with them every day. 📞"
    var links = ["https://www.mindfood.com/article/top-tips-for-caring-for-our-elderly-loved-ones/ | How to care for your elderly loved ones during lockdown", "https://www.expatriatehealthcare.com/5-ways-to-keep-in-touch-with-your-loved-ones-during-the-coronavirus-lockdown/ | Keep in Touch with Your Loved Ones", "https://www.shethepeople.tv/blog/living-away-boomer-parents-lockdown| Living Away From Loved Ones Under Lockdown"]
    var thumb = ["https://images.unsplash.com/photo-1562184647-dfdfb9c0bf3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "https://www.expatriatehealthcare.com/wp-content/uploads/2020/03/video-call.jpg;", "https://www.shethepeople.tv/wp-content/uploads/2020/03/parenting-times-of-coronavirus.jpg"]
    var context = ["_Metlifecare’s clinical director, Tanya Bish, shares her tips for caring for elderly loved ones in the coming weeks._", "_But, don’t panic because although you might not be able to go down to the pub together, thanks to technology there are plenty of ways you can stay in touch with your loved ones._", "_What will I do if ever a situation arises where they need one of their children to be by their side? This thought is sitting like a knot in my stomach._"];
    var alt_text = ["Call", "Call", "Call"]
    console.log("call")
    return blockGenerator(welText, links, thumb, context, alt_text)
}

// language
function languageFnc() {
    var welText = "*Learn new words or a language* \n\nLanguage learning helps improve people's thinking skills and memory abilities. Learning a second language can develop new areas of your mind and strengthen your brain's natural ability to focus. 🧠"
    var links = ["https://www.duolingo.com/ | Duolingo", "https://www.fluentu.com/blog/fastest-way-to-learn-a-new-language/ | FluentU", "https://www.memrise.com | Learn Languages with Memrise - Spanish, French"]
    var thumb = ["https://i.pcmag.com/imagery/reviews/07w3TE0qtevWbXyZZOsB6gK-8.fit_scale.size_1028x578.v_1569474816.png", "https://www.smartlanguagelearner.com/wp-content/uploads/2015/05/FluentU.png", "https://static.memrise.com/dist/img/logo/facebook-memrise-new-54190bd64a13.png"]
    var context = ["_Learning with Duolingo is fun and addictive. Earn points for correct answers, race against the clock, and level up._", "_Maybe you need to learn a language so you can speak it on an upcoming trip , or read your favorite novel in that language_", "_Memrise is a language platform that uses spaced repetition of flashcards to increase the rate of learning. It offers user-generated..._"];
    var alt_text = ["Language", "Language", "Language"]
    console.log("language");
    return blockGenerator(welText, links, thumb, context, alt_text)
}

// meditation
function meditateFnc() {
    var welText = "*Do yoga, exercise or meditation* \n\nPeople staying indoors could benefit from yoga which helps boost immunity. 🤸‍♀️🏋️‍♂️"
    var links = ["https://www.headspace.com | Headspace", "https://www.express.co.uk/life-style/diets/1258922/lockdown-exercise-coronavirus-the-eight-exercises-you-can-do-while-stuck-at-home | Lockdown exercise: The eight exercises you can do while stuck at home due to COVID-19", "https://yourstory.com/weekender/stay-safe-stay-fit-on-world-health-day-fitness-coronavirus | Stay safe, stay fit"]
    var thumb = ["https://cdn.vox-cdn.com/thumbor/BoGtOFcj3i386VmTFyxSI1Vn-kw=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19811167/headspace.png", "https://cdn.images.express.co.uk/img/dynamic/126/590x/secondary/coronavirus-self-isolation-fitness-yoga-keep-healthy-2376838.jpg?r=1586256853319", "https://images.yourstory.com/cs/7/a0bad530ce5d11e9a3fb4360e4b9139b/3282374908367596ac4edc-1586182581978.jpg?fm=png&auto=format&blur=500"]
    var context = ["_Learn the life-changing skills of meditation in just a few minutes a day with Headspace. Find hundreds of sessions on physical health, personal growth..._", "_Taking the one form of exercise a day is imp-purr-tant for your mental health, but if you are unable to then there are things you can do at home that work just as well._", "_On World Health Day, here are a few tips on how to stay fit during these unprecedented times and some advice from celebrities too_"];
    var alt_text = ["Yoga", "Yoga", "Yoga"]
    console.log("meditate");
    return blockGenerator(welText, links, thumb, context, alt_text)
}

// movies
function movieFnc() {
    var welText = "*Watch some International Films* \n\nOne of the great rewards of watching fur-eign films is the infinite ways it can open up the world for you as a viewer. 🎥🎬"
    var links = ["https://www.youtube.com/watch?v=58Onuy5USTc | A Separation (2011)", "https://www.youtube.com/watch?v=34WIbmXkewU | The Intouchables (2011)", "https://www.youtube.com/watch?v=whldChqCsYk | The Handmaiden (2016)"]
    var thumb = ["https://img.youtube.com/vi/58Onuy5USTc/maxresdefault.jpg", "https://img.youtube.com/vi/34WIbmXkewU/maxresdefault.jpg", "https://img.youtube.com/vi/whldChqCsYk/maxresdefault.jpg"]
    var context = ["_Nader and Simin, a married couple, live in Iran with their daughter Termeh. Simin wants to move out of the country, but Nader is reluctant to..._", "_An unusual friendship develops when a street smart immigrant is hired to take care of a disabled French nobleman._", "_A gripping and sensual tale of two women - a young Japanese Lady living on a secluded estate, and a Korean woman..._"];
    var alt_text = ["Movie", "Movie", "Movie"]
    console.log("movie");
    return blockGenerator(welText, links, thumb, context, alt_text)
}

// resting
function restFnc() {
    var welText = "*Just relax, rest and sleep* \n\nToday is your day to love yourself, rest and sleep endlessly (just like me) 💤😴🛌"
    console.log("rest");
    return blockGenerator_noblock(welText)
}

// thankyou
function thankyouFnc() {
    var welText = "*Let's thank everyone!!. They made us what we are today* \n\nTo our parents, friends, children, paw-tners, doctors, nurses, garbage-man, delivery guy, neighbour, and everyone else too! (don't forget me) 🙏🤗"
    var links = ["https://ideas.hallmark.com/articles/thank-you-ideas/how-to-write-a-thank-you-note/ | How to write a thank-you note", "https://www.thespruce.com/thoughtful-wording-thank-you-note-1216778 | Thoughtful Wording for a Thank You Note", "https://examples.yourdictionary.com/examples-of-words-for-thank-you-notes.html | Examples of Words for Thank You Notes"]
    var thumb = ["https://images.unsplash.com/photo-1554830072-52d78d0d4c18?ixlib=rb-1.2.1&w=1000&q=80", "https://images.unsplash.com/photo-1521685468847-de0a1a3c41a8?ixlib=rb-1.2.1&w=1000&q=80", "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2019/02/thank-you.jpg"]
    var context = ["_A handwritten thank-you note says more: It tells our friends and family that we went out of our way to sit down and write just to them, because they’re worth it_", "_The main thing you need to do is show how much you appreciate the gift or hospitality. Even if you didn't care for the gift or if you didn't have a wonderful time, you should still send a thank you note._", "_Everyone loves to feel appreciated, which is why thank you notes are still an imp-purr-tant way to express your gratitude._"];
    var alt_text = ["Thankyou", "Thankyou", "Thankyou"]
    console.log("thankyou");
    return blockGenerator(welText, links, thumb, context, alt_text)
}

// re-arrange
function re_arrangeFnc() {

    var welText = "*Re-arrange your fur-niture. You might feel like you shifted houses* \n\nYou can easily revitalize stale family rooms and bedrooms anytime by rearranging furniture to create a fresh, new look. ⚒🧱"
    var links = ["https://www.thespruce.com/rules-for-arranging-furniture-2213418 | 10 Simple Decorating Rules for Arranging Furniture", "https://www.bhg.com/decorating/lessons/basics/how-to-arrange-furniture/ | How to Arrange Furniture: No-Fail Tricks", "https://digthisdesign.net/decor-furnishings/rearranging-your-furniture/ | Benefits of rearranging"]
    var thumb = ["https://www.ikea.com/images/6a/f1/6af17f56c823825b4878c6e58982514b.jpg?f=s", "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg"]
    var context = ["_Over the years, interior designers have recognized a number of simple, easy-to-apply principles that work_", "_Arranging furniture is one of the most daunting—yet most important—design decisions._", "_Let’s look at 5 benefits of rearranging your furniture that you might not have thought about before._"];
    var alt_text = ["Re_Arrange", "Re_Arrange", "Re_Arrange"]
    console.log("rearragne")
    return blockGenerator(welText, links, thumb, context, alt_text)
}

// music
function musicFnc() {

    var welText = "*Chill out with some dope music!* \n\nHere's my collection of playlist, relaxing and fur-esh music 🎷🎵"
    var links = ["https://www.youtube.com/watch?v=Ivrrt6oYxxc&list=PLKYTmz7SemaqVDF6XJ15bv_8-j7ckkNgb | Lo-Fi Playlist", "https://www.youtube.com/playlist?list=PLNpZHzamg9Maq-NBeSMcNdSBHUMN6N4Je | My Favourite Indian Artists", "https://www.youtube.com/playlist?list=PLNpZHzamg9MYjGzNjoL3cY_X_nWPmRTbz | My Playlist"]
    var thumb = ["https://img.youtube.com/vi/6UosfX5u14g/maxresdefault.jpg", "https://img.youtube.com/vi/9et5qzuzbQM/maxresdefault.jpg", "https://img.youtube.com/vi/xVfddViugYQ/maxresdefault.jpg"]
    var context = ["_Lo-Fi music is my go-to-playlist whenever I am working, it's peaceful and relaxing_", "_These are some of my favourite Indian artists, feel free to listen and add more to the list_", "_These are some of my favourite songs, please keep in mind that they are explicit so don't play them too loud.. lol_"];
    var alt_text = ["Music", "Indie", "HipHop"]
    console.log("music")
    return blockGenerator(welText, links, thumb, context, alt_text)
}

// skills
function skillsFnc() {
    var welText = "*Learn a new Skill!* \n\nNow is a great time to get focused and learn a skill you've been wanting to learn from a long time 🎨🏓"
    var links = ["https://www.pluralsight.com/ | Pluralsight", "https://www.coursera.org/ | Coursera", "https://www.edx.org/ | edX org"]
    var thumb = ["https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_170142/parsys/columns_copy_copy/column-parsys-1/flex_block_copy/parsys/flex_open_block/parsys/image_copy/image-res.img.612b7eff-44c6-4f86-90dc-49fd8c8d77b6.jpg", "https://www.wired.com/coupons/static/shop/31628/logo/Coursera_coupons.png", "https://pbs.twimg.com/profile_images/1163392268142829568/3SWbDHxa_400x400.png"]
    var context = ["_Pluralsight, Inc. is an American publicly held online education company that offers a variety of video training courses for software developers..._", "_Coursera is an American online learning platform founded in 2012 by Stanford professors Andrew Ng and Daphne Koller_", "_Access 2000 free online courses from 140 leading institutions worldwide. Gain new skills and earn a certificate of completion._"];
    var alt_text = ["Pluralsight", "Coursera", "edX"]
    console.log("skills");
    return blockGenerator(welText, links, thumb, context, alt_text)
}

// family
function familyFnc() {
    var welText = "*It's family time!* \n\nLet's spend time with our loved ones, calling them, spending time with them, talking to them, playing with the kids! It's a wonderful feeling! 👪"
    console.log("family");
    return blockGenerator_noblock(welText)
}

// social challenge
function socialchallengeFnc() {
    var welText = "*Take up a social challenge!* \n\nOnline challenges are trending on twitter, instagram and other places. Take part in challenges that encourage social distancing, welfare and healthy habits 🤳✌"
    console.log("social");
    return blockGenerator_noblock(welText)
}

// social service
function socialserviceFnc() {
    var welText = "*Let's today contribute towards helping others* \n\nThere are many ways you can contribute towards social service, like donating, making home-made masks, food service, motivating other fighting against the virus 😷"
    var links = ["https://covid19responsefund.org/ | Covid-19 Response Fund", "https://www.youtube.com/watch?v=DtiXOSJKbjA | Making Homemade Masks", "https://www.youtube.com/watch?v=dSQztKXR6k0 | Why Fighting against the virus depends on you"]
    var thumb = ["https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/WHO_reuters-770x433.jpeg?6MIsaTQeXAFacUrFnI9xRS_RGRChUN0v", "https://img.youtube.com/vi/DtiXOSJKbjA/maxresdefault.jpg", "https://img.youtube.com/vi/dSQztKXR6k0/maxresdefault.jpg"]
    var context = ["_Donations to track, understand the spread, patient's care and frontline workers to get essential supplies & information_", "_Here’s how you can make masks at home and be wearing a mask in public spaces to prevent the spread of the coronavirus._", "_If we can slow the virus down, it could save hundreds of thousands of lives. Read more about the Covid-19 coronavirus pandemic at <https://vox.com/coronavirus>_"];
    var alt_text = ["Covid-19", "Masks", "Vox"]
    console.log("service");
    return blockGenerator(welText, links, thumb, context, alt_text)
}

// anime
function animeFnc() {
    var welText = "*You should check some of these anime movies!* \n\nHere is a small list of some of my favourite ones.  🎌🎎"
    var links = ["https://www.youtube.com/watch?v=gaRqwKfMlKU | In This Corner of the World", "https://www.youtube.com/watch?v=xU47nhruN-Q | Kimi no na wa", "https://www.youtube.com/watch?v=nfK6UgLra7g | A Silent Voice", "https://www.youtube.com/watch?v=xnLaOqqtCKs | The Garden of Words", "https://www.youtube.com/watch?v=wdM7athAem0 | 5 Centimeters per Second", "https://www.youtube.com/watch?v=ByXuk9QqQkk | Spirited Away"]
    var thumb = ["https://img.youtube.com/vi/gaRqwKfMlKU/maxresdefault.jpg", "https://img.youtube.com/vi/xU47nhruN-Q/maxresdefault.jpg", "https://img.youtube.com/vi/nfK6UgLra7g/maxresdefault.jpg", "https://img.youtube.com/vi/FMabhvDoolc/maxresdefault.jpg", "https://img.youtube.com/vi/wdM7athAem0/maxresdefault.jpg", "https://img.youtube.com/vi/ByXuk9QqQkk/maxresdefault.jpg"]
    var context = ["_In This Corner of the World tells the story of the adolescent Suzu, who in 1944 moves to the small town of Kure in Hiroshima to live with her husband’s family. Suzu’s life is thrown..._", "_Mitsuha and Taki are total strangers living completely different lives. But when Mitsuha makes a wish to leave her mountain town for the bustling city of Tokyo..._", "_Shoya Ishida starts bullying the new girl in class, Shoko Nishimiya, because she is deaf. But as the teasing continues, the rest of the class starts to turn on..._", "_Overwhelmed with strange path of life, an aspiring designer finds himself drawing shoes in the peacefulness of a beautiful garden. Pushing aside his responsibilities, he soon meets..._", "_5 Centimeters per Second is a 2007 Japanese animated coming-of-age romantic drama film produced, written and directed by Makoto Shinkai._", "_In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro and her parents stumble upon a seemingly abandoned amusement park._"];
    var alt_text = ["corner", "your name", "a silent voice", "garden of words", "5 centimenter", "spirited away"]
    console.log("anime");
    return blockGenerator_moreblock(welText, links, thumb, context, alt_text)
}

function searchMember(userNumber) {
    console.log(userNumber);
    var allUsers = ['UD8UH97FE', 'UDBAA8X9U', 'UA3DDHCLD', 'ULYKRG5SL', 'UBD13C8S0', 'UH8DGFEH2', 'U03KX1HRL', 'U03K4SV53', 'U0B038UMV', 'U4Z8WFNNM', 'U4Q9T7UMU', 'U7C962QCT', 'U8FG0MWAD', 'UKFPU3R8R', 'U0116AERAFJ', 'URB39B4K1', 'US6V314BS', 'ULQH9K64T', 'UA2NYRY49', 'UBCGR6EKS', 'UC2EYD316', 'UE6315MME', 'UEBGP6DS8', 'UEMS5JCK1', 'UF5MAS895', 'UFJG2FUHH', 'UG2HVLKK2', 'UGYP58B6H', 'UGU8YMWAF', 'UGN28143C', 'UHB8DGBNW', 'UHXE3TWLT', 'U0EGR6Z6W', 'UK8UFJG31', 'UKP3363SS', 'UK9F62YHZ', 'ULAJCN0KG', 'ULP99K423', 'ULF2Y1F4H', 'ULN9MA3DX', 'UM0QA9NR4', 'UMJJ6APML', 'UBA4DB7CZ', 'UNZ7KHRJA', 'UQG4UANS0', 'UQG44L72M', 'URBDJA430', 'UQVJ1QNLR', 'UM1UZEE85', 'UT4FY15MY', 'UT5RBQC83', 'UUFE0R2SH', 'U010WAL1J81', 'UU2LKBSH0'];
    return allUsers[userNumber];
}

function conversationStarter(number) {
    var questions = ["What can you do that no one else can?", "What makes you the happiest?", "What three things are you most grateful for?", "Who are you most thankful for and why?", "What is your favorite place in the entire world?", "What is your favorite weekend activity?", "If you could teleport, where would you go? and why?", "Do you listen to any podcasts? Which ones?", "Are there any common misconceptions about your job?", "What's keeping you busy lately?", "Are there any Netflix/Hulu/television series you'd recommend?", "What's the most interesting thing you've read lately?", "Do you have a secret talent?", "What is one of the things you have on your “Bucket” list?", "If you could win any Award, what would it be, and why?", "What’s the craziest thing you hope to do one day?", "What motivated you to choose your profession?", "What is the most valuable life lesson you’ve ever learned?", "What is your idea of the perfect day?", "What’s your favorite TV show?"]
    return questions[number]
}

// BLOCK TYPES

// when a single reply has to be given without blocks
function blockGenerator_noblock(welText) {
    return [{
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": welText
        }
    }, {
        "type": "divider"
    }]
}

// when a single reply with more than 3 blocks
function blockGenerator_moreblock(welText, links, thumb, context, alt_text) {
    return [{
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": welText
        }
    }, {
        "type": "divider"
    }, {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": "*<" + links[0] + ">*\n" + context[0]
        },
        "accessory": {
            "type": "image",
            "image_url": thumb[0],
            "alt_text": alt_text[0]
        }
    }, {
        "type": "divider"
    }, {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": "*<" + links[1] + ">*\n" + context[1]
        },
        "accessory": {
            "type": "image",
            "image_url": thumb[1],
            "alt_text": alt_text[1]
        }
    }, {
        "type": "divider"
    }, {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": "*<" + links[2] + ">*\n" + context[2]
        },
        "accessory": {
            "type": "image",
            "image_url": thumb[2],
            "alt_text": alt_text[2]
        }
    }, {
        "type": "divider"
    }, {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": "*<" + links[3] + ">*\n" + context[3]
        },
        "accessory": {
            "type": "image",
            "image_url": thumb[3],
            "alt_text": alt_text[3]
        }
    }, {
        "type": "divider"
    }, {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": "*<" + links[4] + ">*\n" + context[4]
        },
        "accessory": {
            "type": "image",
            "image_url": thumb[4],
            "alt_text": alt_text[4]
        }
    }, {
        "type": "divider"
    }, {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": "*<" + links[5] + ">*\n" + context[5]
        },
        "accessory": {
            "type": "image",
            "image_url": thumb[5],
            "alt_text": alt_text[5]
        }
    }, {
        "type": "divider"
    }]
}


// when a single reply with 3 blocks
function blockGenerator(welText, links, thumb, context, alt_text) {
    return [{
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": welText
        }
    }, {
        "type": "divider"
    }, {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": "*<" + links[0] + ">*\n" + context[0]
        },
        "accessory": {
            "type": "image",
            "image_url": thumb[0],
            "alt_text": alt_text[0]
        }
    }, {
        "type": "divider"
    }, {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": "*<" + links[1] + ">*\n" + context[1]
        },
        "accessory": {
            "type": "image",
            "image_url": thumb[1],
            "alt_text": alt_text[1]
        }
    }, {
        "type": "divider"
    }, {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": "*<" + links[2] + ">*\n" + context[2]
        },
        "accessory": {
            "type": "image",
            "image_url": thumb[2],
            "alt_text": alt_text[2]
        }
    }, {
        "type": "divider"
    }]
}

// RANDOM MACHINE
function rndGenerator(max, min) {
    var value = Math.floor(Math.random() * (Math.random() * (max - min + 1) + min))
    return value
}


// EVENTS

// modal view for sending ideas
app.view('view_suggestion', async({ ack, body, view, context }) => {
    await ack();
    textValue = view.state.values.input_suggestion.submit_suggestion.value;
    try {
        identify = await app.client.users.info({
            // The token you used to initialize your app is stored in the `context` object
            token: context.botToken,
            // Call users.info for the user that joined the workspace
            user: body.user.id
        });

        googleAPI('people_suggestion_sent', identify)
        await app.client.chat.postMessage({
            token: context.botToken,
            channel: '#people-team',
            text: `*<@${body.user.id}> has the following suggestion* \n` + textValue
        });
    } catch (error) {
        console.log(error)
    }
});

app.view('view_kenshi', async({ ack, body, view, context }) => {
    await ack();
    textValue = view.state.values.input_kenshi.submit_kenshi.value;
    try {

        identify = await app.client.users.info({
            // The token you used to initialize your app is stored in the `context` object
            token: context.botToken,
            // Call users.info for the user that joined the workspace
            user: body.user.id
        });
        googleAPI('new_feature_sent', identify)
        await app.client.chat.postMessage({
            token: context.botToken,
            channel: '#richard-box_2',
            text: `*<@${body.user.id}> has the following suggestion* \n` + textValue
        });
    } catch (error) {
        console.log(error)
    }
});

// button listener for idea task
app.action('new_suggestion_activity', async({ ack, body, context }) => {
    // Acknowledge action request
    await ack();
    try {

        const result = await app.client.views.open({
            token: context.botToken,
            // Pass a valid trigger_id within 3 seconds of receiving it
            trigger_id: body.trigger_id,
            // View payload
            view: {
                type: 'modal',
                // View identifier
                callback_id: 'view_suggestion',
                title: {
                    type: 'plain_text',
                    text: 'Suggestions & Ideas 🎊'
                },
                blocks: [{
                    type: 'input',
                    block_id: 'input_suggestion',
                    label: {
                        type: 'plain_text',
                        text: `How can we make the workspace more engaging?`
                    },
                    element: {
                        type: 'plain_text_input',
                        action_id: 'submit_suggestion',
                        multiline: true
                    }
                }],
                submit: {
                    type: 'plain_text',
                    text: 'Submit'
                }
            }
        });

        identify = await app.client.users.info({
            // The token you used to initialize your app is stored in the `context` object
            token: context.botToken,
            // Call users.info for the user that joined the workspace
            user: body.user.id
        });
        googleAPI('people_suggestion_open', identify)
        console.log(result);
    } catch (error) {
        console.error(error);
    }
});

// button listener for nudge people task
app.action('nudge_people', async({ ack, body, context }) => {


    // Acknowledge action request
    await ack();

    const member1 = body.user.id;
    memberNumber = rndGenerator(0, 8)
    const member2 = searchMember(memberNumber)

    while (member1 == member2) {
        memberNumber = rndGenerator(0, 8)
        member2 = searchMember(memberNumber)
    }

    sorterArray = [member1, member2]
    sorterArray.sort();
    try {

        identify = await app.client.users.info({
            // The token you used to initialize your app is stored in the `context` object
            token: context.botToken,
            // Call users.info for the user that joined the workspace
            user: body.user.id
        });

        googleAPI('nudge_request', identify)
        stringify = sorterArray[0] + "," + sorterArray[1]
        await app.client.chat.postMessage({
            token: context.botToken,
            channel: member1,
            blocks: [{
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `I have randomly choosen <@${member2}> 😺. Would you like to initiate this conversation? \n Meow 🐈`
                    }
                },
                {
                    "type": "actions",
                    "elements": [{
                            "type": "button",
                            "action_id": "accept_chat_action",
                            "text": {
                                "type": "plain_text",
                                "text": "✅  Accept",
                                "emoji": true
                            },
                            "value": stringify
                        },
                        {
                            "type": "button",
                            "action_id": "retry_chat_action",
                            "text": {
                                "type": "plain_text",
                                "text": "🔄  Retry",
                                "emoji": true
                            },
                            "value": "retry_chat"
                        },
                    ]
                }
            ]
        })
    } catch (error) {
        console.log(error)
    }

});

app.action('accept_chat_action', (async({ ack, body, context }) => {
    await ack();
    users = body.actions[0].value.split(',')
    user0 = users[0];
    user1 = users[1];
    try {

        identify = await app.client.users.info({
            // The token you used to initialize your app is stored in the `context` object
            token: context.botToken,
            // Call users.info for the user that joined the workspace
            user: user0
        });
        identify2 = await app.client.users.info({
            // The token you used to initialize your app is stored in the `context` object
            token: context.botToken,
            // Call users.info for the user that joined the workspace
            user: user1
        });


        googleAPI_nudge('nudge_participated', identify, identify2)
        const result = await app.client.conversations.open({
            token: context.botToken,
            return_im: true,
            users: body.actions[0].value
        });

        await app.client.chat.postMessage({
            token: context.botToken,
            channel: result.channel.id,
            "blocks": [{
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `Meow! <@${user0}> and <@${user1}> 😸 \n\n Working remotely can make it harder to connect well and know your teammates, so I'm here to help out \n\n You can connect via a phone call 📞  _(even video calls are awesome 😻 )_  or have a conversation right here on Slack!`
                    }
                },
                {
                    "type": "actions",
                    "elements": [{
                        "type": "button",
                        "action_id": "suggest_first_conversation",
                        "text": {
                            "type": "plain_text",
                            "text": "💡 Suggest topic?",
                            "emoji": true
                        },
                        "value": "conversation_starter"
                    }]
                }
            ]
        })
    } catch (error) {
        console.log(error)
    }

}));



app.action('retry_chat_action', (async({ ack, body, context }) => {
    await ack();
    const member1 = body.user.id;
    memberNumber = rndGenerator(0, 8)
    const member2 = searchMember(memberNumber)

    while (member1 == member2) {
        memberNumber = rndGenerator(0, 8)
        member2 = searchMember(memberNumber)
    }
    sorterArray = [member1, member2]
    sorterArray.sort();
    console.log(sorterArray)
    try {

        identify = await app.client.users.info({
            // The token you used to initialize your app is stored in the `context` object
            token: context.botToken,
            // Call users.info for the user that joined the workspace
            user: body.user.id
        });

        googleAPI('nudge_request', identify)
        stringify = sorterArray[0] + "," + sorterArray[1]
        await app.client.chat.postMessage({
            token: context.botToken,
            channel: member1,
            blocks: [{
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `I have randomly choosen <@${member2}> 😺. Would you like to initiate this conversation? \n Meow 🐈`,
                    }
                },
                {
                    "type": "actions",
                    "elements": [{
                            "type": "button",
                            "action_id": "accept_chat_action",
                            "text": {
                                "type": "plain_text",
                                "text": "✅  Accept",
                                "emoji": true
                            },
                            "value": stringify
                        },
                        {
                            "type": "button",
                            "action_id": "retry_chat_action",
                            "text": {
                                "type": "plain_text",
                                "text": "🔄  Retry",
                                "emoji": true
                            },
                            "value": "retry_chat"
                        },
                    ]
                }
            ]
        })
    } catch (error) {
        console.log(error)
    }
}));


app.action('suggest_first_conversation', async({ ack, body, context }) => {
    await ack();
    var max = 20,
        min = 0;
    var taskNumber = rndGenerator(max, min);
    console.log(taskNumber)
    var textMessage = conversationStarter(taskNumber)
    try {

        identify = await app.client.users.info({
            // The token you used to initialize your app is stored in the `context` object
            token: context.botToken,
            // Call users.info for the user that joined the workspace
            user: body.user.id
        });

        googleAPI('conversation_request', identify)
        await app.client.chat.postMessage({
            token: context.botToken,
            channel: body.channel.id,
            blocks: [{
                    "type": "divider"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `💬 <@${body.user.id}> requested a conversation starter! Let's talk about \n\n _"` + textMessage + `"_`,
                    }
                },
            ]
        });
    } catch (error) {
        console.log(error)
    }
})

app.action('random_activity_event', async({ ack, body, context }) => {
    // Acknowledge action request
    await ack();
    identify = await app.client.users.info({
        // The token you used to initialize your app is stored in the `context` object
        token: context.botToken,
        // Call users.info for the user that joined the workspace
        user: body.user.id
    });


    googleAPI('random_activity_request', identify)
        // Generate a task by random number
    var max = 18,
        min = 1;
    var taskNumber = rndGenerator(max, min);
    console.log(taskNumber)
        // Call the function associated with that task
    switch (taskNumber) {
        case 1:
            messageByBot = letterFnc();
            break;
        case 2:
            messageByBot = recipeFnc();
            break;
        case 3:
            messageByBot = photosFnc();
            break;
        case 4:
            messageByBot = booksFnc();
            break;
        case 5:
            messageByBot = cleanFnc();
            break;
        case 6:
            messageByBot = callFnc();
            break;
        case 7:
            messageByBot = languageFnc();
            break;
        case 8:
            messageByBot = meditateFnc();
            break;
        case 9:
            messageByBot = movieFnc();
            break;
        case 10:
            messageByBot = restFnc();
            break;
        case 11:
            messageByBot = thankyouFnc();
            break;
        case 12:
            messageByBot = re_arrangeFnc();
            break;
        case 13:
            messageByBot = musicFnc();
            break;
        case 14:
            messageByBot = skillsFnc();
            break;
        case 15:
            messageByBot = familyFnc();
            break;
        case 16:
            messageByBot = socialchallengeFnc();
            break;
        case 17:
            messageByBot = socialserviceFnc();
            break;
        case 18:
            messageByBot = animeFnc();
            break;
        default:
            messageByBot = socialserviceFnc();
            break;

    }

    try {
        await app.client.chat.postMessage({
            token: context.botToken,
            channel: body.user.id,
            blocks: messageByBot
        });
    } catch (error) {
        console.log(error)
    }

});

// button listener for idea task
app.action('kenshi_activity', async({ ack, body, context }) => {
    // Acknowledge action request
    console.log(body)
    await ack();
    try {

        const result = await app.client.views.open({
            token: context.botToken,
            // Pass a valid trigger_id within 3 seconds of receiving it
            trigger_id: body.trigger_id,
            // View payload
            view: {
                type: 'modal',
                // View identifier
                callback_id: 'view_kenshi',
                title: {
                    type: 'plain_text',
                    text: 'Feature Request 👀'
                },
                blocks: [{
                    type: 'input',
                    block_id: 'input_kenshi',
                    label: {
                        type: 'plain_text',
                        text: `What new tricks would you like me to learn 🐱?`
                    },
                    element: {
                        type: 'plain_text_input',
                        action_id: 'submit_kenshi',
                        multiline: true
                    }
                }],
                submit: {
                    type: 'plain_text',
                    text: 'Submit'
                }
            }
        });

        identify = await app.client.users.info({
            // The token you used to initialize your app is stored in the `context` object
            token: context.botToken,
            // Call users.info for the user that joined the workspace
            user: body.user.id
        });

        googleAPI('new_feature_open', identify)

    } catch (error) {
        console.error(error);
    }
});


// personal message
app.message(async({ message, body, context }) => {

    if (body.event.channel.charAt(0) == "D") {
        var txt = message.text;
        var helloTxt = txt.toString().toLocaleLowerCase().match(/\b(hello|hi|hey|hola|namaste|meow)\b/);
        var helpTxt = txt.toString().toLocaleLowerCase().match(/(idea|help|suggest|activit|advice|new|what|random|recommend)/);
        var special = txt.toString().toLocaleLowerCase().match(/(letter|lunch|dinner|breakfast|cuisine|tv|cook|food|recipe|book|netflix|language|meditate|movie|family|social|anime|music|joke)/);

        identify = await app.client.users.info({
            // The token you used to initialize your app is stored in the `context` object
            token: context.botToken,
            // Call users.info for the user that joined the workspace
            user: body.event.user
        });

        if (helloTxt != null) {
            try {

                googleAPI('hello_request', identify)

                await app.client.chat.postMessage({
                    token: context.botToken,
                    channel: message.user,
                    blocks: [{
                            "type": "section",
                            "text": {
                                "type": "mrkdwn",
                                "text": "Meow 🐈"
                            }
                        },
                        {
                            "type": "section",
                            "text": {
                                "type": "mrkdwn",
                                "text": "I’m here to suggest activities or fun ideas you can do in your free time, helping keep you positive and motivated. Just mention me along with a keyword like *help, ideas, suggestions, random* and I’ll post a fun activity just for you!"
                            }
                        }
                    ]
                })
            } catch (error) {
                console.log(error)
            }
        } else if (special != null) {

            googleAPI('specific_activity_request', identify)
            conversation_tracker(message.text)

            var requestCase = special[0];
            switch (requestCase) {
                case 'letter':
                    messageByBot = letterFnc();
                    break;
                case 'food':
                case 'recipe':
                case 'cook':
                case 'cuisine':
                case 'lunch':
                case 'dinner':
                case 'breakfast':
                    messageByBot = recipeFnc();
                    break;
                case 'book':
                case 'books':
                    messageByBot = booksFnc();
                    break;
                case 'language':
                    messageByBot = languageFnc();
                    break;
                case 'movie':
                case 'netflix':
                    messageByBot = movieFnc();
                    break;
                case 'music':
                    messageByBot = musicFnc();
                    break;
                case 'skills':
                    messageByBot = skillsFnc();
                    break;
                case 'social':
                    messageByBot = socialserviceFnc();
                    break;
                case 'anime':
                case 'tv':
                    messageByBot = animeFnc();
                    break;
                case 'joke':
                    var max = 19,
                        min = 0;
                    var jokeNumber = rndGenerator(max, min);
                    messageByBot = jokeFnc(jokeNumber);
                    break;
            }


            try {
                await app.client.chat.postMessage({
                    token: context.botToken,
                    channel: message.user,
                    blocks: messageByBot
                });
            } catch (error) {
                console.log(error)
            }

        } else if (helpTxt != null) {

            googleAPI('random_activity_request', identify)
            conversation_tracker(message.text)

            // Generate a task by random number
            var max = 18,
                min = 1;
            var taskNumber = rndGenerator(max, min);

            // Call the function associated with that task
            switch (taskNumber) {
                case 1:
                    messageByBot = letterFnc();
                    break;
                case 2:
                    messageByBot = recipeFnc();
                    break;
                case 3:
                    messageByBot = photosFnc();
                    break;
                case 4:
                    messageByBot = booksFnc();
                    break;
                case 5:
                    messageByBot = cleanFnc();
                    break;
                case 6:
                    messageByBot = callFnc();
                    break;
                case 7:
                    messageByBot = languageFnc();
                    break;
                case 8:
                    messageByBot = meditateFnc();
                    break;
                case 9:
                    messageByBot = movieFnc();
                    break;
                case 10:
                    messageByBot = restFnc();
                    break;
                case 11:
                    messageByBot = thankyouFnc();
                    break;
                case 12:
                    messageByBot = re_arrangeFnc();
                    break;
                case 13:
                    messageByBot = musicFnc();
                    break;
                case 14:
                    messageByBot = skillsFnc();
                    break;
                case 15:
                    messageByBot = familyFnc();
                    break;
                case 16:
                    messageByBot = socialchallengeFnc();
                    break;
                case 17:
                    messageByBot = socialserviceFnc();
                    break;
                case 18:
                    messageByBot = animeFnc();
                    break;
                default:
                    messageByBot = animeFnc();
                    break;
            }

            try {
                await app.client.chat.postMessage({
                    token: context.botToken,
                    channel: message.user,
                    blocks: messageByBot
                });
            } catch (error) {
                console.log(error)
            }
        } else {
            max = 24
            min = 0
            var randNumber = rndGenerator(max, min);
            var randomText = responseFnc(randNumber)
            try {
                googleAPI('conversation_request', identify)
                conversation_tracker(message.text)

                await app.client.chat.postMessage({
                    token: context.botToken,
                    channel: message.user,
                    text: randomText
                });
            } catch (error) {
                console.log(error)
            }
        }
    } else if (body.event.channel.charAt(0) == "G") {

        const result = await app.client.conversations.members({
            token: context.botToken,
            channel: body.event.channel
        });

        secondmember = result.members.filter(member => member != body.event.user && member != context.botUserId)
        secondmember = secondmember[0].toString();

        identify = await app.client.users.info({
            // The token you used to initialize your app is stored in the `context` object
            token: context.botToken,
            // Call users.info for the user that joined the workspace
            user: body.event.user
        });

        identify2 = await app.client.users.info({
            // The token you used to initialize your app is stored in the `context` object
            token: context.botToken,
            // Call users.info for the user that joined the workspace
            user: secondmember
        });

        googleAPI_nudge('nudged_conversation', identify, identify2)
        conversation_tracker(message.text)
    }

});

// listener if the user has clicked on the home tab
app.event('app_home_opened', async({ payload, context }) => {
    const userId = payload.user;

    try {
        // Call the views.publish method using the built-in WebClient
        const result = await app.client.views.publish({
            // The token you used to initialize your app is stored in the `context` object
            token: context.botToken,
            user_id: userId,
            view: {
                "type": "home",
                "blocks": [{
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": `*Meow, <@${  userId  }> :smile_cat:*`
                        }
                    },
                    {
                        "type": "context",
                        "elements": [{
                            "type": "mrkdwn",
                            "text": "I'm @mio! inFeedo's workspace pet. I assist the People's team to make the workspace engaging for hoomans and help them grow to their full potential. Work and play are necessary to go together for a healthier lifestyle. Just mention me along with keywords like *help*, *ideas*, *suggestions*, *random* and I will post an activity to cheer up your day!"
                        }]
                    },
                    {
                        "type": "divider"
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": " "
                        }
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": "*New Suggestions and Ideas? 😻*"
                        }
                    },
                    {
                        "type": "context",
                        "elements": [{
                            "type": "mrkdwn",
                            "text": "You can give *suggestions, feedback or ideas* and I'll pass them over to the People's team so they can help make the workspace more engaging. I proposed more toy mice 🐁"
                        }]
                    },
                    {
                        "type": "actions",
                        "elements": [{
                            "type": "button",
                            "action_id": "new_suggestion_activity",
                            "text": {
                                "type": "plain_text",
                                "text": "✍  Share Ideas",
                                "emoji": true
                            },
                            "value": "suggestions"
                        }]
                    },
                    {
                        "type": "divider"
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": " "
                        }
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": "*Watercooler Talks! 🐈*"
                        }
                    },
                    {
                        "type": "context",
                        "elements": [{
                            "type": "mrkdwn",
                            "text": "I will randomly nudge people from across the workspace and encourage them to meet (of course remotely :computer:) for *coffee* :coffee:, *lunch* 🌮, or for a *random conversation* 😄"
                        }]
                    },
                    {
                        "type": "actions",
                        "elements": [{
                            "type": "button",
                            "action_id": "nudge_people",
                            "text": {
                                "type": "plain_text",
                                "text": "👉  Nudge Someone",
                                "emoji": true
                            },
                            "value": "people"
                        }]
                    },
                    {
                        "type": "divider"
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": " "
                        }
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": "*Free Time Fun 😺 *"
                        }
                    },
                    {
                        "type": "context",
                        "elements": [{
                            "type": "mrkdwn",
                            "text": "Mention @mio in a channel or DM and I will suggest a random activity that you could do in your free time. You could also use keywords like *anime*, *books*, *joke*, *food* and many more to get specific suggestions. Meow! 😽"
                        }]
                    },
                    {
                        "type": "actions",
                        "elements": [{
                            "type": "button",
                            "action_id": "random_activity_event",
                            "text": {
                                "type": "plain_text",
                                "text": "🎉  Random Activity",
                                "emoji": true
                            },
                            "value": "random"
                        }]
                    },
                    {
                        "type": "divider"
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": " "
                        }
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": "*Feature Suggestion 🙀*"
                        }
                    },
                    {
                        "type": "context",
                        "elements": [{
                            "type": "mrkdwn",
                            "text": "Suggest new features you would like to see built in @mio"
                        }]
                    },
                    {
                        "type": "actions",
                        "elements": [{
                            "type": "button",
                            "action_id": "kenshi_activity",
                            "text": {
                                "type": "plain_text",
                                "text": "🙌  Suggest New Feature",
                                "emoji": true
                            },
                            "value": "random"
                        }]
                    }
                ]
            }
        });

        // console.log(result);
    } catch (error) {
        console.log(error)
    }
});

// respond in channels where the app is mentioned
app.event('app_mention', async({ event, body, context }) => {

    var txt = event.text;
    var helloTxt = txt.toString().toLocaleLowerCase().match(/\b(hello|hi|hey|hola|namaste)\b/);
    var special = txt.toString().toLocaleLowerCase().match(/(letter|lunch|dinner|breakfast|cuisine|cook|food|tv|recipe|book|netflix|language|meditate|movie|family|social|anime|music|joke)/);
    var helpTxt = txt.toString().toLocaleLowerCase().match(/(idea|help|suggest|activit|advice|new|what|random|recommend)/);
    // console.log(helloTxt);
    // console.log(helpTxt);
    // console.log(special);

    identify = await app.client.users.info({
        // The token you used to initialize your app is stored in the `context` object
        token: context.botToken,
        // Call users.info for the user that joined the workspace
        user: body.event.user
    });

    console.log(identify);

    if (helloTxt != null) {

        googleAPI('hello_request', identify)

        try {
            await app.client.chat.postMessage({
                token: context.botToken,
                channel: event.channel,
                blocks: [{
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": helloTxt[0] + " :wave:"
                        }
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": "I’m here to suggest activities or fun ideas you can do in your free time, helping keep you positive and motivated. Just mention me along with a keyword like *help, ideas, suggestions, random* and I’ll post a fun activity just for you!"
                        }
                    }
                ]
            })
        } catch (error) {
            console.log(error)
        }
    } else if (special != null) {

        googleAPI('specific_activity_request', identify)
        conversation_tracker(event.text)

        var requestCase = special[0];
        switch (requestCase) {
            case 'letter':
                messageByBot = letterFnc();
                break;
            case 'food':
            case 'recipe':
            case 'cook':
            case 'cuisine':
            case 'lunch':
            case 'dinner':
            case 'breakfast':
                messageByBot = recipeFnc();
                break;
            case 'book':
            case 'books':
                messageByBot = booksFnc();
                break;
            case 'language':
                messageByBot = languageFnc();
                break;
            case 'movie':
            case 'netflix':
                messageByBot = movieFnc();
                break;
            case 'music':
                messageByBot = musicFnc();
                break;
            case 'skills':
                messageByBot = skillsFnc();
                break;
            case 'social':
                messageByBot = socialserviceFnc();
                break;
            case 'anime':
            case 'tv':
                messageByBot = animeFnc();
                break;
            case 'joke':
                var max = 19,
                    min = 0;
                var jokeNumber = rndGenerator(max, min);
                messageByBot = jokeFnc(jokeNumber);
                break;
        }


        try {
            await app.client.chat.postMessage({
                token: context.botToken,
                channel: event.channel,
                blocks: messageByBot
            });
        } catch (error) {
            console.log(error)
        }

    } else if (helpTxt != null) {

        googleAPI('random_activity_request', identify)
        conversation_tracker(event.text)

        // Generate a task by random number
        var max = 18,
            min = 0;
        var taskNumber = rndGenerator(max, min);

        // Call the function associated with that task
        switch (taskNumber) {
            case 1:
                messageByBot = letterFnc();
                break;
            case 2:
                messageByBot = recipeFnc();
                break;
            case 3:
                messageByBot = photosFnc();
                break;
            case 4:
                messageByBot = booksFnc();
                break;
            case 5:
                messageByBot = cleanFnc();
                break;
            case 6:
                messageByBot = callFnc();
                break;
            case 7:
                messageByBot = languageFnc();
                break;
            case 8:
                messageByBot = meditateFnc();
                break;
            case 9:
                messageByBot = movieFnc();
                break;
            case 10:
                messageByBot = restFnc();
                break;
            case 11:
                messageByBot = thankyouFnc();
                break;
            case 12:
                messageByBot = re_arrangeFnc();
                break;
            case 13:
                messageByBot = musicFnc();
                break;
            case 14:
                messageByBot = skillsFnc();
                break;
            case 15:
                messageByBot = familyFnc();
                break;
            case 16:
                messageByBot = socialchallengeFnc();
                break;
            case 17:
                messageByBot = socialserviceFnc();
                break;
            case 18:
                messageByBot = animeFnc();
                break;
            default:
                messageByBot = familyFnc();
                break;

        }

        try {
            await app.client.chat.postMessage({
                token: context.botToken,
                channel: event.channel,
                blocks: messageByBot
            });
        } catch (error) {
            console.log(error)
        }
    } else {

        googleAPI('conversation_request', identify)
        conversation_tracker(event.text)

        max = 24
        min = 0
        var randNumber = rndGenerator(max, min);
        console.log(randNumber);
        var randomText = responseFnc(randNumber)
        console.log(randomText);
        try {
            await app.client.chat.postMessage({
                token: context.botToken,
                channel: event.channel,
                text: randomText
            });
        } catch (error) {
            console.log(error)
        }
    }

});


// MACHINE STARTER
(async() => {
    // Start your app
    const server = await app.start(port);

    console.log('⚡️ Bolt app is running!');
})();