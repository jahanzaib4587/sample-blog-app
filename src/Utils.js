export const formatDate = (inputDate) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(inputDate).toLocaleDateString(undefined, options);
};
export const generateCardData = (length, type = "seed") => {
  return Array.from({ length }, (_, index) => ({
    key: index.toString(),
    imgSrc: `https://picsum.photos/600/200?${type}=${index + 1}`,
    categoryText: "Category " + (index + 1),
    date: "12/12/2023",
    userName: "Tracy Wilson" + (index + 1),
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU",
    title: "The Impact Of Technology On The Workplace " + (index + 1),
    destinationName: "City " + (index + 1),
  }));
};

export const appStrings = {
  topStories: "Top Stories",
  trending: "Trending",
  topDestinations: "Top Destinations",
  tickOffDestination:
    "Tick one more destination off of your bucket list with one of our most popular vacations in 2022",
};