export function calculateYearDifference() {
  var startDate = new Date('January 1, 2016');
  var today = new Date();

  var millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Account for leap years
  var differenceInMilliseconds = today - startDate;
  var differenceInYears = differenceInMilliseconds / millisecondsPerYear;

  return differenceInYears.toFixed(1);
}


export const projectExperience = [
  {
    name: "DevOps / Site Reliability Engineering",
    years: 4,
    bg: "#6D4B8A",
  },
  {
    name: "Automation Projects",
    years: 6,
    bg: "#8897B8",
  },
  {
    name: "Full Stack Applications",
    years: 4,
    bg: "#C83C63",
  },
];

export const whatIHelpWith = [
  `I'm a passionate DevOps Architect specializing in testing, documentation, mentoring, teamwork, and pipeline efficiency. 
  I optimize code, streamline deployments, and ensure high availability. I came from the app dev side and love making full stack applications to solve operational problems.
  With a focus on collaboration and mentorship, I empower developers for continuous improvement. Let me enhance your process and deliver superior solutions.`,
];

export const workExp = [
  {
    place: "Amazon Web Services (AWS)",
    tenure: "Nov 2022 - Present",
    role: "DevOps Architect Consultant",
    detail:
      `<ul>
        <li>Professional Services Consulting for AWS, Certified Architect</li>
        <li>Built an Amplify React application to help operations engineers migrate services and business apps faster with fewer errors.</li>
        <li>Educated the team on how to develop and deploy web applications in a cost-effective, secure, and efficient manner.</li>
        <li>Built automated CI/CD pipelines in CodeDeploy.</li>
        <li>Created AWS's Cost Optimization rubrics and training programs for Cloud.</li>
        <li>Revamped AWS's Container training program for containers on AWS.</li>
        <li>Received positive customer feedback on several occasions for training, pipeline efficiency and documentation.</li>
      </ul>`,
    dotColor: '#6D4B8A'
  },
  {
    place: "loanDepot LLC",
    tenure: "Jan 2020 - Nov 2022",
    role: "Senior DevOps Engineer",
    detail:
      `<ul>
        <li>Managed 1200 components and 800+ both on-prem (f5, VMWare, a closet in Foothill Ranch) and Azure (VMs and SaaS/PaaS).</li>
        <li>Promoted from Mid to Senior Engineer in 2021.</li>
        <li>Utilized PowerShell automation to orchestrate all on-prem releases, with release configurations managed in a custom CMDB built on ELK stack.</li>
        <li>Designed version control systems for disaster recovery and a hotfix environment, implementing semantic Git versioning for bicep modules stored in the Azure Container Registry.</li>
        <li>Built LD's first dockerized build pipeline to build and release a Chrome extension.</li>
        <li>Developed approximately 75% of training material, mentored mid and junior engineers, and conducted PowerShell proficiency interviews for new hires.</li>
        <li>Conducted application troubleshooting in Dynatrace, Kibana, and traditional diagnostic methods.</li>
      </ul>`,
    dotColor: '#8897B8'
  },
  {
    place: "COFEBE Inc",
    tenure: "Nov 2018 - Dec 2019",
    role: "Software Engineer",
    detail:
      `<ul>
        <li>Promoted from Software Engineer to Team Lead on data projects.</li>
        <li>Built a data pipeline and data lake using backward-compatible code with Python (2.7 and 3.x), AWS Redshift, AWS Athena, AWS CodeDeploy, Luigi, etc.</li>
        <li>Wrote QA test scripts in Bash for multiple pipelines and unit tests for all code delivered in Python.</li>
        <li>Created SQL transform scripts for PostgreSQL.</li>
        <li>Organized and directed internal talent, working closely with clients to execute requirements.</li>
        <li>Collaborated with an internal team using PHP 7.1 and Python 3.7 to develop a web application that mocks APIs for front-end developers.</li>
      </ul>`,
    dotColor: '#B8A295'
  },
  {
    place: "A Show For A Change",
    tenure: "Oct 2018 - Mar 2019",
    role: "Full Stack Developer",
    detail:
      `<ul>
        <li>Developed ReactJS front end with Webpack for the front-end team.</li>
        <li>Designed database structure and endpoints using LAMP stack and deployed on AWS.</li>
        <li>Responsible for SCRUM/Agile ceremonies.</li>
      </ul>`,
    dotColor: '#C83C63'
  },
];


