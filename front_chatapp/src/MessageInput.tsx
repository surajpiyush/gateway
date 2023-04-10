import { useState } from "react";

export function MessageInput({ send }: { send: (val: string) => void }) {
  const [value, setValue] = useState("");

  return (
    <div>
      <h1>this is piyush kumar</h1>
      <input
        placeholder="Type your message..."
        onChange={(e) =>setValue(e.target.value)}
       
      />
      <button onClick={() => send(value)} color="red">send</button>
    </div>
  );
}
