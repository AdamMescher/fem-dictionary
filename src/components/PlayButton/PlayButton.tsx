import * as React from 'react';
import anime from 'animejs';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import styles from './PlayButton.module.scss';

interface PlayButtonProps {
  file: any;
}

function PlayButton({ file }: PlayButtonProps) {
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

  const polyPoints = {
    triangle: '13.4,0 56.7,25 100,50 100,50 100,50 56.7,75 13.4,100',
    square: '10,10 50,10 90,10 90,50 90,90 50,90 10,90',
  };

  const polygonRef = React.useRef(null);

  const animateSquareToTriangle = () => {
    const polygon = polygonRef.current;

    anime({
      targets: polygon,
      points: [
        {
          value: [polyPoints.triangle, polyPoints.square],
        },
      ],
      easing: 'easeInOutQuint',
      duration: 400,
    });
  };

  const animationSquareToTriangle = () => {
    const polygon = polygonRef.current;

    anime({
      targets: polygon,
      points: [
        {
          value: [polyPoints.square, polyPoints.triangle],
        },
      ],
      easing: 'easeInOutQuint',
      duration: 400,
    });
  };

  React.useEffect(() => {
    if (playing) {
      animateSquareToTriangle();
    } else {
      animationSquareToTriangle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  return (
    <div className={styles.wrapper} data-testid='play-button'>
      <button type='button' onClick={handleClick}>
        <VisuallyHidden.Root>
          {playing ? 'stop audio' : 'play audio'}
        </VisuallyHidden.Root>
        <svg viewBox='0 0 100 100'>
          <polygon
            className={styles.polygon}
            ref={polygonRef}
            points={polyPoints.triangle}
          />
        </svg>
      </button>
    </div>
  );
}

export default PlayButton;
