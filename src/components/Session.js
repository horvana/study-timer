import { connect } from "react-redux"
import { incrementLength, decrementLength } from "../redux/actions/lengthActions"

function Session(props) {
    const boxName = 'Session Length'

    return (
        <div className="setter-box">
            <label htmlFor="" id="session-label">{boxName}</label>
            
            <div className="controls">
                <button id="session-decrement" onClick={props.decrementSession}>
                    <i className="fa fa-arrow-down fa-2x"></i>
                </button>
                <div id="session-length">{props.sessionLength}</div>
                <button id="session-increment" onClick= {props.incrementSession}>
                    <i className="fa fa-arrow-up fa-2x"></i>
                </button>
            </div>
        </div>
    )
}

const mapStateToProps= (state) => ({
    sessionLength: state.length.sessionLength
})

const mapDispatchToProps = {
    incrementSession: () => incrementLength('session'),
    decrementSession: () => decrementLength('session'),
}

export default connect(mapStateToProps, mapDispatchToProps)(Session);