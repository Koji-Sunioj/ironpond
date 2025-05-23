export const imgStyle = {
  height: "250px",
  marginLeft: "auto",
  marginRight: "auto",
  objectFit: "contain",
  display: "block",
};

export const portfolio = [
  {
    url: "https://magnificent-mochi-99378f.netlify.app/",
    github: "https://github.com/Koji-Sunioj/fs10-frontend-public",
    image: "commerce.png",
    title: "E-commerce app",
    description:
      "My first front end project with Integrify Oy, learning the conventions of " +
      "combining React.js, Typescript and Redux with Api calls. The project required that several " +
      "features be implemented, such as searching through the data, paginating, changing the color theme " +
      "mobile friendly viewing and a toolbar",
  },
  {
    url: "https://d1yh66sadgwb8n.cloudfront.net/",
    github: "https://github.com/Koji-Sunioj/cdk-workshop",
    image: "albums.png",
    title: "Photo albums website",
    description:
      "Something I whipped up while learning full stack development with cloud " +
      "at Nordcloud. Uses deployment of a React build to a Cloudfront " +
      "Distribution, Api calls through Api Gateway, Lambda, DynamoDB for " +
      "CRUD actions, Cognito authentication and S3 to create photo albums. The resources were provisioned with AWS CDK. " +
      "I am currently refactoring it to use Typescript and Redux, then minifying the Lambda function code.",
  },
  {
    url: "https://d10r1awwttnvkd.cloudfront.net/",
    github: "https://github.com/Koji-Sunioj/bm",
    image: "webstore.png",
    title: "Old school e-Commerce website",
    description:
      "This project is a throwback to websites made maybe 20 years ago, using a web server to " +
      "to serve static files in a unix environemnt for routes. I was just curious how to learn Nginx, and the project expanded to include " +
      "various things, such as Postgres database, Nginx proxies, admin transactions and as of recent: " +
      "sending purchase orders to a lambda server, which I am developing a UI for. " +
      "I also used this as an opportunity to learn github actions for deploying and updating resources in AWS EC2 " +
      "using cloud config and cloudformation templates (in to a seperate repo) in lieu of AWS CDK.",
  },
  {
    url: null,
    github: "https://github.com/Koji-Sunioj/trading-grid-cfn",
    image: "trading-grid.png",
    title: "Supply chain app",
    description:
      "Working at OpenText with supply chain solutions, I asked myself: how could an ERP solution " +
      "look like on public cloud like AWS, where a server is accepting and responding to messages " +
      "from a trading partner? So I started to build a cloudformation template for a Lambda server " +
      "which accepts purchase orders and despatch advice messages, and a user can log into a UI " +
      "and respond to those messages with ammendments or confirmations. Right now I am trying this out " +
      "in conjuction with the Old school e-Commerce app as the client. A website is not available yet " +
      "since I am working on Rest API.",
  },
];

export const education = [
  {
    place: "Integrify Full Stack Development Academy",
    date: "April 2022 - August 2022",
    description:
      "An intensive course teaching full stack web development with " +
      "React.js, Typescript, MonogoDB and Node.js. The course also " +
      "covered AWS Cloud Practicioner topics.",
  },
  {
    place: "Amazon Cloud Practicioner",
    date: "September 2022",
    description:
      "Official certification demonstrating knowledge of AWS Services, " +
      "cloud computing, and terminology related to cloud infrastructure.",
  },
  {
    place: "Haaga-Helia University of Applied Sciences",
    date: "January 2017 - November 2020",
    description:
      "Degree in Information Technology, including subjects such as " +
      "User Experience, Database Development, Front End Development and Business Intelligence.",
  },
];

