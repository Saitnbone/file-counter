import path from "node:path";
import fs from "node:fs/promises";

const inputCLI = process.argv[2];
const formatValue = inputCLI ? path.resolve(inputCLI) : process.cwd();

function formatedText(content) {
  const fileName = path.basename(content);
  const lines = content.split("\n").length;
  const words = content.trim().split(/\s+/).length;
  const characters = content.length;

  console.log(`File: ${fileName}`);
  console.log(`Lines: ${lines}`);
  console.log(`Words: ${words}`);
  console.log(`Characters: ${characters}`);
}

async function readFileData() {
  try {
    const content = await fs.readFile(formatValue, "utf8");
    formatedText(content);
  } catch (error) {
    console.error("error: could not read file:", error);
    process.exit(1);
  }
}

readFileData();
