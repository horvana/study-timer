export default function Session() {
    const boxName = 'Session Length'
    const sessionLength = 25

    return (
        <div className="setter-box">
            <label htmlFor="" id="session-label">{boxName}</label>
            
            <div className="controls">
                <button id="session-decrement">
                    <i className="fa fa-arrow-down fa-2x"></i>
                </button>
                <div id="session-length">{sessionLength}</div>
                <button id="session-increment">
                    <i className="fa fa-arrow-up fa-2x"></i>
                </button>
            </div>
        </div>
    )
}