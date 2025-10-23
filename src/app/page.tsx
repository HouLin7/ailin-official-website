import TeamGallery from "@/components/TeamGallery";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section3 from "@/components/Section3";

export default function HomePage() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", width: 1920 }}>
        <Section1 />
        <Section2 />
        <Section3 />        
        <Section4 />
        <Section5 />
      </div>
    </div>
  );
}
