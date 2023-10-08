import React from "react";
import "./course.css";
import video from "./video.mp4";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
    return (
        <>
            <video autoPlay muted loop className="home-bg">
                <source src={video} type="video" />
            </video>
            <div className='course-bg-text-container'>
                <h3 className='course-bg-text'>Courses</h3>
            </div>
            <div className='text-container1'>
                <h3 className='course-bg-text1'>
                    <Link to='/one' className='new-links'>one day workshops</Link></h3>
                <Link to='/workshop-schedule' className='new-links'><h4 className='course-bg-text2'>Workshop Schedule</h4></Link>
                <Link to='/registration-information' className='new-links'><h4 className='course-bg-text2'>Registration Information</h4></Link>
            </div>
            <div className='text-container1'>
                <h3 className='course-bg-text1'>
                    <Link to='/internship-opportunities' className='new-links'>Internship Placements</Link></h3>
                <Link to='/internship-opportunities' className='new-links'><h4 className='course-bg-text2'>Internship Opportunities</h4></Link>
                <Link to='/application-process' className='new-links'><h4 className='course-bg-text2'>Application Process</h4></Link>
            </div>
            <div className='text-container1'>
                <h3 className='course-bg-text1'>
                    <Link to='/course-descriptions' className='new-links'>Certification Courses</Link></h3>
                <Link to='/course-descriptions' className='new-links'><h4 className='course-bg-text2'>Course Descriptions</h4></Link>
                <Link to='/admission-requirements' className='new-links'><h4 className='course-bg-text2'>Admission Requirements</h4></Link>
            </div>
            <div className='text-container1'>
                <h3 className='course-bg-text1'>
                    <Link to='/diploma-programs' className='new-links'>Diploma Courses</Link></h3>
                <Link to='/diploma-programs' className='new-links'><h4 className='course-bg-text2'>Diploma Programs</h4></Link>
                <Link to='/curriculum-details' className='new-links'><h4 className='course-bg-text2'>Curriculum Details</h4></Link>
            </div>
            <div className='text-container1'>
                <h3 className='course-bg-text1'>
                    <Link to='/awards' className='new-links'>Awards and Recognition</Link></h3>
                <Link to='/awards' className='new-links'><h4 className='course-bg-text2'>Awards Won by the Celebrity Chef</h4></Link>
                <Link to='/student-achievements' className='new-links'><h4 className='course-bg-text2'>Student Achievements</h4></Link>
            </div>
            <div className='text-container1'>
                <h3 className='course-bg-text1'>
                    <Link to='/yearly-courses' className='new-links'>Yearly Courses</Link></h3>
            </div>
            <hr className='rule-1'></hr>
            <div className='text-container2'>
                <h3 className='course-bg-text1 text-subcontainer'>
                    <Link to='/accreditations' className='new-links'>Accreditations</Link></h3>
                <Link to='/uk-accreditation1' className='new-links'><h4 className='course-bg-text2 text-subcontainer'>UK Accreditation 1</h4></Link>
                <Link to='/uk-accreditation2' className='new-links'><h4 className='course-bg-text2 text-subcontainer'>UK Accreditation 2</h4></Link>
            </div>
            <div className='text-btn'>
                <button className='course-btn'>
                    HOW TO APPLY
                </button>
            </div>
        </>
    );
}

export default Course;
