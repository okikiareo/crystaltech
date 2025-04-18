export function homeLoader() {
    const blog = [
        {
            "id": 1,
            "title": "The Future of AI in Everyday Life in 2025",
            "image": "https://res.cloudinary.com/dp7exlwks/image/upload/v1742519771/vans/ayiqir4ptszifsbtqvbz.png",
            "createdBy": "John Doe",
            "createdAt": "Oct 04, 2025"
        },
        {
            "id": 2,
            "title": "Top 10 Places to Visit in Europe in 2025",
            "image": "https://res.cloudinary.com/dp7exlwks/image/upload/v1742519769/vans/zzrjmdfo4iyu4tift96o.png",
            "createdBy": "Jane Smith",
            "createdAt": "Sep 04, 2025"
        },
        {
            "id": 3,
            "title": "The Rise of Electric Vehicles in 2025",
            "image": "https://res.cloudinary.com/dp7exlwks/image/upload/v1742519769/vans/i34xfblq0e4zsdotrcuu.png",
            "createdBy": "Alice Brown",
            "createdAt": "Aug 04, 2025"
        }
    ];

    const testimonials = [
        {
            "id": "001",
            "name": "Ava Thompson",
            "username": "@ava_thompson",
            "post": "Finally got around to trying that viral pasta recipe—10/10 would recommend. 🍝🔥",
            "image": "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            "id": "002",
            "name": "Liam Carter",
            "username": "@liamwrites",
            "post": "Woke up to the sound of rain and honestly, nothing beats that kind of peace. ☔️",
            "image": "https://randomuser.me/api/portraits/men/72.jpg"
        },
        {
            "id": "003",
            "name": "Sophie Nguyen",
            "username": "@sophcoding",
            "post": "Just pushed my first open-source project live! Nervous and excited. 🚀💻",
            "image": "https://randomuser.me/api/portraits/women/72.jpg"
        },
        {
            "id": "004",
            "name": "Ethan Brooks",
            "username": "@brooks_efx",
            "post": "The sunsets lately have been unreal. Nature really showing off. 🌅",
            "image": "https://randomuser.me/api/portraits/men/24.jpg"
        },
        {
            "id": "005",
            "name": "Maya Patel",
            "username": "@maya_patel",
            "post": "If you need a sign to take a break today, this is it. Go breathe. 💆‍♀️✨",
            "image": "https://randomuser.me/api/portraits/women/33.jpg"
        }];
    return { blog: blog, testimonials };
}

export function blogLoader() {
    console.log("Blog Loader...");
    return null;
}

