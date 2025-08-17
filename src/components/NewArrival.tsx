'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import {
    FaCartShopping,
    FaHeart,
    FaCommentDots,
    FaLink,
    FaDownload,
} from 'react-icons/fa6';

type Product = {
    title: string;
    type: string;
    price: string;
    image: string;
    profile: string;
    likes: number;
};

const products: Product[] = [
    {
        title: 'The Division SHD watch',
        type: '3D Model',
        price: '$5.00',
        image: '/images/watch.png',
        profile: '/profile/profile1.png',
        likes: 2,
    },
    {
        title: 'Elegant Modern Chaise Lounge with Gold Legs',
        type: '3D Model',
        price: '$9.99',
        image: '/images/lounge.jpg',
        profile: '/profile/profile1.png',
        likes: 4,
    },
    {
        title: 'Modern Deep Green Leather Sofa with Accents',
        type: '3D Model',
        price: '$11.99',
        image: '/images/green-sofa.jpg',
        profile: '/profile/profile1.png',
        likes: 3,
    },
    {
        title: 'Modular Puffy Green Sofa & Ottoman Set',
        type: '3D Model',
        price: '$14.99',
        image: '/images/puffy-sofa.jpg',
        profile: '/profile/profile1.png',
        likes: 4,
    },
];

const NewArrival: FC = () => {
    const [hoveredProfile, setHoveredProfile] = useState<number | null>(null);

    return (
        <section className="bg-black text-white py-12 px-6">
            <div className="w-auto mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-4xl font-bold">New Arrivals</h2>
                        <p className="text-gray-400 mt-1">
                            Discover the newest arrivals on 3DIMLI.
                        </p>
                    </div>
                    <button className="border border-white text-white py-2 px-5 rounded-full hover:bg-white hover:text-black transition">
                        View All
                    </button>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-white/15 to-black rounded-xl p-4 group relative hover:shadow-lg transition-all min-h-[23rem] md:min-h-[30rem] flex flex-col justify-between"
                        >
                            {/* Top Content */}
                            <div>
                                <div className="flex items-center mb-1 relative gap-1">
                                    <div
                                        className="relative flex-shrink-0"
                                        onMouseEnter={() => setHoveredProfile(index)}
                                        onMouseLeave={() => setHoveredProfile(null)}
                                    >
                                        <Image
                                            src={product.profile}
                                            alt="profile"
                                            width={30}
                                            height={30}
                                            className="rounded-full cursor-pointer"
                                        />

                                        {hoveredProfile === index && (
                                            <div className="absolute top-0 left-full ml-2 z-20 w-64 bg-white text-black rounded-2xl shadow-2xl p-4">
                                                <div className="bg-gradient-to-r from-pink-400 to-orange-400 p-3 rounded-t-xl -m-4 mb-3 flex items-center gap-3">
                                                    <Image
                                                        src={product.profile}
                                                        alt="profile"
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full border-2 border-white"
                                                    />
                                                </div>

                                                <div className="flex justify-between items-center bg-zinc-900 text-white px-4 py-2 rounded-md text-xs font-medium mb-2">
                                                    <div className="flex flex-col items-center">
                                                        <span>2</span>
                                                        <span className="text-yellow-400">Upvotes</span>
                                                    </div>
                                                    <div className="flex flex-col items-center">
                                                        <span>1</span>
                                                        <span className="text-pink-400">Products</span>
                                                    </div>
                                                    <div className="flex flex-col items-center">
                                                        <span>0</span>
                                                        <span className="text-green-400">Reviews</span>
                                                    </div>
                                                </div>

                                                <h4 className="text-sm font-bold flex items-center gap-1">
                                                    Shinobikun ↗
                                                </h4>
                                                <p className="text-xs text-gray-600">
                                                    I make and sell low-poly, and unrigged assets.
                                                </p>
                                                <p className="text-xs text-gray-400">@shinobikun</p>

                                                <div className="mt-3">
                                                    <span className="bg-zinc-900 text-white px-4 py-1 rounded-full text-xs font-bold">
                                                        3DIMLI
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col ml-2 flex-grow min-w-0">
                                        <h3 className="text-sm font-semibold truncate overflow-hidden whitespace-nowrap">
                                            {product.title}
                                        </h3>
                                        {/* Tag */}
                                        <span className="text-[11px] text-blue-400 border border-blue-400 rounded-full px-2 py-[1px] w-max mb-2">
                                            {product.type}
                                        </span>
                                    </div>
                                </div>

                                {/* Product Image */}
                                <div className="relative w-full h-56 sm:h-64 md:h-80 rounded-md overflow-hidden mt-2 md:mt-4">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-md"
                                    />
                                    <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1.5 w-full max-w-[140px] md:px-4 md:py-[6px] md:w-auto bg-gradient-to-r from-[#0e2a63] to-[#0c1e45] text-white text-sm font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 shadow-lg">
                                        <FaCartShopping className="text-sm" />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            {/* Bottom Stats */}
                            <div className="flex items-center justify-between text-gray-400 text-sm mt-3">
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1">
                                        <FaHeart className="text-sm" />
                                        {product.likes}
                                    </span>
                                    <FaCommentDots className="text-sm" />
                                    <FaLink className="text-sm" />
                                    <FaDownload className="text-sm" />
                                </div>
                                <span className="text-green-400 font-bold">{product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewArrival;
