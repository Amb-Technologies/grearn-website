import PersonalityInfo from "../props/personalityInfo.js";
import Toolsplanning from "../Components/Toolsplanning.js";

const Plansections = () => {
  return (
    <div className="plansections">
     

      <PersonalityInfo
        personaImg="/assets/plan/ore-plan.jpg"
        personaInfo="“Before discovering Grearn, I never knew agricultural investing could be this organized. Planning early gives me clarity, and now I’m preparing to build long-term wealth through consistent agri-investments.”"
        personaName="- Joan H."
        personaJob="Planning her agri-wealth journey."
      />

      <Toolsplanning />
    </div>
  );
};

export default Plansections;
