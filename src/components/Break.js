export default function Break() {
    return (
        <div className="setter-box">
            <label id="break-label" htmlFor="">Break</label>
            
            <div className="controls">
                <button id="break-decrement">
                <i className="fa fa-arrow-down fa-2x"></i>
                </button>
                <div id="break-length">5</div>
                <button id="break-increment">
                    <i className="fa fa-arrow-up fa-2x"></i>
                </button>
            </div>
        </div>
    )
}