export const comments = [
  {
    name: "Brian Carpio",
    post: "Sr. Leader Focused On Cloud Engineering & Cloud Native Application Architecture",
    comment:
      "As Koreen's team lead, I was impressed by her passion for technology, learning, and collaboration. She demonstrated an exceptional level of dedication to her work and was always willing to go the extra mile to ensure that the team delivered high-quality work on time. What truly sets Koreen apart is her natural leadership abilities. From day one, it was evident that she had a knack for leadership and was able to inspire and motivate those around her. Her positive attitude, strong work ethic, and excellent communication skills made her a true asset to the team.",
    img: "./brian.jfif",
  },
  {
    name: "James Bailey",
    post: "Senior Software Architect at COFEBE Inc.",
    comment:
      "Koreen is a motivated individual and quick to learn. She's friendly, outgoing, a great team player, and eager to learn new things. She was great to work with.",
    img: "./james_bailey.jfif",
  },
  {
    name: "James York",
    post: "Sr Cloud DevOps Engineer",
    comment:
      "Koreen is one of the most brilliant engineers I have worked alongside with in my career. She can jump into any issue and pick it up like she's been working on it for years. Her knowledge on things like Azure DevOps, PowerShell, Terraform, and best practices to ensure security and repeatability were crucial to the team. Not only was she an awesome coworker professionally with her skillset, but she also was always so positive when jumping into firefighting issues. Frequently she made herself available to assist on issues when it was not required of her. I know she would make an excellent addition to any team she finds herself on.",
    img: "./james_york.jfif",
  },
  {
    name: "Patricia Chin",
    post: "Senior DevOps Engineer",
    comment:
      "Koreen has led many key efforts and saw them through with much success. Some of these efforts include the migration and removal of an entire datacenter, as well as transforming/migrating of Terraform projects to Bicep. She is an amazing team player, and works well with others. Koreen makes sure to keep any new processes documented, and communicates well both inside and outside the team. She is great at finding out why things are requested and figuring out the best solution for a problem. ",
    img: "./patricia.jfif",
  },
  {
    name: "Joel Bennet",
    post: "Senior DevOps Architect",
    comment:
      "When I met Koreen, she had a well-deserved reputation as the expert on git and scrum, in addition to a mastery of the scripting and IaC tools and languages that made her one of the team's preferred interviewers. Her technical expertise, desire to do things well, and not settle for merely functional, and her willingness to hear out a contrary view, and rationally discuss alternative solutions also make her one of the team's favorite pairing partners.",
    img: "./joel.jfif",
  },
  {
    name: "Yaritza Cuevas",
    post: "Senior Software Engineer",
    comment:
      "It was such a pleasure to work with Koreen. Her problem solving skills proved handy on many occasions while working together. She is friendly and very self motivated. She’s got a great work ethic and quick to solve problems that require immediate attention. A great addition to any team.",
    img: "./yari.jfif",
  },
  {
    name: "Stephen Berens",
    post: "Senior DevOps Engineer",
    comment:
      "Koreen Wilkinson is an exceptional talent. She consistently produces exceptional work, and does so regardless of whether she’s tackling a project solo or with a team. She demonstrates mastery of seemingly any technology she works with and her contributions to both the team and teams work product are invaluable. Beyond her obvious expertise, she routinely augments the team knowledge base with detailed documentation, ensuring her progress is available to everyone and, further, is never hesitant to provide direct instruction where appropriate. She fundamentally enriches any team she is a member of by dependably delivering phenomenal solutions to any issue she addresses and continually investing in the team’s ongoing development. Working with Koreen is both a privilege and a pleasure.",
    img: "./stephen.jfif",
  },
  {
    name: "Marc Foster",
    post: "Senior DevOps Engineer",
    comment:
      "I have worked with Koreen on several occasions and have always been impressed with her ability to quickly identify and solve problems. She has a deep understanding of operational issues and is always willing to share her knowledge with others. She is the perfect person to have on any team, as she is always willing to jump in and help out wherever needed.",
    img: "./marc.jfif",
  },
  {
    name: "Jesse Porter",
    post: "Vice President, DevOps Engineering",
    comment:
      "Koreen radiates calm and quiet competence every day. She is a top performer on my team. She consistently gives 100 percent effort to the team and plays a significant role in complex devops engineering work. She's willing to jump into any situation and provide technical expertise, whether it's a minor hiccup or an all-hands-on-deck emergency. She has formidable powershell, infrastructure, and automation skills that she leverages on the daily, and she's always excited to learn new tools and technologies",
    img: "./jesse_logo.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const Portfolio = [
  {
    "title": '',
    "content": ''
  },
  {
    "title": '',
    "content": ''
  },
  {
    "title": '',
    "content": ''
  }
]