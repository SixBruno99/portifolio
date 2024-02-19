import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { PortifolioRoutes } from "./routes/index.tsx";

const rootStyle: React.CSSProperties = {
  fontFamily: "Roboto, sans-serif",
  // Outros estilos globais que você deseja aplicar podem ser adicionados aqui
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <div style={rootStyle}>
        <PortifolioRoutes />
      </div>
    </ChakraProvider>
  </React.StrictMode>
);