export const experiences = [
  {
    location: "Tampere, Finland",
    date: "2023",
    name: "Opentext",
    title: "Associate Consultant",
    description:
      "Developing integrations for clients with various ERP systems. " +
      "Using code for customized actions, data schemas (mappings) for various data types. " +
      "Communicating with stakeholders and departments for follow ups, SQL reporting. " +
      "Using Agile (Kanban) development practices to streamline tasks.",
  },
  {
    location: "Helsinki, Finland",
    date: "2022-2023",
    name: "Nordcloud",
    title: "Junior Software Developer",
    description:
      "Training with AWS development, such as AWS CDK and Amplify. " +
      "Learning to provision resources for front end, such as S3, Cognito. " +
      "Combining REST API with AWS Lambda, Api Gateway, provisioned NoSQL and SQL services",
  },
  {
    location: "Helsinki, Finland",
    date: "2022",
    name: "Integrify",
    title: "Full Stack Developer Trainee",
    description:
      "Developing front end apps with React.js, HTML, CSS. " +
      "Creating back end application via Node.js, Express. " +
      "Schema design and database administration with MongoDB.",
  },
  {
    location: "Vantaa, Finland",
    date: "2018-2022",
    name: "Ikea",
    title: "Logistic's Co-Worker",
    description:
      "Collecting items for online Ikea orders. " +
      "Handling outbound shipments of client orders. " +
      "Multi-cultural communications and team work emphasis",
  },
  {
    location: "Helsinki, Finland",
    date: "2017-2018",
    name: "Fafa's",
    title: "Cook",
    description:
      "Serving customers. " +
      "Cleaning dining environment. " +
      "Preparing food",
  },
  {
    location: "Jerusalem, Israel",
    date: "2014-2016",
    name: "Da'at Educational Expeditions",
    title: "Customer Service Center Supervisor",
    description:
      "Supervising and delegating inquiries among peers. " +
      "Registering, customizing, and completing reservations for " +
      "tour packages to Israel and Europe. Processing Travel Documents, " +
      "E-tickets and account invoices to secure client bookings",
  },
  {
    location: "Jerusalem, Israel",
    date: "2013-2015",
    name: "Bible Lands Jerusalem",
    title: "Front Desk Associate",
    description:
      "Meeting, greeting and explaining features of museum to customers. " +
      "Completion of membership, tickets, and event purchases. " +
      "Coordination of group visits, guided tours and planning. ",
  },
  {
    location: "Lafayette IN, USA",
    date: "2012",
    name: "Alorica",
    title: "Universal Agent",
    description:
      "Completing installation orders for new customers. " +
      "Fixing bill or general account related issues. " +
      "Updating customers on most current products and promotions available.",
  },
  {
    location: "Springfield MO, USA",
    date: "2010-2011",
    name: "O'reilly Auto Parts",
    title: "Special Order Clerk",
    description:
      "Expediting and guiding shipments of automotive products to store. " +
      "Completing stock requests for customers inquiring on specialty items. " +
      "Maintaining vendor rapport between client and manufacturer.",
  },
  {
    location: "Springfield MO, USA",
    date: "2010",
    name: "Greene County Assessor",
    title: "Data Entry Clerk",
    description:
      "Scanning tax assessments for funds allocation to proper taxing districts. " +
      "Appraising value of Greene County residents' property (i.e. cars, livestock). " +
      "Categorizing collected mail for preparation of data entry.",
  },
  {
    location: "Jerusalem, Israel",
    date: "2008-2009",
    name: "FXCM",
    title: "Operation's Associate",
    description:
      "Auditing and authorizing applications of foreign exchange trading accounts. " +
      "Processing deposits, withdrawals and funds transfers for clients. " +
      "Sustaining relations between traders, account brokers and salespeople.",
  },
  {
    location: "Jerusalem, Israel",
    date: "2007",
    name: "Lion Data Processing",
    title: "Data Entry Clerk",
    description:
      "Posting of real estate sales on state and national listing services. " +
      "Follow up of client inquiries and concerns regarding details of property. " +
      "Tailoring the property listing to maximize attraction of potential buyers.",
  },
  {
    location: "Jerusalem, Israel",
    date: "2006",
    name: "IDT Global",
    title: "Billing Associate",
    description:
      "Resolving billing issues for clients regarding their internet service. " +
      "Up-selling service packages, offers to customers. " +
      "Providing the best service for client experiences.",
  },
];

