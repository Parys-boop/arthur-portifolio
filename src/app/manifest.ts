import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arthur Pires | Portfólio",
    short_name: "Arthur Pires",
    description:
      "Portfólio profissional de Arthur Pires com foco em desenvolvimento web, interfaces acessíveis e projetos modernos.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#4E2B9B",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
