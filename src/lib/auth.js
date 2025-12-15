// Simple authentication for admin
export function authenticate(username, password) {
  const adminUser = process.env.ADMIN_USERNAME;
  const adminPass = process.env.ADMIN_PASSWORD;
  return username === adminUser && password === adminPass;
}