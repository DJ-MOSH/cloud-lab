export default function handler(req, res) {
  if (req.method === "POST") {
    const { event, payload } = req.body || {};

    res.status(200).json({
      received: true,
      event: event || null,
      payload: payload || null,
      time: new Date().toISOString()
    });
  } else if (req.method === "GET") {
    res.status(200).json({
      status: "ok",
      message: "Hook endpoint is active",
      time: new Date().toISOString()
    });
  } else {
    res.status(405).json({
      error: "Method not allowed"
    });
  }
}
