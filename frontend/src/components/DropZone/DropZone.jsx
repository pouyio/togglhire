import "./DropZone.css";

export const DropZone = ({ children, onDropFiles }) => {
  const handleDrop = (event) => {
    event.preventDefault();
    onDropFiles(Array.from(event.dataTransfer.files));
  };

  const handleDragOver = (event) => event.preventDefault();

  return (
    <div className="drop-zone" onDrop={handleDrop} onDragOver={handleDragOver}>
      {children}
    </div>
  );
};
