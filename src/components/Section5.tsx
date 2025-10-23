"use client";

export default function Section5() {
  const peoples = [
    {
      name: "AI女友",
      description: "她会倾听，她会关心，她会记住--你的人工智能女友永远在你身边",
      img: "/section5/p1.png",
    },
    {
      name: "AI男友",
      description: "专属你的AI健身教",
      img: "/section5/p1.png",
    },
    {
      name: "AI陪练",
      description: "无论何时何地，你的AI心理",
      img: "/section5/p1.png",
    },
    {
      name: "AI健康顾问",
      description: "供专业的建议和支持，帮助你走出困境",
      img: "/section5/p1.png",
    },
    {
      name: "AI职业教练",
      description: "无论何时何地，你的AI心理咨询师都会倾听你的心",
      img: "/section5/p1.png",
    },
    {
      name: "AI健康行业专家",
      description: "无论何时何地，你的AI心理咨询师都会倾听你的心",
      img: "/section5/p1.png",
    },
  ];

  const labelStyle: React.CSSProperties = {
    fontSize: "20px",
    // fontWeight: "bold",
    marginBottom: "10px",
    color: "#3E3E40",
  };
  const descriptionStyle: React.CSSProperties = {
    fontSize: "14px",
    marginBottom: "10px",
    color: "#3E3E40",
  };

  const cardTile = (
    index: number,
    people: { name: string; description: string; img: string }
  ) => {
    console.log("index", index);
    const imgWidth = index == 0 ? 292 : 148;
    const containerWidth = index == 0 ? 320 : 170;

    console.log("imgWidth", imgWidth);
    return (
      <div
        key={people.name}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "16px",
          padding: "20px",
          height: "378px",
          width: containerWidth,
          background:
            index == 0
              ? "linear-gradient(135deg, #7FF17F, #24D698, #2ADA2A)"
              : "#7FF17F",
        }}
      >
        <div style={labelStyle}>{people.name}</div>
        <div style={descriptionStyle}>{people.description}</div>

        <img
          src={people.img}
          style={{
            // marginTop: "20px",
            backgroundColor: "white",
            borderRadius: 24,
            objectFit: "cover",
            width: imgWidth,
            height: 220,
          }}
        ></img>
      </div>
    );
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "40px",
        }}
      >
        <h1>与AI分身一起社交</h1>
        <div>
          在这里，不止有你的AI分身，
          还有来自各地、不同风格的朋友，一起开心畅聊，
          也有专业的顾问、陪练、心理咨询师等的AI分身，7*24小时满足你的需要。
        </div>
      </div>

      <div style={{ backgroundColor: "white" }}>
        <div
          // className={styles.container}
          style={{
            marginLeft: 100,
            marginRight: 100,
            display: "flex",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {peoples.map((people, index) => cardTile(index, people))}
        </div>
      </div>
    </div>
  );
}
