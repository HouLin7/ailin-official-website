"use client";
import { fadeInUp } from "@/app/utils/animations";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

export default function Section1() {
  const bgStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#adc6ccff",
    backgroundImage: "url('/section1_bg.png')",
    backgroundSize: "cover",
    height: 400,    
    width: "100%",        
  };

  const download = () => {
    if (isMobile) {
      return (
        <>
          <div style={{ color: "black", marginTop: "10px" }}>扫码下载App</div>
          <div onClick={() => {}} style={{ cursor: "pointer" }}>
            <img src={"/download_qrcode.png"} width={100} height={100}></img>
            <div>APP下载</div>
          </div>
        </>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ color: "black", marginTop: "10px" }}>扫码下载App</div>
            <img src={"/download_qrcode.png"} width={100} height={100}></img>
          </div>

          <div style={{ marginLeft: 20 }}>
            <div className="download-buttons">
              <a
                href="https://apps.apple.com/app/id0000000000"
                className="store-btn apple"
              >
                 App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.ailin.app"
                className="store-btn google"
              >
                ▶ Google Play
              </a>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={bgStyle}>
          <img src={"/logo.png"} width={60} height={60}></img>
          <h1 style={{ color: "white" }}>新社交，亲情友情永不掉线</h1>
          <h2 style={{ color: "white" }}>---「我的AI分身随时在线。」</h2>
          <div style={{ fontSize: 16, color: "white", width: 500 }}>
            这是我的专属AI 分身。 <br />
            TA记得我的语气，模仿我的笑声，记得我的事迹。 <br />
            更有爱的AI分身，陪伴我爱的人们。
          </div>
          {download()}
        </div>
      </div>
    </motion.div>
  );
}
