
const select = (selector) => document.querySelectorAll(selector);
const selectOne = (selector) => document.querySelector(selector);
const getArchitects = () => [select("body a"), select("body span")];
const getClassical = () => [select("a.classical"), select("a:not(.classical)")];
const getActive = () => [select("a.classical.active"), select("a.classical:not(.active)")];
const getBonannoPisano = () => [selectOne("#BonannoPisano"), select("a.classical.active")];
export { getArchitects, getClassical, getActive, getBonannoPisano };
