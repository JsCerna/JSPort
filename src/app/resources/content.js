import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Jose',
    lastName:  'Cerna',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Hobbies : Surf - Photography - Gaming',  // Corregido 'Desigdn' a 'Design'
    avatar:    '/images/avatar.jpg',
    location:  'Australia/Sydney',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Spanish']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>MAILCHIMP not configured yet.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/JsCerna',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/jscerna/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:jcernat@udd.cl',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Portfolio</>,
    subline: <>I'm Jose, a Commercial Engineer who, to complement my career,<br/> decided to study Full Stack MERN Developer.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/cote-cerna-foccpb'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I graduated from Universidad del Desarrollo with a degree in Business Administration, specializing in Marketing and Finance, in 2019. During my studies, I interned at a fast-food establishment, where I managed shift scheduling, resolved conflicts, and ensured excellent customer service. I also led inventory management and handled purchasing tasks. <br></br><br></br>
        In 2019, I worked on a thesis project involving the creation of a bike park, where I focused on marketing strategies, financial management, and customer service. I led advertising campaigns and coordinated social media communication to engage with users.<br></br><br></br>
        During the pandemic, I completed my Commercial Engineering studies, and in 2023, I pursued a Full Stack MERN Developer bootcamp to expand my technical knowledge. While I haven’t yet worked in IT, I am eager to apply my skills and passion for technology in this field. I am confident in my potential to succeed in IT roles, as well as in marketing, where my creativity, attention to detail, and organizational skills set me apart.<br></br><br></br>
        In 2024, I moved to Australia, where I gained experience in farm and warehouse roles, most recently as a Warehouse Supervisor at Mountain Blue. In this position, I developed a database system for inventory management, maintained stock accuracy, and managed logistics tasks, including coordinating personnel and collaborating with the marketing team to ensure the efficient distribution of products..</>
    },
    work: {
        display: true, 
        title: 'Work Experience',
        experiences: [
            {
                company: 'Landing Page Surf',
                timeframe: '2022',
                role: 'Fullstack Student',
                achievements: [
                    <>First university project for an online store selling surfboards.</>,
                    <>In this project, I learned the basics of programming, such as HTML, CSS, etc.</>
                ],
                images: [
                    {
                        src: '/images/work/surf.jpg',
                        alt: 'Landing Page Surf project',
                        width: 16,
                        height: 9
                    }
                ],
                link: 'https://primer-proyecto-roan.vercel.app' // Hipervínculo para este proyecto
            },
            {
                company: 'CRUD Australian Experience',
                timeframe: '2022',
                role: 'Fullstack Student',
                achievements: [
                    <>Second university project, a CRUD was created to fetch data for a travel agency.</>,
                    <>The data was stored in the DOM, and among the key features, the data can be deleted, edited, etc.</>
                ],
                images: [
                    {
                        src: '/images/work/aus.jpg',
                        alt: 'Chupador de sapos project',
                        width: 16,
                        height: 9
                    }
                ],
                link: 'https://segundo-proyecto-flax.vercel.app' // Hipervínculo para este proyecto
            },
            {
                company: 'Air Quality',
                timeframe: '2022',
                role: 'Fullstack Student',
                achievements: [
                    <>Third university project, in which we presented an application that connects to an API providing information related to the weather and its derivatives.</>,
                    <>We focused on showing the user the air quality in a specific area. We supported the provided information with numerical values, graphs, and additional details..</>
                ],
                images: [
                    {
                        src: '/images/work/airq.jpg',
                        alt: 'Chupador de sapos project',
                        width: 16,
                        height: 9
                    }
                ],
                link: 'https://tercer-proyecto-mu.vercel.app' // Hipervínculo para este proyecto
            },
            {
                company: 'Restaurant APP',
                timeframe: '2023',
                role: 'Fullstack Student',
                achievements: [
                    <>Fourth university project, Restaurant App. In this project created for a restaurant in Constitución.</>,
                    <>Users can make reservations, learn a bit about the restaurant's history, view the menu of available dishes which is displayed through a Firebase database, etc.</>
                ],
                images: [
                    {
                        src: '/images/work/burger.jpg',
                        alt: 'Chupador de sapos3 project',
                        width: 16,
                        height: 9
                    }
                ],
                link: 'https://cuarto-proyecto.vercel.app' // Hipervínculo para este proyecto
            }
        ]
    },
    studies: {
        display: true, 
        title: 'Studies',
        institutions: [
            {
                name: 'Development University',
                description: <>Business administration mentioning marketing and finance.</>,
            },
            {
                name: 'Andres Bello University',
                description: <>Commercial Engineering.</>,
            },
            {
                name: 'Development University',
                description: <>Developer fullstack MERN.</>,
            }
        ]
    },
    technical: {
        display: true, 
        title: 'Skillset',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Budddd.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };

