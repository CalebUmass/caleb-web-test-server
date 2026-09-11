import { Router } from "express";

const router = Router();
const projects = [
  { name: "Weather app", tag: "javascript" },
  { name: "Portfolio site", tag: "express" },
  { name: "Budget tracker", tag: "python" },
  { name: "Eddy", tag: "AlgGay" },
  { name: "Caleb", tag: "Lemur" },
];

router.get("/", (req, res) => {
  res.send("Home page");
});

router.get("/about", (req, res) => {
  res.send("About page");
});

router.get("/projects", (req, res) => {
  const tag = req.query.tag;
  const name = req.query.name;

  const tagmatches = projects.filter((t) => t.tag === tag);
  const namematches = projects.filter((n) => n.name === name);

  const match = projects.filter((t, n) => t.tag === tag && n.name === name);

  if (!tag || !name) {
    return res.json(projects);
  }
  if (!tag) {
    res.json(namematches);
  }
  if (!name) {
    res.json(tagmatches);
  }
  res.json(match);
});

export default router;
