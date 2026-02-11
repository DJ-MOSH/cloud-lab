export default function handler(req, res) {
  const idea = req.query.idea || "something amazing";

  const hooks = [
    `Stop satisfying — start ${idea.toUpperCase()}!`,
    `${idea}? That's not a dream. That's a PLAN.`,
    `The world doesn't need another excuse. It needs ${idea}.`,
    `One word: ${idea}. Mic drop.`
  ];

  const catchyHook = hooks[Math.floor(Math.random() * hooks.length)];

  res.status(200).json({
    originalIdea: idea,
    catchyHook
  });
}
