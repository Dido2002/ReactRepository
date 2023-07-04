// 4. useRef и текстови полета
// Създайте два бутона и две текстови полета. При натискане на бутон едно текстово
// поле едно се фокусира. При натискане на бутон две – текстово поле две се фокусира.

import React,{useRef} from "react";

export default function App04(){

    const refOne = useRef(null);
    const refTwo = useRef(null);

    return(
        <div>
            <div>
                <input type="text" ref={refOne}/>
                <button onClick={()=>refOne.current.focus()}>Click 1</button>
            </div>
            <div>
                <input type="text" ref={refTwo}/>
                <button onClick={()=>refTwo.current.focus()}>Click 2</button>
            </div>
        </div>
    );
}