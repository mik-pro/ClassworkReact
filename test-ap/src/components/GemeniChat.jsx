import React, { useState } from 'react'
import axios from 'axios'

let apiKey = import.meta.env.VITE_GEMINI_API_KEY

export default function GemeniChat() {
    const [userInput, setUserInput] = useState('')
    const [error, setError] = useState('')
    const [answerToggle, setAnswerToggle] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
                {
                    contents: [{ parts: [{ text: userInput }] }]
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            )
            const answer = response.data.candidates?.[0]?.content?.parts?.[0]?.text
            setAnswerToggle(answer || 'Ответ не найден')
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className='bg-blue-800 text-white border w-100 rounded-3xl m-50 p-10 shadow-xl mx-140 hover:scale-110 duration-200'>
            <h1 className='text-center'>Gemini Chat</h1>
            <form className='border p-5 bg-emerald-800' onSubmit={handleSubmit}>
                <input className=''
                    type="text"
                    placeholder="Привет Gemini Chat"
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button className='hover:text-pink-300' type="submit">Отправить</button>
            </form>
            {answerToggle && <div>{answerToggle}</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    )
}


import React, { useState } from 'react'
import axios from 'axios'

const apiKey = import.meta.env.VITE_GEMINI_API_KEY

export default function GemeniTranslator() {
    const [text, setText] = useState('')
    const [translatedText, setTranslatedText] = useState('')
    const [error, setError] = useState('')
    const [fromLang, setFromLang] = useState('английского')
    const [toLang, setToLang] = useState('русский')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setTranslatedText('')

        const prompt = `Переведи с ${fromLang} на ${toLang}: ${text}`

        try {
            const response = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
                {
                    contents: [{ parts: [{ text: prompt }] }]
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            )

            const answer = response.data.candidates?.[0]?.content?.parts?.[0]?.text
            setTranslatedText(answer || 'Перевод не получен.')
        } catch (err) {
            setError('Ошибка: ' + err.message)
        }
    }

    return (
        <div className="bg-blue-800 text-white p-6 rounded-3xl max-w-xl mx-auto shadow-lg mt-10">
            <h1 className="text-center text-xl font-bold mb-4">🌐 Переводчик от Мираса</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                    className="w-full p-2 rounded text-black"
                    rows="4"
                    placeholder="Введите текст для перевода..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                />

                <div className="flex space-x-4">
                    <select
                        className="flex-1 p-2 text-black rounded"
                        value={fromLang}
                        onChange={(e) => setFromLang(e.target.value)}
                    >
                        <option value="английского">Английский</option>
                        <option value="русского">Русский</option>
                        <option value="немецкого">Немецкий</option>
                        <option value="испанского">Испанский</option>
                    </select>

                    <select
                        className="flex-1 p-2 text-black rounded"
                        value={toLang}
                        onChange={(e) => setToLang(e.target.value)}
                    >
                        <option value="русский">Русский</option>
                        <option value="английский">Английский</option>
                        <option value="немецкий">Немецкий</option>
                        <option value="испанский">Испанский</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-pink-600 hover:bg-pink-500 rounded font-semibold"
                >
                    Перевести
                </button>
            </form>

            {translatedText && (
                <div className="mt-4 p-3 bg-emerald-700 rounded">
                    <strong>Перевод:</strong>
                    <p>{translatedText}</p>
                </div>
            )}

            {error && (
                <div className="mt-4 text-red-300">
                    <strong>Ошибка:</strong> {error}
                </div>
            )}
        </div>
    )
}



