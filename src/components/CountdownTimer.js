import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { startTimer, stopTimer, resetTimer, updateTimer } from '../redux/actions/timerActions'
import { formatTime } from '../utils/timeUtils'


function CountdownTimer(props) {
    const {
        isRunning,
        timeLeft,
        startTimer,
        stopTimer,
        resetTimer,
        sessionLength,
        breakLength,
        updateTimer,
    } = props

    const [currentTimerType, setCurrentTimerType] = useState('Session')
    useEffect(() => {
        let timerInterval;

        if (isRunning && timeLeft >= 1) {
            timerInterval = setInterval(() => {
                updateTimer(timeLeft-1)

                if (timeLeft === 1) {
                    stopTimer()

                    if (currentTimerType === 'Session') {
                        setCurrentTimerType('Break')
                        updateTimer(breakLength * 60)
                    } else {
                        setCurrentTimerType('Session')
                        updateTimer(sessionLength * 60)
                    }
                }
            }, 1000)
        }

        return () => {
            clearInterval(timerInterval)
        }

    }, [resetTimer, stopTimer, isRunning, timeLeft, sessionLength, breakLength, currentTimerType])

    const handleResetButton = () => {
            resetTimer(sessionLength*60)
            setCurrentTimerType('Session')
    }
    
    return (
    <div className="countdown">
        <div id="timer">
            <label htmlFor="" id="timer-label">{currentTimerType}</label>
            <div id="time-left">{formatTime(timeLeft)}</div>
        </div>

        <div className="controls">
            <button id="start-stop" onClick={() => startTimer()}>
                <i className="fa fa-play fa-2x"></i>
            </button>
            <button id="stop" onClick={() => stopTimer()}>
                <i className="fa fa-pause fa-2x"></i>
            </button>
            <button id="reset" onClick = {() => handleResetButton()}>
                <i className="fa fa-refresh fa-2x"></i>
            </button>
        </div>
    </div>
    )
}

const mapStateToProps = (state) => ({
    isRunning: state.timer.isRunning,
    timeLeft: state.timer.timeLeft,
    sessionLength: state.length.sessionLength,
    breakLength: state.length.breakLength
})

const mapDispatchToProps = {
    startTimer,
    stopTimer,
    resetTimer,
    updateTimer
}

export default connect(mapStateToProps, mapDispatchToProps)(CountdownTimer)