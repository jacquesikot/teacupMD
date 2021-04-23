import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

interface Props {
  percentage: any;
}

const useOnboardingButton = ({ percentage }: Props) => {
  const size = 100;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumfrence = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue: number) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener((value) => {
      const strokeDashoffset =
        circumfrence - (circumfrence * value.value) / 100;
      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  }, [percentage]);

  return {
    size,
    strokeWidth,
    center,
    radius,
    circumfrence,
    progressRef,
  };
};

export default useOnboardingButton;
