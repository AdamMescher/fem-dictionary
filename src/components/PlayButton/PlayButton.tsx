import * as React from 'react';
import anime from 'animejs';
import styles from './PlayButton.module.scss';

interface PlayButtonProps {
  file: any;
}

const PlayButton = ({ file }: PlayButtonProps) => {
  const [playing, setPlaying] = React.useState(false);

  if (!file) {
    throw new Error('No file provided to PlayButton');
    return null;
  }

  file.addEventListener('play', () => {
    setPlaying(true);
  });

  file.addEventListener('pause', () => {
    setPlaying(false);
  });

  file.addEventListener('ended', () => {
    setPlaying(false);
  });

  const handleClick = () => {
    if (playing) {
      file.pause();
    } else {
      file.play();
    }
  };

  const points = {
    triangle: '0,0 43.3,25 86.6,50 86.6,50 86.6,50 43.3,75 0,100',
    square: '0,0 50,0 100,0 100,50 100,100 50,100 0,100',
  };

  const polygonRef = React.useRef(null);

  const animateSquareToTriangle = () => {
    const polygon = polygonRef.current;

    anime({
      targets: polygon,
      points: [
        {
          value: [
            '0,0 43.3,25 86.6,50 86.6,50 86.6,50 43.3,75 0,100',
            '0,0 50,0 100,0 100,50 100,100 50,100 0,100',
          ],
        },
      ],
      easing: 'easeInOutQuint',
      duration: 300,
    });
  };

  const animationSquareToTriangle = () => {
    const polygon = polygonRef.current;

    anime({
      targets: polygon,
      points: [
        {
          value: [
            '0,0 50,0 100,0 100,50 100,100 50,100 0,100',
            '0,0 43.3,25 86.6,50 86.6,50 86.6,50 43.3,75 0,100',
          ],
        },
      ],
      easing: 'easeInOutQuint',
      duration: 300,
    });
  };

  React.useEffect(() => {
    if (playing) {
      animateSquareToTriangle();
    } else {
      animationSquareToTriangle();
    }
  }, [playing]);

  return (
    <div className={styles.wrapper}>
      <button onClick={handleClick}>
        <svg viewBox='0 0 100 100'>
          <polygon ref={polygonRef} points={points.triangle} />
        </svg>
      </button>
    </div>
  );
};

export default PlayButton;
