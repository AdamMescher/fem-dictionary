function listenForOutsideClicks(
  listening: any,
  setListening: any,
  menuRef: any,
  setIsOpen: any
) {
  return () => {
    console.log({ listening, setListening, menuRef, setIsOpen });
    if (listening) return;
    if (!menuRef.current) return;
    setListening(true);
    [`click`, `touchstart`].forEach((type) => {
      document.addEventListener(`click`, (evt) => {
        if (menuRef?.current?.contains(evt?.target)) return;
        setIsOpen(false);
      });
    });
  };
}

export default listenForOutsideClicks;
