const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

(async () => {
    try {
        const root = path.join(__dirname, "..");

        // Read HTML
        const htmlPath = path.join(root, "index.html");
        let html = fs.readFileSync(htmlPath, "utf8");

        // Replace ALL relative image paths with absolute file:// paths
        html = html.replace(/src="([^"]+)"/g, (match, p1) => {
            // Ignore external links
            if (p1.startsWith("http")) return match;

            const absPath = "file://" + path.join(root, p1).replace(/\\/g, "/");
            return `src="${absPath}"`;
        });

        // Save TEMP HTML for Puppeteer
        const tempPath = path.join(root, "storage", "temp_render.html");
        fs.writeFileSync(tempPath, html);

        const pdfDir = path.join(root, "storage", "pdf");
        if (!fs.existsSync(pdfDir)) fs.mkdirSync(pdfDir, { recursive: true });

        const pdfFile = path.join(pdfDir, "resume-oleksandr-stanov.pdf");

        const browser = await puppeteer.launch({
            headless: "new",
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });

        const page = await browser.newPage();
        await page.goto("file://" + tempPath.replace(/\\/g, "/"), {
            waitUntil: "networkidle0"
        });

        await page.pdf({
            path: pdfFile,
            format: "A4",
            printBackground: true,
            margin: { top: 0, right: 0, bottom: 0, left: 0 },
        });

        await browser.close();

        console.log("✅ PDF ready:", pdfFile);

    } catch (err) {
        console.error("❌ Error:", err);
    }
})();
