export const parseFile = async (file) => {
  return new Promise((resolve, reject) => {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      const lines = fileReader.result.trim().split("\n");
      resolve(lines);
    };
    fileReader.onerror = reject;
    fileReader.readAsText(file);
  });
};
