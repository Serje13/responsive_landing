import front from "../../../../../assets/frontendDev4.png";
import front1 from "../../../../../assets/frontendDev3.png";
import qa from "../../../../../assets/QA1.png";
import qa1 from "../../../../../assets/qa2.png";
import wp from "../../../../../assets/wordpressDev.jpg";
import wp1 from "../../../../../assets/wordpressDev1.png";
import net from "../../../../../assets/netDev.jpg";
import java from "../../../../../assets/javaDev1.png";
import java1 from "../../../../../assets/javaDev.png";


const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const content = [
    {
        title: "The Role:",
        body: lorem
    },
    {
        title: "Key Skills & Experience:",
        body: lorem
    },
    {
        title: "About You:",
        body: lorem
    },
    {
        title: "Bonus Qualifications:",
        body: lorem
    },
    {
        title: "Benefits:",
        body: lorem
    },
    {
        title: "Key Responsibilities:",
        body: lorem
    },
    {
        title: "About Us:",
        body: lorem
    }
];
export const navigate_links = [
    {
        id: 1,
        title: "О нас",
        link: "/about"
    },
    {
        id: 2,
        title: "Новости",
        link: "/news"
    },
    {
        id: 3,
        title: "Вакансии"
    }
];
export const hidden_menu_items = [
    {
        id: 1,
        title: "Front-end developer",
        image: [front, front1, front],
        description: content
    },
    {
        id: 2,
        title: "QA Automation",
        image: [qa, qa1, qa],
        description: content
    },
    {
        id: 3,
        title: "Wordpress developer",
        image: [wp1, wp, wp1],
        description: content
    },
    {
        id: 4,
        title: ".NET Developer",
        image: [net, net, net],
        description: content
    },
    {
        id: 5,
        title: "Java Developer",
        image: [java1, java, java1],
        description: content
    }
];