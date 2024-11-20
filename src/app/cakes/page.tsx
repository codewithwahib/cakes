import React from 'react';
import Image from 'next/image';

const Watches = () => {
  const watchData = [
    { id: 1, name: 'Chocolate Cake', price: 25, description: 'Rich and decadent chocolate cake.', image: '/cake.jpg' },
    { id: 2, name: 'Vanilla Cake', price: 20, description: 'Light and fluffy vanilla cake with cream frosting.', image: '/cake1.jpg' },
    { id: 3, name: 'Strawberry Cake', price: 22, description: 'Fresh strawberry flavor in every bite.', image: '/cake2.jpg' },
    { id: 4, name: 'Red Velvet Cake', price: 28, description: 'Delicious red velvet cake with cream cheese frosting.', image: '/cake3.jpg' },
    { id: 5, name: 'Carrot Cake', price: 24, description: 'Moist carrot cake with a touch of cinnamon.', image: '/cake4.jpg' },
    { id: 6, name: 'Lemon Cake', price: 21, description: 'Zesty lemon cake with a sweet glaze.', image: '/cake5.jpg' },
    { id: 7, name: 'Coffee Cake', price: 23, description: 'Perfectly brewed coffee flavor in a soft cake.', image: '/cake6.jpg' },
    { id: 8, name: 'Cheesecake', price: 30, description: 'Creamy and smooth cheesecake with a graham cracker crust.', image: '/cake7.jpg' },
    { id: 9, name: 'Banana Cake', price: 18, description: 'Fluffy banana cake with a rich frosting.', image: '/cake8.jpg' },
    { id: 10, name: 'Pineapple Cake', price: 26, description: 'Tropical pineapple flavor with a soft texture.', image: '/cake10.jpg' },
    { id: 11, name: 'Apple Cake', price: 27, description: 'Spiced apple cake with a warm, comforting taste.', image: '/cake11.jpg' },
    { id: 12, name: 'Coconut Cake', price: 25, description: 'Coconut flavored cake topped with coconut flakes.', image: '/cake12.jpg' },
    { id: 13, name: 'Chocolate Mousse Cake', price: 32, description: 'Indulgent chocolate mousse layered with cake.', image: '/cake13.jpg' },
    { id: 14, name: 'Peach Cake', price: 24, description: 'Sweet peach flavor with a soft texture.', image: '/cake14.jpg' },
    { id: 15, name: 'Raspberry Cake', price: 29, description: 'Tangy raspberry filling with a soft cake base.', image: '/cake15.jpg' },
    { id: 16, name: 'Almond Cake', price: 23, description: 'Fluffy almond-flavored cake topped with slivered almonds.', image: '/16.jpg' },
    { id: 17, name: 'Pistachio Cake', price: 28, description: 'Rich pistachio flavor with a delicate texture.', image: '/17.jpg' },
    { id: 18, name: 'Tiramisu Cake', price: 35, description: 'Classic tiramisu flavor in cake form with mascarpone cream.', image: '/18.jpg' },
    { id: 19, name: 'Pumpkin Cake', price: 22, description: 'Spicy pumpkin cake perfect for the fall season.', image: '/19.jpg' },
    { id: 20, name: 'Sponge Cake', price: 18, description: 'Light and airy sponge cake with a smooth frosting.', image: '/20.jpg' },
    { id: 21, name: 'Marble Cake', price: 24, description: 'Swirls of chocolate and vanilla in a moist cake.', image: '/21.jpg' },
    { id: 22, name: 'Chiffon Cake', price: 21, description: 'Soft, fluffy, and light chiffon cake with a sweet glaze.', image: '/22.jpg' },
    { id: 23, name: 'Mint Chocolate Cake', price: 27, description: 'Refreshing mint flavor with rich chocolate cake layers.', image: '/23.jpg' },
    { id: 24, name: 'Cherry Cake', price: 26, description: 'Sweet cherries mixed into a soft and moist cake.', image: '/cake24.jpg' },
  ];

  return (
    <div>
      <div className="watches">
        {watchData.map((watch) => (
          <div key={watch.id} className="watch-card">
            <Image 
              src={watch.image} 
              alt={watch.name} 
              width={500} 
              height={500} 
            />
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <div className="price">${watch.price}</div>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;


