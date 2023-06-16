import React, { useRef } from 'react';
import '../styles/about.scss';

function About() {
  const aboutContainer = useRef(null);
  const posts = useRef([]);
  const tech = [
    { src: 'svgs/tailwind.svg', alt: 'tailwind logo' },
    { src: 'svgs/javascript.svg', alt: 'javascript logo' },
    { src: 'svgs/reactjs.svg', alt: 'reactjs logo' },
    { src: 'svgs/nextjs.svg', alt: 'nextjs logo' },
    { src: 'svgs/typescript.svg', alt: 'typescript logo' },
    { src: 'svgs/html.svg', alt: 'html logo' },
    { src: 'svgs/css.svg', alt: 'css logo' },
    { src: 'svgs/sass.svg', alt: 'sass logo' },
    { src: 'svgs/rails.svg', alt: 'rails logo' },
    { src: 'svgs/github.svg', alt: 'github logo' },
  ];

  // useEffect(() => {
  //   // aboutContainer.current.scrollTop(0);
  // }, []);

  const handleOnScrollAbout = () => {
    const scrollValue = aboutContainer.current.scrollTop;
    const maxVal =
      aboutContainer.current.scrollHeight - aboutContainer.current.clientHeight;

    if (scrollValue <= maxVal * 0.5) {
      posts.current[0].style.opacity = '1';
      posts.current[1].style.opacity = '0.4';
      posts.current[2].style.opacity = '0.4';
    } else if (scrollValue <= maxVal * 0.95 && scrollValue >= maxVal * 0.5) {
      posts.current[0].style.opacity = '0.4';
      posts.current[1].style.opacity = '1';
      posts.current[2].style.opacity = '0.4';
    } else {
      posts.current[0].style.opacity = '0.4';
      posts.current[1].style.opacity = '0.4';
      posts.current[2].style.opacity = '1';
    }
  };

  return (
    <div
      className='about-container'
      ref={aboutContainer}
      onScroll={handleOnScrollAbout}
    >
      <div className='container about-intro'>
        <h3>
          Hello, I'm<span>Junmark !</span>
        </h3>
        <p>
          As an Electrical Engineering graduate, I have a strong foundation in
          problem-solving, critical thinking, and technical knowledge. My
          fascination with the software controlling electrical systems led me to
          shift my career path towards software development.<br></br>
          <br></br> I have honed my programming skills through self-study and
          attending a coding bootcamp. I am passionate about developing
          innovative solutions and thrive in a collaborative team environment.
          <br></br>
          <br></br>
          My electrical engineering background gives me a unique perspective on
          software development, allowing me to bridge the gap between software
          and hardware systems. I am excited to continue learning and growing as
          a software developer while contributing to the technological
          advancements of our time.
        </p>
      </div>
      <div className='container technology-container'>
        <h2 className='technology-title'>Technologies</h2>
        <div className='technologies-logo'>
          <section className='carousel-slider'>
            <div className='image-container'>
              {tech.map((t, idx) => {
                return <img src={t.src} key={idx} alt={t.alt} />;
              })}
            </div>
            <div className='image-container'>
              {tech.map((t, idx) => {
                return <img src={t.src} key={idx} alt={t.alt} />;
              })}
            </div>
          </section>
        </div>
      </div>
      <div className='container timeline-container'>
        <h2 className='timeline-title'>Timeline</h2>

        <div className='current' ref={(e) => (posts.current[0] = e)}>
          <div className='current-date'>Currently</div>
          <div className='current-info'>
            <div className='current-caption'>
              Exploring ThreeJS and Iterating this website and previous
              projects.
            </div>
            <div className='current-post'>
              <div className='post-header'>
                <div className='header-profile'>
                  <a
                    href='https://www.linkedin.com/posts/junmarkchi_threejs-learningeveryday-activity-6994239516475617280-U1nv?utm_source=share&utm_medium=member_desktop'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='linkedin'
                  >
                    <img src='images/profile.png' alt='Junmark Chi' />
                  </a>
                  <div className='profile-details'>
                    <span>Junmark Chi</span>
                    <span>Web Developer | ReactJS | Ruby on Rails</span>
                  </div>
                </div>
                <a
                  href='https://www.linkedin.com/posts/junmarkchi_threejs-learningeveryday-activity-6994239516475617280-U1nv?utm_source=share&utm_medium=member_desktop'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='linkedin'
                >
                  <i className='fa-brands fa-linkedin'></i>
                </a>
              </div>
              <p className='post-caption'>
                I just started my journey into learning Three.js. I've always
                been curious about how those excellent 3D websites are made....
              </p>
              <img
                src='post/current.png'
                className='post-image'
                alt='screenshot of a threejs course'
              />
              <div className='post-footer'></div>
            </div>
          </div>
        </div>

        <div className='avion' ref={(e) => (posts.current[1] = e)}>
          <div className='avion-date'>
            <p>7 Months</p>
            <p>March - October</p>
            <p>2022</p>
          </div>
          <div className='avion-info'>
            <div className='avion-caption'>
              Finished a Full-Stack Web Development Course from Avion School
              Bootcamp
            </div>
            <div className='avion-post'>
              <div className='post-header'>
                <div className='header-profile'>
                  <a
                    href='https://www.linkedin.com/posts/junmarkchi_webdevelopment-fullstackdeveloper-bootcamp-activity-6992478042619031552-kdtL?utm_source=share&utm_medium=member_desktop'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='linkedin'
                  >
                    <img src='images/profile.png' alt='Junmark Chi' />
                  </a>
                  <div className='profile-details'>
                    <span>Junmark Chi</span>
                    <span>Web Developer | ReactJS | Ruby on Rails</span>
                  </div>
                </div>
                <a
                  href='https://www.linkedin.com/posts/junmarkchi_webdevelopment-fullstackdeveloper-bootcamp-activity-6992478042619031552-kdtL?utm_source=share&utm_medium=member_desktop'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='linkedin'
                >
                  <i className='fa-brands fa-linkedin'></i>
                </a>
              </div>
              <p className='post-caption'>
                I'm happy to share that I've obtained a Certificate of
                Completion for Full Stack Web Development from Avion School!
              </p>
              <img
                src='post/avion.jpg'
                className='post-image'
                alt='fullstack web development certificate from avion school'
              />
              <div className='post-footer'></div>
            </div>
          </div>
        </div>

        <div className='cit' ref={(e) => (posts.current[2] = e)}>
          <div className='cit-date'>
            <p>5 Years</p>
            <p>2014 - 2019</p>
          </div>
          <div className='cit-info'>
            <div className='cit-caption'>
              Graduated from college with a BS Electrical Engineering Diploma
              from Cebu Institute of Technology-University
            </div>
            <div className='cit-post'>
              <div className='post-header'>
                <div className='header-profile'>
                  <img
                    src='images/school.png'
                    alt='logo of cebu institute of technology university'
                  />
                  <div className='profile-details'>
                    <span>Cebu Institute of Technology-University</span>
                    <span>A top academic institution continuously...</span>
                  </div>
                </div>
                <i className='fa-brands fa-linkedin'></i>
              </div>
              <img
                src='post/cit.jpg'
                className='post-image'
                alt='CIT-U welcome home wildcats'
              />
              <div className='post-footer'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
