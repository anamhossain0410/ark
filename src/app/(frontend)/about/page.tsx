export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="prose prose-lg max-w-none">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">About Our Blog</h1>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                    <p className="text-blue-800 text-lg leading-relaxed">
                        Welcome to our culinary journey! We are passionate about sharing delicious recipes, 
                        baking tips, and food stories that bring people together around the table.
                    </p>
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Story</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Founded in 2020, our blog began as a simple way to document family recipes and 
                    share them with friends. What started as a personal project has grown into a 
                    community of food lovers, home bakers, and culinary enthusiasts from around the world.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                    We believe that cooking and baking are more than just activities—they are ways to 
                    express creativity, show love, and create lasting memories. Every recipe we share 
                    has been tested in our own kitchen, often multiple times, to ensure it works 
                    perfectly for home cooks of all skill levels.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">What You will Find Here</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">🍰 Baking Recipes</h3>
                        <p className="text-gray-600">
                            From classic chocolate cakes to innovative dessert creations, 
                            we cover everything from beginner-friendly recipes to advanced techniques.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">👨‍🍳 Cooking Tips</h3>
                        <p className="text-gray-600">
                            Learn professional techniques, ingredient substitutions, 
                            and time-saving tricks that will elevate your cooking game.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">📚 Food Science</h3>
                        <p className="text-gray-600">
                            Understand the why behind cooking methods and ingredients 
                            to become a more confident and creative cook.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">🌱 Dietary Options</h3>
                        <p className="text-gray-600">
                            Explore vegan, gluten-free, and other dietary adaptations 
                            without compromising on flavor or texture.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    We are on a mission to make cooking and baking accessible, enjoyable, and 
                    rewarding for everyone. Whether you are a complete beginner or an experienced 
                    home chef, we want to inspire you to try new recipes, experiment with flavors, 
                    and most importantly, have fun in the kitchen.
                </p>

                <div className="bg-gray-50 p-8 rounded-lg mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Have a question about a recipe? Want to share your own cooking success story? 
                        We would love to hear from you! Connect with us on social media or drop us a line.
                    </p>
                    <div className="flex space-x-4">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            Contact Us
                        </button>
                        <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                            Follow Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}