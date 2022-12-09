import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Constellation from "../../components/constellation";

export default function Home() {
  const constellation = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];
  const randomElement =
    constellation[Math.floor(Math.random() * constellation.length)];

  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Constellation constellation={randomElement} />
      </div>
    </>
  );
}
