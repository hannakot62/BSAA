import React, {useEffect, useState} from "react";

export default function MainTable(){
    const [json, setJson] = useState("");
    useEffect( ()=>{
        async function n(){
            const response = await fetch("https://bgaa.by/test");
            const json1 = await response.json();
            const a = JSON.stringify(json1.data);
            setJson(a);
        }
        n();
    },[])
    return(
        <p>
            {json}
        </p>
    )
}