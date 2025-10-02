import { useState } from "react";
// import Button from "../common/Button";

const LoginPage = () => {
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  }
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = () => {
    console.log()
  }

  return (
    <div className="w-full h-screen">
      <div className="w-1/3 mx-auto">
        <form>
          <div className="flex flex-col">
            <span>Username:</span>
            <input 
              id="username"
              name="username"
              className="border border-black rounded"
              value={user} 
              onChange={handleUsernameChange} 
              type="text" 
            />
          </div>
          <div className="flex flex-col">
            <span>Password:</span>
            <input
              id="password"
              name="password"
              className="border border-black rounded"
              value={password} 
              onChange={handlePasswordChange} 
              type="password"
            />
          </div>
          <button onClick={handleSubmit} type="submit" className="border-black border rounded block">Login</button>
        </form>
      </div>
      
    </div>
  )
}

export default LoginPage;