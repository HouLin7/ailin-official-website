"use client";

export default function Section4() {
  const styles: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: '50px',
    // backgroundColor: "#adc6ccff",
    // backgroundSize: "cover",
    // height: "200px",
    width: "100%",
    // padding: "20px",
    // maxWidth:'300px',
    backgroundPosition: "center",
  };

  return (
    <div style={styles}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>每一个人都</h1>
        <h1 style={{ marginLeft: 100 }}> 能车位主角</h1>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          // marginLeft: 50,
        }}
      >
        <div>「让社交，从这里开始」</div>
        <div style={{ width: 300 }}>
          在这里，不需要完美的言语，你可以用文字、照片、视频，总会有人看到你，回应你。
        </div>
      </div>
    </div>
  );
}
