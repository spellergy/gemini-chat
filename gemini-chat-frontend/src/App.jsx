import { useState } from 'react'
import './App.css'
import ChatInput from './components/ChatInput'
import ChatResponse from './components/ChatResponse'
import { fetchChatResponse } from './services/app';


function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);
    try{
      const apiResponse = await fetchChatResponse(question);
      console.log('Response in App.jsx:', apiResponse);
      setResponse(apiResponse);
    } catch(error) {
      alert("Failed to get the response")
    } finally{
      setLoading(false);
    }
  }

  return (
    <>
    <div className='App'>
      <header className='bg-primary text-white text-center py-4'>
        <h1>
          Gemini Chatbot
        </h1>
      </header>

      <ChatInput onSubmit={handleQuestionSubmit}/>
      <ChatResponse response={response} loading={loading}/>
    </div>
    </>
  )
}

export default App
