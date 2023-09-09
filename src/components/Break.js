import { connect } from "react-redux"
import { incrementLength, decrementLength } from "../redux/actions/lengthActions"

function Break(props) {
    const boxName = 'Break Length'

    return (
        <div className="setter-box">
            <label id="break-label" htmlFor="">{boxName}</label>
            
            <div className="controls">
                <button id="break-decrement" onClick={props.decrementBreak}>
                <i className="fa fa-arrow-down fa-2x"></i>
                </button>
                <div id="break-length">{props.breakLength}</div>
                <button id="break-increment" onClick={props.incrementBreak}>
                    <i className="fa fa-arrow-up fa-2x"></i>
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    breakLength: state.length.breakLength
})

const mapDispatchToProps = {
    incrementBreak: () => incrementLength('break'),
    decrementBreak: () => decrementLength('break')
}

export default connect(mapStateToProps, mapDispatchToProps)(Break)