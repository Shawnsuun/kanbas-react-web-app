import { Link, useLocation } from "react-router-dom";
import { BiUserCircle, BiBook, BiCalendar } from "react-icons/bi";
import { TfiDashboard } from "react-icons/tfi";
import { SlEnvolopeLetter, SlClock } from "react-icons/sl";
import { TbPresentationAnalytics } from "react-icons/tb";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import "./index.css";

function KanbasNavigation() {
    const { pathname } = useLocation();
    const linksData = getLinksData();

    return (
        <div className="wd-kanbas-navbar">
            <div className="list-group wd-kanbas-navigation" style={{ width: 85 }}>
                <LogoLink />
                {linksData.map((linkData, index) => (
                    <NavLink key={index} linkData={linkData} isActive={pathname.includes(linkData.name)} />
                ))}
            </div>
        </div>
    );
}

function LogoLink() {
    return (
        <Link key={9} to='/Kanbas/Dashboard' className='d-flex flex-column neu-icon'>
            <img src={require("./neu.jpg")} alt="NEU Logo" />
        </Link>
    );
}

function NavLink({ linkData, isActive }) {
    return (
        <Link
            to={`/Kanbas/${linkData.name}`}
            className={`list-group-item ${isActive && "active"} d-flex flex-column`}>
            {linkData.icon}
            {linkData.name}
        </Link>
    );
}

function getLinksData() {
    return [
        { name: "Account", icon: <BiUserCircle className="wd-icon" /> },
        { name: "Dashboard", icon: <TfiDashboard className="wd-icon" /> },
        { name: "Courses", icon: <BiBook className="wd-icon" /> },
        { name: "Calendar", icon: <BiCalendar className="wd-icon" /> },
        { name: "Inbox", icon: <SlEnvolopeLetter className="wd-icon" /> },
        { name: "History", icon: <SlClock className="wd-icon" /> },
        { name: "Studio", icon: <TbPresentationAnalytics className="wd-icon" /> },
        { name: "Commons", icon: <IoArrowForwardCircleOutline className="wd-icon" /> },
        { name: "Help", icon: <AiOutlineQuestionCircle className="wd-icon" /> },
    ];
}

export default KanbasNavigation;