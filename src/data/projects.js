const github = "https://github.com/JoseMiguelBustamante";

export const projects = [
  {
    title: "Electrónica Central AZ (backend)",
    description:
      "API REST para catálogo, inventario, compras, ventas, pagos, entregas, solicitudes y reportes de un negocio de electrónica. Incluye documentación OpenAPI y Swagger, colección de Postman y reportes en Excel y PDF.",
    tags: ["Node.js", "Express", "PostgreSQL", "OpenAPI", "Zod"],
    repo: `${github}/Electronica_Central_Backend`,
  },
  {
    title: "Foro Hub",
    description:
      "API REST con Java 17 y Spring Boot 3 que replica el back end de un foro, con autenticación JWT, persistencia con JPA, migraciones con Flyway y documentación con Swagger. Challenge de Oracle ONE y Alura LATAM.",
    tags: ["Java 17", "Spring Boot", "Spring Security", "JWT", "MySQL", "Flyway"],
    repo: `${github}/challenge-foro-hub`,
  },
  {
    title: "LiterAlura",
    description:
      "Aplicación de consola con Java 17 y Spring Boot 3 que consume la API Gutendex para buscar libros del Proyecto Gutenberg y guardarlos en PostgreSQL. Permite listar libros y autores, filtrar por idioma y ver el top 10 de descargas.",
    tags: ["Java 17", "Spring Boot", "JPA", "PostgreSQL"],
    repo: `${github}/challenge-literalura`,
  },
  {
    title: "Gestor de garantías en Solana",
    description:
      "Contrato inteligente construido con Anchor para registrar, consultar, transferir y eliminar garantías de equipos de hardware en la blockchain de Solana.",
    tags: ["Solana", "Anchor", "TypeScript"],
    repo: `${github}/GestorDeGarantias`,
  },
  {
    title: "Monitoreo de calidad del aire",
    description:
      "Técnicas de monitoreo de la calidad del aire y sus componentes, con sensores de gas, ESP32 y módulos LoRa, y visualización de datos en Grafana.",
    tags: ["Arduino", "ESP32", "LoRa", "InfluxDB", "Grafana"],
  },
  {
    title: "Seguridad de red para servidores",
    description:
      "Solución de seguridad de red para gestionar y aumentar la efectividad de los servidores, simulada con GNS3 y virtualización, con monitoreo y análisis de vulnerabilidades.",
    tags: ["GNS3", "Zabbix", "Kali Linux", "Nessus"],
  },
  {
    title: "Rediseño de red con SDN",
    description:
      "Rediseño de la red de la empresa DISMAC con redes definidas por software (SDN) para gestionar y optimizar su infraestructura.",
    tags: ["GNS3", "OpenDaylight", "Mininet", "Postman"],
  },
  {
    title: "Conversor de monedas",
    description:
      "Conversor de monedas desarrollado en Java como parte de un challenge de programación.",
    tags: ["Java"],
    repo: `${github}/challenge-conversor-de-monedas`,
  },
  {
    title: "Amigo secreto",
    description:
      "Juego del amigo secreto desarrollado como challenge de lógica de programación de Alura LATAM.",
    tags: [],
    repo: `${github}/challenge-amigo-secreto_esp-main`,
  },
];
