import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness7Icon from '@material-ui/icons/Brightness7';


export default function ToggleButtons( props) {

    return (
        <ToggleButtonGroup
            value={props.theme}
            exclusive
            onChange={props.onToggleTheme}
            aria-label="theme select"
        >
            <ToggleButton value="light" aria-label="light theme" style={props.theme.button}>
                <Brightness7Icon/>
            </ToggleButton>

            <ToggleButton value="dark" aria-label="dark theme" style={props.theme.button}>
                <Brightness2Icon/>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}