import { login } from "../../../lib/actions";

export default function AdminLogin({ searchParams }) {
  const error = searchParams.error;

  return (
    <main style={{ padding: '20px' }}>
      <h1>Admin Login</h1>
      {error && <p style={{ color: 'red' }}>Invalid credentials</p>}
      <form action={login}>
        <div>
          <label>Username:</label>
          <input name="username" type="text" required />
        </div>
        <div>
          <label>Password:</label>
          <input name="password" type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </main>
  );
}