import fs from "fs";
import readline from "readline";

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf-8");

    const lines = data.split("\n").length;
    const words = data.trim().split(/\s+/).length;
    const characters = data.length;

    console.log("File Statistics");
    console.log("---------------");
    console.log(`Lines: ${lines}`);
    console.log(`Words: ${words}`);
    console.log(`Characters: ${characters}`);
  } catch (err) {
    console.log("Error reading file:", err.message);
  }
}

const file = process.argv[2];

if (file) {
  readFile(file);
} else {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter the file path: ", (filePath) => {
    readFile(filePath);
    rl.close();
  });
}