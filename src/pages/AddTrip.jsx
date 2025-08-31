

import { Header } from "../component/Header";
import "./AddTrip.css"
import { Card, Button, Rate } from "antd";
import { useTripStore } from "../store/tripsStore";
export function AddTrip(){
  const addTrip = useTripStore((state) => state.addTrip);
  
  const trips = [
    {
      id: 1,
      title: "Discover Yerevan",
      description:
        "Explore the cultural capital of Armenia, visiting ancient churches and modern cafes.",
      image: "/assets/erevan.jpg",
      price: "$250",
      rate:5
    },
    {
      id: 2,
      title: "Romantic Paris",
      description:
        "Walk through the streets of Paris, visit the Eiffel Tower and enjoy French cuisine.",
      image: "/assets/pariz.webp",
      price: "$1200",
      rate:5
    },
    {
      id: 3,
      title: "Lake Sevan Adventure",
      description:
        "Enjoy a relaxing trip to Lake Sevan with local seafood and water activities.",
      image: "/assets/sevan.jpg",
      price: "$300",
      rate:5
    },
    {
      id: 4,
      title: "Venice Getaway",
      description:
        "Ride a gondola through Venice’s canals and explore Italian culture.",
      image: "/assets/venecia.avif",
      price: "$1500",
      rate:5
    },
    {
      id: 5,
      title: "Tatev Monastery",
      description:
        "Visit the historical Tatev Monastery and enjoy breathtaking views.",
      image: "/assets/tatev.jpeg",
      price: "$400",
      rate:5
    },
    {
      id: 6,
      title: "Barcelona Experience",
      description:
        "Discover Gaudi’s masterpieces and relax on the Mediterranean coast.",
      image: "/assets/barselona.jpg",
      price: "$1100",
      rate:5
    },
  ];
  return (
    <>
    <div className="add-trip-background">
    <Header />

  </div>

  <div className="trips-container">
    {trips.map((trip) => (
      <Card
        key={trip.id}
        hoverable
        className="trip-card"
        cover={<img alt={trip.title} src={trip.image} />}
      >
        <h3>{trip.title}</h3>
        <p>{trip.description}</p>
        <Rate disabled defaultValue={trip.rate} />
        <p className="trip-price">{trip.price}</p>
        <Button type="primary" className="buy-button" onClick={() => addTrip(trip)}>
          Buy
        </Button>
      </Card>
    ))}
  </div>
  </>

);
    }