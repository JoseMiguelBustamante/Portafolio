import {
  siOpenjdk,
  siSpringboot,
  siSpringsecurity,
  siLinux,
  siNodedotjs,
  siExpress,
  siPostgresql,
  siMysql,
  siTypescript,
  siJavascript,
  siDocker,
  siReact,
  siPython,
  siSolana,
  siArduino,
  siMongodb,
  siRedis,
  siGraphql,
  siHtml5,
  siGit,
  siOpenapiinitiative,
  siZod,
  siJsonwebtokens,
  siFlyway,
} from "simple-icons";

// Map the technology labels used across the data modules to their Simple Icons
// brand glyph. Tags without a known brand icon fall back to a neutral dot.
const brands = {
  Java: siOpenjdk,
  "Java 17": siOpenjdk,
  "Spring Boot": siSpringboot,
  "Spring Security": siSpringsecurity,
  Linux: siLinux,
  "Node.js": siNodedotjs,
  Express: siExpress,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  Docker: siDocker,
  React: siReact,
  Python: siPython,
  Solana: siSolana,
  Arduino: siArduino,
  MongoDB: siMongodb,
  Redis: siRedis,
  GraphQL: siGraphql,
  HTML: siHtml5,
  Git: siGit,
  OpenAPI: siOpenapiinitiative,
  Zod: siZod,
  JWT: siJsonwebtokens,
  Flyway: siFlyway,
};

// Near-black brand colors are invisible on the dark UI, so render those in a
// light slate instead of their official hex.
const darkHexes = new Set(["000000", "0a0a0a"]);

export function hasBrandIcon(tag) {
  return Boolean(brands[tag]);
}

export default function BrandIcon({ tag, className = "size-3.5" }) {
  const icon = brands[tag];
  if (!icon) return null;

  const color = darkHexes.has(icon.hex.toLowerCase()) ? "#cbd5e1" : `#${icon.hex}`;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill={color}
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}
