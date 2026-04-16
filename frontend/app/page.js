


const [reply, setReply] = useState("")

const sendMessage = async () => {

    const res = await fetch("http://localhost:8000/api/chat", {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
    })

    const data  = await res.json()
    setReplay(data.reply)

}

return (
    <div>
        <h1>AI Tutor</h1>
        <input value={message} onChange={(e)=>setMessage(e.target.value)}/>
        
    </div>
)