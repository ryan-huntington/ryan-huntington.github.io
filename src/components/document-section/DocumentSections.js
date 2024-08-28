import React from "react";
import "./DocumentSection.css";
import { FaRegFilePdf } from "react-icons/fa6";
import { SiMicrosoftpowerpoint, SiMicrosoftword } from "react-icons/si";
import { LuFileCode2, LuFile } from "react-icons/lu";

function resolveDocumentPath(fileName) {
  return require(`../../assets/${fileName}`);
}

function DocumentSection({ documents }) {
  console.log(documents);
  if (!documents || documents.length === 0) {
    return null; // Return nothing if no documents are provided
  }

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FaRegFilePdf />; // Example: PDF icon (you can replace with an actual icon or image)
      case "ppt":
        return <SiMicrosoftpowerpoint />; // Example: PowerPoint icon
      case "doc":
        return <SiMicrosoftword />; // Example: Word document icon
      case "code":
        return <LuFileCode2 />;
      default:
        return <LuFile />; // Generic file icon
    }
  };

  return (
    <div className="document-section">
      <h2>Related Documents</h2>
      <ul className="documents-container">
        {documents.map((doc, index) => (
          <li key={index} className="document info">
            <a
              href={resolveDocumentPath(doc.url)}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              {getFileIcon(doc.type)} {doc.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DocumentSection;
