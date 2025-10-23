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
      description: "",
      img: "/section5/p1.png",
    },
    {
      name: "AI陪练",
      description: "",
      img: "/section5/p1.png",
    },
    {
      name: "AI健康顾问",
      description: "",
      img: "/section5/p1.png",
    },
    {
      name: "AI职业教练",
      description: "",
      img: "/section5/p1.png",
    },
    {
      name: "AI健康行业专家",
      description: "",
      img: "/section5/p1.png",
    },
  ];

  const labelStyle: React.CSSProperties = {
    fontSize: 20,
    // fontWeight: "bold",
    marginBottom: "10px",
    color: "#3E3E40",
  };
  const descriptionStyle: React.CSSProperties = {
    fontSize: "14px",
    marginBottom: "10px",
    color: "#3E3E40",
    height: "70px",
  };

  const cardTile = (
    index: number,
    people: { name: string; description: string; img: string }
  ) => {
    console.log("index", index);
    const imgWidth = index == 0 ? 292 : 148;
    const containerWidth = index == 0 ? 320 : 176;
    console.log("imgWidth", imgWidth);
    return (
      <div
        key={people.name}
        style={{
          display: "flex",
          flexDirection: "column",          
          alignItems: "center",
          borderRadius: 24,
          paddingLeft: "15px",
          paddingRight: "15px",
          height: "378px",
          paddingTop: "30px",
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
            objectFit: "contain",
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
        <h1>与AI分身一起社交。</h1>
        <div style={{ marginTop: 20 ,textAlign:'center'}}>
          在这里，不止有你的AI分身，
          <br />
          还有来自各地、不同风格的朋友，一起开心畅聊，
          <br />
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
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {peoples.map((people, index) => cardTile(index, people))}
        </div>
      </div>
    </div>
  );
}
