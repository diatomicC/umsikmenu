import { useEffect } from "react";

export function CategoryCapsule({ catText, selectCategory }) {
  return (
    <button
      className="CategoryCapsule"
      onClick={() => {
        selectCategory(catText.content);
      }}
    >
      {catText}
    </button>
  );
}
