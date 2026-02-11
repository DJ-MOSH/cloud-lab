export default function handler(req, res) {
  res.status(200).json({
    message: "Hello from Omer's first API 🚀",
    role: "Marketing learning Cloud",
    time: new Date().toISOString()
  });
}
