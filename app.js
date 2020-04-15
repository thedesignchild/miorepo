const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});
const port = process.env.PORT || 3000;


function jokeFnc(num) {
    var joke = ["What types of cats purr the best? \n *Purrr-sians!*", "What's a cat's favorite subject in school? \n *Hisss-tory!*", "How does a cat sing scales? \n *Do-re-mew!*", "What do cats eat for breakfast? \n *Mice Krispies!*", "What do you call a pile of kittens? \n *A meowntain!*", "Why do cats always win video games? \n *Because they have nine lives!*", "How does a cat decide what it wants from the store? \n *It flips through the cat-alog!*", "What should you say to your cat when you leave the house? \n *'Have a mice day!'*", "Why can't cats play poker in the jungle? \n *Too many cheetahs!*", "Why are cats great singers? \n *Because they're very mewsical!*", "What do baby cats always wear? \n *Diapurrs!*", "What do cats love to do in the morning? \n *Read the mewspaper!*", "How do cats stop crimes? \n *They call claw enforcement!*", "What do you call a cat who lives in an igloo? \n *An eskimew!*", "What's a cat's favorite dessert? \n *Chocolate mouse!*", "What's a cat's favorite color? \n *Purr-ple!*", "What is a cat's favorite movie? \n *The Sound of Mewsic!*", "Why do cats always get their way? \n *They are very purr-suasive!*", "What do cats like to eat on a hot day? \n *A mice-cream cone!*"]
    return blockGenerator_noblock(joke[num]);
}

function letterFnc() {
    var welText = "*Write a pawsitive letter to your future self* \nYour consciousness and thoughts are stored in them and when you read it, it’s like you are being contacted by the old you. ✍💌"
    var links = ["https://personalexcellence.co/blog/letter-to-future-self | Writing a Letter To Your Future Self", "https://www.youtube.com/watch?v=ParnV-N7OAw | How to Write a Letter to Your Future Self", "https://www.youtube.com/watch?v=1ns_QmvDbaE | Why and How to Write a Love Letter to Yourself"]
    var thumb = ["https://personalexcellence.co/files/letter2.jpg", "https://img.youtube.com/vi/ParnV-N7OAw/maxresdefault.jpg", "https://img.youtube.com/vi/1ns_QmvDbaE/maxresdefault.jpg"]
    var context = ["Imagine writing to your future self 5 years from now — what would you say? What kind of person would you be? What goals...", "This video is about writing a letter to your future self. This exercise will help you to set goals...", "I talk about one of the most imp-purr-tant self-love strategies - to write a love letter to yourself. It is the most concrete..."];
    var alt_text = ["Writing Letter", "Youtube Video to Write Letter", "Youtube Video to Write Letter"]
    console.log("letter");
    return blockGenerator(welText, links, thumb, context, alt_text)
}

function recipeFnc() {
    var welText = "*Learn a new recipe* \nFood has an amazing power to connect people (and kittens). And there’s just nothing better than being cooked something amazing. Remember the last time someone cook something delicious for you. Did you feel special? (give me some fish paw-lease) 🍜🌭"
    var links = ["https://food52.com/blog/25135-easy-coronavirus-quarantine-recipes?__cf_chl_jschl_tk__=a8ccb3c9ce63fe45dbb09881f74c0e3c95b30d1b-1586671899-0-ARL4xw9sOZLqQKCY7xasSmrJ-akCMdKnoEKIr7dLwgT1Es6vjolZ4WRmoOJSQMI3WGMpls0TEHW2IfR2jL0YuANLszZStoJiXPhpS9FnZh0I0hlYX2OG4SX7OkLSPVRVP59N_AGrio8puNtMKhTv-u7I7VLmMZjM-KtMf2eXINjtlXE2DVK4GfBu7YSTVIIvpJlbDKKxbUBa6D_QKD0rAQbGH2lpi7ua-uT_QHGX-NrZ9vjxp6aho1HOb9hcGmofMGLBLqH0Px7ZOaD7Gw0ru6EjJjSw8_vJ1aqw47FDggjNh8h9iEM8lFLsXpH8fmRCuMDZ5DzVKxqZxKgWqUZVGH4 | 13 Easy Recipes We’re Cooking in Quarantine", "https://www.goodtoknow.co.uk/food/recipe-collections/50-recipes-everyone-should-know-how-to-cook | 50 recipes everyone should know how to cook", "https://www.allrecipes.com/recipes/233/world-cuisine/asian/indian | Indian Recipes Collection"]
    var thumb = ["https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&w=1000&q=80", "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2018/09/Basic-recipes-to-learn-how-to-cook-920x605.jpg", "https://images.media-allrecipes.com/images/55319.jpg?width=420&height=237"]
    var context = ["As we all navigate the global COVID-19 crisis, it's imp-purr-tant that we're still nourishing ourselves—not just our stomachs, but also our minds nad hearts", "If you want improve your cooking but don’t know where to start, we’ve got the ultimate recipes everyone should know how to cook to get you going.", "A collection of top-notch recipes that you can make at home"];
    var alt_text = ["Recipes", "Recipes", "Recipes"]
    console.log("recipe");
    return blockGenerator(welText, links, thumb, context, alt_text)
}

