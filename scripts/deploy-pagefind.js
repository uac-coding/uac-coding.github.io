import fs from "fs";
import { execSync } from "child_process";

const GITIGNORE = ".gitignore";
const IGNORE_LINE = "_pagefind/";

// Step 1: Read the original .gitignore
const original = fs.readFileSync(GITIGNORE, "utf8");

// Step 2: Remove only the line that ignores _pagefind
const modified = original
  .split("\n")
  .filter(line => line.trim() !== IGNORE_LINE)
  .join("\n");

// Step 3: Write the modified .gitignore
fs.writeFileSync(GITIGNORE, modified);

try {
  // Step 4: Run Pagefind to generate the index
  execSync("npm run postbuild", { stdio: "inherit" });

  // Step 5: Disable Jekyll so GitHub Pages serves _next/, _pagefind/, etc.
  fs.writeFileSync("out/.nojekyll", "");

  // Step 6: Publish to gh-pages
  execSync("npx gh-pages -d out --dotfiles", { stdio: "inherit" });

  console.log("\n✅ Deployment complete!");
} catch (err) {
  console.error("\n❌ Deployment failed:", err);
} finally {
  // Step 7: Restore original .gitignore no matter what
  fs.writeFileSync(GITIGNORE, original);
  console.log("✅ .gitignore restored");
}
