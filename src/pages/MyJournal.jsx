
import React from "react";
import { Card, Button } from "antd";
import { useTripStore } from "../store/tripsStore";
import { Header } from "../component/Header";
import "./MyJournal.css";

export default function MyJournal() {
  const { tripsInJournal, removeTrip } = useTripStore();

  return (
    <>
           <div className="video-hero">
      <Header />
        <video className="video-bg" autoPlay loop muted playsInline>
          <source src="/assets/my-journal.mp4" type="video/mp4" />
          Ձեր բրաուզերը չի աջակցում video tag-ին։
        </video>

      
      </div>

        <div className="journal-container">
        <div className="journal-cards">
          {tripsInJournal.length === 0 ? (
            <p className="empty-message">No trips added yet 🛫</p>
          ) : (
            tripsInJournal.map((trip) => (
              <Card
                key={trip.id}
                hoverable
                cover={<img alt={trip.title} src={trip.image} />}
                className="trips-card"
              >
                <h2>{trip.title}</h2>
                <p>{trip.description}</p>
                <Button
                  danger
                  onClick={() => removeTrip(trip.id)}
                  className="delete-btn"
                >
                  Delete
                </Button>
              </Card>
            ))
          )}
        </div>
  </div>
    </>
  );
}
