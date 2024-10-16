import React from 'react'

const HomeContent = () => {
 interface cardsType{
    id:number;
    title:string;
    description:string;
    link:string;
 }


    const cards:cardsType[] = [
        { id: 1, title: 'Card 1', description: 'This is the first card.',link:'link' },
        { id: 2, title: 'Card 2', description: 'This is the second card.',link:'link' },
        { id: 3, title: 'Card 3', description: 'This is the third card.',link:'link' },
        { id: 4, title: 'Card 4', description: 'This is the fourth card.',link:'link' },
        { id: 5, title: 'Card 4', description: 'This is the fourth card.',link:'link' },
        { id: 6, title: 'Card 4', description: 'This is the fourth card.',link:'link' },
        { id: 7, title: 'Card 4', description: 'This is the fourth card.',link:'link' },
      ];
  return (
    <div className='flex flex-col xl:mx-56'>
        <h1 className='text-center font-bold font-playfair text-2xl p-4 md:text-start text-white'>
        Günün Öne Çıkan Yazıları
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-start">
        {cards.slice(0,6).map((card) => (
          <div key={card.id} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="font-bold text-lg mb-2">{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default HomeContent