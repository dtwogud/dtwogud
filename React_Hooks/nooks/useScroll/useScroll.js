export const useScroll = () => {
  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);
  const onscroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
    console.log("Y", window.scrollY, "X", window.scrollX);
  };
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  return state;
};

