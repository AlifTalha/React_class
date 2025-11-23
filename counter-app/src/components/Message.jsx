import React , {useState} from "react";

function Message() {
    const [showMessage, setShowMessage] = useState(false);
    return (
        <div>
            {showMessage && <h3>Hello World!efe</h3>}
            <button onClick={() => setShowMessage(!showMessage)}>
                {showMessage ? "Hide" : "Show"} Message
            </button>
        </div>
    );

}

export default Message