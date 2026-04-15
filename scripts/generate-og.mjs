import { writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const WIDTH = 1200;
const HEIGHT = 630;

const COLORS = {
  bg: '#0E1816',
  bgGradient: '#172521',
  text: '#F2FBF8',
  muted: '#A8BDB5',
  accent: '#34D399',
  accentDim: '#1F7A63',
  border: '#24382F',
  logoBlock: '#F2F9F7',
  logoBlockText: '#040606',
};

// TTF estáticos desde jsDelivr/Fontsource. Satori no soporta variable fonts.
const FONT_SOURCES = {
  'Inter-300':
    'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-300-normal.ttf',
  'Inter-400':
    'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.ttf',
  'Inter-500':
    'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-500-normal.ttf',
  'Fraunces-300':
    'https://cdn.jsdelivr.net/fontsource/fonts/fraunces@latest/latin-300-normal.ttf',
  'Fraunces-400':
    'https://cdn.jsdelivr.net/fontsource/fonts/fraunces@latest/latin-400-normal.ttf',
};

const fontCache = new Map();

async function loadFont(family, weight, style = 'normal') {
  const key = `${family}-${weight}`;
  const url = FONT_SOURCES[key];
  if (!url) throw new Error(`No font source registered for ${key}`);

  let data = fontCache.get(url);
  if (!data) {
    const res = await fetch(url, { redirect: 'follow' });
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
    data = await res.arrayBuffer();
    fontCache.set(url, data);
  }
  return { name: family, data, weight, style };
}

const variants = [
  {
    file: 'og-default.png',
    title: 'Notas sobre seguridad en\u00A0IA',
    subtitle: 'Un blog sobre los riesgos y fundamentos de los sistemas inteligentes',
  },
];

// Reconstrucción del lockup: "The AI" donde "AI" va dentro de un cuadrado claro,
// y debajo "Theory". Replica la identidad del SVG sin depender de fuentes propietarias.
function logo() {
  return {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '4px',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontFamily: 'Fraunces',
                    fontSize: 52,
                    fontWeight: 300,
                    color: COLORS.text,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  },
                  children: 'The',
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    width: 92,
                    height: 92,
                    backgroundColor: COLORS.logoBlock,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '2px',
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontFamily: 'Fraunces',
                          fontSize: 64,
                          fontWeight: 400,
                          color: COLORS.logoBlockText,
                          lineHeight: 1,
                          letterSpacing: '-0.02em',
                        },
                        children: 'AI',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            style: {
              fontFamily: 'Fraunces',
              fontSize: 64,
              fontWeight: 300,
              color: COLORS.text,
              lineHeight: 1,
              letterSpacing: '-0.02em',
            },
            children: 'Theory',
          },
        },
      ],
    },
  };
}

function template({ title, subtitle }) {
  return {
    type: 'div',
    props: {
      style: {
        width: WIDTH,
        height: HEIGHT,
        display: 'flex',
        padding: '80px',
        backgroundColor: COLORS.bg,
        backgroundImage: `radial-gradient(circle at 92% 18%, ${COLORS.accentDim}40 0%, transparent 50%), linear-gradient(135deg, ${COLORS.bg} 0%, ${COLORS.bgGradient} 100%)`,
        fontFamily: 'Inter',
        color: COLORS.text,
      },
      children: [
        // Columna izquierda: logo aislado, centrado verticalmente
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              paddingRight: '64px',
              borderRight: `1px solid ${COLORS.border}`,
            },
            children: [logo()],
          },
        },
        // Columna derecha: título, subtítulo, footer
        {
          type: 'div',
          props: {
            style: {
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingLeft: '64px',
            },
            children: [
              // Eyebrow
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: COLORS.accent,
                          boxShadow: `0 0 18px ${COLORS.accent}`,
                        },
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontSize: 20,
                          color: COLORS.accent,
                          letterSpacing: '0.22em',
                          fontWeight: 500,
                          textTransform: 'uppercase',
                        },
                        children: 'AI Safety',
                      },
                    },
                  ],
                },
              },
              // Título + subtítulo
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontFamily: 'Fraunces',
                          fontSize: 60,
                          fontWeight: 300,
                          lineHeight: 1.1,
                          letterSpacing: '-0.03em',
                          color: COLORS.text,
                        },
                        children: title,
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontSize: 24,
                          fontWeight: 300,
                          lineHeight: 1.4,
                          color: COLORS.muted,
                          letterSpacing: '0.01em',
                        },
                        children: subtitle,
                      },
                    },
                  ],
                },
              },
              // Footer URL
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: 20,
                    color: COLORS.muted,
                    letterSpacing: '0.02em',
                  },
                  children: 'theaitheory.com',
                },
              },
            ],
          },
        },
      ],
    },
  };
}

async function main() {
  console.log('Loading fonts…');
  const fonts = await Promise.all([
    loadFont('Inter', 300),
    loadFont('Inter', 400),
    loadFont('Inter', 500),
    loadFont('Fraunces', 300),
    loadFont('Fraunces', 400),
  ]);

  const outDir = resolve(root, 'public');
  if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

  for (const variant of variants) {
    console.log(`Rendering ${variant.file}…`);
    const svg = await satori(template(variant), {
      width: WIDTH,
      height: HEIGHT,
      fonts,
    });
    const png = new Resvg(svg, {
      fitTo: { mode: 'width', value: WIDTH },
    })
      .render()
      .asPng();
    const outPath = resolve(outDir, variant.file);
    await writeFile(outPath, png);
    const sizeKb = (png.length / 1024).toFixed(1);
    console.log(`  → ${outPath} (${sizeKb} KB)`);
  }

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
