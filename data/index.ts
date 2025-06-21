import { icons, images } from "../constants";

export const userAddresses = [
    {
        id: "1",
        name: "Home",
        address: "364 Stillwater Ave, Attleboro, MA 02703",
    },
    {
        id: "2",
        name: "Office",
        address: "73 Virginia Rd, Cuyahoga Falls, OH 44221",
    },
    {
        id: "3",
        name: "Mall Plaza",
        address: "123 Main St, San Francisco, CA 94107",
    },
    {
        id: "4",
        name: "Garden Park",
        address: "600 Bloom St, Portland, OR 97201",
    },
    {
        id: "5",
        name: "Grand City Park",
        address: "26 State St Daphne, AL 36526"
    },
    {
        id: "6",
        name: "Town Square",
        address: "20 Applegate St. Hoboken, NJ 07030"
    },
    {
        id: "7",
        name: "Bank",
        address: "917 W Pine Street Easton, PA 0423"
    }
];

export const faqKeywords = [
    {
        id: "1",
        name: "General"
    },
    {
        id: "2",
        name: "Account"
    },
    {
        id: "3",
        name: "Security"
    },
    {
        id: "4",
        name: "Ordering"
    },
    {
        id: "5",
        name: "Payment"
    }
];

export const faqs = [
    {
        question: 'How do I place an order on the app?',
        answer: 'To place an order, simply browse through our product catalog, select the items you want, add them to your cart, and proceed to checkout to confirm your order.',
        type: "General"
    },
    {
        question: 'Can I view product details, such as specifications and availability?',
        answer: 'Yes, you can view detailed product information including specifications, availability, and customer reviews. Simply navigate to the product page within the app.',
        type: "General"
    },
    {
        question: 'What should I do if I need to cancel or modify an order?',
        answer: 'To cancel or modify an order, go to the "My Orders" section, find your order, and follow the provided options to make changes.',
        type: "Account"
    },
    {
        question: 'How can I find products from specific categories or brands?',
        answer: 'You can use the app’s search filters to find products from specific categories or brands. Filter results by categories such as electronics or clothing.',
        type: "Ordering"
    },
    {
        question: 'Is there a way to make payments for orders within the app?',
        answer: 'Yes, you can securely make payments for orders using various payment methods available in the app, including credit/debit cards and digital wallets.',
        type: "Payment"
    },
    {
        question: 'Are my personal details and order information kept secure?',
        answer: 'Yes, we prioritize the security and confidentiality of your personal details and order information. Our app complies with strict privacy and data protection standards.',
        type: "Security"
    },
    {
        question: 'Can I request assistance with special product requirements or preferences?',
        answer: "Yes, you can request assistance with special product requirements or preferences during the ordering process. Simply specify your preferences, and we'll do our best to accommodate them.",
        type: "General"
    },
    {
        question: 'How can I provide feedback or review my shopping experience?',
        answer: 'After receiving your order, you can provide feedback and review your shopping experience through the app’s rating and review system. Your feedback helps us improve our services for future orders.',
        type: "General"
    },
    {
        question: 'Is customer support available through this app?',
        answer: 'While we facilitate online shopping, our app is not for customer support. For assistance, please contact our support team through the designated channels provided in the app.',
        type: "General"
    },
];

export const friends = [
    {
        id: "1",
        name: "Tynisa Obey",
        phoneNumber: "+1-300-400-0135",
        avatar: images.user1,
    },
    {
        id: "2",
        name: "Florencio Dorance",
        phoneNumber: "+1-309-900-0135",
        avatar: images.user2,
    },
    {
        id: "3",
        name: "Chantal Shelburne",
        phoneNumber: "+1-400-100-1009",
        avatar: images.user3,
    },
    {
        id: "4",
        name: "Maryland Winkles",
        phoneNumber: "+1-970-200-4550",
        avatar: images.user4,
    },
    {
        id: "5",
        name: "Rodolfo Goode",
        phoneNumber: "+1-100-200-9800",
        avatar: images.user5,
    },
    {
        id: "6",
        name: "Benny Spanbauer",
        phoneNumber: "+1-780-200-9800",
        avatar: images.user6,
    },
    {
        id: "7",
        name: "Tyra Dillon",
        phoneNumber: "+1-943-230-9899",
        avatar: images.user7,
    },
    {
        id: "8",
        name: "Jamel Eusobio",
        phoneNumber: "+1-900-234-9899",
        avatar: images.user8,
    },
    {
        id: "9",
        name: "Pedro Haurad",
        phoneNumber: "+1-240-234-9899",
        avatar: images.user9
    },
    {
        id: "10",
        name: "Clinton Mcclure",
        phoneNumber: "+1-500-234-4555",
        avatar: images.user10
    },
];

export const transactionHistory = [
    {
        id: "1",
        image: images.user1,
        name: "Daniel Austin",
        date: "Dec 20, 2024 | 10:00 AM",
        type: "Purchase Expense",
        amount: "$14"
    },
    {
        id: "2",
        image: images.user2,
        name: "Top Up Wallet",
        date: "Dec 16, 2024 | 13:34 PM",
        type: "Top Up",
        amount: "$80"
    },
    {
        id: "3",
        image: images.user3,
        name: "Sarah Wilson",
        date: "Dec 14, 2024 | 11:39 AM",
        type: "Purchase Expense",
        amount: "$32"
    },
    {
        id: "4",
        image: images.user2,
        name: "Daniel Austion",
        date: "Dec 10, 2024 | 09:32 AM",
        type: "Top Up",
        amount: "$112"
    },
    {
        id: "5",
        image: images.user5,
        name: "Benny Spanbauleur",
        date: "Dec 09, 2024 | 10:08 AM",
        type: "Purchase Expense",
        amount: "$43"
    },
    {
        id: "6",
        image: images.user6,
        name: "Roselle Dorrence",
        date: "Dec 08, 2024 | 09:12 AM",
        type: "Purchase Expense",
        amount: "$22"
    },
    {
        id: "7",
        image: images.user2,
        name: "Daniel Austion",
        date: "Dec 08, 2024 | 16:28 PM",
        type: "Top Up",
        amount: "$200"
    },
    {
        id: "8",
        image: images.user2,
        name: "Daniel Austion",
        date: "Dec 07, 2024 | 15:12 PM",
        type: "Top Up",
        amount: "$120"
    },
    {
        id: "9",
        image: images.user2,
        name: "Daniel Austion",
        date: "Dec 07, 2024 | 22:12 PM",
        type: "Top Up",
        amount: "$20"
    },
    {
        id: "10",
        image: images.user8,
        name: "Lucky Luck",
        date: "Dec 06, 2024 | 10:08 AM",
        type: "Purchase Expense",
        amount: "$12"
    },
    {
        id: "11",
        image: images.user2,
        name: "Jennifer Lucie",
        date: "Dec 03, 2024 | 11:48 AM",
        type: "Top Up",
        amount: "$45"
    }
];

export const messsagesData = [
    {
        id: "1",
        fullName: "Jhon Smith",
        userImg: images.user1,
        lastSeen: "2023-11-16T04:52:06.501Z",
        lastMessage: 'I love you. see you soon baby',
        messageInQueue: 2,
        lastMessageTime: "12:25 PM",
        isOnline: true,
    },
    {
        id: "2",
        fullName: "Anuska Sharma",
        userImg: images.user2,
        lastSeen: "2023-11-18T04:52:06.501Z",
        lastMessage: 'I Know. you are so busy man.',
        messageInQueue: 0,
        lastMessageTime: "12:15 PM",
        isOnline: false
    },
    {
        id: "3",
        fullName: "Virat Kohili",
        userImg: images.user3,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Ok, see u soon',
        messageInQueue: 0,
        lastMessageTime: "09:12 PM",
        isOnline: true
    },
    {
        id: "4",
        fullName: "Shikhor Dhaon",
        userImg: images.user4,
        lastSeen: "2023-11-18T04:52:06.501Z",
        lastMessage: 'Great! Do you Love it.',
        messageInQueue: 0,
        lastMessageTime: "04:12 PM",
        isOnline: true
    },
    {
        id: "5",
        fullName: "Shakib Hasan",
        userImg: images.user5,
        lastSeen: "2023-11-21T04:52:06.501Z",
        lastMessage: 'Thank you !',
        messageInQueue: 2,
        lastMessageTime: "10:30 AM",
        isOnline: true
    },
    {
        id: "6",
        fullName: "Jacksoon",
        userImg: images.user6,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Do you want to go out dinner',
        messageInQueue: 3,
        lastMessageTime: "10:05 PM",
        isOnline: false
    },
    {
        id: "7",
        fullName: "Tom Jerry",
        userImg: images.user7,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Do you want to go out dinner',
        messageInQueue: 2,
        lastMessageTime: "11:05 PM",
        isOnline: true
    },
    {
        id: "8",
        fullName: "Lucky Luck",
        userImg: images.user8,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Can you share the design with me?',
        messageInQueue: 2,
        lastMessageTime: "09:11 PM",
        isOnline: true
    },
    {
        id: "9",
        fullName: "Nate Jack",
        userImg: images.user9,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Tell me what you want?',
        messageInQueue: 0,
        lastMessageTime: "06:43 PM",
        isOnline: true
    }
];

