import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";
// Menu items with Cloudinary URLs (based on the item name for image URLs)
const allItems = [
    // **Biriyani’s**
    {
        id: 1,
        category: "Biriyani’s",
        name: "Hyd Chicken Biriyani",
        description: "Traditional Hyderabadi chicken biriyani.",
        price: "₹130",
        imageUrl: "v1741238941/chickenbiriyani_u9ipk7.png",
        },
        {
        id: 2,
        category: "Biriyani’s",
        name: "Special Chicken Biriyani",
        description: "A special variant of Hyderabadi biriyani.",
        price: "₹160",
        imageUrl: "specialchickenbiriyani_vdauhq.png",
        },
        {
        id: 3,
        category: "Biriyani’s",
        name: "Fried Piece Biriyani",
        description: "Crispy fried chicken piece biriyani.",
        price: "₹150",
        imageUrl: "frypiecebiriyani_fom8qa.png",
        },
        {
        id: 4,
        category: "Biriyani’s",
        name: "Biriyani Rice",
        description: "Delicious biriyani rice.",
        price: "₹80",
        imageUrl: "biriyanirice_xebm6n.png",
        },
        {
        id: 5,
        category: "Biriyani’s",
        name: "Chicken mini Biriyani",
        description: "Mini version of chicken biriyani.",
        price: "₹100",
        imageUrl: "minibiriyani_hpfqnh.png",
        },
    
        // **Fried Chicken**
        {
        id: 6,
        category: "Fried Chicken",
        name: "Fried Chicken Leg Piece",
        description: "Crispy fried chicken leg piece.",
        price: "₹80",
        imageUrl: "friedchickenlegpiece_o4fb72.png",
        },
        {
        id: 7,
        category: "Fried Chicken",
        name: "Chicken Popcorn (R)",
        description: "Delicious fried chicken popcorn (Regular).",
        price: "₹90",
        imageUrl: "chickenpopcorn_c50ptf.png",
        },
        {
        id: 8,
        category: "Fried Chicken",
        name: "Chicken Popcorn (L)",
        description: "Delicious fried chicken popcorn (Large).",
        price: "₹130",
        imageUrl: "chickenpopcorn_c50ptf.png",
        },
        {
        id: 9,
        category: "Fried Chicken",
        name: "Cheese Chicken Popcorn",
        description: "Cheesy chicken popcorn.",
        price: "₹120",
        imageUrl: "/v1741169903/chickencheesepopcorn_xri8xg.png",
        },
        {
        id: 10,
        category: "Fried Chicken",
        name: "Chicken Nuggets (5pc)",
        description: "Crispy chicken nuggets.",
        price: "₹100",
        imageUrl: "v1741169892/chickennuggets_w4q9ne.png",
        },
        {
        id: 11,
        category: "Fried Chicken",
        name: "Chicken Wings (5pc)",
        description: "Spicy chicken wings.",
        price: "₹120",
        imageUrl: "/v1741169879/chickenwings_juausp.png",
        },
        {
        id: 12,
        category: "Fried Chicken",
        name: "Chicken Lollypop (5pc)",
        description: "Chicken lollypop.",
        price: "₹130",
        imageUrl: "v1741169893/chickenlollypop_ptplsj.png",
        },
        {
        id: 13,
        category: "Fried Chicken",
        name: "Chicken Strips",
        description: "Crispy chicken strips.",
        price: "₹110",
        imageUrl: "v1741169880/chickenstrips_y9xgte.png",
        },
    
        // **Short Eats**
        {
        id: 14,
        category: "Short Eats",
        name: "French Fries (R)",
        description: "Crispy and tasty French fries (Regular).",
        price: "₹60",
        imageUrl: "v1741169906/frenchfries_ae1m3e.png",
        },
        {
        id: 15,
        category: "Short Eats",
        name: "French Fries (M)",
        description: "Crispy and tasty French fries (Medium).",
        price: "₹90",
        imageUrl: "v1741169906/frenchfries_ae1m3e.png",
        },
        {
        id: 16,
        category: "Short Eats",
        name: "French Fries (L)",
        description: "Crispy and tasty French fries (Large).",
        price: "₹130",
        imageUrl: "v1741169906/frenchfries_ae1m3e.png",
        },
        {
        id: 17,
        category: "Short Eats",
        name: "Cheese Fries",
        description: "Cheesy French fries.",
        price: "₹100",
        imageUrl: "v1741169883/cheesefries_mxyoi6.png",
        },
        {
        id: 18,
        category: "Short Eats",
        name: "Potato Wedges (R)",
        description: "Crispy potato wedges (Regular).",
        price: "₹70",
        imageUrl: "v1741170544/potatowedges_gae7ie.png",
        },
        {
        id: 19,
        category: "Short Eats",
        name: "Potato Wedges (M)",
        description: "Crispy potato wedges (Medium).",
        price: "₹100",
        imageUrl: "v1741170544/potatowedges_gae7ie.png",
        },
        {
        id: 20,
        category: "Short Eats",
        name: "Potato Wedges (L)",
        description: "Crispy potato wedges (Large).",
        price: "₹130",
        imageUrl: "v1741170544/potatowedges_gae7ie.png",
        },
        {
        id: 21,
        category: "Short Eats",
        name: "Veg Nuggets (8pc)",
        description: "Vegetarian nuggets.",
        price: "₹90",
        imageUrl: "v1741169880/vegnuggets_yv6rip.png",
        },
        {
        id: 22,
        category: "Short Eats",
        name: "Potato Chese blends (10pc)",
        description: "Cheesy potato blends.",
        price: "₹110",
        imageUrl: "v1741169871/potatocheeseblends_e97efs.png",
        },
    
        // **Wraps**
        {
        id: 23,
        category: "Wraps",
        name: "Classic Veg Wrap",
        description: "Classic vegetarian wrap.",
        price: "₹80",
        imageUrl: "/v1741169861/vegwrap_ybpzau.png",
        },
        {
        id: 24,
        category: "Wraps",
        name: "Panner Wrap",
        description: "Paneer wrap.",
        price: "₹90",
        imageUrl: "/v1741170543/paneerwrap_uxbp61.png",
        },
        {
        id: 25,
        category: "Wraps",
        name: "Peri-peri veg wrap",
        description: "Spicy peri-peri veg wrap.",
        price: "₹100",
        imageUrl: "/v1741169861/vegwrap_ybpzau.png",
        },
        {
        id: 26,
        category: "Wraps",
        name: "Classic Chicken Wrap",
        description: "Classic chicken wrap.",
        price: "₹90",
        imageUrl: "v1741169865/chickenwrap_wjtqdr.png",
        },
        {
        id: 27,
        category: "Wraps",
        name: "Peri-Peri Chicken Wrap",
        description: "Spicy peri-peri chicken wrap.",
        price: "₹110",
        imageUrl: "v1741169866/periperichickenwrap_udsunr.png",
        },
    
        // **Burgers**
        {
        id: 28,
        category: "Burgers",
        name: "Aloo Tikki Burger",
        description: "Crispy aloo tikki burger.",
        price: "₹70",
        imageUrl: "/v1741170549/vegpaneerburger_npbtsb.png",
        },
        {
        id: 29,
        category: "Burgers",
        name: "Premium Veg Burger",
        description: "Premium vegetarian burger.",
        price: "₹90",
        imageUrl: "v1741169856/vegburger_keo1lz.png",
        },
        {
        id: 30,
        category: "Burgers",
        name: "Veg Tower Burger",
        description: "Towering vegetarian burger.",
        price: "₹110",
        imageUrl: "v1741170553/vegpremiumburger_a63qck.png",
        },
        {
        id: 31,
        category: "Burgers",
        name: "Panner Burger",
        description: "Paneer burger.",
        price: "₹90",
        imageUrl: "v1741244914/tikkiburger_cfot90.png",
        },
        {
        id: 32,
        category: "Burgers",
        name: "Chicken Burgers",
        description: "Classic chicken burger.",
        price: "₹90",
        imageUrl: "v1741169865/chickenburger_qijmbo.png",
        },
        {
        id: 33,
        category: "Burgers",
        name: "Spl Chicken Burgers",
        description: "Special chicken burger.",
        price: "₹100",
        imageUrl: "v1741170558/splchickenburger_lwslxb.png",
        },
        {
        id: 34,
        category: "Burgers",
        name: "Crunchy Chicken Burger",
        description: "Crunchy chicken burger.",
        price: "₹110",
        imageUrl: "v1741170530/crunchychickenburger_xwd5ow.png",
        },
        {
        id: 35,
        category: "Burgers",
        name: "Chicken Tower Burger",
        description: "Towering chicken burger.",
        price: "₹140",
        imageUrl: "v1741245568/chickentowerburger_l3ihak.png",
        },
    
        // **Pizza**
        {
        id: 36,
        category: "Pizzas",
        name: "Marghareta Pizza",
        description: "Classic margherita pizza.",
        price: "₹110",
        imageUrl: "v1741170551/peperonipizza_ifykfw.png",
        },
        {
        id: 37,
        category: "Pizzas",
        name: "Double Chese Marghareta Pizza",
        description: "Double cheese margherita pizza.",
        price: "₹150",
        imageUrl: "v1741257511/margharitapizza_g4vajo.png",
        },
        {
        id: 38,
        category: "Pizzas",
        name: "Sweet corn Pizza",
        description: "Sweet corn pizza.",
        price: "₹120",
        imageUrl: "v1741170538/cornpizza_kaubwy.png",
        },
        {
        id: 39,
        category: "Pizzas",
        name: "Mushroom pizza",
        description: "Mushroom pizza.",
        price: "₹150",
        imageUrl: "/v1741170535/mushroompizza_oojcia.png",
        },
        {
        id: 40,
        category: "Pizzas",
        name: "Panner pizza",
        description: "Paneer pizza.",
        price: "₹160",
        imageUrl: "/v1741170535/paneerpizza_ndfo01.png",
        },
        {
        id: 41,
        category: "Pizzas",
        name: "Veg Lover’s Pizza",
        description: "Veggie lover's pizza.",
        price: "₹150",
        imageUrl: "v1741169854/vegpizza_xhl6o2.png",
        },
        {
        id: 42,
        category: "Pizzas",
        name: "Veg Supreem pizza",
        description: "Veg supreme pizza.",
        price: "₹160",
        imageUrl: "v1741258963/vegsupreme_jbtptg.png",
        },
        {
        id: 43,
        category: "Pizzas",
        name: "Classic Chicken Pizza",
        description: "Classic chicken pizza.",
        price: "₹160",
        imageUrl: "v1741169850/chickenpizza_aobbaf.png",
        },
        {
        id: 44,
        category: "Pizzas",
        name: "Spicy Chicken Pizza",
        description: "Spicy chicken pizza.",
        price: "₹170",
        imageUrl: "/v1741258188/spicychickenpizza_k0c93a.png",
        },
        {
        id: 45,
        category: "Pizzas",
        name: "Chicken 65 Pizza",
        description: "Chicken 65 pizza.",
        price: "₹180",
        imageUrl: "/v1741170525/chicken65pizza_xon5k4.png",
        },
        {
        id: 46,
        category: "Pizzas",
        name: "Chicken Tikka Pizza",
        description: "Chicken tikka pizza.",
        price: "₹190",
        imageUrl: "/v1741258368/chickentikkapizza_tuibsl.png",
        },
        {
        id: 47,
        category: "Pizzas",
        name: "Chicken Supreme Pizza",
        description: "Chicken supreme pizza.",
        price: "₹200",
        imageUrl: "/v1741258710/chickensupremepizza_lsh5nb.png",
        },
    
        // **Garlic Breads**
        {
        id: 48,
        category: "Garlic Breads",
        name: "Plain Garlic Bread",
        description: "Plain garlic bread.",
        price: "₹80",
        imageUrl: "v1741169849/garlicbread_hduhbr.png",
        },
        {
        id: 49,
        category: "Garlic Breads",
        name: "Cheese Garlic Bread",
        description: "Cheesy garlic bread.",
        price: "₹100",
        imageUrl: "v1741259133/cheesegarlicbread_uufav0.png",
        },
        {
        id: 50,
        category: "Garlic Breads",
        name: "Veg Garlic Bread (C3)",
        description: "Vegetarian garlic bread with toppings.",
        price: "₹120",
        imageUrl: "v1741169849/garlicbread_hduhbr.png",
        },
        {
            id: 51,
            category: "Garlic Breads",
            name: "Chicken Garlic Bread",
            description: "Chicken garlic bread.",
            price: "₹120",
            imageUrl: "/v1741259430/chickengarlic_y3tqhq.png",
        },
        {
            id: 52,
            category: "Garlic Breads",
            name: "Chicken Garlic Bread (C3)",
            description: "Chicken garlic bread with toppings.",
            price: "₹140",
            imageUrl: "/v1741259430/chickengarlic_y3tqhq.png",
        },
        
        // **Pasta’s**
        {
            id: 53,
            category: "Pasta’s",
            name: "White Sauce Veg Pasta",
            description: "Vegetarian pasta in white sauce.",
            price: "₹100",
            imageUrl: "/v1741169845/whitepasta_sd0boa.png",
        },
        {
            id: 54,
            category: "Pasta’s",
            name: "Red Sauce Veg Pasta",
            description: "Vegetarian pasta in red sauce.",
            price: "₹100",
            imageUrl: "v1741169838/redpasta_vd7qxy.png",
        },
        {
            id: 55,
            category: "Pasta’s",
            name: "White Sauce Chicken Pasta",
            description: "Chicken pasta in white sauce.",
            price: "₹120",
            imageUrl: "/whitechickenpasta_j4vtyd.png",
        },
        {
            id: 56,
            category: "Pasta’s",
            name: "Red Sauce Chicken Pasta",
            description: "Chicken pasta in red sauce.",
            price: "₹120",
            imageUrl: "/v1741259794/redchickenpasta_kqjhy5.png",
        },
        
        // **Veg Salad’s**
        {
            id: 57,
            category: "Salad’s",
            name: "Garden Fresh Salad",
            description: "Fresh garden salad.",
            price: "₹80",
            imageUrl: "v1741170561/vegsalad_hzwn3m.png",
        },
        {
            id: 58,
            category: "Salad’s",
            name: "Delight Salad",
            description: "Delightful veg salad.",
            price: "₹80",
            imageUrl: "/v1741170561/vegsalad_hzwn3m.png",
        },
        {
            id: 59,
            category: "Salad’s",
            name: "Corn Peas Salad",
            description: "Salad with corn and peas.",
            price: "₹80",
            imageUrl: "/v1741170550/cornsalad_lvxyxl.png",
        },
        
        // **Sandwiches**
        {
            id: 60,
            category: "Sandwiches",
            name: "Jam toast Sandwich",
            description: "Jam toast sandwich.",
            price: "₹55",
            imageUrl: "/v1741169833/jamtoastsandwitch_lj98zo.png",
        },
        {
            id: 61,
            category: "Sandwiches",
            name: "Peanut toast Sandwich",
            description: "Peanut toast sandwich.",
            price: "₹55",
            imageUrl: "/v1741170541/peanutbuttersandwich_zeroam.png",
        },
        {
            id: 62,
            category: "Sandwiches",
            name: "Gulkand toast Sandwich",
            description: "Gulkand toast sandwich.",
            price: "₹55",
            imageUrl: "/v1741260197/gulkand_bfyuij.png",
        },
        {
            id: 63,
            category: "Sandwiches",
            name: "Nutella toast Sandwich",
            description: "Nutella toast sandwich.",
            price: "₹65",
            imageUrl: "/v1741170541/peanutbuttersandwich_zeroam.png",
        },
        {
            id: 64,
            category: "Sandwiches",
            name: "Corn Sandwich",
            description: "Corn sandwich.",
            price: "₹65",
            imageUrl: "v1741260428/cornsandwich_piai9d.png",
        },
        {
            id: 65,
            category: "Sandwiches",
            name: "Cheese Toast Sandwich",
            description: "Cheese toast sandwich.",
            price: "₹65",
            imageUrl: "v1741169850/cheesesandwich_bnn8wh.png",
        },
        {
            id: 66,
            category: "Sandwiches",
            name: "Veg Toast Sandwich",
            description: "Vegetarian toast sandwich.",
            price: "₹70",
            imageUrl: "v1741261880/vegsandwich_mlcxkw.png",
        },
        {
            id: 67,
            category: "Sandwiches",
            name: "Paneer toast Sandwich",
            description: "Paneer toast sandwich.",
            price: "₹80",
            imageUrl: "/v1741170543/paneersandwich_afttjv.png",
        },
        {
            id: 68,
            category: "Sandwiches",
            name: "Classic chicken Sandwich",
            description: "Classic chicken sandwich.",
            price: "₹80",
            imageUrl: "/v1741170538/chickensandwich_syot5z.png",
        },
        {
            id: 69,
            category: "Sandwiches",
            name: "Spl Chicken toast Sandwich",
            description: "Special chicken toast sandwich.",
            price: "₹100",
            imageUrl: "v1741170538/chickensandwich_syot5z.png",
        },
        
        // **Non-Veg Salad’s**
        {
            id: 70,
            category: "Salad’s",
            name: "Chicken Ceaser Salad",
            description: "Classic chicken Caesar salad.",
            price: "₹100",
            imageUrl: "v1741170525/chickensalad_fg5ftp.png",
        },
        {
            id: 71,
            category: "Salad’s",
            name: "Crunchy Chicken Salad",
            description: "Crunchy chicken salad.",
            price: "₹100",
            imageUrl: "v1741170525/chickensalad_fg5ftp.png",
        },
        
        // **Dessert's**
        {
            id: 72,
            category: "Dessert's",
            name: "Gulab Jamun",
            description: "Sweet and soft gulab jamun.",
            price: "₹40",
            imageUrl: "/v1741169843/gulabjamun_xwqcun.png",
        },
        {
            id: 73,
            category: "Dessert's",
            name: "Gulab jamun with ice",
            description: "Gulab jamun served with ice cream.",
            price: "₹60",
            imageUrl: "/v1741169830/gulabjamunwithice_njql8b.png",
        },
        {
            id: 74,
            category: "Dessert's",
            name: "Brownie",
            description: "Chocolate brownie.",
            price: "₹90",
            imageUrl: "/v1741169829/brownie_bvvwbh.png",
        },
        {
            id: 75,
            category: "Dessert's",
            name: "Brownie with ice Cream",
            description: "Brownie served with ice cream.",
            price: "₹110",
            imageUrl: "/v1741169832/browniewithicecream_lstmrj.png",
        },
        {
            id: 76,
            category: "Dessert's",
            name: "Sizzling Brownie",
            description: "Sizzling hot brownie.",
            price: "₹140",
            imageUrl: "/v1741169829/brownie_bvvwbh.png",
        },
        
        // **Ice Creams**
        {
            id: 77,
            category: "Ice Creams",
            name: "Vanilla",
            description: "Classic vanilla ice cream.",
            price: "₹60",
            imageUrl: "/v1741262475/vannilaicecream_a2gho8.png",
        },
        {
            id: 78,
            category: "Ice Creams",
            name: "Strawberry",
            description: "Strawberry ice cream.",
            price: "₹70",
            imageUrl: "/v1741169827/strawberryicecream_hsxaug.png",
        },
        {
            id: 79,
            category: "Ice Creams",
            name: "Black Current",
            description: "Black currant ice cream.",
            price: "₹80",
            imageUrl: "/v1741169833/blackcurrent_duushv.png",
        },
        {
            id: 80,
            category: "Ice Creams",
            name: "Butter Scotch",
            description: "Butterscotch ice cream.",
            price: "₹80",
            imageUrl: "/v1741169910/butterscotch_h7qvs4.png",
        },
        {
            id: 81,
            category: "Ice Creams",
            name: "Chocolate",
            description: "Chocolate ice cream.",
            price: "₹90",
            imageUrl: "v1741169829/chocolateicecream_rhckni.png",
        },
        
        // **Milk Shakes**
        {
            id: 82,
            category: "Milk Shakes",
            name: "Vanilla",
            description: "Vanilla milkshake.",
            price: "₹70",
            imageUrl: "/v1741169829/vannilamilkshake_ahacb2.png",
        },
        {
            id: 83,
            category: "Milk Shakes",
            name: "Strawberry",
            description: "Strawberry milkshake.",
            price: "₹80",
            imageUrl: "/v1741169916/strawberrymilkshake_npndt3.png",
        },
        {
            id: 84,
            category: "Milk Shakes",
            name: "Pine Apple",
            description: "Pineapple milkshake.",
            price: "₹90",
            imageUrl: "/v1741170555/pineapplemilkshake_creha5.png",
        },
        {
            id: 85,
            category: "Milk Shakes",
            name: "Butter Scotch",
            description: "Butterscotch milkshake.",
            price: "₹80",
            imageUrl: "/v1741169822/butterscotchmilkshake_gy471w.png",
        },
        {
            id: 86,
            category: "Milk Shakes",
            name: "Banana",
            description: "Banana milkshake.",
            price: "₹80",
            imageUrl: "/v1741169821/bananamilkshake_ayrtcl.png",
        },
        {
            id: 87,
            category: "Milk Shakes",
            name: "Mango",
            description: "Mango milkshake.",
            price: "₹100",
            imageUrl: "/v1741169821/mangomilkshake_gbja4t.png",
        },
        {
            id: 88,
            category: "Milk Shakes",
            name: "Black Current",
            description: "Black currant milkshake.",
            price: "₹100",
            imageUrl: "v1741169821/blackcurrentmilkshake_blyiha.png",
        },
        {
            id: 89,
            category: "Milk Shakes",
            name: "Blue Berry",
            description: "Blueberry milkshake.",
            price: "₹100",
            imageUrl: "/v1741169821/blueberrymilkshake_u9jyes.png",
        },
        {
            id: 90,
            category: "Milk Shakes",
            name: "Chocolate",
            description: "Chocolate milkshake.",
            price: "₹120",
            imageUrl: "v1741169824/chocolatemilkshake_cxduph.png",
        },
        {
            id: 91,
            category: "Milk Shakes",
            name: "Brownie",
            description: "Brownie milkshake.",
            price: "₹110",
            imageUrl: "v1741169837/browniemilkshake_azelnl.png",
        },
        {
            id: 92,
            category: "Milk Shakes",
            name: "Kit-kat",
            description: "Kit-Kat milkshake.",
            price: "₹110",
            imageUrl: "/v1741263165/kitkat_qbntv9.png",
        },
        {
            id: 93,
            category: "Milk Shakes",
            name: "Oreo",
            description: "Oreo milkshake.",
            price: "₹110",
            imageUrl: "/v1741169821/oreamilkshake_k6llgd.png",
        },
        
        // **Mojito's**
        {
            id: 94,
            category: "Mojito's",
            name: "Virgin mojito",
            description: "Classic virgin mojito.",
            price: "₹80",
            imageUrl: "/v1741263528/virgin_fum2sk.png",
        },
        {
            id: 95,
            category: "Mojito's",
            name: "Blue Ocean",
            description: "Blue ocean mojito.",
            price: "₹90",
            imageUrl: "/v1741169823/blueoceanmojito_of9hgq.png",
        },
        {
            id: 96,
            category: "Mojito's",
            name: "Grenery",
            description: "Green mojito.",
            price: "₹90",
            imageUrl: "/v1741263523/greenery_bayjg8.png",
        },
        {
            id: 97,
            category: "Mojito's",
            name: "Water Melon",
            description: "Watermelon mojito.",
            price: "₹80",
            imageUrl: "v1741169820/watermelonmojito_sd0tgq.png",
        },
        {
            id: 98,
            category: "Mojito's",
            name: "Raspberry",
            description: "Raspberry mojito.",
            price: "₹80",
            imageUrl: "/v1741169819/raspberrymojito_gcjxcl.png",
        },
        ];

    // Categories for filtering items
    const categories = [
    "Biriyani’s",
    "Fried Chicken",
    "Short Eats",
    "Burgers",
    "Wraps",
    "Pizzas",
    "Garlic Breads",
    "Pasta’s",
    "Salad’s",
    "Sandwiches",
    "Ice Creams",
    "Milk Shakes",
    "Mojito's",
    "Dessert's",
    ];

    const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState("Biriyani’s");

    // Filter items based on the selected category
    const filteredItems = allItems.filter(
        (item) => item.category === selectedCategory
    );

    return (
        <section id="menu">
            <motion.div 
            className="menu p-3 sm:p-15"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} // Triggers animation when 20% is in view
            >
            <h1 className="text-white text-2xl sm:text-4xl font-bold text-center mb-15">Our Best & Delicious Menu</h1>

            <motion.div 
                className="category-filter"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
            >
            {categories.map((category) => (
                <motion.button
                    key={category}
                    className={`category-button ${selectedCategory === category ? "active" : ""}`}
                    onClick={() => setSelectedCategory(category)}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: categories.indexOf(category) * 0.1 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {category}
                </motion.button>
            ))}
            </motion.div>
            <div className="menu-container">
            <motion.div 
                className="menu-items"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.2 }}
            >

                {filteredItems.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: filteredItems.indexOf(item) * 0.05 }}
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            <MenuItem item={item} />
                        </motion.div> ))}
            </motion.div>
            </div>
            </motion.div>
        </section>
    );
};

export default Menu;
