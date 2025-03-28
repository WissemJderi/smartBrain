function ImageLinkForm() {
  return (
    <div>
      <p className="f5"></p>
      <div
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      //   gap: "10px",
      // }}
      >
        <div className="pa4 br3 shadow-5 center form">
          <input className="f4 pa2 w-70 center" type="text" />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple ">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