export const callData = [
    {
        id: "1",
        fullName: "Roselle Erhman",
        userImg: images.user10,
        status: "Incoming",
        date: "Dec 19, 2024"
    },
    {
        id: "2",
        fullName: "Willard Purnell",
        userImg: images.user9,
        status: "Outgoing",
        date: "Dec 17, 2024"
    },
    {
        id: "3",
        fullName: "Charlotte Hanlin",
        userImg: images.user8,
        status: "Missed",
        date: "Dec 16, 2024"
    },
    {
        id: "4",
        fullName: "Merlin Kevin",
        userImg: images.user7,
        status: "Missed",
        date: "Dec 16, 2024"
    },
    {
        id: "5",
        fullName: "Lavern Laboy",
        userImg: images.user6,
        status: "Outgoing",
        date: "Dec 16, 2024"
    },
    {
        id: "6",
        fullName: "Phyllis Godley",
        userImg: images.user5,
        status: "Incoming",
        date: "Dec 15, 2024"
    },
    {
        id: "7",
        fullName: "Tyra Dillon",
        userImg: images.user4,
        status: "Outgoing",
        date: "Dec 15, 2024"
    },
    {
        id: "8",
        fullName: "Marci Center",
        userImg: images.user3,
        status: "Missed",
        date: "Dec 15, 2024"
    },
    {
        id: "9",
        fullName: "Clinton Mccure",
        userImg: images.user2,
        status: "Outgoing",
        date: "Dec 15, 2024"
    },
];

export const banners = [
    {
        id: 1,
        discount: '40%',
        discountName: "Today's Special",
        bottomTitle: 'Get a discount for every orde!',
        bottomSubtitle: 'Only valid for today!'
    },
    {
        id: 2,
        discount: '50%',
        discountName: "Weekend Sale",
        bottomTitle: 'Special discount for weekend orderings!',
        bottomSubtitle: 'This weekend only!'
    },
    {
        id: 3,
        discount: '30%',
        discountName: "Limited Time Offer",
        bottomTitle: 'Hurry up! Limited time offer!',
        bottomSubtitle: 'Valid until supplies last!'
    }
];

export const categories = [
    {
        id: "0",
        name: "All",
        icon: icons.category,
        iconColor: "rgba(51, 94, 247, 1)",
        backgroundColor: "rgba(51, 94, 247, .12)",
        onPress: null
    },
    {
        id: "1",
        name: "Garments",
        icon: icons.clothes,
        iconColor: "rgba(51, 94, 247, 1)",
        backgroundColor: "rgba(51, 94, 247, .12)",
        onPress: "categoryclothes"
    },
    {
        id: "2",
        name: "Restaurant",
        icon: icons.kitchen,
        iconColor: "rgba(0, 188, 211, 1)",
        backgroundColor: "rgba(0, 188, 211,.12)",
        onPress: "categorykitchen"
    },
    {
        id: "3",
        name: "Electronics",
        icon: icons.electronics,
        iconColor: "rgba(255, 192, 45, 1)",
        backgroundColor: "rgba(255, 192, 45,.12)",
        onPress: "categoryelectronics"
    },
    {
        id: "4",
        name: "Watch",
        icon: icons.watches,
        iconColor: "rgba(245, 67, 54, 1)",
        backgroundColor: "rgba(245, 67, 54,.12)",
        onPress: "categorywatch"
    },
    {
        id: "5",
        name: "Furniture",
        icon: icons.bed,
        iconColor: "rgba(74, 175, 87, 1)",
        backgroundColor: "rgba(74, 175, 87,.12)",
        onPress: "categoryjewelry"
    },
    {
        id: "6",
        name: "Jewelry",
        icon: icons.jwelery,
        iconColor: "rgba(74, 175, 87, 1)",
        backgroundColor: "rgba(74, 175, 87,.12)",
        onPress: "categoryjewelry"
    },
    {
        id: "7",
        name: "Toys",
        icon: icons.toys1,
        iconColor: "rgba(114, 16, 255, 1)",
        backgroundColor: "rgba(114, 16, 255, .12)",
        onPress: "categorytoys"
    }
];

export const brands = [
    {
        id: "0",
        name: "All",
        icon: icons.category,
        iconColor: "rgba(51, 94, 247, 1)",
        backgroundColor: "rgba(51, 94, 247, .12)",
        onPress: null
    },
    {
        id: "5",
        name: "Mc'Donald",
        icon: icons.bed,
        iconColor: "rgba(74, 175, 87, 1)",
        backgroundColor: "rgba(74, 175, 87,.12)",
        onPress: "categoryjewelry"
    },
    {
        id: "6",
        name: "Jewelry",
        icon: icons.jwelery,
        iconColor: "rgba(74, 175, 87, 1)",
        backgroundColor: "rgba(74, 175, 87,.12)",
        onPress: "categoryjewelry"
    },
    {
        id: "7",
        name: "Toys",
        icon: icons.toys1,
        iconColor: "rgba(114, 16, 255, 1)",
        backgroundColor: "rgba(114, 16, 255, .12)",
        onPress: "categorytoys"
    }
];


export const bags = [
    {
        id: "1",
        name: "Mini Plastic Bag",
        image: images.bag1,
        price: "485.00",
        numReviews: 143,
        rating: 4.5,
        quantity: 1300,
        numSolds: 9373,
        navigate: "bagsdetails"
    },
    {
        id: "2",
        name: "Canvas Tote Bag",
        image: images.bag2,
        price: "25.00",
        numReviews: 98,
        rating: 4.2,
        quantity: 500,
        numSolds: 562,
        navigate: "bagsdetails"
    },
    {
        id: "3",
        name: "Leather Messenger Bag",
        image: images.bag3,
        price: "150.00",
        numReviews: 205,
        rating: 4.8,
        quantity: 300,
        numSolds: 1689,
        navigate: "bagsdetails"
    },
    {
        id: "4",
        name: "Backpack",
        image: images.bag4,
        price: "75.00",
        numReviews: 72,
        rating: 4.0,
        quantity: 700,
        numSolds: 423,
        navigate: "bagsdetails"
    },
    {
        id: "5",
        name: "Crossbody Bag",
        image: images.bag5,
        price: "65.00",
        numReviews: 120,
        rating: 4.3,
        quantity: 400,
        numSolds: 987,
        navigate: "bagsdetails"
    },
    {
        id: "6",
        name: "Duffel Bag",
        image: images.bag6,
        price: "90.00",
        numReviews: 64,
        rating: 4.1,
        quantity: 250,
        numSolds: 325,
        navigate: "bagsdetails"
    },
    {
        id: "7",
        name: "Clutch",
        image: images.bag7,
        price: "40.00",
        numReviews: 85,
        rating: 4.4,
        quantity: 600,
        numSolds: 746,
        navigate: "bagsdetails"
    },
    {
        id: "8",
        name: "Weekender Bag",
        image: images.bag8,
        price: "120.00",
        numReviews: 150,
        rating: 4.6,
        quantity: 200,
        numSolds: 1325,
        navigate: "bagsdetails"
    },
    {
        id: "9",
        name: "Sling Bag",
        image: images.bag9,
        price: "55.00",
        numReviews: 110,
        rating: 4.2,
        quantity: 350,
        numSolds: 845,
        navigate: "bagsdetails"
    },
    {
        id: "10",
        name: "Travel Backpack",
        image: images.bag10,
        price: "85.00",
        numReviews: 93,
        rating: 4.3,
        quantity: 450,
        numSolds: 632,
        navigate: "bagsdetails"
    },
    {
        id: "11",
        name: "Laptop Bag",
        image: images.bag11,
        price: "70.00",
        numReviews: 78,
        rating: 4.0,
        quantity: 280,
        numSolds: 514,
        navigate: "bagsdetails"
    },
    {
        id: "12",
        name: "Hobo Bag",
        image: images.bag12,
        price: "55.00",
        numReviews: 105,
        rating: 4.2,
        quantity: 380,
        numSolds: 701,
        navigate: "bagsdetails"
    }
];

