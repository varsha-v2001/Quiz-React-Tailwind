// import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Quiz = () => {
    const [cli,setCli]=useState("")
    const [show,setShow]=useState(false)
    const [item, setItem] = useState({
        id: "", question: "", options: {}, correct: {}, explanation: ""
    })

    const [bg1, setBg1] = useState('#0891b2')
    const [bg2, setBg2] = useState('#0891b2')
    const [bg3, setBg3] = useState('#0891b2')
    const [bg4, setBg4] = useState('#0891b2')


    useEffect(() => {
        fetchApi()
    }, [])

    const fetchApi = async () => {
        setBg1('#0891b2')
        setBg2('#0891b2')
        setBg3('#0891b2')
        setBg4('#0891b2')
        setShow(false)
        setCli("")
        const result = await fetch("https://quizapi.io/api/v1/questions?apiKey=WchCdMfE3ouLwjNNKsNICSoaukIjRrc9R6V1RJDE&category=nodejs&tags=nodeJS")
        const items = await result.json()
        const itemRef = items[Math.floor(Math.random() * items.length)]
        console.log(itemRef);
        setItem({
            id: itemRef.id, question: itemRef.question, options: itemRef.answers, correct: itemRef.correct_answers, explanation: itemRef.explanation
        })
    }
    console.log(item);

    const handleCorrect=(id)=>{
        // if(bg1!='green' || bg2!='green' || bg3!='green' || bg4!='green'){
            if(id=='a'){
                setCli("none")
                if (item.correct.answer_a_correct=="true") {
                    setBg1('green')
                }else{
                    setBg1("red")
                    setShow(true)
                    if(item.correct.answer_b_correct=="true"){
                        setBg2("green")
                    }else if(item.correct.answer_c_correct=="true"){
                        setBg3("green")
                    }else{
                        setBg4("green")
                    }
                }
            }else if(id=='b'){
                setCli("none")
                if (item.correct.answer_b_correct=="true") {
                    setBg2('green')
                }else{
                    setBg2("red")
                    setShow(true)
                    if(item.correct.answer_a_correct=="true"){
                        setBg1("green")
                    }else if(item.correct.answer_c_correct=="true"){
                        setBg3("green")
                    }else{
                        setBg4("green")
                    }
                }
            }else if(id=='c'){
                setCli("none")
                if (item.correct.answer_c_correct=="true") {
                    setBg3('green')
                }else{
                    setBg3("red")
                    setShow(true)
                    if(item.correct.answer_a_correct=="true"){
                        setBg1("green")
                    }else if(item.correct.answer_b_correct=="true"){
                        setBg2("green")
                    }else{
                        setBg4("green")
                    }
                }
            }else{
                setCli("none")
                if (item.correct.answer_d_correct=="true") {
                    setBg4('green')
                }else{
                    setBg4("red")
                    setShow(true)
                    if(item.correct.answer_a_correct=="true"){
                        setBg1("green")
                    }else if(item.correct.answer_b_correct=="true"){
                        setBg2("green")
                    }else{
                        setBg3("green")
                    }
                }
            }
        // }
    }


    return (
        <>
            <div className='bg-cyan-200 flex justify-center w-full h-svh overflow-y-hidden'>
                <div className=' w-full px-20 py-10'>
                    <h1 className='flex justify-center mb-5 text-4xl'><u>Node.js Quiz</u></h1>
                    {
                        <>
                            <p style={{ fontFamily: '"Inter", serif' }} className='text-lg text-cyan-800'>Q){item.question}</p>
                            <div className='flex flex-col mt-4'>
                                <div onClick={()=>handleCorrect('a')} id='a' style={{ fontFamily: '"Inter", serif', backgroundColor: bg1,pointerEvents:cli }} className=' text-white w-80 rounded mb-3 p-3'>a) {item.options.answer_a}</div>
                                <div onClick={()=>handleCorrect('b')} id='b'  style={{ fontFamily: '"Inter", serif', backgroundColor: bg2,pointerEvents:cli }} className=' text-white w-80 rounded mb-3 p-3'>b) {item.options.answer_b}</div>
                                <div onClick={()=>handleCorrect('c')} id='c'  style={{ fontFamily: '"Inter", serif', backgroundColor: bg3,pointerEvents:cli }} className=' text-white w-80 rounded mb-3 p-3'>c) {item.options.answer_c}</div>
                                <div  onClick={()=>handleCorrect('d')} id='d'  style={{ fontFamily: '"Inter", serif', backgroundColor: bg4, pointerEvents:cli }} className=' text-white w-80 rounded mb-3 p-3'>d) {item.options.answer_d}</div>
                            </div>
                            { show &&
                            <div style={{ textAlign: 'justify', fontFamily: '"Inter", serif' }} className='mt-5 mb-5 bg-white p-5'>
                                {item.explanation}
                            </div>
                            }
                        </>
                    }
                    <div>
                        <button onClick={fetchApi} style={{ fontFamily: '"Inter", serif' }} className='rounded bg-cyan-700 p-3 w-36 text-white'>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz