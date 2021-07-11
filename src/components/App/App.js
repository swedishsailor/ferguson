import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import List from '../List/List';
import AddQuote from '../AddQuote/AddQuote';

class App extends React.Component{
    static propTypes = {
        addQuote: PropTypes.func,
        value: PropTypes.string,
    }
    state = {
        lists: this.props.lists || [],
    }

    render(){
        return(
            
                <main>

                    <h1 className={styles.title}> Ferguson quotes </h1>
                    <img className={styles.photo} src="https://i.postimg.cc/W38q2n6G/przemek.jpg"></img>
                    <AddQuote action={value => this.addQuote(value)}/>
                    {this.state.lists.map(({key, ...listProps}) => (
                        <List key={key} quote={this.state.quote} {...listProps}/>
                    ))}
                    
                </main>
            );
        }

        addQuote(value){
            this.setState(state => ({
                lists: [
                ...state.lists,
                {
                key: state.lists.length ? state.lists[state.lists.length -1].key + 1 : 0,
                quote: value,
                }
                ]
            }
            ));
        }
    

    }


    export default App;