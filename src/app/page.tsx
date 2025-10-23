import TeamGallery from "@/components/TeamGallery";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";

export default function HomePage() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", width: 960 }}>
        <Section1 />
        <Section2 />
        <TeamGallery />
        <Section4 />
        <Section5 />
      </div>
    </div>
  );
}
