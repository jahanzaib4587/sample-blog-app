// Importing React, Carousel, Tag, Avatar, Row, Col components, isEmpty function from lodash library, and UserOutlined icon from Ant Design library
import React from "react";
import { Carousel, Tag, Avatar, Row, Col } from "antd";
import { isEmpty } from "lodash";
import { UserOutlined } from "@ant-design/icons";

// Importing formatDate utility function from Utils
import { formatDate } from "../Utils";

// Functional component for a carousel of top stories
const TopStoriesCarousel = ({ topStoriesData }) => {
  // Common styles object to hold shared styles for the component
  const commonStyles = {
    carouseTitle: {
      padding: "15px 0px",
      fontWeight: "700",
      fontSize: "35px",
      color: "white",
    },
    carouseTag: {
      border: "none",
      borderRadius: "4px",
      fontSize: "18px",
      padding: "4px 14px",
      borderRadius: "4px",
      fontWeight: "500",
    },
    imageContainer: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "8px",
      boxShadow: "0px 1px 5.5px -1px #DFE5FF",
    },
    carouselContent: {
      position: "absolute",
      bottom: "0px",
      left: "0px",
      padding: "20px",
      color: "white",
      width: "100%",
    },
    containerStyles: {
      position: "relative",
      height: "400px",
      overflow: "hidden",
    },
    profileSection: {
      marginLeft: 8,
      display: "flex",
      flexDirection: "row",
      fontSize: "16px",
      fontWeight: "500",
      color: "white",
    },
    dateStyles: {
      padding: "0px 5px",
      margin: "auto 0px",
    },
    avatarContainer: { display: "flex", flexDirection: "row" },
    userContainer: {
      padding: "0px 5px",
      margin: "auto 0px",
    },
  };

  // Rendering the top stories carousel with dynamic data
  return (
    <>
      {!isEmpty(topStoriesData) && (
        <Carousel autoplay>
          {topStoriesData.map((story) => (
            <div key={story.key} className="carousel-item">
              {/* Image for the top story */}
              <img
                src={story.imgSrc}
                alt="Top Story"
                style={commonStyles.imageContainer}
              />
              {/* Content overlay on the image */}
              <div style={commonStyles.carouselContent}>
                {/* Tag for story category */}
                <Tag color="blue" style={commonStyles.carouseTag}>
                  {story.categoryText}
                </Tag>
                {/* Title of the story */}
                <Row>
                  <span style={commonStyles.carouseTitle}>{story.title}</span>
                </Row>
                {/* User information section */}
                <Row gutter={[16, 16]}>
                  <Col span={6} style={commonStyles.avatarContainer}>
                    {/* Avatar for the user */}
                    <Avatar
                      size="large"
                      icon={<UserOutlined />}
                      src={story.userImg}
                    />
                    {/* Profile section with user name and date */}
                    <div style={commonStyles.profileSection}>
                      <span style={commonStyles.userContainer}>
                        {story.userName}
                      </span>
                      <span style={commonStyles.dateStyles}>
                        {formatDate(story.date)}
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
};

// Exporting the TopStoriesCarousel component as the default export
export default TopStoriesCarousel;