function photosFnc() {
    var welText = "*Revist an old paw-oto album* \nWhen you see a paw-oto of yourself smiling, you often instinctively smile back, which elicits a feeling of happiness. 🤳📸"
    var links = ["https://www.findandconnectwrblog.info/2015/06/the-importance-of-photos | The importance of photos", "http://blogs.biomedcentral.com/bmcblog/2014/08/11/the-power-of-pictures-how-we-can-use-images-to-promote-and-communicate-science | The power of pictures", "https://www.thecut.com/2017/08/how-taking-photos-affects-your-memory.html | How Taking Photos Affects Your Memory of the Moment Later On"]
    var thumb = ["https://images.unsplash.com/photo-1534531688091-a458257992cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "https://images.unsplash.com/photo-1511992243105-2992b3fd0410?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "https://images.unsplash.com/photo-1455311683036-3e949a996256?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"]
    var context = ["Photographs play an imp-purr-tant role in everyone’s life – they connect us to our past, they remind us of people, places, feelings, and stories.", "There is real value in using images to promote scientific content. Images help us learn, images grab attention, images explain tough concepts, and inspire.", "I found myself reliving the full panoply of emotions from memories long forgotten. Such is the power of photographs"];
    var alt_text = ["Photos", "Photos", "Photos"]
    console.log("photo");
    return blockGenerator(welText, links, thumb, context, alt_text)
}

function booksFnc() {
    var welText = "*Read a book that you put off.* \nReading a book can make one fur-get about their surroundings. It teaches one to focus and concentrate on one thing at a time. 📕📚"
    var links = ["http://www.gutenberg.org | Free eBooks - Project Gutenberg", "https://openlibrary.org/subjects | Open Library Collection", "http://en.childrenslibrary.org |Children's Library"]
    var thumb = ["https://www.camillasenglishpage.org/wp-content/uploads/link-images/project-gutenberg-logo.jpg", "https://repository-images.githubusercontent.com/69609/6d346300-3bc4-11ea-81da-6ff573cc4987", "https://i.pinimg.com/originals/6e/82/78/6e8278b9323166d52cf5a5d7da69eb54.jpg"]
    var context = ["Project Gutenberg is a library of over 60,000 free eBooks. Choose among free epub and Kindle eBooks...", "Open Library is an online project intended to create 'one web page for every book ever published", "If you’re looking for free children’s books online, the ICDL is a nonprofit organization with a mission..."];
    var alt_text = ["Book", "Book", "Book"]
    console.log("books")
    return blockGenerator(welText, links, thumb, context, alt_text)
}

function cleanFnc() {
    var welText = "*Clean your room, sort and rearrange imp-purr-tant stuff* \nThe act of cleaning can bring the added benefit of getting you a little extra exercise, which can be great for relieving stress. 🧹🧽"
    var links = ["https://bestlifeonline.com/cleaning-hacks/ | 27 Amazing Cleaning Tips You'll Wish You Knew Sooner", "https://www.bhg.com/homekeeping/house-cleaning/tips/quick-clean-bedroom | Deep cleaning in less than an hour", "https://www.womansday.com/home/organizing-cleaning/tips/a4055/a-quicker-way-to-clean-house-83178 | Clean Efficiently"]
    var thumb = ["https://images.unsplash.com/photo-1531835551805-16d864c8d311?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"]
    var context = ["There's no need to hire an expensive professional to get those stains out of your upholstery. Instead, rub a little bit of shaving cream...", "Create the peaceful bedroom you deserve with our step-by-step cleaning guide. In just an hour, you can have a neat and tidy space primed for sweet dreams.", "For each task, start at the highest point in the room (if dusting, this might mean high shelves), and move from left to right across the room."];
    var alt_text = ["Clean", "Clean", "Clean"]
    console.log("clean")
    return blockGenerator(welText, links, thumb, context, alt_text)
}

function callFnc() {
    var welText = "*Give a call or cat with your loved ones* \nPurr-haps one of the most crucial things we can do to help our loved ones through this trying time is to check in with them every day. 📞"
    var links = ["https://www.mindfood.com/article/top-tips-for-caring-for-our-elderly-loved-ones/ | How to care for your elderly loved ones during lockdown", "https://www.expatriatehealthcare.com/5-ways-to-keep-in-touch-with-your-loved-ones-during-the-coronavirus-lockdown/ | Keep in Touch with Your Loved Ones", "https://www.shethepeople.tv/blog/living-away-boomer-parents-lockdown| Living Away From Loved Ones Under Lockdown"]
    var thumb = ["https://images.unsplash.com/photo-1562184647-dfdfb9c0bf3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "https://www.expatriatehealthcare.com/wp-content/uploads/2020/03/video-call.jpg;", "https://www.shethepeople.tv/wp-content/uploads/2020/03/parenting-times-of-coronavirus.jpg"]
    var context = ["Metlifecare’s clinical director, Tanya Bish, shares her tips for caring for elderly loved ones in the coming weeks.", "But, don’t panic because although you might not be able to go down to the pub together, thanks to technology there are plenty of ways you can stay in touch with your loved ones.", "What will I do if ever a situation arises where they need one of their children to be by their side? This thought is sitting like a knot in my stomach."];
    var alt_text = ["Call", "Call", "Call"]
    console.log("call")
    return blockGenerator(welText, links, thumb, context, alt_text)
}

function languageFnc() {
    var welText = "*Learn new words or a language* \nLanguage learning helps improve people's thinking skills and memory abilities. Learning a second language can develop new areas of your mind and strengthen your brain's natural ability to focus. 🧠"
    var links = ["https://www.duolingo.com/ | Duolingo", "https://www.fluentu.com/blog/fastest-way-to-learn-a-new-language/ | FluentU", "https://www.memrise.com | Learn Languages with Memrise - Spanish, French"]
    var thumb = ["https://i.pcmag.com/imagery/reviews/07w3TE0qtevWbXyZZOsB6gK-8.fit_scale.size_1028x578.v_1569474816.png", "https://www.smartlanguagelearner.com/wp-content/uploads/2015/05/FluentU.png", "https://static.memrise.com/dist/img/logo/facebook-memrise-new-54190bd64a13.png"]
    var context = ["Learning with Duolingo is fun and addictive. Earn points for correct answers, race against the clock, and level up.", "Maybe you need to learn a language so you can speak it on an upcoming trip , or read your favorite novel in that language", "Memrise is a language platform that uses spaced repetition of flashcards to increase the rate of learning. It offers user-generated..."];
    var alt_text = ["Language", "Language", "Language"]
    console.log("language");
    return blockGenerator(welText, links, thumb, context, alt_text)
}

function meditateFnc() {
    var welText = "*Do yoga, exercise or meditation* \nPeople staying indoors could benefit from yoga which helps boost immunity. 🤸‍♀️🏋️‍♂️"
    var links = ["https://www.headspace.com | Headspace", "https://www.express.co.uk/life-style/diets/1258922/lockdown-exercise-coronavirus-the-eight-exercises-you-can-do-while-stuck-at-home | Lockdown exercise: The eight exercises you can do while stuck at home due to COVID-19", "https://yourstory.com/weekender/stay-safe-stay-fit-on-world-health-day-fitness-coronavirus | Stay safe, stay fit"]
    var thumb = ["https://cdn.vox-cdn.com/thumbor/BoGtOFcj3i386VmTFyxSI1Vn-kw=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19811167/headspace.png", "https://cdn.images.express.co.uk/img/dynamic/126/590x/secondary/coronavirus-self-isolation-fitness-yoga-keep-healthy-2376838.jpg?r=1586256853319", "https://images.yourstory.com/cs/7/a0bad530ce5d11e9a3fb4360e4b9139b/3282374908367596ac4edc-1586182581978.jpg?fm=png&auto=format&blur=500"]
    var context = ["Learn the life-changing skills of meditation in just a few minutes a day with Headspace. Find hundreds of sessions on physical health, personal growth...", "Taking the one form of exercise a day is imp-purr-tant for your mental health, but if you are unable to then there are things you can do at home that work just as well.", "On World Health Day, here are a few tips on how to stay fit during these unprecedented times and some advice from celebrities too"];
    var alt_text = ["Yoga", "Yoga", "Yoga"]
    console.log("meditate");
    return blockGenerator(welText, links, thumb, context, alt_text)
}

function movieFnc() {
    var welText = "*Watch some International Films* \nOne of the great rewards of watching fur-eign films is the infinite ways it can open up the world for you as a viewer. 🎥🎬"
    var links = ["https://www.youtube.com/watch?v=58Onuy5USTc | A Separation (2011)", "https://www.youtube.com/watch?v=34WIbmXkewU | The Intouchables (2011)", "https://www.youtube.com/watch?v=whldChqCsYk | The Handmaiden (2016)"]
    var thumb = ["https://img.youtube.com/vi/58Onuy5USTc/maxresdefault.jpg", "https://img.youtube.com/vi/34WIbmXkewU/maxresdefault.jpg", "https://img.youtube.com/vi/whldChqCsYk/maxresdefault.jpg"]
    var context = ["Nader and Simin, a married couple, live in Iran with their daughter Termeh. Simin wants to move out of the country, but Nader is reluctant to...", "An unusual friendship develops when a street smart immigrant is hired to take care of a disabled French nobleman.", "A gripping and sensual tale of two women - a young Japanese Lady living on a secluded estate, and a Korean woman..."];
    var alt_text = ["Movie", "Movie", "Movie"]
    console.log("movie");
    return blockGenerator(welText, links, thumb, context, alt_text)
}

function restFnc() {
    var welText = "*Just relax, rest and sleep* \nToday is your day to love yourself, rest and sleep endlessly (just like me) 💤😴🛌"
    console.log("rest");
    return blockGenerator_noblock(welText)
}

function thankyouFnc() {
    var welText = "*Let's thank everyone!!. They made us what we are today* \nTo our parents, friends, children, paw-tners, doctors, nurses, garbage-man, delivery guy, neighbour, and everyone else too! (don't forget me) 🙏🤗"
    var links = ["https://ideas.hallmark.com/articles/thank-you-ideas/how-to-write-a-thank-you-note/ | How to write a thank-you note", "https://www.thespruce.com/thoughtful-wording-thank-you-note-1216778 | Thoughtful Wording for a Thank You Note", "https://examples.yourdictionary.com/examples-of-words-for-thank-you-notes.html | Examples of Words for Thank You Notes"]
    var thumb = ["https://images.unsplash.com/photo-1554830072-52d78d0d4c18?ixlib=rb-1.2.1&w=1000&q=80", "https://images.unsplash.com/photo-1521685468847-de0a1a3c41a8?ixlib=rb-1.2.1&w=1000&q=80", "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2019/02/thank-you.jpg"]
    var context = ["A handwritten thank-you note says more: It tells our friends and family that we went out of our way to sit down and write just to them, because they’re worth it", "The main thing you need to do is show how much you appreciate the gift or hospitality. Even if you didn't care for the gift or if you didn't have a wonderful time, you should still send a thank you note.", "Everyone loves to feel appreciated, which is why thank you notes are still an imp-purr-tant way to express your gratitude."];
    var alt_text = ["Thankyou", "Thankyou", "Thankyou"]
    console.log("thankyou");
    return blockGenerator(welText, links, thumb, context, alt_text)
}

function re_arrangeFnc() {

    var welText = "*Re-arrange your fur-niture. You might feel like you shifted houses* \nYou can easily revitalize stale family rooms and bedrooms anytime by rearranging furniture to create a fresh, new look. ⚒🧱"
    var links = ["https://www.thespruce.com/rules-for-arranging-furniture-2213418 | 10 Simple Decorating Rules for Arranging Furniture", "https://www.bhg.com/decorating/lessons/basics/how-to-arrange-furniture/ | How to Arrange Furniture: No-Fail Tricks", "https://digthisdesign.net/decor-furnishings/rearranging-your-furniture/ | Benefits of rearranging"]
    var thumb = ["https://www.ikea.com/images/6a/f1/6af17f56c823825b4878c6e58982514b.jpg?f=s", "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg"]
    var context = ["Over the years, interior designers have recognized a number of simple, easy-to-apply principles that work", "Arranging furniture is one of the most daunting—yet most important—design decisions.", "Let’s look at 5 benefits of rearranging your furniture that you might not have thought about before."];
    var alt_text = ["Re_Arrange", "Re_Arrange", "Re_Arrange"]
    console.log("rearragne")
    return blockGenerator(welText, links, thumb, context, alt_text)
}

function musicFnc() {

    var welText = "*Chill out with some dope music!* \nHere's my collection of playlist, relaxing and fur-esh music 🎷🎵"
    var links = ["https://www.youtube.com/watch?v=Ivrrt6oYxxc&list=PLKYTmz7SemaqVDF6XJ15bv_8-j7ckkNgb | Lo-Fi Playlist", "https://www.youtube.com/playlist?list=PLNpZHzamg9Maq-NBeSMcNdSBHUMN6N4Je | My Favourite Indian Artists", "https://www.youtube.com/playlist?list=PLNpZHzamg9MYjGzNjoL3cY_X_nWPmRTbz | My Playlist"]
    var thumb = ["https://img.youtube.com/vi/6UosfX5u14g/maxresdefault.jpg", "https://img.youtube.com/vi/9et5qzuzbQM/maxresdefault.jpg", "https://img.youtube.com/vi/xVfddViugYQ/maxresdefault.jpg"]
    var context = ["Lo-Fi music is my go-to-playlist whenever I am working, it's peaceful and relaxing", "These are some of my favourite Indian artists, feel free to listen and add more to the list", "These are some of my favourite songs, please keep in mind that they are explicit so don't play them too loud.. lol"];
    var alt_text = ["Music", "Indie", "HipHop"]
    console.log("music")
    return blockGenerator(welText, links, thumb, context, alt_text)
}

function skillsFnc() {
    var welText = "*Learn a new Skill!* \nNow is a great time to get focused and learn a skill you've been wanting to learn from a long time 🎨🏓"
    var links = ["https://www.pluralsight.com/ | Pluralsight", "https://www.coursera.org/ | Coursera", "https://www.edx.org/ | edX org"]
    var thumb = ["https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_170142/parsys/columns_copy_copy/column-parsys-1/flex_block_copy/parsys/flex_open_block/parsys/image_copy/image-res.img.612b7eff-44c6-4f86-90dc-49fd8c8d77b6.jpg", "https://www.wired.com/coupons/static/shop/31628/logo/Coursera_coupons.png", "https://pbs.twimg.com/profile_images/1163392268142829568/3SWbDHxa_400x400.png"]
    var context = ["Pluralsight, Inc. is an American publicly held online education company that offers a variety of video training courses for software developers...", "Coursera is an American online learning platform founded in 2012 by Stanford professors Andrew Ng and Daphne Koller", "Access 2000 free online courses from 140 leading institutions worldwide. Gain new skills and earn a certificate of completion."];
    var alt_text = ["Pluralsight", "Coursera", "edX"]
    console.log("skills");
    return blockGenerator(welText, links, thumb, context, alt_text)
}

function familyFnc() {
    var welText = "*It's family time!* \nLet's spend time with our loved ones, calling them, spending time with them, talking to them, playing with the kids! It's a wonderful feeling! 👪"
    console.log("family");
    return blockGenerator_noblock(welText)
}

function socialchallengeFnc() {
    var welText = "*Take up a social challenge!* \nOnline challenges are trending on twitter, instagram and other places. Take part in challenges that encourage social distancing, welfare and healthy habits🤳✌"
    console.log("social");
    return blockGenerator_noblock(welText)
}

function socialserviceFnc() {
    var welText = "*Let's today contribute towards helping others* \nThere are many ways you can contribute towards social service, like donating, making home-made masks, food service, motivating other fighting against the virus 😷"
    var links = ["https://covid19responsefund.org/ | Covid-19 Response Fund", "https://www.youtube.com/watch?v=DtiXOSJKbjA | Making Homemade Masks", "https://www.youtube.com/watch?v=dSQztKXR6k0 | Why Fighting against the virus depends on you"]
    var thumb = ["https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/WHO_reuters-770x433.jpeg?6MIsaTQeXAFacUrFnI9xRS_RGRChUN0v", "https://img.youtube.com/vi/DtiXOSJKbjA/maxresdefault.jpg", "https://img.youtube.com/vi/dSQztKXR6k0/maxresdefault.jpg"]
    var context = ["Donations to track, understand the spread, patient's care and frontline workers to get essential supplies & information", "Here’s how you can make masks at home and be wearing a mask in public spaces to prevent the spread of the coronavirus.", "If we can slow the virus down, it could save hundreds of thousands of lives. Read more about the Covid-19 coronavirus pandemic at <https://vox.com/coronavirus>"];
    var alt_text = ["Covid-19", "Masks", "Vox"]
    console.log("service");
    return blockGenerator(welText, links, thumb, context, alt_text)
}

function animeFnc() {
    var welText = "*You should check some of these anime movies!* \nHere is a small list of some of my favourite ones.  🎌🎎"
    var links = ["https://www.youtube.com/watch?v=gaRqwKfMlKU | In This Corner of the World", "https://www.youtube.com/watch?v=xU47nhruN-Q | Kimi no na wa", "https://www.youtube.com/watch?v=nfK6UgLra7g | A Silent Voice", "https://www.youtube.com/watch?v=xnLaOqqtCKs | The Garden of Words", "https://www.youtube.com/watch?v=wdM7athAem0 | 5 Centimeters per Second", "https://www.youtube.com/watch?v=ByXuk9QqQkk | Spirited Away"]
    var thumb = ["https://img.youtube.com/vi/gaRqwKfMlKU/maxresdefault.jpg", "https://img.youtube.com/vi/xU47nhruN-Q/maxresdefault.jpg", "https://img.youtube.com/vi/nfK6UgLra7g/maxresdefault.jpg", "https://img.youtube.com/vi/FMabhvDoolc/maxresdefault.jpg", "https://img.youtube.com/vi/wdM7athAem0/maxresdefault.jpg", "https://img.youtube.com/vi/ByXuk9QqQkk/maxresdefault.jpg"]
    var context = ["In This Corner of the World tells the story of the adolescent Suzu, who in 1944 moves to the small town of Kure in Hiroshima to live with her husband’s family. Suzu’s life is thrown...", "Mitsuha and Taki are total strangers living completely different lives. But when Mitsuha makes a wish to leave her mountain town for the bustling city of Tokyo...", "Shoya Ishida starts bullying the new girl in class, Shoko Nishimiya, because she is deaf. But as the teasing continues, the rest of the class starts to turn on...", "Overwhelmed with strange path of life, an aspiring designer finds himself drawing shoes in the peacefulness of a beautiful garden. Pushing aside his responsibilities, he soon meets...", "5 Centimeters per Second is a 2007 Japanese animated coming-of-age romantic drama film produced, written and directed by Makoto Shinkai.", "In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro and her parents stumble upon a seemingly abandoned amusement park."];
    var alt_text = ["corner", "your name", "a silent voice", "garden of words", "5 centimenter", "spirited away"]
    console.log("anime");
    return blockGenerator_moreblock(welText, links, thumb, context, alt_text)
}

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

// Returns a random number
function rndGenerator(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function responseFnc(num) {
    var typeResponse = ["Ayo! 🐱", "Dope! 😸", "Noice Toit 👌", "What? Really? 🐈", "Yos. Don't mind. 😹", "Gotcha! 😺", "Aye Aye! 😸", "You do know I'm a kitty right? 🙀", "Noice 👌", "Okie Dokie! 😸", "I like you hooman! 😻", "! 😻", "Arigato! 😽", "Okieee!", "Toosie Slide! 🐱‍", "It ain't easy being purr-fect 😽", "I'm a purr-ro 🐱‍👤", "What a cat-astrophe 🙀", "Stay Paw-sitive 😹", "Are you kitten' me?", "I'm feline Goooood", "Catitude is everything! 😼", "I used to previously climb meowtains 🗻", "Oh *paw*lease 🐈", "How about nahhhhh! 😼", "you are puurfect ❤"]
    return typeResponse[num];
}


app.event('app_mention', async({ event, context }) => {
    console.log(event);
    console.log("This is space");
    var txt = event.text;
    var helloTxt = txt.match(/^(hello|hi|hey|hola|namaste)/);
    var helpTxt = txt.match(/(idea|help|idea|suggestion|activit|advice|new|what|random)/);
    var special = txt.match(/(letter|food|recipe|book|netflix|language|meditate|movie|family|social|anime|music|joke)/);
    if (helloTxt != null) {
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
                            "text": "I help in suggesting activities or tasks you can do in your free time, keeping you positive and motivated. Just mention me along with keywords like *help*, *ideas*, *suggestions*, *random* and I will post an activity"
                        }
                    }
                ]
            })
        } catch (error) {
            console.log(error)
        }
    } else if (special != null) {
        var requestCase = special[0];
        switch (requestCase) {
            case 'letter':
                messageByBot = letterFnc();
                break;
            case 'food':
            case 'recipe':
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
                messageByBot = animeFnc();
                break;
            case 'joke':
                var max = 19,
                    min = 1;
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
        max = 26
        min = 1
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


(async() => {
    // Start your app
    const server = await app.start(port);

    console.log('⚡️ Bolt app is running!');
})();