import React from "react";

export default function AutoScrollPhone() {
  return (
    <div
      style={{
        position: "relative",
        width: "300px",
        height: "600px",
        background: 'url("/phone.png") no-repeat center/cover',
        overflow: "hidden",
        borderRadius: "40px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      }}
    >
      <div
        className="scroll-screen"
        style={{
          position: "absolute",
          top: "50px",
          left: "30px",
          width: "240px",
          height: "500px",
          overflow: "hidden",
          borderRadius: "20px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="scroll-inner" style={{ position: "relative" }}>
          {/* 两张相同的内容图用于实现无缝循环 */}
          <img
            src="/content.jpg"
            alt="content"
            style={{
              width: "100%",
              display: "block",
            }}
          />
          <img
            src="/content.jpg"
            alt="content duplicate"
            style={{
              width: "100%",
              display: "block",
            }}
          />
        </div>
      </div>

      <style>{`
        .scroll-inner {
          animation: scrollLoop 12s linear infinite;
        }
        .scroll-screen:hover .scroll-inner {
          animation-play-state: paused;
        }
        @keyframes scrollLoop {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
}
