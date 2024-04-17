import React, { useContext } from "react";
import ThemeContext from "../ThemeContext/ThemeContext";

function ThemedButton({ children, ...restProps }) {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: theme.primaryButtonBackground,
        color: theme.primaryButtonColor,
      }}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default ThemedButton;
