import { motion } from "framer-motion";

const FoodMaker = () => {
    return (
        <div className="px-8 py-25 sm:px-40 sm:py-30">
        {/* Animated Title */}
        <motion.h1
            className="text-white text-2xl sm:text-4xl font-bold text-center mt-20 mb-15"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            Why We are Best Food Maker
        </motion.h1>

        {/* Animated Content */}
        <motion.div
            className="flex flex-col lg:flex-row justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.p
            className="text-white w-auto mb-5 text-sm sm:w-130 sm:text-base text-justify text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
            Step into a world of flavor at our vibrant fast-food haven, where every bite is a testament to our passion for delicious, high-quality food. From our crispy, golden fried chicken and aromatic biryani to our mouthwatering pizzas, juicy burgers, and refreshing mojitos, we craft each dish with the freshest ingredients and a dedication to taste.
            <br /><br />
            Indulge in our diverse menu, featuring flavorful rolls, satisfying wraps, and delightful ice creams, all prepared with meticulous care. We believe fast food shouldn't mean compromising on quality, and we strive to deliver an unforgettable dining experience that leaves you craving more.
            </motion.p>

            {/* Parallax Image Effect */}
            <motion.img
            src="https://res.cloudinary.com/dyecmgvcy/image/upload/v1740994754/section2_hupimn.webp"
            className="w-100 self-center"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            />
        </motion.div>
        </div>
    );
};

export default FoodMaker;