export const clothes = [
    {
        id: "1",
        name: "Vanesa Long Shirt",
        image: images.cloth1,
        price: "320.00",
        numReviews: 405,
        rating: 4.9,
        quantity: 40000,
        numSolds: 9752,
        categoryId: "1",
        navigate: "clothesdetails"
    },
    {
        id: "2",
        name: "Cotton T-Shirt",
        image: images.cloth2,
        price: "25.00",
        numReviews: 240,
        rating: 4.5,
        quantity: 15000,
        numSolds: 6321,
        categoryId: "1",
        navigate: "clothesdetails"
    },
    {
        id: "3",
        name: "Slim Fit Jeans",
        image: images.cloth3,
        price: "45.00",
        numReviews: 180,
        rating: 4.3,
        quantity: 10000,
        numSolds: 4236,
        categoryId: "1",
        navigate: "clothesdetails"
    },
    {
        id: "4",
        name: "Hooded Sweatshirt",
        image: images.cloth4,
        price: "55.00",
        numReviews: 312,
        rating: 4.7,
        quantity: 8000,
        numSolds: 8547,
        categoryId: "1",
        navigate: "clothesdetails"
    },
    {
        id: "5",
        name: "Formal Blazer",
        image: images.cloth5,
        price: "150.00",
        numReviews: 96,
        rating: 4.2,
        quantity: 5000,
        numSolds: 2156,
        categoryId: "1",
        navigate: "clothesdetails"
    },
    {
        id: "6",
        name: "Casual Dress",
        image: images.cloth6,
        price: "75.00",
        numReviews: 178,
        rating: 4.4,
        quantity: 7000,
        numSolds: 3965,
        categoryId: "1",
        navigate: "clothesdetails"
    },
    {
        id: "7",
        name: "Sportswear Set",
        image: images.cloth7,
        price: "90.00",
        numReviews: 132,
        rating: 4.1,
        quantity: 6000,
        numSolds: 2854,
        categoryId: "1",
        navigate: "clothesdetails"
    },
    {
        id: "8",
        name: "Sweater",
        image: images.cloth8,
        price: "40.00",
        numReviews: 215,
        rating: 4.6,
        quantity: 9000,
        numSolds: 6543,
        categoryId: "1",
        navigate: "clothesdetails"
    },
    {
        id: "9",
        name: "Summer Shorts",
        image: images.cloth9,
        price: "30.00",
        numReviews: 189,
        rating: 4.3,
        quantity: 7500,
        numSolds: 4875,
        categoryId: "1",
        navigate: "clothesdetails"
    },
    {
        id: "10",
        name: "Leather Jacket",
        image: images.cloth10,
        price: "200.00",
        numReviews: 124,
        rating: 4.0,
        quantity: 4000,
        numSolds: 1987,
        categoryId: "1",
        navigate: "clothesdetails"
    },
    {
        id: "11",
        name: "Skirt",
        image: images.cloth11,
        price: "35.00",
        numReviews: 143,
        rating: 4.2,
        quantity: 6500,
        numSolds: 3245,
        categoryId: "1",
        navigate: "clothesdetails"
    },
    {
        id: "12",
        name: "Polo Shirt",
        image: images.cloth12,
        price: "50.00",
        numReviews: 156,
        rating: 4.4,
        quantity: 8500,
        numSolds: 5621,
        categoryId: "1",
        navigate: "clothesdetails"
    }
];

export const electronics = [
    {
        id: "1",
        name: "Vinia Headphone",
        image: images.electronic1,
        price: "120.00",
        numReviews: 156,
        rating: 4.4,
        quantity: 8500,
        numSolds: 5621,
        categoryId: "4",
        navigate: "electronicsdetails"
    },
    {
        id: "2",
        name: "Sonia Headphone",
        image: images.electronic2,
        price: "132.00",
        numReviews: 300,
        rating: 4.9,
        quantity: 8500,
        numSolds: 459,
        categoryId: "4",
        navigate: "electronicsdetails"
    },
    {
        id: "3",
        name: "Tania Headphone",
        image: images.electronic3,
        price: "165.00",
        numReviews: 120,
        rating: 4.9,
        quantity: 50003,
        numSolds: 1230,
        categoryId: "4",
        navigate: "electronicsdetails"
    },
    {
        id: "4",
        name: "Kajakea Camera",
        image: images.electronic4,
        price: "230.00",
        numReviews: 945,
        rating: 4.8,
        quantity: 4000,
        numSolds: 980,
        categoryId: "4",
        navigate: "electronicsdetails"
    },
    {
        id: "5",
        name: "Zooma Camera",
        image: images.electronic5,
        price: "265.00",
        numReviews: 300,
        rating: 4.7,
        quantity: 3200,
        numSolds: 980,
        categoryId: "4",
        navigate: "electronicsdetails"
    },
    {
        id: "6",
        name: "Rode Mocrophone 1",
        image: images.electronic6,
        price: "430.00",
        numReviews: 190,
        rating: 4.9,
        quantity: 3200,
        numSolds: 1242,
        categoryId: "4",
        navigate: "electronicsdetails"
    },
    {
        id: "7",
        name: "Acer Computer 1",
        image: images.electronic7,
        price: "275.00",
        numReviews: 640,
        rating: 4.8,
        quantity: 4000,
        numSolds: 2300,
        categoryId: "4",
        navigate: "electronicsdetails"
    },
    {
        id: "8",
        name: "Macbook Pro M7",
        image: images.electronic8,
        price: "255.00",
        numReviews: 650,
        rating: 4.6,
        quantity: 56000,
        numSolds: 7464,
        categoryId: "4",
        navigate: "electronicsdetails"
    },
    {
        id: "9",
        name: "Wireless Mouse",
        image: images.electronic9,
        price: "128.35",
        numReviews: 112,
        rating: 4.8,
        quantity: 56000,
        numSolds: 734,
        categoryId: "4",
        navigate: "electronicsdetails"
    },
    {
        id: "10",
        name: "Samsung Mouse Ultra",
        image: images.electronic10,
        price: "104.45",
        numReviews: 105,
        rating: 4.7,
        quantity: 56000,
        numSolds: 1460,
        categoryId: "4",
        navigate: "electronicsdetails"
    },
    {
        id: "11",
        name: "Central Unit X",
        image: images.electronic11,
        price: "125.00",
        numReviews: 112,
        rating: 4.8,
        quantity: 56000,
        numSolds: 2003,
        categoryId: "4",
        navigate: "electronicsdetails"
    },
    {
        id: "12",
        name: "Logitech Keyboard",
        image: images.electronic12,
        price: "155.00",
        numReviews: 210,
        rating: 4.9,
        quantity: 60000,
        numSolds: 1200,
        categoryId: "4",
        navigate: "electronicsdetails"
    },
]

