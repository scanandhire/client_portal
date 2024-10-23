import IconGroup from 'components/common/icon/IconGroup';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EventDetailsGmap from './EventDetailsGmap';
import socialIcons from 'data/socialIcons';

const EventDetailContent = () => {
  return (
    <Card>
      <Card.Body>


        <div class="jbpnl_descrt_label">
          <h3>Global Technology Innovation &amp; Partnerships Strategy, Vice President</h3>
        </div>
        <div class="jbpnl_description">
          <div class="jbpnl_desc jb_long"><strong>Job Description<br /><br /></strong>Join the  Global Technology Strategy, Innovation &amp; Partnerships Team and help drive IT strategy.<br /><br />As a Global Technology Innovation &amp; Partnerships Strategy, Vice President in the Global Technology Strategy, Innovation &amp; Partnerships Team, you will lead key initiatives related to the firm's technology and innovation agenda. You will focus on helping promote IT strategy, fostering best-in-class partnerships with both strategic and emerging technology companies as well as leveraging IT for purposes of firmwide business development and strategic marketplace development.<br /><br />Our Global Technology (GT) group is a world-class technology team employing an innovative, disciplined and business focused approach to develop a wide variety of high-quality products and solutions. Across 14 technology hubs worldwide, our team of 50,000+ technologists design, build and deploy everything from enterprise technology initiatives to big data and mobile solutions, as well as innovations in Generative AI, electronic payments, cybersecurity, machine learning, and cloud development. Our $15B+ annual investment in technology enables us to hire people to create innovative solutions that will not only transform the financial services industry, but also change the world.<br /><br /><strong>Job Responsibilities<br /><br /></strong>
            <ul>
              <li>Partner with GT Leadership and apply knowledge of industry leading practices to evaluate the firmwide view on technology strategy for key strategic initiatives (e.g cloud infrastructure, devops, cyber, AI) and create technology strategy deliverables for the firm's executive and technology leadership teams</li>
              <li>Lead initiatives/projects to resolve diverse and complex problems identified by the Global Technology Executives, working across the organizations engineering leadership community</li>
              <li>Monitor industry trends and share insightful reports and analyses with broader team and with senior executives via industry research and direct engagement with the emerging technology ecosystem</li>
              <li>Develop relationships with key technology provider executive teams to influence their product roadmaps to align with JPMC initiatives</li>
              <li>Discover and evaluate new technology startups for potential adoption and help manage the emerging relationships with new technology providers<br /><br /></li>
            </ul>
            <strong>Required Qualifications, Capabilities And Skills<br /><br /></strong>
            <ul>
              <li>7+ years of business and technology strategy experience</li>
              <li>Strong relationship and interpersonal skills and the ability to interact with senior business and IT executives, as well as external executives</li>
              <li>Familiarity with technical concepts, operating models and a strong passion for technology and staying abreast of industry trends</li>
              <li>Excellent technical and business presentation, writing, and verbal communication skills</li>
              <li>Proven expertise in leading research initiatives and strategic content development</li>
              <li>Strong facilitation, process and influencing skills</li>
              <li>Proven entrepreneurial style, ability to work independently within the context of a large organization<br /><br /></li>
            </ul>
            <strong>Preferred Qualifications, Capabilities, And Skills<br /><br /></strong>
            <ul>
              <li>Financial services industry experience</li>
              <li>MBA and/or advanced degree from a top-tier program<br /><br /></li>
            </ul>
            <strong>About Us<br /><br /></strong>JPMorgan Chase &amp; Co., one of the oldest financial institutions, offers innovative financial solutions to millions of consumers, small businesses and many of the world&rsquo;s most prominent corporate, institutional and government clients under the J.P. Morgan and Chase brands. Our history spans over 200 years and today we are a leader in investment banking, consumer and small business banking, commercial banking, financial transaction processing and asset management.<br /><br />We offer a competitive total rewards package including base salary determined based on the role, experience, skill set, and location. Those in eligible roles may receive commission-based pay and/or discretionary incentive compensation awarded in recognition of individual achievements and contributions. We also offer a range of benefits and programs to meet employee needs, based on eligibility. These benefits include comprehensive health care coverage, on-site health and wellness centers, a retirement savings plan, backup childcare, tuition reimbursement, mental health support, financial coaching and more. Additional details about total compensation and benefits will be provided during the hiring process.<br /><br />We recognize that our people are our strength and the diverse talents they bring to our global workforce are directly linked to our success. We are an equal opportunity employer and place a high value on diversity and inclusion at our company. We do not discriminate on the basis of any protected attribute, including race, religion, color, national origin, gender, sexual orientation, gender identity, gender expression, age, marital or veteran status, pregnancy or disability, or any other basis protected under applicable law. We also make reasonable accommodations for applicants&rsquo; and employees&rsquo; religious practices and beliefs, as well as mental health or physical disability needs. Visit our FAQs for more information about requesting an accommodation.<br /><br />JPMorgan Chase is an Equal Opportunity Employer, including Disability/Veterans<br /><br /><strong>About The Team<br /><br /></strong>Our professionals in our Corporate Functions cover a diverse range of areas from finance and risk to human resources and marketing. Our corporate teams are an essential part of our company, ensuring that we&rsquo;re setting our businesses, clients, customers and employees up for success.<br /><br />The Strategy team manages mission-critical projects ranging from developing growth strategies, to assessing and planning entry into new markets, to implementing organizational restructurings and operational efficiencies, and more. Projects are typically team-based and include close collaboration with senior executives.</div>
        </div>



      </Card.Body>
    </Card>
  );
};


const EventDetailContentOrig = () => {
  return (
    <Card>
      <Card.Body>
        <h5 className="fs-9 mb-3">New Year's Eve on the Waterfront</h5>
        <p>
          Boston Harbor Now in partnership with the Friends of Christopher
          Columbus Park, the Wharf District Council and the City of Boston is
          proud to announce the New Year's Eve Midnight Harbor Fireworks! This
          beloved nearly 40-year old tradition is made possible by the generous
          support of local waterfront organizations and businesses and the
          support of the City of Boston and the Office of Mayor Marty Walsh.
        </p>
        <p>
          Join us as we ring in the New Year with a dazzling display over Boston
          Harbor. Public viewing is free and available from the Harborwalk of
          these suggested viewing locations:
        </p>
        <ul>
          <li>Christopher Columbus Park, North End</li>
          <li>Fan Pier, Seaport District</li>
          <li>East Boston Harborwalk</li>
        </ul>
        <p>The show will begin promptly at midnight.</p>
        <p>
          Register here for a reminder and updates about the harbor fireworks
          and other waterfront public programs as they become available. Be the
          first to be notified for popular waterfront New Year's Eve public
          activities.
        </p>
        <h5 className="fs-9 mt-5 mb-2 ">Tags </h5>
        <Link
          to="#!"
          className="badge border link-secondary text-decoration-none me-1"
        >
          Things To Do In Brooklyn, NY
        </Link>
        <Link
          to="#!"
          className="badge border link-secondary text-decoration-none me-1"
        >
          Party
        </Link>
        <Link
          to="#!"
          className="badge border link-secondary text-decoration-none me-1"
        >
          Music
        </Link>
        <h5 className="fs-9 mt-5 mb-2 ">Share with friends </h5>
        <IconGroup icons={socialIcons} />

        <EventDetailsGmap />
      </Card.Body>
    </Card>
  );
};

export default EventDetailContent;
