export default function SignupForm() {
  return (
    <div className="w-full">
      <form className="flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-2 w-full">
          <label>Name:</label>
          <input required type="text" className="outline px-4 py-2" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label>Mobile:</label>
          <input required type="text" className="outline px-4 py-2" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label>Email:</label>
          <input required type="email" className="outline px-4 py-2" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label>Password:</label>
          <input required type="password" className="outline px-4 py-2" />
        </div>
        <div className="flex w-full items-center gap-6">
          <label htmlFor="role" className="text-xl ">
            You are?{" "}
          </label>
          <div className="flex gap-2">
            <input title="Looking to borrow books" required type="radio" id="seeker" name="role" value="Seeker" defaultChecked />
            <label title="Looking to borrow books" htmlFor="role" className="text-lg"  >Seeker</label>
          </div>
          <div className="flex gap-2">
            <input title="Willing to lend/borrow books" required type="radio" id="owner" name="role" value="Owner" />
            <label title="Willing to lend/borrow books" htmlFor="role" className="text-lg" >Owner</label>
          </div>
        </div>
        <button className="border outline bg-black text-white hover:bg-white hover:text-black px-4 py-2 mt-4 w-full">
          Signup
        </button>
      </form>
    </div>
  );
}
