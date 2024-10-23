import IconGroup from 'components/common/icon/IconGroup';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EventDetailsGmap from '../event-detail/EventDetailsGmap';
import socialIcons from 'data/socialIcons';

const EventDetailContentSoftwareEngineer = () => {
  return (
    <Card>
      <Card.Body>

        <div class="jbpnl_descrt_label">
          <h3>Software Engineer Level 2</h3>
        </div>

        <div class="jbpnl_title">
          <div class="jb_title"><strong>Overview<br /><br /></strong>You&rsquo;re here to take risks and push boundaries. You will generate code that transforms how millions of consumers and small businesses manage their finances in cloud, platform, mobile and SaaS environments. And help us open new doors for developers and crowd-sourcing.<br /><br />You'll engineer solutions to challenging and meaningful customer problems. And you'll do so in a culture that embraces experimentation and rapid prototyping. Interacting with customers and iterating rapidly will help you understand their pain points and take your ideas further faster.<br /><br />What you'll bring<br /><br />
            <ul>
              <li>Provide examples of production ready code</li>
              <li>Bachelor or Master's degree in computer science or a related technical field; equivalent experience will be considered</li>
              <li>Solid understanding of Agile development, object oriented design, and programming languages</li>
              <li>Extensive programming experience with one or more of the following: Go, Java, Python, C++</li>
              <li>Knowledge of front-end web design and languages (D/HTML, JavaScript, XML, Flex, CSS)</li>
              <li>Strong written, verbal, and collaboration skills</li>
              <li>Ability to problem-solve and adapt to changing priorities and technologies in a fast-paced, dynamic environment</li>
              <li>Software Engineer: Full Stack/Front-End/Back-End/DevOps/Mobile/Machine Learning</li>
              <li>Security Engineers: Familiarity or the ability to learn current trends and best practices infront-end architecture, including performance, accessibility and usability</li>
              <li>We offer opportunities in a variety of areas all over the U.S. and throughout our business units. Specific responsibilities will vary by project area.<br /><br /></li>
            </ul>
            How you will lead<br /><br /><strong>Frontend Engineering<br /><br /></strong>
            <ul>
              <li>Experience developing scalable, responsive, and dynamic web-based applications</li>
              <li>Familiarity with modern frontend tools and frameworks such as React, AngularJS, or Vue.js</li>
              <li>Knowledge of HTML, CSS, and JavaScript standards</li>
              <li>Strong ability to collaborate with designers, UX specialists, and backend engineers<br /><br /></li>
            </ul>
            <strong>Backend Engineering<br /><br /></strong>
            <ul>
              <li>Experience developing web applications using server-side languages, such as Java, Python, or Node.js.</li>
              <li>Familiarity with database technologies such as MySQL, PostgreSQL, or MongoDB</li>
              <li>Understanding of RESTful API design principles and ability to work with API integrations</li>
              <li>Experience with server frameworks such as Express, Spring MVC or Django<br /><br /></li>
            </ul>
            <strong>Fullstack Engineering<br /><br /></strong>
            <ul>
              <li>Familiarity with both frontend and backend development</li>
              <li>Ability to work effectively with developers and designers, discussing application and API architectures</li>
              <li>Understanding of Agile methodologies and ability to work with Scrum teams</li>
              <li>Familiarity with tools such as Git, Jenkins, or Travis<br /><br /></li>
            </ul>
            <strong>Mobile Engineering<br /><br /></strong>
            <ul>
              <li>Experience developing applications for one or more platforms such as Android and iOS</li>
              <li>Familiarity with mobile application development frameworks such as React Native or Flutter</li>
              <li>Understanding of development tools such as XCode, Android Studio and SDK languages such as Objective-C, Swift or Java</li>
              <li>Ability to work with designers and backend engineers to integrate mobile applications with cloud-based APIs<br /><br /></li>
            </ul>
            <strong>Across All Tech Stacks<br /><br /></strong>
            <ul>
              <li>Work on our core products and services or those that support critical functions of our engineering operations. See your work launched and solving complex problems for customers.</li>
              <li>Learn and apply carefully defined best practices and procedures to the process of designing, implementing, and supporting individual software projects</li>
              <li>Build effective working relationships with team members and contribute in a meaningful way. Receive detailed instructions and mentoring from senior team members</li>
              <li>Work is closely reviewed for correctness and completeness</li>
              <li>Learn innovation methods like Design 4 Delight and Lean Start-In</li>
            </ul>
          </div>
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

export default EventDetailContentSoftwareEngineer;
