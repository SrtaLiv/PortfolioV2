import React from "react";
import { Download } from "lucide-react"; // Asegúrate de tener instalada lucide-react

interface DownloadButtonProps {
  fileUrl: string; // URL o ruta del archivo
  fileName: string; // Nombre del archivo al descargar
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ fileUrl, fileName }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 bg-green-secondary text-white px-4 py-2 rounded-md hover:bg-green-500 transition duration-200"
      aria-label="Descargar CV"
    >
      <Download size={20} />
      <span>Curriculum</span>
    </button>
  );
};

export default DownloadButton;