export const jewelries = [
    {
        id: "1",
        name: "Vidiya Gold Rings",
        image: images.jewelry1,
        price: "155.00",
        numReviews: 210,
        rating: 4.9,
        quantity: 60000,
        numSolds: 1200,
        categoryId: "6",
        navigate: "jewelrydetails"
    },
    {
        id: "2",
        name: "Diamond Necklace",
        image: images.jewelry2,
        price: "450.00",
        numReviews: 180,
        rating: 4.8,
        quantity: 35000,
        numSolds: 987,
        categoryId: "6",
        navigate: "jewelrydetails"
    },
    {
        id: "3",
        name: "Pearl Earrings",
        image: images.jewelry3,
        price: "75.00",
        numReviews: 150,
        rating: 4.5,
        quantity: 28000,
        numSolds: 632,
        categoryId: "6",
        navigate: "jewelrydetails"
    },
    {
        id: "5",
        name: "Ruby Pendant",
        image: images.jewelry5,
        price: "180.00",
        numReviews: 190,
        rating: 4.7,
        quantity: 30000,
        numSolds: 845,
        categoryId: "6",
        navigate: "jewelrydetails"
    },
    {
        id: "6",
        name: "Emerald Ring",
        image: images.jewelry6,
        price: "220.00",
        numReviews: 135,
        rating: 4.6,
        quantity: 25000,
        numSolds: 632,
        categoryId: "6",
        navigate: "jewelrydetails"
    },
    {
        id: "7",
        name: "Opal Necklace",
        image: images.jewelry7,
        price: "120.00",
        numReviews: 95,
        rating: 4.3,
        quantity: 18000,
        numSolds: 426,
        categoryId: "6",
        navigate: "jewelrydetails"
    },
    {
        id: "8",
        name: "Amethyst Earrings",
        image: images.jewelry8,
        price: "65.00",
        numReviews: 180,
        rating: 4.5,
        quantity: 22000,
        numSolds: 752,
        categoryId: "6",
        navigate: "jewelrydetails"
    },
    {
        id: "9",
        name: "Topaz Bracelet",
        image: images.jewelry9,
        price: "90.00",
        numReviews: 145,
        rating: 4.4,
        quantity: 26000,
        numSolds: 654,
        categoryId: "6",
        navigate: "jewelrydetails"
    },
    {
        id: "10",
        name: "Garnet Ring",
        image: images.jewelry10,
        price: "80.00",
        numReviews: 170,
        rating: 4.6,
        quantity: 24000,
        numSolds: 589,
        categoryId: "6",
        navigate: "jewelrydetails"
    },
    {
        id: "11",
        name: "Turquoise Necklace",
        image: images.jewelry11,
        price: "110.00",
        numReviews: 120,
        rating: 4.2,
        quantity: 20000,
        numSolds: 487,
        categoryId: "6",
        navigate: "jewelrydetails"
    },
    {
        id: "12",
        name: "Citrine Earrings",
        image: images.jewelry12,
        price: "70.00",
        numReviews: 160,
        rating: 4.3,
        quantity: 21000,
        numSolds: 752,
        categoryId: "6",
        navigate: "jewelrydetails"
    }
];

export const kitchens = [
    {
        id: "1",
        name: "Silicia Silver Knife",
        image: images.kitchen1,
        price: "120.00",
        numReviews: 160,
        rating: 4.3,
        quantity: 21000,
        numSolds: 752,
        categoryId: "7",
        navigate: "kitchendetails"
    },
    {
        id: "2",
        name: "Stainless Steel Cookware Set",
        image: images.kitchen2,
        price: "250.00",
        numReviews: 220,
        rating: 4.6,
        quantity: 15000,
        numSolds: 987,
        categoryId: "7",
        navigate: "kitchendetails"
    },
    {
        id: "3",
        name: "Non-Stick Frying Pan",
        image: images.kitchen3,
        price: "40.00",
        numReviews: 180,
        rating: 4.2,
        quantity: 18000,
        numSolds: 632,
        categoryId: "7",
        navigate: "kitchendetails"
    },
    {
        id: "4",
        name: "Chef's Knife",
        image: images.kitchen4,
        price: "80.00",
        numReviews: 140,
        rating: 4.1,
        quantity: 12000,
        numSolds: 514,
        categoryId: "7",
        navigate: "kitchendetails"
    },
    {
        id: "5",
        name: "Cast Iron Skillet",
        image: images.kitchen5,
        price: "60.00",
        numReviews: 200,
        rating: 4.5,
        quantity: 14000,
        numSolds: 845,
        categoryId: "7",
        navigate: "kitchendetails"
    },
    {
        id: "6",
        name: "Food Processor",
        image: images.kitchen6,
        price: "150.00",
        numReviews: 130,
        rating: 4.4,
        quantity: 10000,
        numSolds: 632,
        categoryId: "7",
        navigate: "kitchendetails"
    },
    {
        id: "7",
        name: "Blender",
        image: images.kitchen7,
        price: "100.00",
        numReviews: 190,
        rating: 4.3,
        quantity: 8000,
        numSolds: 426,
        categoryId: "7",
        navigate: "kitchendetails"
    },
    {
        id: "8",
        name: "Toaster Oven",
        image: images.kitchen8,
        price: "80.00",
        numReviews: 150,
        rating: 4.2,
        quantity: 9000,
        numSolds: 752,
        categoryId: "7",
        navigate: "kitchendetails"
    },
    {
        id: "9",
        name: "Coffee Maker",
        image: images.kitchen9,
        price: "70.00",
        numReviews: 170,
        rating: 4.4,
        quantity: 11000,
        numSolds: 654,
        categoryId: "7",
        navigate: "kitchendetails"
    },
    {
        id: "10",
        name: "Electric Kettle",
        image: images.kitchen10,
        price: "45.00",
        numReviews: 120,
        rating: 4.0,
        quantity: 7000,
        numSolds: 589,
        categoryId: "7",
        navigate: "kitchendetails"
    },
    {
        id: "11",
        name: "Mixer",
        image: images.kitchen11,
        price: "120.00",
        numReviews: 140,
        rating: 4.1,
        quantity: 7500,
        numSolds: 487,
        categoryId: "7",
        navigate: "kitchendetails"
    },
    {
        id: "12",
        name: "Rice Cooker",
        image: images.kitchen12,
        price: "55.00",
        numReviews: 160,
        rating: 4.3,
        quantity: 8500,
        numSolds: 752,
        categoryId: "7",
        navigate: "kitchendetails"
    }
];

export const shoes = [
    {
        id: "1",
        name: "Suga Leather Shoes",
        image: images.shoe1,
        price: "375.00",
        numReviews: 160,
        rating: 4.3,
        quantity: 8500,
        numSolds: 752,
        categoryId: "2",
        navigate: "shoesdetails"
    },
    {
        id: "2",
        name: "Classic Sneakers",
        image: images.shoe2,
        price: "90.00",
        numReviews: 180,
        rating: 4.5,
        quantity: 6000,
        numSolds: 987,
        categoryId: "2",
        navigate: "shoesdetails"
    },
    {
        id: "3",
        name: "High Heels",
        image: images.shoe3,
        price: "120.00",
        numReviews: 140,
        rating: 4.2,
        quantity: 5000,
        numSolds: 632,
        categoryId: "2",
        navigate: "shoesdetails"
    },
    {
        id: "4",
        name: "Running Shoes",
        image: images.shoe4,
        price: "110.00",
        numReviews: 200,
        rating: 4.6,
        quantity: 7500,
        numSolds: 514,
        categoryId: "2",
        navigate: "shoesdetails"
    },
    {
        id: "5",
        name: "Boots",
        image: images.shoe5,
        price: "150.00",
        numReviews: 180,
        rating: 4.4,
        quantity: 7000,
        numSolds: 845,
        categoryId: "2",
        navigate: "shoesdetails"
    },
    {
        id: "6",
        name: "Flip Flops",
        image: images.shoe6,
        price: "30.00",
        numReviews: 120,
        rating: 4.0,
        quantity: 4000,
        numSolds: 632,
        categoryId: "2",
        navigate: "shoesdetails"
    },
    {
        id: "7",
        name: "Loafers",
        image: images.shoe7,
        price: "80.00",
        numReviews: 190,
        rating: 4.3,
        quantity: 5500,
        numSolds: 426,
        categoryId: "2",
        navigate: "shoesdetails"
    },
    {
        id: "8",
        name: "Oxford Shoes",
        image: images.shoe8,
        price: "140.00",
        numReviews: 150,
        rating: 4.1,
        quantity: 4800,
        numSolds: 752,
        categoryId: "2",
        navigate: "shoesdetails"
    },
    {
        id: "9",
        name: "Sandals",
        image: images.shoe9,
        price: "60.00",
        numReviews: 170,
        rating: 4.4,
        quantity: 4500,
        numSolds: 654,
        categoryId: "2",
        navigate: "shoesdetails"
    },
    {
        id: "10",
        name: "Espadrilles",
        image: images.shoe10,
        price: "50.00",
        numReviews: 130,
        rating: 4.2,
        quantity: 3500,
        numSolds: 589,
        categoryId: "2",
        navigate: "shoesdetails"
    },
    {
        id: "11",
        name: "Wedding Shoes",
        image: images.shoe11,
        price: "200.00",
        numReviews: 140,
        rating: 4.3,
        quantity: 3000,
        numSolds: 487,
        categoryId: "2",
        navigate: "shoesdetails"
    },
    {
        id: "12",
        name: "Slippers",
        image: images.shoe12,
        price: "25.00",
        numReviews: 160,
        rating: 4.1,
        quantity: 4200,
        numSolds: 752,
        categoryId: "2",
        navigate: "shoesdetails"
    }
];

