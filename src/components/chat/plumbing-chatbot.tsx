'use client'

import { useState, useRef, useEffect } from 'react'
import { MasterButton } from '../ui/master-button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { ScrollArea } from '../ui/scroll-area'
import { MessageCircle, Send, X, Phone } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const knowledgeBase = {
  greetings: [
    "Hello! I'm your plumbing assistant. How can I help you today?",
    "Hi there! What plumbing issue can I help you with?",
    "Welcome! I'm here to help with your plumbing questions."
  ],
  
  urgent: {
    keywords: ['urgent', 'flooding', 'burst pipe', 'no water', 'sewage backup', 'leak', 'same day'],
    response: "This sounds urgent! Please call us immediately at (360) 883-2506 for same-day service. We prioritize urgent issues and can usually be there within hours. If there's flooding, turn off your main water supply if possible."
  },

  services: {
    'drain cleaning': "We provide professional drain cleaning services for $95. This includes removing clogs, cleaning buildup, and inspecting your drains. Would you like to schedule an appointment?",
    'water heater': "Our water heater services start at $120 and include installation, repair, and maintenance. We work with both traditional and tankless units. What specific issue are you having?",
    'pipe repair': "We offer comprehensive pipe repair and replacement services starting at $110. This covers everything from small leaks to complete repiping. Can you describe the issue you're experiencing?",
    'toilet': "Toilet repairs and installations start at $85. Common issues include running toilets, clogs, leaks, and installation of new fixtures. What problem are you having with your toilet?",
    'faucet': "Faucet services including repairs and installations start at $85. We can fix leaks, replace cartridges, or install new faucets. What's happening with your faucet?"
  },

  pricing: {
    keywords: ['cost', 'price', 'how much', 'estimate'],
    response: "Our service call starts at $89, and we provide upfront pricing before any work begins. For a detailed estimate, you can use our cost calculator or schedule a free estimate. Would you like me to help you with either option?"
  },

  scheduling: {
    keywords: ['appointment', 'schedule', 'book', 'available'],
    response: "I'd be happy to help you schedule an appointment! You can book online through our booking system, or call us at (360) 883-2506. We offer same-day service for urgent issues. What type of service do you need?"
  }
}

export function PlumbingChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)]
      setMessages([{
        id: '1',
        text: greeting,
        sender: 'bot',
        timestamp: new Date()
      }])
    }
  }, [isOpen, messages.length])

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    // Check for urgent/same-day keywords
    if (knowledgeBase.urgent.keywords.some(keyword => message.includes(keyword))) {
      return knowledgeBase.urgent.response
    }

    // Check for pricing questions
    if (knowledgeBase.pricing.keywords.some(keyword => message.includes(keyword))) {
      return knowledgeBase.pricing.response
    }

    // Check for scheduling questions
    if (knowledgeBase.scheduling.keywords.some(keyword => message.includes(keyword))) {
      return knowledgeBase.scheduling.response
    }

    // Check for specific services
    for (const [service, response] of Object.entries(knowledgeBase.services)) {
      if (message.includes(service)) {
        return response
      }
    }

    // Default responses
    const defaultResponses = [
      "I'd be happy to help! Can you provide more details about your plumbing issue?",
      "For specific technical issues, I recommend speaking with one of our licensed plumbers. You can call (360) 883-2506 or schedule an appointment online.",
      "That's a great question! Our experienced team can definitely help with that. Would you like to schedule a consultation?",
      "I understand you're having a plumbing issue. For the best assistance, please call us at (360) 883-2506 or use our online booking system."
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-2xl z-50 bg-brand-red hover:bg-brand-red-dark text-white border-2 border-white transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Open chat assistant"
        style={{
          filter: 'drop-shadow(0 8px 12px rgba(0, 0, 0, 0.25))'
        }}
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    )
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col border-2 border-brand-red/20 overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 bg-brand-red text-white">
        <CardTitle className="text-lg font-heading font-bold">Plumbing Assistant</CardTitle>
        <button
          onClick={() => setIsOpen(false)}
          className="h-8 w-8 p-0 text-white hover:bg-brand-red-dark rounded transition-colors flex items-center justify-center"
          aria-label="Close chat"
        >
          <X className="h-5 w-5" />
        </button>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg break-words ${
                    message.sender === 'user'
                      ? 'bg-brand-red text-white'
                      : 'bg-gray-100 text-gray-900 border border-gray-200'
                  }`}
                >
                  <p className="text-sm leading-relaxed break-words">{message.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
        
        <div className="p-4 border-t">
          <div className="flex space-x-2 mb-3">
            <MasterButton
              variant="outline"
              size="sm"
              className="flex-1 text-gray-700 border-gray-300 hover:bg-brand-red/10 hover:text-brand-red hover:border-brand-red text-xs"
              onClick={() => {
                setInputValue("I need to schedule an appointment")
                setTimeout(() => handleSendMessage(), 100)
              }}
            >
              Book Service
            </MasterButton>
            <MasterButton
              variant="outline"
              size="sm"
              className="flex-1 text-gray-700 border-gray-300 hover:bg-brand-red/10 hover:text-brand-red hover:border-brand-red text-xs"
              onClick={() => {
                setInputValue("I need same day service")
                setTimeout(() => handleSendMessage(), 100)
              }}
            >
              <Phone className="h-3 w-3 mr-1" />
              Same Day
            </MasterButton>
          </div>
          
          <div className="flex space-x-2">
            <Input
              placeholder="Type your question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
              className="flex-1 focus:border-brand-red focus:ring-brand-red"
              autoComplete="off"
            />
            <MasterButton 
              onClick={handleSendMessage} 
              variant="primary" 
              size="sm" 
              className="w-10 h-10 p-0 bg-brand-red hover:bg-brand-red-dark"
              disabled={!inputValue.trim()}
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </MasterButton>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}






