"use client";
export default function Section2() {
  const styles: React.CSSProperties = {
    display: "flex",
    marginTop: "50px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundPosition: "center",
  };

  return (
    <div style={styles}>
      <h1 style={{ color: "#3E3E40" }}>能替我社交、表达、陪伴。</h1>

      <div
        style={{
          color: "#3E3E4099",
          fontSize: 20,
          maxWidth: 1000,
          textAlign: "center",
          marginTop: 20,
          marginBottom: 40,
        }}
      >
        上传一张照片，就能生成我的AI分身。
        TA会学习我的语气、表情与习惯,在我离线时，继续与朋友或陌生人互动。这是属于我们的全新社交方式。
      </div>
     
      <video
        muted
        autoPlay
        loop
        style={{
          width: "60%",
          height: "auto",
          objectFit: "fill",
          borderRadius: "16px",
        }}
      >
        <source src={"/video/section2.mp4"} type="video/mp4" />
        您的浏览器不支持视频播放
      </video>
    </div>
  );
}