export const toys = [
    {
        id: "1",
        name: "Baby Bicycle",
        image: images.toy1,
        price: "250.00",
        numReviews: 160,
        rating: 4.5,
        quantity: 4200,
        numSolds: 752,
        categoryId: "8",
        navigate: "toysdetails"
    },
    {
        id: "2",
        name: "Baby Tractor Mini",
        image: images.toy2,
        price: "320.00",
        numReviews: 112,
        rating: 4.8,
        quantity: 4200,
        numSolds: 3240,
        categoryId: "8",
        navigate: "toysdetails"
    },
    {
        id: "3",
        name: "Baby Battle Tanks",
        image: images.toy3,
        price: "430.00",
        numReviews: 210,
        rating: 4.7,
        quantity: 4200,
        numSolds: 1092,
        categoryId: "8",
        navigate: "toysdetails"
    },
    {
        id: "4",
        name: "Baby Futuristic Car",
        image: images.toy4,
        price: "200.00",
        numReviews: 982,
        rating: 4.9,
        quantity: 4200,
        numSolds: 2782,
        categoryId: "8",
        navigate: "toysdetails"
    },
    {
        id: "5",
        name: "Baby Bicycle Orange",
        image: images.toy5,
        price: "170.00",
        numReviews: 832,
        rating: 4.5,
        quantity: 4200,
        numSolds: 2500,
        categoryId: "8",
        navigate: "toysdetails"
    },
    {
        id: "6",
        name: "Baby Bicycle Yellow",
        image: images.toy6,
        price: "290.00",
        numReviews: 870,
        rating: 4.9,
        quantity: 4200,
        numSolds: 1912,
        categoryId: "8",
        navigate: "toysdetails"
    },
    {
        id: "7",
        name: "Mini Rabbit",
        image: images.toy7,
        price: "34.50",
        numReviews: 150,
        rating: 4.8,
        quantity: 4200,
        numSolds: 2300,
        categoryId: "8",
        navigate: "toysdetails"
    },
    {
        id: "8",
        name: "Bicycle Woloah",
        image: images.toy8,
        price: "39.00",
        numReviews: 128,
        rating: 4.4,
        quantity: 4200,
        numSolds: 2768,
        categoryId: "8",
        navigate: "toysdetails"
    },
    {
        id: "9",
        name: "Plot Woloah",
        image: images.toy9,
        price: "70.00",
        numReviews: 120,
        rating: 4.7,
        quantity: 4200,
        numSolds: 2500,
        categoryId: "8",
        navigate: "toysdetails"
    },
    {
        id: "10",
        name: "Mini Marine Boat",
        image: images.toy10,
        price: "560.00",
        numReviews: 459,
        rating: 4.8,
        quantity: 4200,
        numSolds: 2480,
        categoryId: "8",
        navigate: "toysdetails"
    },
    {
        id: "11",
        name: "Anime Toy",
        image: images.toy11,
        price: "142.00",
        numReviews: 1602,
        rating: 4.9,
        quantity: 4200,
        numSolds: 1231,
        categoryId: "8",
        navigate: "toysdetails"
    },
    {
        id: "12",
        name: "Baby Truck",
        image: images.toy12,
        price: "980.00",
        numReviews: 1439,
        rating: 4.5,
        quantity: 4300,
        numSolds: 1452,
        categoryId: "8",
        navigate: "toysdetails"
    }
]

export const watches = [
    {
        id: "1",
        name: "Zonio Super Watch",
        image: images.watch1,
        price: "530.00",
        numReviews: 1618,
        rating: 4.7,
        quantity: 4300,
        numSolds: 2300,
        categoryId: "5",
        navigate: "watchdetails"
    },
    {
        id: "2",
        name: "Classic Analog Watch",
        image: images.watch2,
        price: "120.00",
        numReviews: 950,
        rating: 4.5,
        quantity: 2500,
        numSolds: 987,
        categoryId: "5",
        navigate: "watchdetails"
    },
    {
        id: "3",
        name: "Digital Sports Watch",
        image: images.watch3,
        price: "70.00",
        numReviews: 720,
        rating: 4.2,
        quantity: 1800,
        numSolds: 632,
        categoryId: "5",
        navigate: "watchdetails"
    },
    {
        id: "4",
        name: "Luxury Chronograph Watch",
        image: images.watch4,
        price: "750.00",
        numReviews: 890,
        rating: 4.8,
        quantity: 3200,
        numSolds: 514,
        categoryId: "5",
        navigate: "watchdetails"
    },
    {
        id: "5",
        name: "Smartwatch",
        image: images.watch5,
        price: "300.00",
        numReviews: 1200,
        rating: 4.6,
        quantity: 2800,
        numSolds: 845,
        categoryId: "5",
        navigate: "watchdetails"
    },
    {
        id: "6",
        name: "Fashion Wristwatch",
        image: images.watch6,
        price: "50.00",
        numReviews: 580,
        rating: 4.0,
        quantity: 1500,
        numSolds: 632,
        categoryId: "5",
        navigate: "watchdetails"
    },
    {
        id: "7",
        name: "Military Style Watch",
        image: images.watch7,
        price: "90.00",
        numReviews: 430,
        rating: 4.3,
        quantity: 1300,
        numSolds: 426,
        categoryId: "5",
        navigate: "watchdetails"
    },
    {
        id: "8",
        name: "Dress Watch",
        image: images.watch8,
        price: "200.00",
        numReviews: 750,
        rating: 4.4,
        quantity: 2000,
        numSolds: 752,
        categoryId: "5",
        navigate: "watchdetails"
    },
    {
        id: "9",
        name: "Fitness Tracker Watch",
        image: images.watch9,
        price: "150.00",
        numReviews: 880,
        rating: 4.5,
        quantity: 2400,
        numSolds: 654,
        categoryId: "5",
        navigate: "watchdetails"
    },
    {
        id: "10",
        name: "Skeleton Mechanical Watch",
        image: images.watch10,
        price: "400.00",
        numReviews: 620,
        rating: 4.1,
        quantity: 1700,
        numSolds: 589,
        categoryId: "5",
        navigate: "watchdetails"
    },
    {
        id: "11",
        name: "Gold Plated Watch",
        image: images.watch11,
        price: "280.00",
        numReviews: 510,
        rating: 4.2,
        quantity: 1500,
        numSolds: 487,
        categoryId: "5",
        navigate: "watchdetails"
    },
    {
        id: "12",
        name: "Traveler's Watch",
        image: images.watch12,
        price: "180.00",
        numReviews: 680,
        rating: 4.3,
        quantity: 1900,
        numSolds: 752,
        categoryId: "5",
        navigate: "watchdetails"
    }
];

export const products = {
    bags,
    clothes,
    electronics,
    jewelries,
    kitchens,
    shoes,
    toys,
    watches
}

