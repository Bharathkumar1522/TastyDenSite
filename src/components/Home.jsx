import { motion } from "framer-motion";

const Home = () => {
    return (
        <section id="home">
            <motion.div
            className="home-bg"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            >
            {/* Background Tint Animation */}
            <motion.div
                className="bg-tint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                {/* Main Title Animation */}
                <motion.h1
                className="text-white text-3xl sm:text-5xl font-bold w-80 sm:w-130 leading-normal mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                >
                "Experience the Taste of Perfection”
                </motion.h1>

                {/* Subtitle Animation */}
                <motion.h4
                className="text-white text-1xl sm:text-2xl font-semibold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                >
                ~ Made with Love
                </motion.h4>

                {/* Description Animation */}
                <motion.p
                className="text-white w-70 sm:w-130"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                >
                Craving something delicious? We serve fresh, flavorful food made just for you! From juicy burgers to crispy fries, we bring you the best bites in town.
                </motion.p>
            </motion.div>
            </motion.div>
        </section>

    );
};

export default Home;
