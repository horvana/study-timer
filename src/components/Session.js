export default function Session() {
    return (
        <div className="setter-box">
            <label htmlFor="" id="sesion-label">Session</label>
            
            <div className="controls">
                <button id="session-decrement">
                    <i className="fa fa-arrow-down fa-2x"></i>
                </button>
                <div id="session-length">25</div>
                <button id="session-increment">
                    <i className="fa fa-arrow-up fa-2x"></i>
                </button>
            </div>
        </div>
    )
}