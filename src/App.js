import React from 'react';
import logo from './logo.png';
import './App.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact/contact';
import Blogs from './pages/blog/blog';
import About from './pages/aboutus/about';
import Course from './pages/courses/course';
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';
import Gallery from './pages/gallery/gallery';
import Hta from './pages/hta/hta';
import Common from './pages/common/common';
import Blogspages1 from './pages/blogspages/blogspages1';
import Blogspages2 from './pages/blogspages/blogspages2';
import Blogspages3 from './pages/blogspages/blogspages3';
import Testimonial from './pages/testimonial/testimonial';
import Yearly from './pages/yearly/yearly';
import { Link } from 'react-router-dom';
import FAQ from './pages/common/faq';
import Events from './pages/common/events';
import Privacy from './pages/common/privacy';
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Router>
      <div>
        {/* navbar starts here */}
        <Navbar />
        <ScrollToTop />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/about' element={<About />} />
          <Route path='/course' element={<Course />} />
          <Route path='/blogs/gallery' element={<Gallery />} />
          <Route path='/hta' element={<Hta />} />
          <Route path='/workshop-schedule' element={<Common />} />
          <Route path='/registration-information' element={<Common />} />
          <Route path='/internship-opportunities' element={<Common />} />
          <Route path='/application-process' element={<Common />} />
          <Route path='/course-descriptions' element={<Common />} />
          <Route path='/admission-requirements' element={<Common />} />
          <Route path='/diploma-programs' element={<Common />} />
          <Route path='/curriculum-details' element={<Common />} />
          <Route path='/awards' element={<Common />} />
          <Route path='/student-achievements' element={<Common />} />
          <Route path='/yearly-courses' element={<Yearly />} />
          <Route path='/2' element={<Blogspages1 />} />
          <Route path='/1' element={<Blogspages2 />} />
          <Route path='/3' element={<Blogspages3 />} />
          <Route path='/testimonials' element={<Testimonial />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/events' element={<Events />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/blogs/gallery' element={<Gallery />} />
          <Route path='/hta' element={<Hta />} />
          <Route path='/workshop-schedule' element={<Common />} />
          <Route path='/registration-information' element={<Common />} />
          <Route path='/internship-opportunities' element={<Common />} />
          <Route path='/application-process' element={<Common />} />
          <Route path='/course-descriptions' element={<Common />} />
          <Route path='/admission-requirements' element={<Common />} />
          <Route path='/diploma-programs' element={<Common />} />
          <Route path='/curriculum-details' element={<Common />} />
          <Route path='/awards' element={<Common />} />
          <Route path='/student-achievements' element={<Common />} />
          <Route path='/yearly-courses' element={<Yearly />} />
          <Route path='/2' element={<Blogspages1 />} />
          <Route path='/1' element={<Blogspages2 />} />
          <Route path='/3' element={<Blogspages3 />} />
          <Route path='/testimonials' element={<Testimonial />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/events' element={<Events />} />
          <Route path='/privacy' element={<Privacy />} />
        </Routes>
        {/* footer starts here */}
        <div className='footer'>
          <div className='footer-logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='footer-wrapper'>
            <div className='footer-contact'>
              <h4 className='footer-text'>New Delhi, Delhi</h4>
              <h4 className='footer-text2'>
                Phone: +91 98202 67890<br />
                Email: xyz1223444531@gmail.com
              </h4>
            </div>
            <div className='footer-links'>
              <table className='tables'>
                <tbody>
                  <tr>
                    <td><h6 className='footer-text4'>
                      <Link to='/faq' className='foot-links'>FAQ</Link></h6></td>
                  </tr>
                  <tr>
                    <td><h6 className='footer-text4'>
                      <Link to='/events' className='foot-links'>Events</Link></h6></td>

                  </tr>
                  <tr>
                    <td><h6 className='footer-text4'>
                      <Link to='/privacy' className='foot-links'>Privacy Policy</Link></h6></td>

                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h6 className='footer-text3'>
              © 2023 Palate Culinary Academy. All Rights Reserved.
            </h6>
          </div>
        </div>
        {/* footer ends here */}
      </div>
    </Router>
  );
}

export default App;