export const popularProducts = [
    {
        id: "1",
        name: "Women's Shirt",
        image: images.cloth2,
        price: "25.00",
        numReviews: 240,
        rating: 560,
        quantity: 15000,
        numSolds: 6321,
        categoryId: "1",
        navigate: "clothesdetails"
    },
    {
        id: "2",
        name: "Burger Deal",
        image: images.bag1,
        price: "485.00",
        numReviews: 143,
        rating: 517,
        quantity: 1300,
        numSolds: 9373,
        navigate: "bagsdetails"
    },
    {
        id: "3",
        name: "Military Trouser",
        image: images.watch7,
        price: "90.00",
        numReviews: 430,
        rating: 490,
        quantity: 1300,
        numSolds: 426,
        categoryId: "5",
        navigate: "watchdetails"
    },
    {
        id: "4",
        name: "Ronin Headphone",
        image: images.electronic1,
        price: "120.00",
        numReviews: 156,
        rating: 488,
        quantity: 8500,
        numSolds: 5621,
        categoryId: "4",
        navigate: "electronicsdetails"
    },
    {
        id: "5",
        name: "Slim Fit Jeans",
        image: images.cloth3,
        price: "45.00",
        numReviews: 180,
        rating: 460,
        quantity: 10000,
        numSolds: 4236,
        categoryId: "1",
        navigate: "clothesdetails"
    },
    {
        id: "6",
        name: "Laptop Bag",
        image: images.bag3,
        price: "150.00",
        numReviews: 205,
        rating: 435,
        quantity: 300,
        numSolds: 1689,
        navigate: "bagsdetails"
    },
    {
        id: "7",
        name: "Half-sleeve Shirt",
        image: images.electronic2,
        price: "132.00",
        numReviews: 300,
        rating: 422,
        quantity: 8500,
        numSolds: 459,
        categoryId: "4",
        navigate: "electronicsdetails"
    },
    {
        id: "8",
        name: "Vidiya Gold Rings",
        image: images.jewelry1,
        price: "155.00",
        numReviews: 210,
        rating: 401,
        quantity: 60000,
        numSolds: 1200,
        categoryId: "6",
        navigate: "watchdetails"
    },
    {
        id: "9",
        name: "Infinix Hot 10",
        image: images.electronic3,
        price: "165.00",
        numReviews: 120,
        rating: 401,
        quantity: 50003,
        numSolds: 1230,
        categoryId: "4",
        navigate: "electronicsdetails"
    },
    {
        id: "10",
        name: "Diamond Necklace",
        image: images.jewelry2,
        price: "450.00",
        numReviews: 180,
        rating: 380,
        quantity: 35000,
        numSolds: 987,
        categoryId: "6",
        navigate: "jewelrydetails"
    }
]

export const baseProducts = [
    {
        id: "1",
        name: "Cotton T-Shirt",
        image: images.cloth2,
        price: "25.00",
        numReviews: 240,
        rating: 4.5,
        quantity: 15000,
        numSolds: 6321,
        categoryId: "1",
        navigate: "clothesdetails"
    },
    {
        id: "2",
        name: "Mini Plastic Bag",
        image: images.bag1,
        price: "485.00",
        numReviews: 143,
        rating: 4.5,
        quantity: 1300,
        numSolds: 9373,
        categoryId: "2",
        navigate: "bagsdetails"
    },
    {
        id: "3",
        name: "Military Style Watch",
        image: images.watch7,
        price: "90.00",
        numReviews: 430,
        rating: 4.3,
        quantity: 1300,
        numSolds: 426,
        categoryId: "5",
        navigate: "watchdetails"
    },
    {
        id: "4",
        name: "Vinia Headphone",
        image: images.electronic1,
        price: "120.00",
        numReviews: 156,
        rating: 4.4,
        quantity: 8500,
        numSolds: 5621,
        categoryId: "4",
        navigate: "electronicsdetails"
    },
    {
        id: "5",
        name: "Slim Fit Jeans",
        image: images.cloth3,
        price: "45.00",
        numReviews: 180,
        rating: 4.3,
        quantity: 10000,
        numSolds: 4236,
        categoryId: "1",
        navigate: "clothesdetails"
    },
    {
        id: "6",
        name: "Leather Messenger Bag",
        image: images.bag3,
        price: "150.00",
        numReviews: 205,
        rating: 4.8,
        quantity: 300,
        numSolds: 1689,
        categoryId: "3",
        navigate: "bagsdetails"
    },
    {
        id: "7",
        name: "Sonia Headphone",
        image: images.electronic2,
        price: "132.00",
        numReviews: 300,
        rating: 4.9,
        quantity: 8500,
        numSolds: 459,
        categoryId: "4",
        navigate: "electronicsdetails"
    },
    {
        id: "8",
        name: "Vidiya Gold Rings",
        image: images.jewelry1,
        price: "155.00",
        numReviews: 210,
        rating: 4.9,
        quantity: 60000,
        numSolds: 1200,
        categoryId: "6",
        navigate: "jewelrydetails"
    },
    {
        id: "9",
        name: "Tania Headphone",
        image: images.electronic3,
        price: "165.00",
        numReviews: 120,
        rating: 4.9,
        quantity: 50003,
        numSolds: 1230,
        categoryId: "4",
        navigate: "electronicsdetails"
    },
    {
        id: "10",
        name: "Diamond Necklace",
        image: images.jewelry2,
        price: "450.00",
        numReviews: 180,
        rating: 4.8,
        quantity: 35000,
        numSolds: 987,
        categoryId: "6",
        navigate: "jewelrydetails"
    },
    {
        id: "11",
        name: "Canvas Tote Bag",
        image: images.bag2,
        price: "25.00",
        numReviews: 98,
        rating: 4.2,
        quantity: 500,
        numSolds: 562,
        categoryId: "2",
        navigate: "bagsdetails"
    },
    {
        id: "12",
        name: "Pearl Earrings",
        image: images.jewelry3,
        price: "75.00",
        numReviews: 150,
        rating: 4.5,
        quantity: 28000,
        numSolds: 632,
        categoryId: "6",
        navigate: "jewelrydetails"
    },
    {
        id: "13",
        name: "Baby Bicycle",
        image: images.toy1,
        price: "250.00",
        numReviews: 160,
        rating: 4.5,
        quantity: 4200,
        numSolds: 752,
        categoryId: "8",
        navigate: "toysdetails"
    },
    {
        id: "14",
        name: "Baby Tractor Mini",
        image: images.toy2,
        price: "320.00",
        numReviews: 112,
        rating: 4.8,
        quantity: 4200,
        numSolds: 3240,
        categoryId: "8",
        navigate: "toysdetails"
    },
    {
        id: "15",
        name: "Baby Battle Tanks",
        image: images.toy3,
        price: "430.00",
        numReviews: 210,
        rating: 4.7,
        quantity: 4200,
        numSolds: 1092,
        categoryId: "8",
        navigate: "toysdetails"
    },
    {
        id: "16",
        name: "Baby Futuristic Car",
        image: images.toy4,
        price: "200.00",
        numReviews: 982,
        rating: 4.9,
        quantity: 4200,
        numSolds: 2782,
        categoryId: "8",
        navigate: "toysdetails"
    },
    {
        id: "17",
        name: "Baby Bicycle Orange",
        image: images.toy5,
        price: "170.00",
        numReviews: 832,
        rating: 4.5,
        quantity: 4200,
        numSolds: 2500,
        categoryId: "8",
        navigate: "toysdetails"
    },
    {
        id: "18",
        name: "Baby Bicycle Yellow",
        image: images.toy6,
        price: "290.00",
        numReviews: 870,
        rating: 4.9,
        quantity: 4200,
        numSolds: 1912,
        categoryId: "8",
        navigate: "toysdetails"
    },
    {
        id: "19",
        name: "Mini Rabbit",
        image: images.toy7,
        price: "34.50",
        numReviews: 150,
        rating: 4.8,
        quantity: 4200,
        numSolds: 2300,
        categoryId: "8",
        navigate: "toysdetails"
    },
    {
        id: "20",
        name: "Bicycle Woloah",
        image: images.toy8,
        price: "39.00",
        numReviews: 128,
        rating: 4.4,
        quantity: 4200,
        numSolds: 2768,
        categoryId: "8",
        navigate: "toysdetails"
    },
    {
        id: "21",
        name: "Fashion Wristwatch",
        image: images.watch6,
        price: "50.00",
        numReviews: 580,
        rating: 4.0,
        quantity: 1500,
        numSolds: 632,
        categoryId: "5",
        navigate: "watchdetails"
    },
    {
        id: "22",
        name: "Vanesa Long Shirt",
        image: images.cloth1,
        price: "320.00",
        numReviews: 405,
        rating: 4.9,
        quantity: 40000,
        numSolds: 9752,
        categoryId: "1",
        navigate: "clothesdetails"
    },
]
export const myWishlist = [
    {
        id: "1",
        name: "3 Person Pizza Deal",
        image: images.cloth2,
        price: "25.00",
        numReviews: 240,
        rating: 130,
        quantity: 15000,
        numSolds: 6321,
        categoryId: "1",
        navigate: "clothesdetails"
    },
    {
        id: "2",
        name: "AirPods Pro 2",
        image: images.bag1,
        price: "485.00",
        numReviews: 143,
        rating: 302,
        quantity: 1300,
        numSolds: 9373,
        categoryId: "3",
        navigate: "bagsdetails"
    },
    {
        id: "3",
        name: "M4 Smart Watch",
        image: images.watch7,
        price: "90.00",
        numReviews: 430,
        rating: 50,
        quantity: 1300,
        numSolds: 426,
        categoryId: "5",
        navigate: "watchdetails"
    }
];

