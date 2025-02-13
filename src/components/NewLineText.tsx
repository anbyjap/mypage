export const NewlineText = ({ text }: { text: string }) => {
  const paragraphs = text
    .split("\n")
    .filter((paragraph) => paragraph.trim() !== ""); // 空の段落をフィルタリング

  return (
    paragraphs.map((paragraph, index) => (
      <p className="text-font" style={{ textIndent: "2em" }} key={index}>
        {paragraph}
      </p>
    ))
  );
};
