import React, { useState } from 'react';
import { Switch } from 'react-native';

import { useDispatch } from 'react-redux';

import { GetTheme } from '../styles/Components';

export default function ThemeSwitch() {
    // const theme = useSelector(state => state.theme);

    const dispatch = useDispatch();
    const [active, setActive] = useState(true);

    return (<>
        <Switch
            value={active}

            onValueChange={async () => {
                setActive(!active);
                await dispatch({ type: '' });
            }}
        />
        <GetTheme> Teste </GetTheme>
    </>);
}