export const ratings = [
    {
        id: "1",
        title: "All"
    },
    {
        id: "6",
        title: "5"
    },
    {
        id: "5",
        title: "4"
    },
    {
        id: "4",
        title: "3"
    },
    {
        id: "3",
        title: "2"
    },
    {
        id: "2",
        title: "1"
    }
];

export const sorts = [
    {
        id: "1",
        name: "Popular"
    },
    {
        id: "2",
        name: "Most Recent"
    },
    {
        id: "3",
        name: "Price High"
    },
    {
        id: "4",
        name: "Price Low"
    },
    {
        id: "5",
        name: "Most Rated"
    },
];

export const productReviews = [
    {
        id: "1",
        avatar: images.user1,
        name: "John Smith",
        description: "This product was simply amazing! The powerful motor and variety of settings made blending effortless. Highly recommended! 😍",
        rating: 4.8,
        avgRating: 5,
        date: "2024-03-28T12:00:00.000Z",
        numLikes: 320
    },
    {
        id: "2",
        avatar: images.user2,
        name: "Emily Davis",
        description: "I thoroughly enjoyed this item. The versatility and ease of use were exceptional. Definitely a staple in my kitchen!",
        rating: 4.7,
        avgRating: 5,
        date: "2024-03-28T12:00:00.000Z",
        numLikes: 95
    },
    {
        id: "3",
        avatar: images.user3,
        name: "Michael Rodriguez",
        description: "This product exceeded my expectations! The build quality and performance were remarkable. Will be recommending it to friends!",
        rating: 4.9,
        avgRating: 5,
        date: "2024-03-29T12:00:00.000Z",
        numLikes: 210
    },
    {
        id: "4",
        avatar: images.user4,
        name: "Sarah Brown",
        description: "I had a wonderful experience with this item. The design and functionality were outstanding, making it a joy to use. Highly recommend!",
        rating: 4.5,
        avgRating: 5,
        date: "2024-03-29T12:00:00.000Z",
        numLikes: 150
    },
    {
        id: "5",
        avatar: images.user5,
        name: "David Wilson",
        description: "Absolutely fantastic! This product exceeded my expectations with its performance and durability. It's a must-have for any kitchen!",
        rating: 3.8,
        avgRating: 4,
        date: "2024-02-31T12:00:00.000Z",
        numLikes: 500
    },
    {
        id: "6",
        avatar: images.user6,
        name: "Luca Dalasias",
        description: "This item exceeded my expectations! The build quality and performance were remarkable. Will be recommending it to friends!",
        rating: 4.8,
        avgRating: 5,
        date: "2024-02-29T12:00:00.000Z",
        numLikes: 210
    },
    {
        id: "7",
        avatar: images.user7,
        name: "Sophia Johnson",
        description: "I'm impressed by this product! The ease of use and durability make it a great addition to my daily routine.",
        rating: 4.6,
        avgRating: 5,
        date: "2024-04-15T12:00:00.000Z",
        numLikes: 180
    },
    {
        id: "8",
        avatar: images.user8,
        name: "Daniel White",
        description: "This item is a game-changer! It simplifies tasks and saves me so much time in the kitchen. Highly recommend it to everyone!",
        rating: 4.9,
        avgRating: 5,
        date: "2024-04-20T12:00:00.000Z",
        numLikes: 250
    },
    {
        id: "9",
        avatar: images.user9,
        name: "Olivia Martinez",
        description: "I'm in love with this product! It's stylish, efficient, and makes cooking a breeze. Definitely worth every penny!",
        rating: 5.0,
        avgRating: 5,
        date: "2024-04-22T12:00:00.000Z",
        numLikes: 380
    },
];

export const myCart = [
    {
        id: "1",
        name: "Mini Plastic Bag",
        image: images.bag1,
        price: 485.00, // Converted to a number
        numReviews: 143,
        rating: 4.5,  // Update the interface if necessary
        quantity: 1300,
        numSolds: 9373,
        navigate: "bagsdetails",
        color: "#949494",
        size: "M",
        categoryId: "4",
    },
    {
        id: "2",
        name: "Vinia Headphone",
        image: images.electronic1,
        price: 120.00, // Converted to a number
        numReviews: 156,
        rating: 4.4,  // Update the interface if necessary
        quantity: 8500,
        numSolds: 5621,
        categoryId: "4",
        navigate: "electronicsdetails",
        color: "#101010",
        size: null  // Optional, make sure the interface allows null or remove it
    },
    {
        id: "3",
        name: "Military Style Watch",
        image: images.watch7,
        price: 90.00, // Converted to a number
        numReviews: 430,
        rating: 4.3,  // Update the interface if necessary
        quantity: 1300,
        numSolds: 426,
        categoryId: "5",
        navigate: "watchdetails",
        color: "#7A5548",
        size: null  // Optional
    },
    {
        id: "4",
        name: "Suga Leather Shoes",
        image: images.shoe1,
        price: 375.00, // Converted to a number
        numReviews: 160,
        rating: 4.3,  // Update the interface if necessary
        quantity: 8500,
        numSolds: 752,
        categoryId: "2",
        navigate: "shoesdetails",
        color: "#E7E7E7",
        size: "42"
    },
    {
        id: "5",
        name: "Classic Sneakers",
        image: images.shoe2,
        price: 90.00, // Converted to a number
        numReviews: 180,
        rating: 4.5,  // Update the interface if necessary
        quantity: 6000,
        numSolds: 987,
        categoryId: "2",
        navigate: "shoesdetails",
        color: "#482173",
        size: "40"
    },
    {
        id: "6",
        name: "Leather Messenger Bag",
        image: images.bag3,
        price: 150.00, // Converted to a number
        numReviews: 205,
        rating: 4.8,  // Update the interface if necessary
        quantity: 300,
        numSolds: 1689,
        navigate: "bagsdetails",
        color: "#452681",
        size: "41",
        categoryId: "4",
    },
];


export const orderList = [
    {
        id: "1",
        name: "Mini Plastic Bag",
        image: images.bag1,
        price: "485.00",
        numReviews: 143,
        rating: 4.5,
        numSolds: 9373,
        navigate: "bagsdetails",
        color: "#949494",
        size: "M",
        quantity: 1
    },
    {
        id: "2",
        name: "Vinia Headphone",
        image: images.electronic1,
        price: "120.00",
        numReviews: 156,
        rating: 4.4,
        numSolds: 5621,
        categoryId: "4",
        navigate: "electronicsdetails",
        color: "#101010",
        size: null,
        quantity: 2
    },
    {
        id: "3",
        name: "Military Style Watch",
        image: images.watch7,
        price: "90.00",
        numReviews: 430,
        rating: 4.3,
        numSolds: 426,
        categoryId: "5",
        navigate: "watchdetails",
        color: "#7A5548",
        size: null,
        quantity: 2
    },
    {
        id: "4",
        name: "Suga Leather Shoes",
        image: images.shoe1,
        price: "375.00",
        numReviews: 160,
        rating: 4.3,
        numSolds: 752,
        categoryId: "2",
        navigate: "shoesdetails",
        color: "#E7E7E7",
        size: "42",
        quantity: 1
    },
    {
        id: "5",
        name: "Classic Sneakers",
        image: images.shoe2,
        price: "90.00",
        numReviews: 180,
        rating: 4.5,
        numSolds: 987,
        categoryId: "2",
        navigate: "shoesdetails",
        color: "#482173",
        size: "40",
        quantity: 1
    },
    {
        id: "6",
        name: "Leather Messenger Bag",
        image: images.bag3,
        price: "150.00",
        numReviews: 205,
        rating: 4.8,
        numSolds: 1689,
        navigate: "bagsdetails",
        color: "#452681",
        size: "41",
        quantity: 1
    },
]

