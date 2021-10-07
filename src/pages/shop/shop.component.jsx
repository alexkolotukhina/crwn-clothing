import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            colections: SHOP_DATA
        }
    }

    render() {
        const { colections } = this.state;
        return(
            <div className="shop-page">
                {colections.map(({ id, ...otherColectionProps }) => (
                    <CollectionPreview key={ id } { ...otherColectionProps } />
                ))}
            </div>
        )
    }
}

export default ShopPage;