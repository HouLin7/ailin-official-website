export default function Section2() {
  const styles: React.CSSProperties = {
    display: "flex",
    // backgroundColor: "red",
    marginTop: "100px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",    
    width: "100%",    
    backgroundPosition: "center",
  };

  return (
    <div style={styles}>
      {/* <img
        src={"/gif/section1.gif"}
        style={{
          width: "600px",
          // height: "300px",
          objectFit: "cover", // 缩放模式
          objectPosition: "center", // 裁剪基准
          borderRadius: "16px",
        }}
      ></img> */}

      <video muted  autoPlay loop style={{ width: "600", height: "auto" ,objectFit:'fill',borderRadius:'16px'}}>
        <source src={"/video/section2.mp4"} type="video/mp4" />
        您的浏览器不支持视频播放
      </video>
    </div>
  );
}
