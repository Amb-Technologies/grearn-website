import Savingkit from "../Components/Savingkit.js";
import PersonalityInfo from "../props/personalityInfo.js";
import Savegoals from "../Components/Savegoals.js";
import SavingsApp from "../Components/SavingsApp.js";
import JoinCircle from "../Components/JoinCircle.js";
import Halal from "../Components/Halal.js";

const Savesections = () => {
  return (
    <div className="save-sections">
      <Savingkit />
      <Savegoals />
      <SavingsApp />
      <JoinCircle />
      <Halal />
      <PersonalityInfo
        personaImg="/assets/save/wura-save.jpg"
        personaInfo="“I probably didn't fully understand the power of small steps leading to big strides till I started saving with Cowrywise. The first laptop I bought, myself, was funded by the savings I built one step at a time with Cowrywise, the discipline made things easier.“"
        personaName="Wuraola Kayode,"
        personaJob="Little saving steps."
      />
    </div>
  );
};

export default Savesections;
