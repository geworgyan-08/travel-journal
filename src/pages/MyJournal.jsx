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
            <p className="journal-empty-message">No trips added yet 🛫</p>
          ) : (
            tripsInJournal.map((trip) => (
              <Card
                key={trip.id}
                hoverable
                className="journal-trip-card"
                cover={
                  <img
                    alt={trip.title}
                    src={trip.image}
                    className="journal-trip-image"
                  />
                }
              >
                <h2 className="journal-trip-title">{trip.title}</h2>
                <p className="journal-trip-description">{trip.description}</p>

                <div className="journal-card-buttons">
                  <Button type="default" className="journal-see-more-btn">
                    See More
                  </Button>
                  <Button
                    danger
                    onClick={() => removeTrip(trip.id)}
                    className="journal-delete-btn"
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </>
  );
}
