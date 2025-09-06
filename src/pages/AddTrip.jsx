

import { Header } from "../component/Header";
import { useState,useEffect} from "react";
import "./AddTrip.css"
import { Card, Button, Rate } from "antd";
import { useTripStore } from "../store/tripsStore";
import { toast } from "react-toastify";
export default function AddTrip(){
  const [trips, setTrips] = useState([]);
  const addTrip = useTripStore((state) => state.addTrip);
  
  useEffect(() => {
    fetch("https://68bc0ecc0f2491613eddf8b4.mockapi.io/trips") 
      .then((res) => res.json())
      .then((data) => setTrips(data))
      .catch((err) => console.error(err));
  }, []);

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
            <Button
              type="primary"
              className="buy-button"
              onClick={() => {
                addTrip(trip);
                toast.success("Ձեր տոմսը հաջողությամբ ավելացվել է 🎉", {
                  position: "top-right",
                });
              }}
            >
              Buy
            </Button>
          </Card>
        ))}
      </div>
  </>

);
    }