export const ongoingOrders = [
    {
        id: "1",
        name: "Mini Plastic Bag",
        image: images.bag1,
        price: "485.00",
        numReviews: 143,
        rating: 4.5,
        numSolds: 9373,
        navigate: "bagsdetails",
        color: "#949494",
        size: "M",
        quantity: 1,
        address: "123 Main St, Cityville",
        status: "Paid",
    },
    {
        id: "2",
        name: "Vinia Headphone",
        image: images.electronic1,
        price: "120.00",
        numReviews: 156,
        rating: 4.4,
        numSolds: 5621,
        categoryId: "4",
        navigate: "electronicsdetails",
        color: "#101010",
        size: null,
        quantity: 2,
        address: "456 Oak St, Townsville",
        status: "Paid",
    },
    {
        id: "3",
        name: "Military Style Watch",
        image: images.watch7,
        price: "90.00",
        numReviews: 430,
        rating: 4.3,
        numSolds: 426,
        categoryId: "5",
        navigate: "watchdetails",
        color: "#7A5548",
        size: null,
        quantity: 2,
        address: "789 Pine St, Villagetown",
        status: "Paid",
    },
    {
        id: "4",
        name: "Suga Leather Shoes",
        image: images.shoe1,
        price: "375.00",
        numReviews: 160,
        rating: 4.3,
        numSolds: 752,
        categoryId: "2",
        navigate: "shoesdetails",
        color: "#E7E7E7",
        size: "42",
        quantity: 1,
        address: "910 Elm St, Hamlet",
        status: "Paid",
    },
    {
        id: "5",
        name: "Classic Sneakers",
        image: images.shoe2,
        price: "90.00",
        numReviews: 180,
        rating: 4.5,
        numSolds: 987,
        categoryId: "2",
        navigate: "shoesdetails",
        color: "#482173",
        size: "40",
        quantity: 1,
        address: "321 Maple St, Suburbia",
        status: "Paid",
    },
    {
        id: "6",
        name: "Leather Messenger Bag",
        image: images.bag3,
        price: "150.00",
        numReviews: 205,
        rating: 4.8,
        numSolds: 1689,
        navigate: "bagsdetails",
        color: "#452681",
        size: "41",
        quantity: 1,
        address: "567 Cedar St, Countryside",
        status: "Paid",
    },
]

export const completedOrders = [
    {
        id: "1",
        name: "Mini Plastic Bag",
        image: images.bag1,
        price: "485.00",
        numReviews: 143,
        rating: 4.5,
        numSolds: 9373,
        navigate: "bagsdetails",
        color: "#949494",
        size: "M",
        quantity: 1,
        address: "123 Main St, Cityville",
        status: "Paid",
    },
    {
        id: "2",
        name: "Vinia Headphone",
        image: images.electronic1,
        price: "120.00",
        numReviews: 156,
        rating: 4.4,
        numSolds: 5621,
        categoryId: "4",
        navigate: "electronicsdetails",
        color: "#101010",
        size: null,
        quantity: 2,
        address: "456 Oak St, Townsville",
        status: "Paid",
    },
    {
        id: "3",
        name: "Military Style Watch",
        image: images.watch7,
        price: "90.00",
        numReviews: 430,
        rating: 4.3,
        numSolds: 426,
        categoryId: "5",
        navigate: "watchdetails",
        color: "#7A5548",
        size: null,
        quantity: 2,
        address: "789 Pine St, Villagetown",
        status: "Paid",
    },
    {
        id: "4",
        name: "Suga Leather Shoes",
        image: images.shoe1,
        price: "375.00",
        numReviews: 160,
        rating: 4.3,
        numSolds: 752,
        categoryId: "2",
        navigate: "shoesdetails",
        color: "#E7E7E7",
        size: "42",
        quantity: 1,
        address: "910 Elm St, Hamlet",
        status: "Paid",
    },
    {
        id: "5",
        name: "Classic Sneakers",
        image: images.shoe2,
        price: "90.00",
        numReviews: 180,
        rating: 4.5,
        numSolds: 987,
        categoryId: "2",
        navigate: "shoesdetails",
        color: "#482173",
        size: "40",
        quantity: 1,
        address: "321 Maple St, Suburbia",
        status: "Paid",
    },
    {
        id: "6",
        name: "Leather Messenger Bag",
        image: images.bag3,
        price: "150.00",
        numReviews: 205,
        rating: 4.8,
        numSolds: 1689,
        navigate: "bagsdetails",
        color: "#452681",
        size: "41",
        quantity: 1,
        address: "567 Cedar St, Countryside",
        status: "Paid",
    },
]

export const cancelledOrders = [
    {
        id: "1",
        name: "Mini Plastic Bag",
        image: images.bag1,
        price: "485.00",
        numReviews: 143,
        rating: 4.5,
        numSolds: 9373,
        navigate: "bagsdetails",
        color: "#949494",
        size: "M",
        quantity: 1,
        address: "123 Main St, Cityville",
        status: "Refunded",
    },
    {
        id: "2",
        name: "Vinia Headphone",
        image: images.electronic1,
        price: "120.00",
        numReviews: 156,
        rating: 4.4,
        numSolds: 5621,
        categoryId: "4",
        navigate: "electronicsdetails",
        color: "#101010",
        size: null,
        quantity: 2,
        address: "456 Oak St, Townsville",
        status: "Refunded",
    },
    {
        id: "3",
        name: "Military Style Watch",
        image: images.watch7,
        price: "90.00",
        numReviews: 430,
        rating: 4.3,
        numSolds: 426,
        categoryId: "5",
        navigate: "watchdetails",
        color: "#7A5548",
        size: null,
        quantity: 2,
        address: "789 Pine St, Villagetown",
        status: "Refunded",
    },
    {
        id: "4",
        name: "Suga Leather Shoes",
        image: images.shoe1,
        price: "375.00",
        numReviews: 160,
        rating: 4.3,
        numSolds: 752,
        categoryId: "2",
        navigate: "shoesdetails",
        color: "#E7E7E7",
        size: "42",
        quantity: 1,
        address: "910 Elm St, Hamlet",
        status: "Refunded",
    },
    {
        id: "5",
        name: "Classic Sneakers",
        image: images.shoe2,
        price: "90.00",
        numReviews: 180,
        rating: 4.5,
        numSolds: 987,
        categoryId: "2",
        navigate: "shoesdetails",
        color: "#482173",
        size: "40",
        quantity: 1,
        address: "321 Maple St, Suburbia",
        status: "Refunded",
    },
    {
        id: "6",
        name: "Leather Messenger Bag",
        image: images.bag3,
        price: "150.00",
        numReviews: 205,
        rating: 4.8,
        numSolds: 1689,
        navigate: "bagsdetails",
        color: "#452681",
        size: "41",
        quantity: 1,
        address: "567 Cedar St, Countryside",
        status: "Refunded",
    },
];

export const notifications = [
    {
        id: "1",
        icon: icons.discount,
        title: "New Discount Added",
        description: "One More Discount added By Sphaere, Check it out",
        date: "2025-01-16T04:52:06.501Z"
    },
    {
        id: "2",
        icon: icons.chat,
        title: "Order Confirmation",
        description: "Congratulations! Your order has been successfully placed. Tap for details.",
        date: "2024-01-23T04:52:06.501Z"
    },
    {
        id: "6",
        icon: icons.box,
        title: "Payment Method Linked",
        description: "Your payment method has been successfully linked to your account.",
        date: "2024-01-23T04:52:06.501Z"
    }
];
