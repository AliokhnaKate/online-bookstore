import {useTheme} from "../../../shared/lib/theme/ThemeProvider";

export const ThemeSwitcher = () => {
  const {toggleTheme} = useTheme();
  
  return (
    <>
      <div>
        <button onClick={toggleTheme}>Переключить тему</button>
      </div>
    </>
  )
}