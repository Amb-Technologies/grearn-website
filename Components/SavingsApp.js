import ArrowedLink from "../props/arrowedLink.js";
const SavingsApp = () => {
  return (
    <div className="savings-app grid-two aligncenter">
      <div className="savings-app__info">
        <h3>Better interest rates than your bank</h3>
        <p>Our interest rates will get your bank account jealous.</p>
        <ArrowedLink linktext="get started" linkcolor="#0066f5" />
      </div>
      <div className="savings-app__image">
        <img src="/assets/save/savings-app.png" alt="savings app " />
      </div>
    </div>
  );
};

export default SavingsApp;
