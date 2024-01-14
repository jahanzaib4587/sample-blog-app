// Importing React and Card component from Ant Design library
import React from "react";
import { Card } from "antd";

// Destructuring Meta component from Ant Design Card
const { Meta } = Card;

// Functional component for a destination card
const DestinationCard = ({ name, image }) => {
  // Rendering a Card component with an image cover and Meta title
  return (
    <Card cover={<img alt={name} src={image} />}>
      {/* Meta component displaying the destination name */}
      <Meta title={name} />
    </Card>
  );
};

// Exporting the DestinationCard component as the default export
export default DestinationCard;
