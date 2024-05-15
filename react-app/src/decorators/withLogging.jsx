import { useEffect } from "react";
import { useSelector } from "react-redux";

const withLogging = (WrappedComponent) => {
  return function WithLogging(props) {
    const tasks = useSelector((state) => state.tasks);
    console.log(tasks);

    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} is mounted`);
      return () => {
        console.log(`Component ${WrappedComponent.name} is unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withLogging;
