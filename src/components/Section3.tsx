"use client";

import TeamGallery from "./TeamGallery";

export default function Section3() {
  const styles: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#adc6ccff",
    // height: "400px",
    width: "100%",
    backgroundPosition: "center",
  };

  return (
    <div style={styles}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 50 }}> 在这里还有有趣的陌生人</h1>
        <div style={{ width: 1400 }}>
          <TeamGallery></TeamGallery>
        </div>
      </div>
    </div>
  );
}
