"use client"
import Head from 'next/head';
import BasketballPlayerCard from '../app/components/BasketballPlayerCard';


export default function Home() {
  const playerData = {
    name: "LeBron James",
    image: "https://example.com/lebron-james.jpg",
    position: "Small Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5
    }
  };

  return (
    <div className="container">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <BasketballPlayerCard {...playerData} />
      <style jsx global>{`
        body {
          font-family: 'Poppins', sans-serif;
          margin: 0;
          padding: 0;
        }
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
        }
      `}</style>
    </div>
  )
}
