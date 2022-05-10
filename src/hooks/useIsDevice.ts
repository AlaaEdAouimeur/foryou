import useWindowSize from './useWindowSize';



const useIsDevice = () => {
  const { width } = useWindowSize();

  const isMobile = width <= 720;
  const isDesktop = !isMobile;


  return {
    width,
    isMobile,
    isDesktop,
  };
};

export default useIsDevice;
