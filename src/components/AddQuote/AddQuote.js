import React from 'react';
import styles from './AddQuote.scss';
import PropTypes from 'prop-types';

class AddQuote extends React.Component {
    static propTypes = {
        text: PropTypes.string,
        image: PropTypes.node,
    }
    static defaultProps = {
        text: 'Add your quote',
        image: "https://i.postimg.cc/4nC7867D/addition-plus-sign-clip-art-84945.png",
    }
    state = {
        value: '',
    }

    handleChange = event => {
        // console.log(event);
        this.setState({
            value: event.target.value,
        });
        //console.log(value);
    }

    handleOK = () => {
        if (this.state.value != '') {
            this.props.action(this.state.value);
            console.log(this.state.value);
            this.setState({
                value: '',
            });
        }
    }



    render() {
        return (
            <div className={styles.button}>
                <img className={styles.plus} onClick={this.handleOK} src={this.props.image}></img>
                <input className={styles.input} type='text' placeholder={this.props.text} onChange={this.handleChange} value={this.state.value}></input>
            </div>
        );
    }
} export default AddQuote;