export const skills = [
  {
    title: "Backend frameworks and general programming languages",
    description:
      "I am familiar and comfortable implementing REST APIs with various database types, conforming to conventions of HTTP responses and security via tokens, headers or other methods.",
    data: [
      "Node.js",
      "Express.js",
      "Python",
      "Flask",
      "Django",
      "C#",
      "AWS Lambda",
      ".NET",
      "Springboot",
      "Java",
    ],
  },
  {
    title: "Database management and analytics",
    description:
      "One of my focuses in Haaga-Helia was on Business Intelligence using various software. However, I taught myself Python during my thesis where I used it to show research data. Ever since, I have been very interest in exploring data, cleaning it and finding answers through data.",
    data: [
      "Data Analytics",
      "Numpy",
      "Matplotlib",
      "Pandas",
      "PostgreSQL",
      "MySQL",
      "Microsoft SQL",
      "DynamoDB",
      "MongoDB",
    ],
  },
  {
    title: "Front end programming and website design",
    description:
      "Learning Javascript in school, I have gone down the journey of learning to use modern frameworks. During my time at Integrify, I received a certification for learning to use more modern frameworks in larger codebases.",
    data: [
      "React.js",
      "Angular.js",
      "Jquery",
      "Javascript",
      "Typescript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind",
      "SCSS",
      "Leaflet.js",
    ],
  },
  {
    title: "System administration, devops and public cloud",
    description:
      "Aside from full stack programming, I have a strong interest in Linux systems and public cloud deployments of services, such as Amazon Web Services. I enjoy combining multiple resource types with AWS CDK in full stack applications.",
    data: [
      "Linux",
      "Git",
      "Bash",
      "Cognito",
      "S3",
      "AWS CDK",
      "Api Gateway",
      "Cloudfront",
      "Cloudformation",
      "EC2",
    ],
  },
  {
    title: "People and culture",
    description:
      "Over the years, I have worked in many job types. These positions have taught me about communication, creating expectations for clients and dealing with complex issues.",
    data: [
      "Customer Service",
      "Front Desk",
      "Leadership",
      "Intercultural Communication",
      "Training",
      "Team Work",
    ],
  },
  {
    title: "ERP Integrations",
    description:
      "In my most recent tech job at OpenText, I developed integrations for clients using all sorts of ERP softwares.",
    data: [
      "Updating and creating data schemas (mappings) for various formats i.e XML, Edifact, JSON",
      "Developing SQL-based analytical reports on client transactions and integration structures",
      "Using low-code, C# or legacy APIs for additional integration actions",
      "Understanding ERP message types, like ORDERS, ORDRSP, DESADV",
      "Implementation of European or Finnish standardized e-invoicing like Teapps, Finvoice",
    ],
  },
];

export const summaries = [
  {
    photo: "4380747.jpg",
    title: "Software Developer",
    content:
      "I enjoy coding solutions and web applications - with " +
      "strengths in React.js, Python, Node.js and SQL. " +
      "In my current role in OpenText, I employ C#, " +
      "low code solutions, and SQL for analytics. " +
      "I have certificate in " +
      '<a href="https://www.integrify.io/">Full Stack Web Development via Integrify</a>, a coding bootcamp.',
  },
  {
    photo: "6551283.jpg",
    title: "Cloud Enthusiast",
    content:
      "Acquiring the " +
      '<a href="https://aws.amazon.com/certification/certified-cloud-practitioner/">AWS Cloud Practitioner</a> ' +
      "certification, I know how to integrate software on AWS " +
      "using infrastructure as code such as AWS Cloudformation or AWS CDK. " +
      "Services I am familiar with are: EC2, Cognito, Api Gateway, S3, Lambda server, provisioned SQL or NoSQL " +
      "databases.",
  },

  {
    photo: "5124556.jpg",
    title: "Client Advocate",
    content:
      "Having over ten years experience in client facing positions, I pride myself in client satisfaction. " +
      'From a <a href="https://daattravel.com/">established Middle-Eastern tour company</a> to ' +
      'an <a href="https://www.oreillyauto.com/"> auto parts retailer in the United States</a> ' +
      "- I pride myself in user satisfaction. In my current role at " +
      "OpenText, I communicate with large international companies for integration projects.",
  },
];

export const cssPointers = {
  dark: {
    "--font-color": "white",
    "--card-bg": "#212529",
    "--bg-color": "black",
  },
  light: {
    "--font-color": "black",
    "--card-bg": "#F8F9FA",
    "--bg-color": "white",
  },
};
