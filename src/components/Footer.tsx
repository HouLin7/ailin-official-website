export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#3E3E40",
        height: 130,
        marginTop: 50,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <p>© {new Date().getFullYear()} Ailin App. All rights reserved.</p>
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
