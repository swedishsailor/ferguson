import React from 'react';
import styles from './List.scss';
import PropTypes from 'prop-types';
import AddQuote from '../AddQuote/AddQuote';

class List extends React.Component{
    state = {
        quote: '',
    }
    render(){
        return(
            <section>
                <div className={styles.list}>
                    <p className={styles.quote}>{this.props.quote}</p>
                </div>
            </section>
        );
    }
} export default List;