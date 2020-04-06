import { createStore } from 'redux';

import Dark from '../styles/themes/Dark';
import Light from '../styles/themes/Light';

function setTheme(state = { theme: Light }, action) {

    switch (action.type) {
        default:
            return { theme: state.theme == Dark ? Light : Dark }
    }
}

export default createStore(setTheme);