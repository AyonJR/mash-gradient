// const Banner = () => {
//     return (
//         <div className="relative">
//             <div className="relative">
//                 {/* Image */}
//                 <img 
//                     className="w-full h-full object-cover" 
//                     src="https://i.ibb.co/G7KSj5K/top-view-table-full-delicious-food-composition.jpg" 
//                     alt="Delicious Food" 
//                 />
//                 {/* Darker Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black opacity-90"></div>
//             </div>
//         </div>
//     );
// };

// export default Banner;
const Banner = () => {
    return (
        <div className='h-[100vh] flex items-center justify-start z-10'>
            <h1 className="text-5xl text-white">Hello, World!</h1>
        </div>
    );
};

export default Banner;


