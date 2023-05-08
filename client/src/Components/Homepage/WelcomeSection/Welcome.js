import './Welcome.css';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <main id="welcome-main">
        <h1
          ref={ref}
          className={isVisible ? 'move-from-left' : ''}
        >
          We <strong>empower</strong> you
        </h1>
        <h1
          ref={ref}
          className={isVisible ? 'move-from-left' : ''}
        >
          to learn what you love
        </h1>
        <form>
          <a
          id="welcome-link-learnMore"
          href="#"
          ref={ref}
            className={isVisible ? 'move-from-left' : ''}>
            Learn More
          </a>
        </form>
        <div ref={inViewRef} />
    </main>
  );
};

export default Welcome;
