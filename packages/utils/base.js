const win = window;
const doc = document;
const defaultView = doc.defaultView;
const rootEl = doc.compactMode === 'CSS1Compact' ? doc.documentElement : doc.body;

export {
    win,
    doc,
    defaultView,
    rootEl
};