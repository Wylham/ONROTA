// scripts/bv-upscale.mjs
import sharp from "sharp";
import fs from "fs-extra";

const inPng = "public/logos/boa-viagem.png";
const out1x = "public/logos/@1x/boa-viagem@1x.webp"; // 320x160
const out2x = "public/logos/@2x/boa-viagem@2x.webp"; // 640x320

async function run() {
  if (!fs.existsSync(inPng)) {
    console.error(`❌ Arquivo não encontrado: ${inPng}`);
    process.exit(1);
  }

  await fs.ensureDir("public/logos/@1x");
  await fs.ensureDir("public/logos/@2x");

  // @1x 320x160 (contém/transparente, sem “estourar”)
  await sharp(inPng)
    .resize({ width: 320, height: 160, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ lossless: true })
    .toFile(out1x);

  // @2x 640x320 (retina)
  await sharp(inPng)
    .resize({ width: 640, height: 320, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ lossless: true })
    .toFile(out2x);

  console.log("✅ Gerado:");
  console.log(" -", out1x);
  console.log(" -", out2x);
}

run().catch((e) => {
  console.error("Erro ao processar imagem:", e);
  process.exit(1);
});
