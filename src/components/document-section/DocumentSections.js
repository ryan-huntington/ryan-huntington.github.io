import React from "react";
import "./DocumentSection.css";
import { FaRegFilePdf } from "react-icons/fa6";
import { SiMicrosoftpowerpoint, SiMicrosoftword } from "react-icons/si";
import { LuFileCode2, LuFile } from "react-icons/lu";

function resolveDocumentPath(fileName) {
  return `/assets/documents/${fileName}`;
}

function DocumentSection({ documents }) {
  console.log(documents);
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
      <h2>Related Documents</h2>
      <ul className="document-container">
        {documents.map((doc, index) => (
          <span key={index}>
            <li className="document-info">
              <a
                href={resolveDocumentPath(doc.url)}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                {getFileIcon(doc.type)} {doc.name}
              </a>
            </li>
            {index < documents.length - 1 && <hr />}
          </span>
        ))}
      </ul>
    </div>
  );
}

export default DocumentSection;
