"use client";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

const platforms = [
  // {
  //   name: "Windows",
  //   svg: (
  //     <svg viewBox="0 0 64 64" width="60" height="60">
  //       <path
  //         d="M6 10l23-3v25H6V10zm26-3l26-4v32H32V7zM6 34h23v23L6 53V34zm26 0h26v29l-26-4V34z"
  //         fill="#bbb"
  //       />
  //     </svg>
  //   ),
  //   active: false,
  // },
  // {
  //   name: "Mac",
  //   svg: (
  //     <svg viewBox="0 0 64 64" width="60" height="60">
  //       <path
  //         d="M44.5 34.1c-.1-7.2 5.9-10.7 6.2-10.9-3.4-4.9-8.6-5.5-10.4-5.6-4.4-.4-8.6 2.6-10.8 2.6-2.2 0-5.6-2.5-9.2-2.4-4.7.1-9 2.7-11.4 6.9-4.9 8.5-1.3 21.2 3.5 28.1 2.3 3.3 5 7 8.5 6.9 3.4-.1 4.7-2.2 8.8-2.2 4.1 0 5.3 2.2 8.9 2.1 3.7 0 6-3.3 8.2-6.6 2.6-3.8 3.7-7.5 3.8-7.7-.1 0-7.4-2.8-7.5-11.1z"
  //         fill="#d94a38"
  //       />
  //     </svg>
  //   ),
  //   active: true,
  // },
  {
    name: "Android",
    svg: (
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5936"
        width="60"
        height="60"
      >
        <path
          d="M229.443715 343.118259l565.172804 0 0 410.010794c0 37.525595-30.237317 67.762912-67.040108 67.762912l-46.319715 0 0 139.742183c0 35.116247-28.249605 63.365852-63.305618 63.365852-35.116247 0-63.546553-28.309839-63.546553-63.365852l0-139.742183-84.809049 0 0 139.742183c0 35.056013-28.430306 63.365852-63.546553 63.365852-34.393443 0-62.763515-28.309839-62.763515-63.365852l-0.542103-139.742183-45.596911 0c-37.465361 0-67.702678-30.177084-67.702678-67.762912l0-410.010794zM141.984383 331.432921c-35.056013 0-63.426086 28.370073-63.426086 62.763515l0 264.787344c0 35.116247 28.370073 63.365852 63.426086 63.365852s62.763515-28.309839 62.763515-63.365852l0-264.787344c0-34.393443-28.189371-62.763515-62.763515-62.763515zM796.42353 320.952257l-569.449397 0c0-97.879762 58.547156-182.869512 145.343917-227.141282l-43.7899-80.59269c-2.469582-4.336826-1.264908-9.878327 3.071919-12.347908 4.276593-1.867245 9.878327-0.662571 12.347908 3.734489l44.271769 81.255261c37.646062-16.684735 79.508484-25.900491 123.780253-25.900491s86.134191 9.215756 123.780253 25.840257l44.271769-81.255261c2.469582-4.336826 8.071316-5.5415 12.347908-3.734489 4.336826 2.469582 5.5415 8.011082 3.071919 12.347908l-43.7899 80.59269c86.254658 44.332003 144.74158 129.321753 144.74158 227.201515zM406.048922 194.160319c0-12.950245-10.42043-24.033246-23.912779-24.033246-13.010479 0-23.430909 11.083001-23.430909 24.033246 0 12.890012 10.42043 23.973012 23.430909 23.973012 13.492349 0.060234 23.912779-11.022767 23.912779-23.973012zM665.294766 194.160319c0-12.950245-10.42043-24.033246-23.430909-24.033246-13.552582 0-23.912779 11.083001-23.912779 24.033246 0 12.890012 10.42043 23.973012 23.912779 23.973012 13.010479 0.060234 23.430909-11.022767 23.430909-23.973012zM882.015617 331.432921c-34.51391 0-62.763515 27.707502-62.763515 62.763515l0 264.787344c0 35.116247 28.249605 63.365852 62.763515 63.365852 35.056013 0 63.426086-28.309839 63.426086-63.365852l0-264.787344c-0.060234-35.056013-28.370073-62.763515-63.426086-62.763515z"
          p-id="5937"
        ></path>
      </svg>
    ),
    active: false,
  },
  {
    name: "iPhone",
    svg: (
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2636"
        width="60"
        height="60"
      >
        <path
          d="M661.333333 42.666667H320c-58.88 0-106.666667 47.786667-106.666667 106.666666v725.333334c0 58.88 47.786667 106.666667 106.666667 106.666666h341.333333c58.88 0 106.666667-47.786667 106.666667-106.666666V149.333333c0-58.88-47.786667-106.666667-106.666667-106.666666z m-170.666666 896c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z m192-170.666667H298.666667V170.666667h384v597.333333z"
          p-id="2637"
        ></path>
      </svg>
    ),
    active: false,
  },
];

export default function DownloadPage() {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (text: string) => {
    setToast(text);
    setTimeout(() => setToast(null), 2000);
  };

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1 style={styles.title}>客户端下载</h1>
      <div style={styles.grid}>
        {platforms.map((p) => (
          <div
            key={p.name}
            className="item"
            onClick={() => {
              if (isMobile) {
                alert(`「${p.name}」客户端正在内测中，敬请期待…`);
              } else {
                showToast(`「${p.name}」客户端正在内测中，敬请期待…`);
              }
            }}
          >
            <div className="icon">{p.svg}</div>
            <div className="label">{p.name}</div>
          </div>
        ))}
      </div>

      {toast && <div style={styles.toast}>{toast}</div>}
      <style jsx>{`
        .item .icon {
          fill: #ffffff !important;
          transition: filter 0.2s ease;
        }
        .item:hover .icon {
          fill: #d94a38 !important;
        }
        .item:hover .label {
          color: #d94a38 !important;
          font-size: 20px;
        }
        .item .label {
          color: #ffffff;
          margin-top: 8px;
          font-size: 18px;
          transition: color 0.2s ease;
        }
        .fade-in {
          animation: fade 0.3s ease;
        }
        @keyframes fade {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: "white",
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    // justifyItems: "center",
    // backgroundColor:'white',
  },
  item: {
    cursor: "pointer",
    transition: "transform 0.2s ease, opacity 0.2s ease",
    opacity: 1,
    color: "#fff",
  },
  icon: {
    transition: "transform 0.2s",
  },

  toast: {
    position: "fixed",
    top: 20,
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(50,50,50,0.9)",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: 8,
    fontSize: 14,
    zIndex: 9999,
  },
};
