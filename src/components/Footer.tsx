"use client";
import { isMobile } from "react-device-detect";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#3E3E40",
        // height: 130,
        marginTop: 40,
        paddingTop: 20,
        paddingBottom: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: 16,
      }}
    >
      {isMobile ? (
        <div style={{ textAlign: "center", fontSize: "14px" }}>
          © {new Date().getFullYear()}&nbsp;泛在共生（北京）科技有限公司
          <br />
          京ICP备2025147241号-1
        </div>
      ) : (
        <div>
          © {new Date().getFullYear()}&nbsp; 泛在共生（北京）科技有限公司
          &nbsp;&nbsp;&nbsp;&nbsp;京ICP备2025147241号-1
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <a href="/privacy" style={{ margin: "0 10px", color: "white" }}>
          隐私政策
        </a>

        <a href="/terms" style={{ margin: "0 10px", color: "white" }}>
          服务条款
        </a> */}
      </div>
    </footer>
  );
}
