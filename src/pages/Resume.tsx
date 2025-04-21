/*import Footer from '../components/Footer';

export default function Resume() {
    return (
        <div>
          <h1>Resume</h1>
          <p>Check out my resume below:</p>
          <a 
                href="https://docs.google.com/document/d/1_Fq7D76oJMsW6c1I5m6U3kKJcTKFFx5o/edit?usp=sharing&ouid=107891732533574940988&rtpof=true&sd=true" 
                target="_blank" 
                rel="noopener noreferrer"
          >
                Download My Resume
          </a>
          <Footer />
        </div>
      );
}; */

import Footer from '../components/Footer';

export default function Resume() {
    return (
        <div>
          <h2 className='resume'>Resume</h2>
          <iframe 
                src="https://docs.google.com/document/d/1obNbHRrjAZwCQRk2gBavT4ifhVrIwNxrMmMOJRn1IE8/edit?usp=sharing" 
                width="80%" 
                height="600px" 
                frameBorder="0"
          >
          </iframe>
          <Footer />
        </div>
    );
}