import React from 'react';
import styled from 'styled-components';
import BackBtn from "../components/BackBtn/BackBtn";


const TermsAndConditions = () => {
  return (
    <>
        <div className="py-8 mb-5 w-[50vw] justify-start ml-auto mr-auto mt-10">
    <div>
      <BackBtn Page={"Terms And Conditions"} />
      <TermsWrapper>
      <section>
      <p>Last updated: May 17, 2024</p>
        <p>Welcome to NactoCare. These terms and conditions outline the rules and regulations for the use of NactoCare's website and services. By accessing this website, we assume you accept these terms and conditions. Do not continue to use NactoCare if you do not agree to all of the terms and conditions stated on this page.</p>
      </section>
      <section>
        <h2>Eligibility</h2>
        <p>By using our services, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these terms. If you are using our services on behalf of an organization, you represent and warrant that you have the authority to bind the organization to these terms.</p>
      </section>
      <section>
        <h2>Intellectual Property</h2>
        <p>Unless otherwise stated, NactoCare and/or its licensors own the intellectual property rights for all material on NactoCare. All intellectual property rights are reserved. You may access this from NactoCare for your own personal use subjected to restrictions set in these terms and conditions.</p>
        <p>You must not:</p>
        <ul>
          <li>Republish material from NactoCare</li>
          <li>Sell, rent, or sub-license material from NactoCare</li>
          <li>Reproduce, duplicate, or copy material from NactoCare</li>
          <li>Redistribute content from NactoCare</li>
        </ul>
      </section>
      <section>
        <h2>User Accounts</h2>
        <p>When you create an account with us, you must provide us with accurate and complete information. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.</p>
      </section>
      <section>
        <h2>Prohibited Activities</h2>
        <p>You may not access or use the site for any purpose other than that for which we make the site and our services available. The site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. Prohibited activities include, but are not limited to:</p>
        <ul>
          <li>Systematically retrieving data or other content from the site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
          <li>Making any unauthorized use of the site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
          <li>Engaging in unauthorized framing of or linking to the site.</li>
          <li>Tricking, defrauding, or misleading us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
          <li>Engaging in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
          <li>Using the site to advertise or offer to sell goods and services.</li>
        </ul>
      </section>
      
      <section>
        <h2>Limitation of Liability</h2>
        <p>In no event shall Nactore, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the service; (ii) any conduct or content of any third party on the service; (iii) any content obtained from the service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.</p>
      </section>
      <section>
        <h2>Governing Law</h2>
        <p>These terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights. If any provision of these terms is held to be invalid or unenforceable by a court, the remaining provisions of these terms will remain in effect. These terms constitute the entire agreement between us regarding our service, and supersede and replace any prior agreements we might have had between us regarding the service.</p>
      </section>
      <section>
        <h2>Termination</h2>
        <p>We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the terms.</p>
        <p>If you wish to terminate your account, you may simply discontinue using the service.</p>
      </section>
      <section>
        <h2>Changes to These Terms</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the service.</p>
      </section>
      <section>
        <h2>Contact Us</h2>
        <p>If you have any questions about these terms, 
            <br />please contact us at: Email: nactoreorganization@gmail.com</p>

      </section>
    </TermsWrapper>
    </div>
  </div>
    </>
  );
};

const TermsWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
  line-height: 1.6;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 20px;
  }

  p {
    margin: 10px 0;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
  }

  li {
    margin: 10px 0;
  }

  address {
    font-style: normal;
    line-height: 1.6;
  }
`;

export default TermsAndConditions;
