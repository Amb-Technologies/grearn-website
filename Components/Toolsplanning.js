import Faq from "../props/Faq.js";

const Toolsplanning = () => {
  return (
    <div className="planning-tools grid-two">
      <div className="planning-tools__info">
        <h2>Real planning starts with real agricultural data</h2>
      </div>

      <div className="faq-section">
        <Faq
          question="Track crop growth and market performance"
          answer="Grearn allows you to visually monitor value growth on every agricultural unit you invest in. From commodity demand patterns to price movement history, you get clear performance insights that help you make smarter investment decisions."
        />

        <Faq
          question="Planning made simple and practical"
          answer="With Grearn, investment planning isn’t abstract. Forecasting, commodity projections, market tools, and yield estimation models are built directly into your dashboard — helping you plan, compare returns, and choose the best farm opportunities with confidence."
        />

        <Faq
          question="Agriculture goals made easier to achieve"
          answer="Whether you're planning long-term storage, future resale, or passive investment income, Grearn gives you the structure to plan your agricultural wealth journey step-by-step. No stress, no confusion — just clear guidance toward solid outcomes."
        />
      </div>
    </div>
  );
};

export default Toolsplanning;
