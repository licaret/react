import { useEffect } from "react";

const withLogging = (WrappedComponent) => {
  return function WithLogging(props) {
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
