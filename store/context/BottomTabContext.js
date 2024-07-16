import React, { createContext, useState } from 'react';
import { Colors } from '../../constants/colors';
const BottomTabContext = createContext();

export const BottomTabProvider = ({ children }) => {
  const [tabBarStyle, setTabBarStyle] = useState({
    height: 50,
    backgroundColor: Colors.grayComp,
    display: '', // 초기 값 설정
  });

  const updateTabBarStyle = (newStyle) => {
    setTabBarStyle(newStyle);
  };

  return (
    <BottomTabContext.Provider value={{ tabBarStyle, updateTabBarStyle }}>
      {children}
    </BottomTabContext.Provider>
  );
};

export default BottomTabContext;
