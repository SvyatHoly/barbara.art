import React from 'react';
import PropTypes from 'prop-types';
import SIDES from './SIDES'
import Item from './Item/Item';
import SwipeReact from 'swipe-react';
import WheelReact from 'wheel-react';
import ArrowKeysReact from 'arrow-keys-react';
import './Container.css';

class Container extends React.Component {
    constructor(props) {
        super(props);

        let index = this.calcIndex();
        this.state = {
            selectedIndex: index,
            prevIndex: index,
            pauseWheelEvent: false
        };

        let keysConfig = {
            left: this.previous,
            right: this.next,
            up: this.next,
            down: this.previous
        };
        let touchConfig = {
            left: this.next,
            right: this.previous,
            up: this.next,
            down: this.previous
        };
        SwipeReact.config(touchConfig);
        WheelReact.config(touchConfig);
        ArrowKeysReact.config(keysConfig);
    }

    next = () => {
        let index = this.state.selectedIndex;
        if (index + 1 < this.props.imagesArr.length) {
            this.selectItem(index + 1);
        }
    };
    previous = () => {
        let index = this.state.selectedIndex;
        if (index > 0) {
            this.selectItem(index - 1);
        }
    };

    render() {
        let itemWidth, itemHeight;

        let items = this.prepareItems();
        return (
            <div tabIndex="0"
                 style={this.props.containerStyles}
                 {...SwipeReact.events}
                 {...WheelReact.events}
                 {...ArrowKeysReact.events}
                 ref={(coverflow) => {
                     this.coverflow = coverflow;
                 }}>
                {this.props.direction === 'horizontal' ?
                <div id={'left'} onClick={this.previous}
                        style={{
                            width: '100px',
                            height: '100px',
                            position: 'absolute',
                            left: `calc(30% - ${this.props.width}px /2)`,
                            bottom: `calc(100% - ${this.props.height}px / 2)`
                        }}/> : null}
                {items.map((item) => {

                    [itemWidth, itemHeight] = this.calcItemDimensions(item.ratio);
                    return <Item
                        side={item.side}
                        max={Math.floor(this.calcItemsAmountToRender() / 2)}
                        distance={item.distance}
                        imgUrl={item.imgUrl}
                        selectItem={this.selectItem}
                        index={item.index}
                        zIndex={this.props.zIndex}
                        height={itemHeight}
                        width={itemWidth}
                        label={item.label}
                        direction={this.props.direction}
                        key={item.index}/>;
                })}
                {this.props.direction === 'horizontal' ?
                <div id={'right'} onClick={this.next}
                        style={{
                            width: '100px',
                            height: '100px',
                            position: 'absolute',
                            left: `calc(60% + ${this.props.width}px /2)`,
                            bottom: `calc(100% - ${this.props.height}px / 2)`
                        }}/>: null}
            </div>
        );
    }

    componentDidMount() {
        this.coverflow.focus();
    }

    componentWillUnmount() {
        WheelReact.clearTimeout();
    }

    selectItem = (index) => {
        this.setState((prevState) => ({
            selectedIndex: index,
            prevIndex: prevState.selectedIndex
        }));
        if (this.props.handleSelect) {
            this.props.handleSelect(index);
        }
    };

    prepareItems = () => {
        if (this.props.imagesArr.length === 0) {
            return [];
        }
        const AMOUNT_TO_RENDER = this.calcItemsAmountToRender();
        const SIDE_AMOUNT = Math.floor(AMOUNT_TO_RENDER / 2);

        const index = this.state.selectedIndex;
        const imagesArr = this.props.imagesArr;

        const items = imagesArr.map((img, index) => ({imgUrl: img.src, index, ratio: img.ratio, label: img.label}));

        items[index].side = SIDES.CENTER;
        items[index].distance = 0;

        let fromIndex = Math.max(0, index - SIDE_AMOUNT);
        let untilIndex = Math.min(imagesArr.length, index + SIDE_AMOUNT + 1);

        for (let i = fromIndex; i < index; i++) {
            items[i].side = SIDES.LEFT;
            items[i].distance = index - i;
        }

        for (let i = index + 1; i < untilIndex; i++) {
            items[i].side = SIDES.RIGHT;
            items[i].distance = i - index;
        }

        if (items.length < AMOUNT_TO_RENDER) {
            return items;
        }

        //calc removed items, in order to animate them.
        let amount = index - this.state.prevIndex;
        if (amount > 0 && fromIndex > SIDE_AMOUNT) {
            for (let i = fromIndex - amount; i < fromIndex; i++) {
                items[i].side = SIDES.REMOVED_LEFT;
                items[i].distance = index - i;
            }
            fromIndex -= amount;
        } else if (amount < 0) {
            amount *= -1;
            if (untilIndex + amount < items.length) {
                for (let i = untilIndex; i < untilIndex + amount; i++) {
                    if (!items[i]) {
                        debugger;
                    }
                    items[i].side = SIDES.REMOVED_RIGHT;
                    items[i].distance = i - index;
                }
                untilIndex += amount;
            }
        }

        return items.slice(fromIndex, untilIndex);
    };

    calcIndex = () => {
        const length = this.props.imagesArr.length;
        if (length === 0) {
            return -1;
        }
        if (length > 10) {
            return 5;
        }
        return parseInt(this.props.imagesArr.length / 2, 10);
    };

    calcItemDimensions = (aspect) => {

        let ratio = {};
        [ratio.x, ratio.y] = aspect.split(':').map(x => parseFloat(x));
        let itemWidth, itemHeight;
        if (this.props.direction === 'vertical') {
            itemWidth = this.props.width - 70;
            itemHeight = itemWidth * ratio.y / ratio.x;
        } else {
            itemHeight = this.props.height - 60;
            itemWidth = itemHeight * ratio.x / ratio.y;
        }
        return [itemWidth, itemHeight];
    };

    calcItemsAmountToRender = () => {
        let amount;
        if (this.props.direction === 'vertical') {
            const containerHeight = this.props.height;
            let itemHeight;
            [, itemHeight] = this.calcItemDimensions('2:1');
            amount = Math.floor(containerHeight / itemHeight) * 2 - 4;
        } else {
            const containerWidth = this.props.width;
            let itemWidth;
            [itemWidth,] = this.calcItemDimensions('2:1');
            amount = Math.floor(containerWidth / itemWidth) * 2 - 3;
        }
        if (amount < 3) {
            amount = 3;
        } else if (amount > 11) {
            amount = 11;
        }
        return Math.min(amount, this.props.imagesArr.length);
    }
}

Container.propTypes = {
    imagesArr: PropTypes.array.isRequired,
    zIndex: PropTypes.number,
    height: PropTypes.number,
    background: PropTypes.string,
    border: PropTypes.string,
    boxShadow: PropTypes.string,
    itemRatio: PropTypes.string,
    handleSelect: PropTypes.func
};

export default Container;