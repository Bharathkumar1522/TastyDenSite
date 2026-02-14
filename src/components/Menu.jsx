import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { motion, AnimatePresence } from "framer-motion";

const allItems = [
    // **Biriyani's**
    { id: 1, category: "Biriyani's", name: "Hyd Chicken Biriyani", description: "Traditional Hyderabadi chicken biriyani.", price: "₹130", imageUrl: "v1741238941/chickenbiriyani_u9ipk7.png" },
    { id: 2, category: "Biriyani's", name: "Special Chicken Biriyani", description: "A special variant of Hyderabadi biriyani.", price: "₹160", imageUrl: "specialchickenbiriyani_vdauhq.png" },
    { id: 3, category: "Biriyani's", name: "Fried Piece Biriyani", description: "Crispy fried chicken piece biriyani.", price: "₹150", imageUrl: "frypiecebiriyani_fom8qa.png" },
    { id: 4, category: "Biriyani's", name: "Biriyani Rice", description: "Delicious biriyani rice.", price: "₹80", imageUrl: "biriyanirice_xebm6n.png" },
    { id: 5, category: "Biriyani's", name: "Chicken mini Biriyani", description: "Mini version of chicken biriyani.", price: "₹100", imageUrl: "minibiriyani_hpfqnh.png" },

    // **Fried Chicken**
    { id: 6, category: "Fried Chicken", name: "Fried Chicken Leg Piece", description: "Crispy fried chicken leg piece.", price: "₹80", imageUrl: "friedchickenlegpiece_o4fb72.png" },
    { id: 7, category: "Fried Chicken", name: "Chicken Popcorn (R)", description: "Delicious fried chicken popcorn (Regular).", price: "₹90", imageUrl: "chickenpopcorn_c50ptf.png" },
    { id: 8, category: "Fried Chicken", name: "Chicken Popcorn (L)", description: "Delicious fried chicken popcorn (Large).", price: "₹130", imageUrl: "chickenpopcorn_c50ptf.png" },
    { id: 9, category: "Fried Chicken", name: "Cheese Chicken Popcorn", description: "Cheesy chicken popcorn.", price: "₹140", imageUrl: "/v1741169903/chickencheesepopcorn_xri8xg.png" },
    { id: 10, category: "Fried Chicken", name: "Chicken Nuggets (5pc)", description: "Crispy chicken nuggets.", price: "₹90", imageUrl: "v1741169892/chickennuggets_w4q9ne.png" },
    { id: 11, category: "Fried Chicken", name: "Chicken Wings (5pc)", description: "Spicy chicken wings.", price: "₹150", imageUrl: "/v1741169879/chickenwings_juausp.png" },
    { id: 12, category: "Fried Chicken", name: "Chicken Lollypop (5pc)", description: "Chicken lollypop.", price: "₹160", imageUrl: "v1741169893/chickenlollypop_ptplsj.png" },
    { id: 13, category: "Fried Chicken", name: "Chicken Strips", description: "Crispy chicken strips.", price: "₹150", imageUrl: "v1741169880/chickenstrips_y9xgte.png" },

    // **Short Eats**
    { id: 14, category: "Short Eats", name: "French Fries (R)", description: "Crispy and tasty French fries (Regular).", price: "₹60", imageUrl: "v1741169906/frenchfries_ae1m3e.png" },
    { id: 15, category: "Short Eats", name: "French Fries (M)", description: "Crispy and tasty French fries (Medium).", price: "₹90", imageUrl: "v1741169906/frenchfries_ae1m3e.png" },
    { id: 16, category: "Short Eats", name: "French Fries (L)", description: "Crispy and tasty French fries (Large).", price: "₹130", imageUrl: "v1741169906/frenchfries_ae1m3e.png" },
    { id: 17, category: "Short Eats", name: "Cheese Fries", description: "Cheesy French fries.", price: "₹100", imageUrl: "v1741169883/cheesefries_mxyoi6.png" },
    { id: 18, category: "Short Eats", name: "Potato Wedges (R)", description: "Crispy potato wedges (Regular).", price: "₹60", imageUrl: "v1741170544/potatowedges_gae7ie.png" },
    { id: 19, category: "Short Eats", name: "Potato Wedges (M)", description: "Crispy potato wedges (Medium).", price: "₹90", imageUrl: "v1741170544/potatowedges_gae7ie.png" },
    { id: 20, category: "Short Eats", name: "Potato Wedges (L)", description: "Crispy potato wedges (Large).", price: "₹130", imageUrl: "v1741170544/potatowedges_gae7ie.png" },
    { id: 21, category: "Short Eats", name: "Veg Nuggets (8pc)", description: "Vegetarian nuggets.", price: "₹100", imageUrl: "v1741169880/vegnuggets_yv6rip.png" },
    { id: 22, category: "Short Eats", name: "Potato Cheese Blends (10pc)", description: "Cheesy potato blends.", price: "₹70", imageUrl: "v1741169871/potatocheeseblends_e97efs.png" },

    // **Wraps**
    { id: 23, category: "Wraps", name: "Classic Veg Wrap", description: "Classic vegetarian wrap.", price: "₹80", imageUrl: "/v1741169861/vegwrap_ybpzau.png" },
    { id: 24, category: "Wraps", name: "Paneer Wrap", description: "Paneer wrap.", price: "₹90", imageUrl: "/v1741170543/paneerwrap_uxbp61.png" },
    { id: 25, category: "Wraps", name: "Peri-Peri Veg Wrap", description: "Spicy peri-peri veg wrap.", price: "₹100", imageUrl: "/v1741169861/vegwrap_ybpzau.png" },
    { id: 26, category: "Wraps", name: "Classic Chicken Wrap", description: "Classic chicken wrap.", price: "₹90", imageUrl: "v1741169865/chickenwrap_wjtqdr.png" },
    { id: 27, category: "Wraps", name: "Peri-Peri Chicken Wrap", description: "Spicy peri-peri chicken wrap.", price: "₹110", imageUrl: "v1741169866/periperichickenwrap_udsunr.png" },

    // **Burgers**
    { id: 28, category: "Burgers", name: "Aloo Tikki Burger", description: "Crispy aloo tikki burger.", price: "₹70", imageUrl: "/v1741170549/vegpaneerburger_npbtsb.png" },
    { id: 29, category: "Burgers", name: "Premium Veg Burger", description: "Premium vegetarian burger.", price: "₹90", imageUrl: "v1741169856/vegburger_keo1lz.png" },
    { id: 30, category: "Burgers", name: "Veg Tower Burger", description: "Towering vegetarian burger.", price: "₹110", imageUrl: "v1741170553/vegpremiumburger_a63qck.png" },
    { id: 31, category: "Burgers", name: "Paneer Burger", description: "Paneer burger.", price: "₹90", imageUrl: "v1741244914/tikkiburger_cfot90.png" },
    { id: 32, category: "Burgers", name: "Chicken Burger", description: "Classic chicken burger.", price: "₹90", imageUrl: "v1741169865/chickenburger_qijmbo.png" },
    { id: 33, category: "Burgers", name: "Spl Chicken Burger", description: "Special chicken burger.", price: "₹100", imageUrl: "v1741170558/splchickenburger_lwslxb.png" },
    { id: 34, category: "Burgers", name: "Crunchy Chicken Burger", description: "Crunchy chicken burger.", price: "₹110", imageUrl: "v1741170530/crunchychickenburger_xwd5ow.png" },
    { id: 35, category: "Burgers", name: "Chicken Tower Burger", description: "Towering chicken burger.", price: "₹140", imageUrl: "v1741245568/chickentowerburger_l3ihak.png" },

    // **Pizzas**
    { id: 36, category: "Pizzas", name: "Margherita Pizza", description: "Classic margherita pizza.", price: "₹110", imageUrl: "v1741170551/peperonipizza_ifykfw.png" },
    { id: 37, category: "Pizzas", name: "Double Cheese Margherita", description: "Double cheese margherita pizza.", price: "₹150", imageUrl: "v1741257511/margharitapizza_g4vajo.png" },
    { id: 38, category: "Pizzas", name: "Sweet Corn Pizza", description: "Sweet corn pizza.", price: "₹120", imageUrl: "v1741170538/cornpizza_kaubwy.png" },
    { id: 39, category: "Pizzas", name: "Mushroom Pizza", description: "Mushroom pizza.", price: "₹150", imageUrl: "/v1741170535/mushroompizza_oojcia.png" },
    { id: 40, category: "Pizzas", name: "Paneer Pizza", description: "Paneer pizza.", price: "₹160", imageUrl: "/v1741170535/paneerpizza_ndfo01.png" },
    { id: 41, category: "Pizzas", name: "Veg Lover's Pizza", description: "Veggie lover's pizza.", price: "₹150", imageUrl: "v1741169854/vegpizza_xhl6o2.png" },
    { id: 42, category: "Pizzas", name: "Veg Supreme Pizza", description: "Veg supreme pizza.", price: "₹160", imageUrl: "v1741258963/vegsupreme_jbtptg.png" },
    { id: 43, category: "Pizzas", name: "Classic Chicken Pizza", description: "Classic chicken pizza.", price: "₹160", imageUrl: "v1741169850/chickenpizza_aobbaf.png" },
    { id: 44, category: "Pizzas", name: "Spicy Chicken Pizza", description: "Spicy chicken pizza.", price: "₹170", imageUrl: "/v1741258188/spicychickenpizza_k0c93a.png" },
    { id: 45, category: "Pizzas", name: "Chicken 65 Pizza", description: "Chicken 65 pizza.", price: "₹180", imageUrl: "/v1741170525/chicken65pizza_xon5k4.png" },
    { id: 46, category: "Pizzas", name: "Chicken Tikka Pizza", description: "Chicken tikka pizza.", price: "₹190", imageUrl: "/v1741258368/chickentikkapizza_tuibsl.png" },
    { id: 47, category: "Pizzas", name: "Chicken Supreme Pizza", description: "Chicken supreme pizza.", price: "₹200", imageUrl: "/v1741258710/chickensupremepizza_lsh5nb.png" },

    // **Garlic Breads**
    { id: 48, category: "Garlic Breads", name: "Plain Garlic Bread", description: "Plain garlic bread.", price: "₹80", imageUrl: "v1741169849/garlicbread_hduhbr.png" },
    { id: 49, category: "Garlic Breads", name: "Cheese Garlic Bread", description: "Cheesy garlic bread.", price: "₹100", imageUrl: "v1741259133/cheesegarlicbread_uufav0.png" },
    { id: 50, category: "Garlic Breads", name: "Veg Garlic Bread (C3)", description: "Vegetarian garlic bread with toppings.", price: "₹120", imageUrl: "v1741169849/garlicbread_hduhbr.png" },
    { id: 51, category: "Garlic Breads", name: "Chicken Garlic Bread", description: "Chicken garlic bread.", price: "₹120", imageUrl: "/v1741259430/chickengarlic_y3tqhq.png" },
    { id: 52, category: "Garlic Breads", name: "Chicken Garlic Bread (C3)", description: "Chicken garlic bread with toppings.", price: "₹140", imageUrl: "/v1741259430/chickengarlic_y3tqhq.png" },

    // **Pasta's**
    { id: 53, category: "Pasta's", name: "White Sauce Veg Pasta", description: "Vegetarian pasta in white sauce.", price: "₹100", imageUrl: "/v1741169845/whitepasta_sd0boa.png" },
    { id: 54, category: "Pasta's", name: "Red Sauce Veg Pasta", description: "Vegetarian pasta in red sauce.", price: "₹100", imageUrl: "v1741169838/redpasta_vd7qxy.png" },
    { id: 55, category: "Pasta's", name: "White Sauce Chicken Pasta", description: "Chicken pasta in white sauce.", price: "₹120", imageUrl: "/whitechickenpasta_j4vtyd.png" },
    { id: 56, category: "Pasta's", name: "Red Sauce Chicken Pasta", description: "Chicken pasta in red sauce.", price: "₹120", imageUrl: "/v1741259794/redchickenpasta_kqjhy5.png" },

    // **Salad's**
    { id: 57, category: "Salad's", name: "Garden Fresh Salad", description: "Fresh garden salad.", price: "₹80", imageUrl: "v1741170561/vegsalad_hzwn3m.png" },
    { id: 58, category: "Salad's", name: "Delight Salad", description: "Delightful veg salad.", price: "₹80", imageUrl: "/v1741170561/vegsalad_hzwn3m.png" },
    { id: 59, category: "Salad's", name: "Corn Peas Salad", description: "Salad with corn and peas.", price: "₹80", imageUrl: "/v1741170550/cornsalad_lvxyxl.png" },
    { id: 70, category: "Salad's", name: "Chicken Caesar Salad", description: "Classic chicken Caesar salad.", price: "₹100", imageUrl: "v1741170525/chickensalad_fg5ftp.png" },
    { id: 71, category: "Salad's", name: "Crunchy Chicken Salad", description: "Crunchy chicken salad.", price: "₹100", imageUrl: "v1741170525/chickensalad_fg5ftp.png" },

    // **Sandwiches**
    { id: 60, category: "Sandwiches", name: "Jam Toast Sandwich", description: "Jam toast sandwich.", price: "₹55", imageUrl: "/v1741169833/jamtoastsandwitch_lj98zo.png" },
    { id: 61, category: "Sandwiches", name: "Peanut Toast Sandwich", description: "Peanut toast sandwich.", price: "₹55", imageUrl: "/v1741170541/peanutbuttersandwich_zeroam.png" },
    { id: 62, category: "Sandwiches", name: "Gulkand Toast Sandwich", description: "Gulkand toast sandwich.", price: "₹55", imageUrl: "/v1741260197/gulkand_bfyuij.png" },
    { id: 63, category: "Sandwiches", name: "Nutella Toast Sandwich", description: "Nutella toast sandwich.", price: "₹65", imageUrl: "/v1741170541/peanutbuttersandwich_zeroam.png" },
    { id: 64, category: "Sandwiches", name: "Corn Sandwich", description: "Corn sandwich.", price: "₹65", imageUrl: "v1741260428/cornsandwich_piai9d.png" },
    { id: 65, category: "Sandwiches", name: "Cheese Toast Sandwich", description: "Cheese toast sandwich.", price: "₹65", imageUrl: "v1741169850/cheesesandwich_bnn8wh.png" },
    { id: 66, category: "Sandwiches", name: "Veg Toast Sandwich", description: "Vegetarian toast sandwich.", price: "₹70", imageUrl: "v1741261880/vegsandwich_mlcxkw.png" },
    { id: 67, category: "Sandwiches", name: "Paneer Toast Sandwich", description: "Paneer toast sandwich.", price: "₹80", imageUrl: "/v1741170543/paneersandwich_afttjv.png" },
    { id: 68, category: "Sandwiches", name: "Classic Chicken Sandwich", description: "Classic chicken sandwich.", price: "₹80", imageUrl: "/v1741170538/chickensandwich_syot5z.png" },
    { id: 69, category: "Sandwiches", name: "Spl Chicken Toast Sandwich", description: "Special chicken toast sandwich.", price: "₹100", imageUrl: "v1741170538/chickensandwich_syot5z.png" },

    // **Dessert's**
    { id: 72, category: "Dessert's", name: "Gulab Jamun", description: "Sweet and soft gulab jamun.", price: "₹40", imageUrl: "/v1741169843/gulabjamun_xwqcun.png" },
    { id: 73, category: "Dessert's", name: "Gulab Jamun with Ice", description: "Gulab jamun served with ice cream.", price: "₹60", imageUrl: "/v1741169830/gulabjamunwithice_njql8b.png" },
    { id: 74, category: "Dessert's", name: "Brownie", description: "Chocolate brownie.", price: "₹90", imageUrl: "/v1741169829/brownie_bvvwbh.png" },
    { id: 75, category: "Dessert's", name: "Brownie with Ice Cream", description: "Brownie served with ice cream.", price: "₹110", imageUrl: "/v1741169832/browniewithicecream_lstmrj.png" },
    { id: 76, category: "Dessert's", name: "Sizzling Brownie", description: "Sizzling hot brownie.", price: "₹140", imageUrl: "/v1741169829/brownie_bvvwbh.png" },

    // **Ice Creams**
    { id: 77, category: "Ice Creams", name: "Vanilla", description: "Classic vanilla ice cream.", price: "₹40", imageUrl: "/v1741262475/vannilaicecream_a2gho8.png" },
    { id: 78, category: "Ice Creams", name: "Strawberry", description: "Strawberry ice cream.", price: "₹40", imageUrl: "/v1741169827/strawberryicecream_hsxaug.png" },
    { id: 79, category: "Ice Creams", name: "Black Current", description: "Black currant ice cream.", price: "₹60", imageUrl: "/v1741169833/blackcurrent_duushv.png" },
    { id: 80, category: "Ice Creams", name: "Butter Scotch", description: "Butterscotch ice cream.", price: "₹60", imageUrl: "/v1741169910/butterscotch_h7qvs4.png" },
    { id: 81, category: "Ice Creams", name: "Chocolate", description: "Chocolate ice cream.", price: "₹60", imageUrl: "v1741169829/chocolateicecream_rhckni.png" },

    // **Milk Shakes**
    { id: 82, category: "Milk Shakes", name: "Vanilla", description: "Vanilla milkshake.", price: "₹70", imageUrl: "/v1741169829/vannilamilkshake_ahacb2.png" },
    { id: 83, category: "Milk Shakes", name: "Strawberry", description: "Strawberry milkshake.", price: "₹80", imageUrl: "/v1741169916/strawberrymilkshake_npndt3.png" },
    { id: 84, category: "Milk Shakes", name: "Pine Apple", description: "Pineapple milkshake.", price: "₹90", imageUrl: "/v1741170555/pineapplemilkshake_creha5.png" },
    { id: 85, category: "Milk Shakes", name: "Butter Scotch", description: "Butterscotch milkshake.", price: "₹80", imageUrl: "/v1741169822/butterscotchmilkshake_gy471w.png" },
    { id: 86, category: "Milk Shakes", name: "Banana", description: "Banana milkshake.", price: "₹80", imageUrl: "/v1741169821/bananamilkshake_ayrtcl.png" },
    { id: 87, category: "Milk Shakes", name: "Mango", description: "Mango milkshake.", price: "₹100", imageUrl: "/v1741169821/mangomilkshake_gbja4t.png" },
    { id: 88, category: "Milk Shakes", name: "Black Current", description: "Black currant milkshake.", price: "₹100", imageUrl: "v1741169821/blackcurrentmilkshake_blyiha.png" },
    { id: 89, category: "Milk Shakes", name: "Blue Berry", description: "Blueberry milkshake.", price: "₹100", imageUrl: "/v1741169821/blueberrymilkshake_u9jyes.png" },
    { id: 90, category: "Milk Shakes", name: "Chocolate", description: "Chocolate milkshake.", price: "₹100", imageUrl: "v1741169824/chocolatemilkshake_cxduph.png" },
    { id: 91, category: "Milk Shakes", name: "Brownie", description: "Brownie milkshake.", price: "₹120", imageUrl: "v1741169837/browniemilkshake_azelnl.png" },
    { id: 92, category: "Milk Shakes", name: "Kit-Kat", description: "Kit-Kat milkshake.", price: "₹110", imageUrl: "/v1741263165/kitkat_qbntv9.png" },
    { id: 93, category: "Milk Shakes", name: "Oreo", description: "Oreo milkshake.", price: "₹110", imageUrl: "/v1741169821/oreamilkshake_k6llgd.png" },

    // **Mojito's**
    { id: 94, category: "Mojito's", name: "Virgin Mojito", description: "Classic virgin mojito.", price: "₹80", imageUrl: "/v1741263528/virgin_fum2sk.png" },
    { id: 95, category: "Mojito's", name: "Blue Ocean", description: "Blue ocean mojito.", price: "₹90", imageUrl: "/v1741169823/blueoceanmojito_of9hgq.png" },
    { id: 96, category: "Mojito's", name: "Greenery", description: "Green mojito.", price: "₹90", imageUrl: "/v1741263523/greenery_bayjg8.png" },
    { id: 97, category: "Mojito's", name: "Water Melon", description: "Watermelon mojito.", price: "₹80", imageUrl: "v1741169820/watermelonmojito_sd0tgq.png" },
    { id: 98, category: "Mojito's", name: "Raspberry", description: "Raspberry mojito.", price: "₹80", imageUrl: "/v1741169819/raspberrymojito_gcjxcl.png" },
];

const categories = [
    "Biriyani's", "Fried Chicken", "Short Eats", "Wraps", "Burgers", "Pizzas",
    "Garlic Breads", "Pasta's", "Salad's", "Sandwiches", "Ice Creams", "Milk Shakes",
    "Mojito's", "Dessert's",
];

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState("Biriyani's");

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
                    <h2 className="section-heading">Street Food & Sips</h2>
                    <div className="gold-divider" />
                    <p className="section-subtitle">
                        From aromatic biryanis to refreshing mojitos — explore our street-style favorites
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
                    <span className="menu-packing-note">*₹10 extra for each item for packing</span>
                </div>
            </div>
        </section>
    );
};

export default Menu;
