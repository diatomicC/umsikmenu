const Banner = () => {
  return (
    <div
      style={{
        height: "80px",
        width: "100%",
        backgroundColor: "#0008",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src=""
        alt="banner"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <p style={{ position: "absolute", left: "25px" }}>Restaurant Name</p>
      <button style={{ position: "absolute", right: "10px" }}>lang</button>
    </div>
  );
};

export default Banner;
