import { useNavigate } from "react-router-dom";

const Banner = ({ ToggleLanguage }) => {
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
        style={{
          position: "absolute",
          left: "10px",
          border: "none",
          backgroundColor: "transparent",
        }}
        // todo: navigate to page depend on current page on
        onClick={() => navigate("/umsikmenu")}
      >
        {"<"}
      </button>
      <p style={{ position: "absolute", left: "100px" }}>Restaurant Name</p>
      <button style={{ position: "absolute", right: "10px" }} onClick={() => {
        ToggleLanguage();
      }}><img src={process.env.PUBLIC_URL + "/language.png"} width={24} height={24}/></button>
    </div>
  );
};

export default Banner;
