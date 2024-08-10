import { useEffect } from "react";

export function CategoryCapsule(catText) {
  useEffect(() => {
    // todo
    console.log("content: ", catText.content);
  }, catText);

  const selectCategory = (selected) => {
    // clear selection
    const allCat = document.querySelectorAll(".Selected");
    var clearCategory = false;
    allCat.forEach((cat) => {
      if (cat.innerText === selected) {
        clearCategory = true;
      }
      cat.classList.remove("Selected");
    });

    // enable the selected category
    if (!clearCategory) {
      const allCapsule = document.querySelectorAll(".CategoryCapsule");
      for (let i = 0; i < allCapsule.length; i++) {
        if (allCapsule[i].innerText === selected) {
          allCapsule[i].classList.add("Selected");
          break;
        }
      }
    }
    
    // todo
    // filter selected items
  };

  return (
    <button
      className="CategoryCapsule"
      onClick={() => {
        selectCategory(catText.content);
      }}
    >
      {catText.content}
    </button>
  );
}
