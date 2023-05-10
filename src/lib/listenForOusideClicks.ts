function listenForOutsideClicks(
  listening: boolean,
  setListening: (arg0: boolean) => void,
  menuRef: any,
  setIsOpen: (arg0: boolean) => void
) {
  return () => {
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
