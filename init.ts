import { spawn } from "child_process";
import fs from "node:fs";
import path from "node:path";


function run(command: string, args: string[], cwd: string) {
  return spawn(command, args, {
    cwd,
    stdio: "inherit",
    shell: true,
  });
}

// frontend validation
const frontendNodeModules = path.join(
  process.cwd(),"app",
  "frontend",
  "node_modules"
);

if (!fs.existsSync(frontendNodeModules)) {
  console.log("Frontend dependencies missing...");
  run("npm", ["install"], "./frontend");
} else {
  console.log("Frontend dependencies OK");
}

//backend validation
const venvPath = path.join(
  process.cwd(),"app",
  "backend_crawler",
  ".venv"
);

if (!fs.existsSync(venvPath)) {
  console.log("Python environment missing...");

  // Create venv
  run("python", ["-m", "venv", ".venv"], "./backend");

  // Install requirements
  run(
    path.join(".venv", "Scripts", "python"),
    ["-m", "pip", "install", "-r", "requirements.txt"],
    "./backend"
  );
} else {
  console.log("Python environment OK");
}