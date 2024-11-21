import {useEffect} from "react";

const Even =()=>{
    useEffect(()=>{

        return () => {
            console.log("unmount")
        }; // 정리함수, 클린업
    }, []);

    return(
        <div>짝수입니다.</div>
    )
}

export default Even;