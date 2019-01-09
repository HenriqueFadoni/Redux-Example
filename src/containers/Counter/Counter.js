import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onReductionCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onIncrementFiveCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onReductionFiveCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResults(this.props.ctr)}>STORE RESULT</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResults(strResult.id)}>{strResult.value}</li>
                    ))}                   
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onReductionCounter: () => dispatch(actionCreators.reduction()),
        onIncrementFiveCounter: () => dispatch(actionCreators.incrementsFive(10)),
        onReductionFiveCounter: () => dispatch(actionCreators.reducesFive(15)),
        onStoreResults: result => dispatch(actionCreators.storeResult(result)),
        onDeleteResults: id => dispatch(actionCreators.deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);