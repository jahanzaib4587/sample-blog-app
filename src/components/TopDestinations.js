// Importing React and Card, Typography components from Ant Design library
import React from "react";
import { Card, Typography } from "antd";

// Destructuring Title component from Ant Design Typography
const { Title } = Typography;

// Functional component for a destination card
const DestinationCard = ({ imgSrc, destinationName }) => {
  // Custom styling for the card
  const cardStyle = {
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200px",
    position: "relative",
    padding: "auto 0px",
  };

  // Rendering a Card component with a background image and destination name
  return (
    <Card style={cardStyle} className="destination-card">
      <div className="card-content">
        {/* Title component displaying the destination name */}
        <Title level={4} className="destination-name">
          {destinationName}
        </Title>
      </div>
    </Card>
  );
};

// Exporting the DestinationCard component as the default export
export default DestinationCard;
