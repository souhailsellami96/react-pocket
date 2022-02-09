import React from "react";

import { BsThreeDots } from "react-icons/bs";

export default function ActivityLog() {
  const data = [
    {
      day: "Sun",
      date: "1/3 2:44pm",
      name: "Monthly pay to Apple Music",
      status: "Paid",
    },
    {
      day: "Fri",
      date: "2/2 3:09am",
      name: " Netflix Premium Payment",
      status: "Paid",
    },
    {
      day: "Mon",
      date: "2/1 4:12pm",
      name: "Sent to *******",
      status: "Paid",
    },
    {
      day: "Thu",
      date: "1/31 4:00pm",
      name: "Pay Spotify",
      status: "Paid",
    },
  ];
  return (
    <div className="activity">
      <div className="activity__info">
        <h4>Milestones</h4>
        <BsThreeDots />
      </div>
      <div className="activity__container">
        {data.map((transaction) => {
          return (
            <div className="transaction">
              <div className="timestamp">
                <h5>{transaction.day}</h5>
                <h6>{transaction.date}</h6>
              </div>
              <div className="dot"></div>
              <div className="details">
                <h5>{transaction.name}</h5>
                <h5>{transaction.status}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}