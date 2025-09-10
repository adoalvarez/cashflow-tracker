import Button from "../common/Button";

const LoginPage = () => {
  return (
    <div className="flex flex-col">
      <form>
        <input id="username" />
        <input id="password" />
        <Button>Login</Button>
      </form>
    </div>
  )
}

export default LoginPage;