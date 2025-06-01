export const isValidInput = (e, compareWith) => {
    const allowedKeys = [
        "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter"
      ];

      const currentValue = e.target.value;
      console.log(currentValue);
      // Allow navigation and control keys
      if (allowedKeys.includes(e.key)) return;

      if (currentValue >= compareWith) {
        e.preventDefault();
      }
}