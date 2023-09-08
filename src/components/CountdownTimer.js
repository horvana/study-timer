export default function CountdownTimer() {
    return (
    <div className="countdown">
        <div id="timer">
            <label htmlFor="" id="timer-label">Session Countdown</label>
            <div id="time-left">25:00</div>
        </div>

        <div className="controls">
            <button id="start-stop">
                <i className="fa fa-play fa-2x"></i>
                <i className="fa fa-pause fa-2x"></i>
            </button>
            <button id="reset">
                <i className="fa fa-refresh fa-2x"></i>
            </button>
        </div>
    </div>
    )
}