import React from 'react';
import s from './BadgeHeader.module.css'

const withBadgeHeader = (BadgeContent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {isOpen: true}
        }

        toggleBadge = () => {
            this.setState({isOpen: !this.state.isOpen})
        }

        render() {

            if (this.state.isOpen)
                return (
                    <>
                        <div className={s.badgeProfile__header + ' ' + s.badgeProfile__header_open}
                             onClick={this.toggleBadge}>
                            <h2>{this.props.text} </h2>
                        </div>
                        <BadgeContent {...this.props}/>
                    </>
                )
            else return (

                <div className={s.badgeProfile__header + ' ' + s.badgeProfile__header_roll} onClick={this.toggleBadge}>
                    <h2>{this.props.text}<span>{(this.props.count) ? ' (' + this.props.count + ')' : ''}</span></h2>
                </div>
            )
        }
    }
}

export default withBadgeHeader;