import React from "react";

export default function AutoScrollPhone() {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#9c3535ff",
        width: 422,
        height: 894,
        background: 'url("/section4/phone.png") no-repeat center/contain',
        overflow: "hidden",
        // borderRadius: "40px",
        // boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      }}
    >
      <div
        className="scroll-screen"
        style={{
          position: "absolute",
          top: 100,
          left: 10,
          width: 402,
          height: 783,
          overflow: "hidden",
          borderRadius: "0px 0px 60px 60px",
          // maskImage:
          //   "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="scroll-inner" style={{ position: "relative" }}>
          {/* 两张相同的内容图用于实现无缝循环 */}
          <img
            src="/section4/content.jpeg"
            alt="content"
            style={{
              width: "100%",
              display: "block",
            }}
          />
          <img
            src="/section4/content.jpeg"
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
            transform: translateY(-2612px);
          }
        }
      `}</style>
    </div>
  );
}
