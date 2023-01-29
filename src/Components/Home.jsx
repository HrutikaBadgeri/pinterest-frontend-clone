import Card from "./Card";
import data from "./Data";
const Home = () => {
  console.log(data);
  return (
    <div style={styles.pin_container}>
      {data.map((pin) => (
        <Card size={pin.size} link={pin.imgSrc} />
      ))}
      {/* <Card size="small" />
      <Card size="small" />
      <Card size="small" />
      <Card size="small" />
      <Card size="small" />
      <Card size="small" />
      <Card size="small" /> */}
    </div>
  );
};
const styles = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: "80vw",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridAutoRows: "10px",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    justifyContent: "center",
    backgroundColor: "white",
  },
};
export default Home;
