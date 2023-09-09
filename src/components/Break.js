export default function Break() {
    const boxName = 'Break Length'
    const breakLength = 5

    return (
        <div className="setter-box">
            <label id="break-label" htmlFor="">{boxName}</label>
            
            <div className="controls">
                <button id="break-decrement">
                <i className="fa fa-arrow-down fa-2x"></i>
                </button>
                <div id="break-length">{breakLength}</div>
                <button id="break-increment">
                    <i className="fa fa-arrow-up fa-2x"></i>
                </button>
            </div>
        </div>
    )
}