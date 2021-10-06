import React from 'react';
import './directory.style.scss';
import Sections from './directory.data.js';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: Sections
        }
    }

    render () {
        return (
            <div className="directory-menu">
                { this.state.sections.map(({id, ...otherSectionProps }) => (
                    <MenuItem key={id} { ...otherSectionProps } />
                )) }
            </div>
        )
    }
}

export default Directory;