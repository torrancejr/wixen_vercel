import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(true); // Open by default
    const messagesEndRef = useRef(null);

    const sendMessage = async () => {
        if (input.trim() === '') return;

        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);

        try {
            const response = await axios.post('http://localhost:3000/chatbot/respond', { message: input });
            const botMessage = { sender: 'bot', text: response.data.response };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
        }

        setInput('');
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-4 right-4 flex flex-col items-center justify-center">
            <button
                className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 mb-2"
                onClick={toggleChat}
            >
                {isOpen ? 'Close Chat' : 'Open Chat'}
            </button>
            {isOpen && (
                <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg border border-gray-200">
                    <img
                        src="https://wixenco.s3.amazonaws.com/wixen-assist.svg"
                        alt="Wixen Assist"
                        className="mx-auto mb-6 w-60 h-36 border border-purple-500 rounded-lg"
                    />
                    <div className="h-[300px] overflow-y-auto p-2 border-b-2 border-gray-200">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-2 my-2 rounded-lg max-w-[75%] ${
                                    msg.sender === 'user'
                                        ? 'bg-blue-500 text-white self-end ml-auto'
                                        : 'bg-gray-200 text-gray-800 self-start mr-auto'
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef}/>
                    </div>
                    <div className="flex mt-4">
                        <input
                            type="text"
                            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                            placeholder="Have any questions? Ask us here!"
                        />
                        <button
                            className="ml-2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                            onClick={sendMessage}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;


