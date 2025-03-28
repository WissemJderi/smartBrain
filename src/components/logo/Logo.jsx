import Tilt from "react-parallax-tilt";

function Logo() {
  return (
    <div style={{ width: "150px", height: "150px" }}>
      {" "}
      <Tilt tiltMaxAngleX={25}>
        <div
          style={
            {
              // height: "100px",
              // width: "100px",
            }
          }
          className="tilt br2"
        >
          <h1 className="white center" style={{ textAlign: "center" }}>
            /--/
          </h1>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
