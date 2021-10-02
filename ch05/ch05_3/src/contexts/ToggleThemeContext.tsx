import React, {createContext, useContext} from 'react';
import type {FC} from 'react';
export type ToggleThemeContextType = {
  toggleTheme: () => void;
}; // 공유하려는 데이터 속성
const defaultToggleThemeContext = {
  toggleTheme: () => {},
}; // 공유하려는 데이터 속성 초깃값

// createContext로 생성한 객체는 Provider, Consumer 컴포넌트를 제공
const ToggleThemeContext = createContext<ToggleThemeContextType>(
  defaultToggleThemeContext,
);

type ToggleThemeContextProps = {
  toggleTheme: () => void;
};
export const ToggleThemeProvider: FC<ToggleThemeContextProps> = ({
  children,
  toggleTheme,
}) => {
  const value = {
    // value 속성의 타입은 제네릭 함수 createContext<T>(defaultValue)의 타입과 같아야한다.
    toggleTheme,
  };
  return (
    <ToggleThemeContext.Provider value={value}>
      {children}
    </ToggleThemeContext.Provider>
  );
};

export const useToggleTheme = () => {
  const {toggleTheme} = useContext(ToggleThemeContext);
  return toggleTheme;
};
