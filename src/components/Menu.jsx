import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { motion, AnimatePresence } from "framer-motion";

const allItems = [
    // PIZZA - VEG
    { id: 101, category: "Pizza - Veg", name: "Margherita Pizza", price: "139", isVeg: true, imageUrl: "v1741257511/margharitapizza_g4vajo.png" },
    { id: 102, category: "Pizza - Veg", name: "Corn Pizza", price: "149", isVeg: true, imageUrl: "v1741170538/cornpizza_kaubwy.png" },
    { id: 103, category: "Pizza - Veg", name: "Veg Lovers Pizza", price: "169", isVeg: true, imageUrl: "v1741169854/vegpizza_xhl6o2.png" },
    { id: 104, category: "Pizza - Veg", name: "Spicy Veg Pizza", price: "179", isVeg: true, imageUrl: "v1741258963/vegsupreme_jbtptg.png" },
    { id: 105, category: "Pizza - Veg", name: "Mushroom Pizza", price: "199", isVeg: true, imageUrl: "/v1741170535/mushroompizza_oojcia.png" },
    { id: 106, category: "Pizza - Veg", name: "Paneer Supreme Pizza", price: "219", isVeg: true, imageUrl: "/v1741170535/paneerpizza_ndfo01.png" },
    { id: 107, category: "Pizza - Veg", name: "Tasty Den Special Pizza", price: "239", isVeg: true, imageUrl: "v1741169854/vegpizza_xhl6o2.png" },

    // PIZZA - NON VEG
    { id: 201, category: "Pizza - Non Veg", name: "Chicken Pizza", price: "189", isVeg: false, imageUrl: "v1741169850/chickenpizza_aobbaf.png" },
    { id: 202, category: "Pizza - Non Veg", name: "Spicy Chicken Pizza", price: "199", isVeg: false, imageUrl: "/v1741258188/spicychickenpizza_k0c93a.png" },
    { id: 203, category: "Pizza - Non Veg", name: "Chicken Delight Pizza", price: "209", isVeg: false, imageUrl: "/v1741258710/chickensupremepizza_lsh5nb.png" },
    { id: 204, category: "Pizza - Non Veg", name: "Peri Peri Chicken Pizza", price: "209", isVeg: false, imageUrl: "/v1741258188/spicychickenpizza_k0c93a.png" },
    { id: 205, category: "Pizza - Non Veg", name: "Chicken 65 Pizza", price: "219", isVeg: false, imageUrl: "/v1741170525/chicken65pizza_xon5k4.png" },
    { id: 206, category: "Pizza - Non Veg", name: "Chicken Exotica Pizza", price: "229", isVeg: false, imageUrl: "/v1741258710/chickensupremepizza_lsh5nb.png" },
    { id: 207, category: "Pizza - Non Veg", name: "Chicken Tikka Pizza", price: "239", isVeg: false, imageUrl: "/v1741258368/chickentikkapizza_tuibsl.png" },
    { id: 208, category: "Pizza - Non Veg", name: "Tasty Den Special Pizza", price: "249", isVeg: false, imageUrl: "v1741169850/chickenpizza_aobbaf.png" },

    // BURGER - VEG
    { id: 301, category: "Burger - Veg", name: "Veg Burger", price: "89", isVeg: true, imageUrl: "v1741169856/vegburger_keo1lz.png" },
    { id: 302, category: "Burger - Veg", name: "Paneer Burger", price: "109", isVeg: true, imageUrl: "v1741244914/tikkiburger_cfot90.png" },
    { id: 303, category: "Burger - Veg", name: "Veg Tower Burger", price: "119", isVeg: true, imageUrl: "v1741170553/vegpremiumburger_a63qck.png" },
    { id: 304, category: "Burger - Veg", name: "Veg BBQ Burger", price: "129", isVeg: true, imageUrl: "v1741169856/vegburger_keo1lz.png" },
    { id: 305, category: "Burger - Veg", name: "Tasty Den Special Burger", price: "139", isVeg: true, imageUrl: "v1741170553/vegpremiumburger_a63qck.png" },

    // BURGER - NON VEG
    { id: 401, category: "Burger - Non Veg", name: "Chicken Burger", price: "99", isVeg: false, imageUrl: "v1741169865/chickenburger_qijmbo.png" },
    { id: 402, category: "Burger - Non Veg", name: "Crunchy Chicken Burger", price: "129", isVeg: false, imageUrl: "v1741170530/crunchychickenburger_xwd5ow.png" },
    { id: 403, category: "Burger - Non Veg", name: "BBQ Chicken Burger", price: "129", isVeg: false, imageUrl: "v1741170558/splchickenburger_lwslxb.png" },
    { id: 404, category: "Burger - Non Veg", name: "Spicy Chicken Burger", price: "139", isVeg: false, imageUrl: "v1741170558/splchickenburger_lwslxb.png" },
    { id: 405, category: "Burger - Non Veg", name: "Chicken Tower Burger", price: "149", isVeg: false, imageUrl: "v1741245568/chickentowerburger_l3ihak.png" },
    { id: 406, category: "Burger - Non Veg", name: "Tasty Den Special Burger", price: "149", isVeg: false, imageUrl: "v1741245568/chickentowerburger_l3ihak.png" },

    // PASTA - VEG
    { id: 501, category: "Pasta - Veg", name: "Creamy Alfredo Veg", price: "149", isVeg: true, imageUrl: "/v1741169845/whitepasta_sd0boa.png" },
    { id: 502, category: "Pasta - Veg", name: "Creamy Alfredo Mushroom", price: "169", isVeg: true, imageUrl: "/v1741169845/whitepasta_sd0boa.png" },
    { id: 503, category: "Pasta - Veg", name: "Creamy Alfredo Paneer", price: "179", isVeg: true, imageUrl: "/v1741169845/whitepasta_sd0boa.png" },
    { id: 504, category: "Pasta - Veg", name: "Arrabbiata Sauce", price: "189", isVeg: true, imageUrl: "v1741169838/redpasta_vd7qxy.png" },
    { id: 505, category: "Pasta - Veg", name: "Pink Sauce", price: "199", isVeg: true, imageUrl: "v1741169838/redpasta_vd7qxy.png" },
    { id: 506, category: "Pasta - Veg", name: "Peri Peri Veg", price: "199", isVeg: true, imageUrl: "v1741169838/redpasta_vd7qxy.png" },

    // PASTA - NON VEG
    { id: 601, category: "Pasta - Non Veg", name: "Creamy Alfredo Chicken", price: "179", isVeg: false, imageUrl: "/whitechickenpasta_j4vtyd.png" },
    { id: 602, category: "Pasta - Non Veg", name: "Arrabbiata Chicken", price: "189", isVeg: false, imageUrl: "/v1741259794/redchickenpasta_kqjhy5.png" },
    { id: 603, category: "Pasta - Non Veg", name: "Pink Sauce Chicken", price: "199", isVeg: false, imageUrl: "/v1741259794/redchickenpasta_kqjhy5.png" },
    { id: 604, category: "Pasta - Non Veg", name: "Peri Peri Chicken", price: "209", isVeg: false, imageUrl: "/v1741259794/redchickenpasta_kqjhy5.png" },

    // SANDWICH - VEG
    { id: 701, category: "Sandwich - Veg", name: "Veg Grill Sandwich", price: "89", isVeg: true, imageUrl: "v1741261880/vegsandwich_mlcxkw.png" },
    { id: 702, category: "Sandwich - Veg", name: "Grill Corn Sandwich", price: "99", isVeg: true, imageUrl: "v1741260428/cornsandwich_piai9d.png" },
    { id: 703, category: "Sandwich - Veg", name: "Veg Cheese Sandwich", price: "99", isVeg: true, imageUrl: "v1741169850/cheesesandwich_bnn8wh.png" },
    { id: 704, category: "Sandwich - Veg", name: "BBQ Paneer Sandwich", price: "109", isVeg: true, imageUrl: "/v1741170543/paneersandwich_afttjv.png" },
    { id: 705, category: "Sandwich - Veg", name: "Cheese Toast Sandwich", price: "109", isVeg: true, imageUrl: "v1741169850/cheesesandwich_bnn8wh.png" },
    { id: 706, category: "Sandwich - Veg", name: "Paneer Sandwich", price: "119", isVeg: true, imageUrl: "/v1741170543/paneersandwich_afttjv.png" },
    { id: 707, category: "Sandwich - Veg", name: "Mushroom Sandwich", price: "139", isVeg: true, imageUrl: "v1741261880/vegsandwich_mlcxkw.png" },

    // SANDWICH - NON VEG
    { id: 801, category: "Sandwich - Non Veg", name: "Chicken Sandwich", price: "109", isVeg: false, imageUrl: "/v1741170538/chickensandwich_syot5z.png" },
    { id: 802, category: "Sandwich - Non Veg", name: "Chicken Cheese Sandwich", price: "119", isVeg: false, imageUrl: "/v1741170538/chickensandwich_syot5z.png" },
    { id: 803, category: "Sandwich - Non Veg", name: "Crunchy Chicken Sandwich", price: "129", isVeg: false, imageUrl: "/v1741170538/chickensandwich_syot5z.png" },
    { id: 804, category: "Sandwich - Non Veg", name: "BBQ Chicken Sandwich", price: "129", isVeg: false, imageUrl: "/v1741170538/chickensandwich_syot5z.png" },
    { id: 805, category: "Sandwich - Non Veg", name: "Chicken Tikka Sandwich", price: "139", isVeg: false, imageUrl: "/v1741170538/chickensandwich_syot5z.png" },

    // WRAPS - VEG
    { id: 901, category: "Wraps - Veg", name: "Veg Wrap", price: "89", isVeg: true, imageUrl: "/v1741169861/vegwrap_ybpzau.png" },
    { id: 902, category: "Wraps - Veg", name: "Mushroom Wrap", price: "105", isVeg: true, imageUrl: "/v1741169861/vegwrap_ybpzau.png" },
    { id: 903, category: "Wraps - Veg", name: "Corn Wrap", price: "109", isVeg: true, imageUrl: "/v1741169861/vegwrap_ybpzau.png" },
    { id: 904, category: "Wraps - Veg", name: "Paneer Wrap", price: "119", isVeg: true, imageUrl: "/v1741170543/paneerwrap_uxbp61.png" },
    { id: 905, category: "Wraps - Veg", name: "BBQ Paneer Wrap", price: "129", isVeg: true, imageUrl: "/v1741170543/paneerwrap_uxbp61.png" },

    // WRAPS - NON VEG
    { id: 1001, category: "Wraps - Non Veg", name: "Chicken Wrap", price: "99", isVeg: false, imageUrl: "v1741169865/chickenwrap_wjtqdr.png" },
    { id: 1002, category: "Wraps - Non Veg", name: "Crunchy Chicken Wrap", price: "105", isVeg: false, imageUrl: "v1741169865/chickenwrap_wjtqdr.png" },
    { id: 1003, category: "Wraps - Non Veg", name: "Tikka Wrap", price: "119", isVeg: false, imageUrl: "v1741169866/periperichickenwrap_udsunr.png" },
    { id: 1004, category: "Wraps - Non Veg", name: "Peri Peri Chicken Wrap", price: "129", isVeg: false, imageUrl: "v1741169866/periperichickenwrap_udsunr.png" },
    { id: 1005, category: "Wraps - Non Veg", name: "BBQ Chicken Wrap", price: "139", isVeg: false, imageUrl: "v1741169866/periperichickenwrap_udsunr.png" },

    // QUICK BITES - VEG
    { id: 1101, category: "Quick Bites - Veg", name: "French Fries (Salted)", price: "59 (R) | 119 (L)", isVeg: true, imageUrl: "v1741169906/frenchfries_ae1m3e.png" },
    { id: 1102, category: "Quick Bites - Veg", name: "Peri Peri Fries", price: "69 (R) | 129 (L)", isVeg: true, imageUrl: "v1741169906/frenchfries_ae1m3e.png" },
    { id: 1103, category: "Quick Bites - Veg", name: "Veg Nuggets (6pc)", price: "99", isVeg: true, imageUrl: "v1741169880/vegnuggets_yv6rip.png" },
    { id: 1104, category: "Quick Bites - Veg", name: "Cheese Fries", price: "119 (L)", isVeg: true, imageUrl: "v1741169883/cheesefries_mxyoi6.png" },
    { id: 1105, category: "Quick Bites - Veg", name: "Loaded Veg Fries", price: "149", isVeg: true, imageUrl: "v1741169883/cheesefries_mxyoi6.png" },

    // QUICK BITES - NON VEG
    { id: 1201, category: "Quick Bites - Non Veg", name: "Fried Leg Piece (1pc)", price: "79", isVeg: false, imageUrl: "friedchickenlegpiece_o4fb72.png" },
    { id: 1202, category: "Quick Bites - Non Veg", name: "Chicken Wings (5pc)", price: "159", isVeg: false, imageUrl: "/v1741169879/chickenwings_juausp.png" },
    { id: 1203, category: "Quick Bites - Non Veg", name: "Chicken Lollipop (5pc)", price: "169", isVeg: false, imageUrl: "v1741169893/chickenlollypop_ptplsj.png" },
    { id: 1204, category: "Quick Bites - Non Veg", name: "Loaded Non-Veg Fries", price: "199", isVeg: false, imageUrl: "v1741169883/cheesefries_mxyoi6.png" },
    { id: 1205, category: "Quick Bites - Non Veg", name: "Chicken Popcorn", price: "89 (R) | 139 (L)", isVeg: false, imageUrl: "chickenpopcorn_c50ptf.png" },
    { id: 1206, category: "Quick Bites - Non Veg", name: "Chicken Nuggets (5pc)", price: "99 (R) | 149 (L)", isVeg: false, imageUrl: "v1741169892/chickennuggets_w4q9ne.png" },

    // MOMOS - VEG
    { id: 1301, category: "Momos - Veg", name: "Mix Veg Momos", price: "69", isVeg: true, imageUrl: "" },
    { id: 1302, category: "Momos - Veg", name: "Saucy Veg Momos", price: "99", isVeg: true, imageUrl: "" },

    // MOMOS - NON VEG
    { id: 1401, category: "Momos - Non Veg", name: "Chicken Momos", price: "89", isVeg: false, imageUrl: "" },
    { id: 1402, category: "Momos - Non Veg", name: "Saucy Chicken Momos", price: "119", isVeg: false, imageUrl: "" },

    // MILKSHAKES
    { id: 1501, category: "Milkshakes", name: "Vanilla", price: "69", isVeg: true, imageUrl: "/v1741169829/vannilamilkshake_ahacb2.png" },
    { id: 1502, category: "Milkshakes", name: "Strawberry", price: "79", isVeg: true, imageUrl: "/v1741169916/strawberrymilkshake_npndt3.png" },
    { id: 1503, category: "Milkshakes", name: "Butterscotch", price: "79", isVeg: true, imageUrl: "/v1741169822/butterscotchmilkshake_gy471w.png" },
    { id: 1504, category: "Milkshakes", name: "Banana", price: "79", isVeg: true, imageUrl: "/v1741169821/bananamilkshake_ayrtcl.png" },
    { id: 1505, category: "Milkshakes", name: "Pineapple", price: "89", isVeg: true, imageUrl: "/v1741170555/pineapplemilkshake_creha5.png" },
    { id: 1506, category: "Milkshakes", name: "Mango", price: "99", isVeg: true, imageUrl: "/v1741169821/mangomilkshake_gbja4t.png" },
    { id: 1507, category: "Milkshakes", name: "Black Currant", price: "99", isVeg: true, imageUrl: "v1741169821/blackcurrentmilkshake_blyiha.png" },
    { id: 1508, category: "Milkshakes", name: "Blueberry", price: "99", isVeg: true, imageUrl: "/v1741169821/blueberrymilkshake_u9jyes.png" },
    { id: 1509, category: "Milkshakes", name: "Chocolate", price: "99", isVeg: true, imageUrl: "v1741169824/chocolatemilkshake_cxduph.png" },
    { id: 1510, category: "Milkshakes", name: "KitKat", price: "109", isVeg: true, imageUrl: "/v1741263165/kitkat_qbntv9.png" },
    { id: 1511, category: "Milkshakes", name: "Oreo", price: "109", isVeg: true, imageUrl: "/v1741169821/oreamilkshake_k6llgd.png" },
    { id: 1512, category: "Milkshakes", name: "Brownie", price: "129", isVeg: true, imageUrl: "v1741169837/browniemilkshake_azelnl.png" },

    // ICE CREAMS
    { id: 1601, category: "Ice Creams", name: "Vanilla", price: "49", isVeg: true, imageUrl: "/v1741262475/vannilaicecream_a2gho8.png" },
    { id: 1602, category: "Ice Creams", name: "Strawberry", price: "49", isVeg: true, imageUrl: "/v1741169827/strawberryicecream_hsxaug.png" },
    { id: 1603, category: "Ice Creams", name: "Butterscotch", price: "69", isVeg: true, imageUrl: "/v1741169910/butterscotch_h7qvs4.png" },
    { id: 1604, category: "Ice Creams", name: "Black Currant", price: "69", isVeg: true, imageUrl: "/v1741169833/blackcurrent_duushv.png" },
    { id: 1605, category: "Ice Creams", name: "Chocolate", price: "69", isVeg: true, imageUrl: "v1741169829/chocolateicecream_rhckni.png" },

    // MOJITO
    { id: 1701, category: "Mojito", name: "Virgin", price: "69", isVeg: true, imageUrl: "/v1741263528/virgin_fum2sk.png" },
    { id: 1702, category: "Mojito", name: "Mint", price: "69", isVeg: true, imageUrl: "/v1741263523/greenery_bayjg8.png" },
    { id: 1703, category: "Mojito", name: "Mango Punch", price: "69", isVeg: true, imageUrl: "/v1741263523/greenery_bayjg8.png" },
    { id: 1704, category: "Mojito", name: "Blue Curacao", price: "89", isVeg: true, imageUrl: "/v1741169823/blueoceanmojito_of9hgq.png" },
    { id: 1705, category: "Mojito", name: "Watermelon", price: "89", isVeg: true, imageUrl: "v1741169820/watermelonmojito_sd0tgq.png" },
    { id: 1706, category: "Mojito", name: "Green Apple", price: "99", isVeg: true, imageUrl: "/v1741263523/greenery_bayjg8.png" },
    { id: 1707, category: "Mojito", name: "Red Vine Mojito", price: "99", isVeg: true, imageUrl: "/v1741169819/raspberrymojito_gcjxcl.png" },

    // DESSERTS
    { id: 1801, category: "Desserts", name: "Gulab Jamun", price: "40", isVeg: true, imageUrl: "/v1741169843/gulabjamun_xwqcun.png" },
    { id: 1802, category: "Desserts", name: "Gulab Jamun with Ice Cream", price: "69", isVeg: true, imageUrl: "/v1741169830/gulabjamunwithice_njql8b.png" },
    { id: 1803, category: "Desserts", name: "Brownie", price: "89", isVeg: true, imageUrl: "/v1741169829/brownie_bvvwbh.png" },
    { id: 1804, category: "Desserts", name: "Brownie with Hot Chocolate", price: "109", isVeg: true, imageUrl: "/v1741169829/brownie_bvvwbh.png" },
    { id: 1805, category: "Desserts", name: "Brownie with Ice Cream", price: "119", isVeg: true, imageUrl: "/v1741169832/browniewithicecream_lstmrj.png" },

    // COMBO OFFERS
    { id: 1901, category: "Combo Offers", name: "Veg Burger + Veg Nuggets + Soft Drink", price: "169", isVeg: true, imageUrl: "" },
    { id: 1902, category: "Combo Offers", name: "Paneer Burger + Fries + Soft Drink", price: "189", isVeg: true, imageUrl: "" },
    { id: 1903, category: "Combo Offers", name: "Chicken Burger + Chicken Nuggets + Soft Drink", price: "199", isVeg: false, imageUrl: "" },
    { id: 1904, category: "Combo Offers", name: "Veg Pizza + Veg Burger + Soft Drink", price: "259", isVeg: true, imageUrl: "" },
    { id: 1905, category: "Combo Offers", name: "Chicken Pizza + Fried Chicken + Soft Drink", price: "279", isVeg: false, imageUrl: "" }
];

