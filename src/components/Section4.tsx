"use client";

import AutoScrollPhone from "./AutoScrollPhone";

export default function Section4() {
  const styles: React.CSSProperties = {
    position: "relative",
    marginTop: "50px",
    height: 900,
    // backgroundColor: "#adc6ccff",
    width: "100%",
  };

  return (
    <div style={styles}>
      <div style={{ position: "absolute", left: 400, top: 350 }}>
        <h1>每一个人都</h1>
        <h1 style={{ marginLeft: 50 }}> 能成为主角</h1>
      </div>

      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <AutoScrollPhone></AutoScrollPhone>
      </div>

      <div
        style={{
          position: "absolute",
          top: 350,
          left: 1100,
        }}
      >
        <div>「让社交，从这里开始」</div>
        <div style={{ width: 300, marginLeft: 20, marginTop: 5 }}>
          在这里，不需要完美的言语，你可以用文字、照片、视频，总会有人看到你，回应你。
        </div>
      </div>
    </div>
  );
}
