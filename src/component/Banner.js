import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "80px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{ position: "absolute", left: "10px", border: "none", backgroundColor: "transparent" }}
        // todo: navigate to page depend on current page on
        onClick={() => navigate("/")}
      >
        {"<"}
      </button>
      <p style={{ position: "absolute", left: "100px" }}>Restaurant Name</p>
      <button style={{ position: "absolute", right: "10px" }}>lang</button>
    </div>
  );
};

export default Banner;
