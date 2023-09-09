export default function CountdownTimer() {
    const currItem = 'Session'
    const timeLeft = '25:00'

    return (
    <div className="countdown">
        <div id="timer">
            <label htmlFor="" id="timer-label">{currItem}</label>
            <div id="time-left">{timeLeft}</div>
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