const categories = [
    "Pizza - Veg", "Pizza - Non Veg", "Burger - Veg", "Burger - Non Veg",
    "Pasta - Veg", "Pasta - Non Veg", "Sandwich - Veg", "Sandwich - Non Veg",
    "Wraps - Veg", "Wraps - Non Veg", "Quick Bites - Veg", "Quick Bites - Non Veg",
    "Momos - Veg", "Momos - Non Veg", "Milkshakes", "Ice Creams", "Mojito", "Desserts",
    "Combo Offers"
];

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState("Pizza - Veg");

    // Mobile Carousel State
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const filteredItems = allItems.filter(
        (item) => item.category === selectedCategory
    );

    // Reset carousel when category changes
    React.useEffect(() => {
        setCurrentIndex(0);
        setDirection(0);
    }, [selectedCategory]);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9,
            rotate: direction < 0 ? 5 : -5,
        })
    };

    const swipe = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex + newDirection;
            if (newIndex < 0) newIndex = filteredItems.length - 1;
            if (newIndex >= filteredItems.length) newIndex = 0;
            return newIndex;
        });
    };

    return (
        <section id="menu" className="menu-section">
            <div className="menu-section-inner">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h2 className="section-heading">Our Menu</h2>
                    <div className="gold-divider" />
                    <p className="section-subtitle">
                        Tap items to add to cart, then send your order via WhatsApp!
                    </p>
                </motion.div>

                {/* Category pills */}
                <div className="category-filter">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`category-button${selectedCategory === category ? " active" : ""}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* === MOBILE CAROUSEL VIEW === */}
                <div className="mobile-menu-container">
                    <div className="menu-carousel-viewport">
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            <motion.div
                                key={filteredItems[currentIndex]?.id || 'empty'}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                    scale: { duration: 0.2 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipeConfidenceThreshold = 10000;
                                    const swipePower = Math.abs(offset.x) * velocity.x;

                                    if (swipePower < -swipeConfidenceThreshold) {
                                        swipe(1);
                                    } else if (swipePower > swipeConfidenceThreshold) {
                                        swipe(-1);
                                    }
                                }}
                                className="menu-carousel-card"
                            >
                                <MenuItem item={filteredItems[currentIndex]} />
                            </motion.div>
                        </AnimatePresence>

                        {/* Carousel Navigation Arrows */}
                        <button className="carousel-nav prev" onClick={() => swipe(-1)} aria-label="Previous">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>
                        <button className="carousel-nav next" onClick={() => swipe(1)} aria-label="Next">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                        </button>

                        {/* Index Indicator */}
                        <div className="carousel-badge">
                            {currentIndex + 1} / {filteredItems.length}
                        </div>
                    </div>
                </div>

                {/* === DESKTOP GRID VIEW === */}
                <div className="desktop-only" style={{ width: '100%', minHeight: '600px' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory}
                            className="menu-items"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.35 }}
                        >
                            {filteredItems.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.04 }}
                                >
                                    <MenuItem item={item} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <span className="menu-packing-note">*₹40 delivery fee. Delivery available within 4km radius only.</span>
                </div>
            </div>
        </section>
    );
};

export default Menu;
