// import React from 'react';

// const Card = () => {

//   return (
//     <div className="bg-black w-full p-5 h-[600px]">
//       <div className='flex  justify-center w-full h-[560px] gap-3'>
//         <div className='img-sections rounded-lg transition-all duration-300'>
//           <img
//             src='https://cdn.pixabay.com/photo/2016/03/20/22/41/dewdrops-1269617_1280.jpg'
//             className='w-full h-[560px] object-cover object-center rounded-lg transition-all duration-300 hover:w-[900px] hover:h-[560px]'
//           />
//         </div>
//         <div className='img-sections rounded-lg transition-all duration-300'>
//           <img
//             src='https://cdn.pixabay.com/photo/2016/03/20/22/41/dewdrops-1269617_1280.jpg'
//             className='w-full h-[560px] object-cover object-center rounded-[15px] hover:w-[900px] hover:h-[560px] transition-all ease-in-out duration-1000'
//           />
//         </div>
//         <div className='img-sections rounded-lg transition-all duration-300'>
//           <img
//             src='https://cdn.pixabay.com/photo/2016/03/20/22/41/dewdrops-1269617_1280.jpg'
//             className='w-full h-[560px] object-cover object-center rounded-[15px] hover:w-[900px] hover:h-[560px] transition-all ease-in-out duration-1000'
//           />
//         </div>
//         <div className='img-sections h-[200px] rounded-lg transition-all duration-300'>
//           <img
//             src='https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600'
//             className='w-full h-[560px] object-cover object-center rounded-[15px] hover:w-[800px] hover:h-[560px] transition-all ease-in-out duration-1000'
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;




// import React from 'react';

// const Card = () => {
//   return (
//     <div className="bg-black w-full p-10 h-[900px] transition-all ">
//       <div className='flex w-full h-[500px] gap-4'>
//         <div className='img-sections duration-100'>
//           <img
//             src='https://cdn.pixabay.com/photo/2016/03/20/22/41/dewdrops-1269617_1280.jpg'
//             className='w-full h-[560px] object-cover object-center rounded-[15px] hover:w-[900px] duration-300'
//           />
//         </div>
//         <div className='img-sections'>
//           <img
//             src='https://cdn.pixabay.com/photo/2016/03/20/22/41/dewdrops-1269617_1280.jpg'
//             className='w-full h-[560px] object-cover object-center rounded-[15px] hover:w-[900px]   duration-300'
//           />
//         </div>
//         <div className='img-sections'>
//           <img
//             src='https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D'
//             className='w-full h-[560px] object-cover object-center rounded-[15px] hover:w-[900px]  duration-300'
//           />
//         </div>
//         <div className='img-sections'>
//           <img
//             src='https://cdn.pixabay.com/photo/2016/03/20/22/41/dewdrops-1269617_1280.jpg'
//             className='w-full h-[560px] object-cover object-center rounded-[15px] hover:w-[900px] transition-all'
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
import React, { useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1538935732373-f7a495fea3f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyZWVzfGVufDB8fDB8fHww',
  'https://plus.unsplash.com/premium_photo-1673264933056-8f2f9c87742f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1675714692989-2d8cb7339b29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZXN8ZW58MHx8MHx8fDA%3D',
  'https://cdn.pixabay.com/photo/2016/03/20/22/41/dewdrops-1269617_1280.jpg',
  'https://images.unsplash.com/photo-1421790500381-fc9b5996f343?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const Card = () => {
  const [hoveredIndex, setHoveredIndex] = useState();

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="bg-black w-full p-10 h-[900px]  transition-all  rotate-90 lg:rotate-0 lg:w-full">
      <div className='flex w-full h-[500px] gap-4 lg:w-full'>
        {images.map((imageUrl, index) => (
          <div 
            className='img-sections' 
            key={index} 
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={imageUrl}
              className={`w-full h-[560px] object-fill object-center sm:object-cover rounded-[15px] transition-all duration-300 ${hoveredIndex === index ? 'w-[900px]' : 'w-[300px]'}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
































