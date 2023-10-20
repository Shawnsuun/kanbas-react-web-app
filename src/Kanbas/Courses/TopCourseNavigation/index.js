import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import './index.css';

function TopCourseNavigation() {
    const { courseId } = useParams();
    const currentTab = useCourseNavTab();

    return (
        <nav aria-label="breadcrumb" className="d-flex align-items-center">
            <RxHamburgerMenu className="m-3 mb-0 wd-link-red" />
            <ol className="breadcrumb m-3 mb-0">
                <BreadcrumbItem>
                    <Link key={courseId} className='wd-link-red'>
                        {courseId || 'Unknown Course'}
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    {currentTab}
                </BreadcrumbItem>
            </ol>
        </nav>
    )
}

function BreadcrumbItem({ children, active = false }) {
    return (
        <li className={`breadcrumb-item ${active ? "active" : ""}`} aria-current={active ? "page" : undefined}>
            {children}
        </li>
    );
}

// Custom hook to get the current course navigation tab.
function useCourseNavTab() {
    const url = window.location.hash;
    const urlSegments = url.split("/");

    const coursesIndex = urlSegments.findIndex(segment => segment === "Courses");
    if (coursesIndex !== -1 && coursesIndex + 2 < urlSegments.length) {
        return urlSegments[coursesIndex + 2];
    }
    return 'Unknown Tab';
}

export default TopCourseNavigation;
