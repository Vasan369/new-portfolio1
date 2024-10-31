import { createContext, useState } from "react"
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");



    const delayPara = (index, nextWord) => {

        setTimeout(function () {
            setResultData(prev => prev + nextWord);
        }, 75 * index)

    }

    const newPage = () => {
        setLoading(false);
        setShowResult(false);
    }

    const onSent = async (prompt) => {

        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
        const response = await run(input);

        const splitByAsterisks = response.split('**');



        let responseArray = splitByAsterisks.flatMap(part => part.split('```'));
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            }
            else {
                newResponse += "<b>" + responseArray[i] + "</b>"
            }
        }

        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponse3 = newResponse2.split("`").join("</br>");
        let newResponse4 = newResponse3.split("{").join("</br>{</br>");
        let newResponse5 = newResponse4.split("}").join("</br>}</br>");


        let newResponseArray = newResponse5.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " ");
        }
        setLoading(false);
        setInput('');



    }
    const contextValue = {
        input,
        setInput,
        recentPrompt,
        showResult,
        loading,
        resultData,
        onSent,
        setShowResult,
        newPage
    }
    return (<Context.Provider value={contextValue}>
        {props.children}</Context.Provider>)
}

export default ContextProvider