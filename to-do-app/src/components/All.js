import { createContext,useState} from "react";


export let MyContext = createContext();

export function All({children}){
    const [data1, setData1] = useState('');
    const [data2, setData2] = useState('');
    
    return <MyContext.Provider value={{data1,setData1,data2,setData2}}>
                {children}
           </MyContext.Provider>
}