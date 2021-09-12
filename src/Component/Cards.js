import CardItem from "./CardItem";
const Cards = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <CardItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          studio={item.studio}
        />
      ))}
    </>
  );
};

export default Cards;
