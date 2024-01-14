// Importing React and various components from Ant Design library
import React from "react";
import Banner from "./components/TopStories";
import ArticleCard from "./components/ArticleCard";
import { Row, Col, Carousel } from "antd";
import "./App.css";

// Importing TrendingCard, TopStoriesCarousel, DestinationCard, and Navbar components
import TrendingCard from "./components/TrendingCard";
import TopStoriesCarousel from "./components/TopStories";
import DestinationCard from "./components/TopDestinations";
import Navbar from "./components/Navbar";

// Importing appStrings and generateCardData utility functions from Utils
import { appStrings, generateCardData } from "./Utils";

// Functional component for the main application
const App = () => {
  // Common styles object to hold shared styles for the component
  const commonStyle = {
    SectionHeading: {
      textAlign: "start",
      borderBottom: "1px solid #f0f0f0",
      fontSize: "40px",
      fontWeight: "600",
      padding: "15px  0px",
      width: "100%",
      margin: "30px 0px",
    },
    title: { fontSize: "16px", fontWeight: "200" },
  };

  // Rendering the main application layout
  return (
    <Row justify="center" style={{ padding: "20px" }}>
      <Col xs={24} sm={24} md={20} lg={22} xl={22}>
        {/* Rendering the Navbar component */}
        <Navbar />

        {/* Top Stories section */}
        <Row style={{ ...commonStyle.SectionHeading }}>
          <span>{appStrings.topStories}</span>
        </Row>
        {/* Rendering the TopStoriesCarousel component with generated data */}
        <TopStoriesCarousel topStoriesData={generateCardData(5)} />
        <br />
        {/* Banner section */}
        <Banner />

        {/* Article Cards section */}
        <Row gutter={[16, 16]}>
          {/* Mapping over generated card data and rendering ArticleCard components */}
          {generateCardData(15).map((card) => (
            <Col key={card.key} xs={24} sm={12} md={12} lg={6} xl={6}>
              <ArticleCard {...card} />
            </Col>
          ))}
        </Row>

        {/* Trending section */}
        <Row style={commonStyle.SectionHeading}>
          <span> {appStrings.trending}</span>
        </Row>
        {/* Mapping over generated card data and rendering TrendingCard components */}
        <Row gutter={[1, 16]}>
          {generateCardData(10).map((card) => (
            <Col key={card.key} xs={24} sm={12} md={24} lg={12} xl={12}>
              <TrendingCard {...card} />
            </Col>
          ))}
        </Row>

        {/* Top Destinations section */}
        <div style={{ ...commonStyle.SectionHeading }}>
          <Row>
            <span> {appStrings.topDestinations}</span>
          </Row>
          <Row>
            <span style={commonStyle.title}>
              {appStrings.tickOffDestination}
            </span>
          </Row>
        </div>
        <div>
          {/* Carousel for top destinations, mapping over generated data and rendering DestinationCard components */}
          <Carousel dots={false} slidesToShow={5} autoplay>
            {generateCardData(15, "dest").map((destination) => (
              <DestinationCard
                style={{ width: "10px" }}
                key={destination.destinationName}
                {...destination}
              />
            ))}
          </Carousel>
        </div>
      </Col>
    </Row>
  );
};

// Exporting the App component as the default export
export default App;
