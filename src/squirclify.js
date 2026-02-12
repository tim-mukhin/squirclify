const maskContainerId = "squircle-masks-container";
const createMaskContainer = () => {
    const el = document.getElementById(maskContainerId);

    if (el) {
        return el;
    }

    const tmpl = `<svg height="0" width="0" xmlns="http://www.w3.org/2000/svg"><defs id=${maskContainerId}></defs></svg>`;
    document.body.insertAdjacentHTML("beforeend", tmpl);

    return document.getElementById(maskContainerId);
};

const createMask = (width, height, radius) => {
    const m = 0.25;
    const mr = 0.35;
    const safeRadius = Math.min(
        Math.max(radius, 0),
        Math.min(width, height) / (2 * (1 + mr))
    );
    const roundedSafeRadius = Math.round(safeRadius * 1000) / 1000;
    const maskId = `squircle-mask-${width}-${height}-${roundedSafeRadius}`;
    const el = document.getElementById(maskId);

    if (el) {
        return maskId;
    }

    const indent = safeRadius * (1 + mr);
    const indentW = Math.min(indent / width, 0.5);
    const indentH = Math.min(indent / height, 0.5);

    const tmpl = `<clipPath  id=${maskId}  clipPathUnits="objectBoundingBox"><path fill="#000" stroke="#ccc" d="
    M ${indentW},0
    L ${1 - indentW},0
    C ${1 - indentW * m},0 1,${indentH * m} 1,${indentH}
    L 1,${1 - indentH}
    C 1,${1 - indentH * m} ${1 - indentW * m},1 ${1 - indentW},1
    L ${indentW},1
    C ${indentW * m},1 0,${1 - indentH * m} 0,${1 - indentH}
    L 0, ${indentH}
    C 0,${indentH * m} ${indentW * m},0  ${indentW},0
    "/></clipPath>`;
    createMaskContainer().insertAdjacentHTML("beforeend", tmpl);

    return maskId;
};

export const squirclify = (el) => {
    if (!el) return;

    const r = parseInt(
        window.getComputedStyle(el).getPropertyValue("border-radius"),
        10
    );
    const radius = Number.isFinite(r) && r > 0 ? r : 0;

    const { clientWidth: w, clientHeight: h } = el;
    if (!w || !h) return;

    const maskId = createMask(w, h, radius);
    el.style.clipPath = `url(#${maskId})`;
    el.style.WebkitClipPath = `url(#${maskId})`;
};
