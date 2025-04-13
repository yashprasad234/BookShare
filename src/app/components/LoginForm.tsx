export default function LoginForm() {
  return (
    <div className="w-full">
      <form className="flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-2 w-full">
          <label>Name:</label>
          <input required type="text" className="outline px-4 py-2" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label>Password:</label>
          <input required type="password" className="outline px-4 py-2" />
        </div>
        <button className="border outline bg-black text-white hover:bg-white hover:text-black px-4 py-2 mt-4 w-full">
          Login
        </button>
      </form>
    </div>
  );
}
