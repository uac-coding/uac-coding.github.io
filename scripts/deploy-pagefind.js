const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const ghpages = require("gh-pages");

const PAGEFIND_JS = "out/_pagefind/pagefind.js";

execSync("npm run postbuild", { stdio: "inherit" });

if (!fs.existsSync(PAGEFIND_JS)) {
  throw new Error(
    `Pagefind index was not generated (missing ${PAGEFIND_JS}).`,
  );
}

fs.writeFileSync("out/.nojekyll", "");

ghpages.publish(
  "out",
  {
    dotfiles: true,
    nojekyll: true,
    // An old project .gitignore was committed to gh-pages and ignores
    // _pagefind/, so git add never stages the search index. Remove it
    // from the publish clone before files are added.
    beforeAdd: (git) => {
      const ignorePath = path.join(git.cwd, ".gitignore");
      if (fs.existsSync(ignorePath)) {
        fs.unlinkSync(ignorePath);
      }
    },
  },
  (err) => {
    if (err) {
      console.error("\n❌ Deployment failed:", err);
      process.exit(1);
    }
    console.log("\n✅ Deployment complete!");
  },
);
