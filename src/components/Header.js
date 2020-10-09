import Toolbar from "@material-ui/core/Toolbar";
import ToggleButtons from "./ThemeSwitcher";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import {ThemeContext} from '../theme-context' ;


export default function Header() {
 return( <AppBar position="static">
     <ThemeContext.Consumer>
         {({theme, toggleTheme}) => (
         <Toolbar>
             {theme.header}
             <ToggleButtons onToggleTheme={toggleTheme} style={{}} />
         </Toolbar>
     )}
     </ThemeContext.Consumer>
    </AppBar>)
}