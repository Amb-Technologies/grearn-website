import Faq from "../props/Faq.js";
import StashInvest from "../Components/StashInvest.js";
import Stashfaces from "../Components/Stashfaces.js";
const Stashsections = () => {
  return (
    <div className="stash-sections">
      <div className="bank-transfer grid-two aligncenter">
        <div className="bank-transfer__image">
          <div className="images">
            <img src="/assets/stash/stash-app.png" alt="stash app" />
            <img src="/assets/stash/transfer-screen.png" alt="" />
          </div>
        </div>
        <div className="bank-transfer__info">
          <h3>Send and receive cash</h3>
          <p>
            With bank transfers, your Stash username or public profile, you can
            send and receive money in seconds.
          </p>
          <button className="btn">Try It Out</button>
        </div>
      </div>
      <Stashfaces />
      <StashInvest />
      <div className="faq-section ">
        <h2>FAQs</h2>
        <Faq
          question="Does this mean I have a Wema/Sterling bank account?"
          answer="No. Your Stash account number can only be used to fund your Stash."
        />
        <Faq
          question="Is there a transaction limit?"
          answer="Transactions are capped based on the limit set on the bank account you are receiving from or sending to."
        />
        <Faq
          question="Can any one send money to the account number?"
          answer="Yes. Anyone can Stash you. 😉"
        />
        <Faq
          question="Can I send money to other people?"
          answer="You can send money to other Cowrywise users with their username. However, you cannot send money to bank accounts that are not linked to your BVN."
        />
        <Faq
          question="Why can't I send to other bank accounts?"
          answer="We are very big on security and have limited sending money to only your linked BVN accounts to curb imposters."
        />
      </div>
    </div>
  );
};

export default Stashsections;
