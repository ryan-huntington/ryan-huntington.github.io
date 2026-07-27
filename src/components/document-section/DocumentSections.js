import React from "react";
import "./DocumentSection.css";
import { FaRegFilePdf } from "react-icons/fa6";
import { SiMicrosoftpowerpoint, SiMicrosoftword } from "react-icons/si";
import { LuFileCode2, LuFile } from "react-icons/lu";

function resolveDocumentPath(fileName) {
  return `/assets/documents/${fileName}`;
}

const TYPE_LABELS = {
  pdf: "PDF",
  ppt: "Slides",
  doc: "Document",
  code: "Code",
};

function DocumentSection({ documents }) {
  if (!documents || documents.length === 0) {
    return null;
  }

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FaRegFilePdf />;
      case "ppt":
        return <SiMicrosoftpowerpoint />;
      case "doc":
        return <SiMicrosoftword />;
      case "code":
        return <LuFileCode2 />;
      default:
        return <LuFile />;
    }
  };

  return (
    <div className="document-section">
      <h2>Related documents</h2>
      <ul className="document-grid">
        {documents.map((doc, index) => (
          <li key={index}>
            <a
              className={`document-tile document-tile--${doc.type}`}
              href={resolveDocumentPath(doc.url)}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <span className="document-tile-icon">{getFileIcon(doc.type)}</span>
              <span className="document-tile-text">
                <span className="document-tile-name">{doc.name}</span>
                <span className="document-tile-type">
                  {TYPE_LABELS[doc.type] || "File"}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DocumentSection;
