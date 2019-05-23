const win = window;
const doc = document;
const defaultView = doc.defaultView;
const rootEl = doc.compactMode === 'CSS1Compact' ? doc.documentElement : doc.body;
let tempDiv = doc.createElement('div');
const supportTouch = 'ontouchstart' in tempDiv;
tempDiv = null;

export {
    win,
    doc,
    defaultView,
    rootEl,
    supportTouch
};