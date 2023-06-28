export function toFixed(num, dec = 4) {
  return +Number(num).toFixed(dec);
}
function converterPpmToMgm3(v, molecularWeight) {
  return toFixed((v * molecularWeight) / 24.05526);
}

export const states = ["good", "attention", "danger", "neutral"];
export const stateIcons = ["smile", "frown-open", "dizzy", "meh"];
export function getStateIcon(name) {
  return stateIcons[states.findIndex((item) => item === name)];
}

export const measurements = {
  pressure: {
    label: "Pressure",
    unit: "psi",
    icon: "soap",
    chartColor: "#2d7ac7",
    colors: ["#fc0202", "#ff9d00", "#60bc2a", "#ff9d00", "#fc0202"],
    range: [0, 5, 10, 25, 100],
    states: ["danger", "attention", "good", "attention", "danger", "neutral"],
    calc: function (v) {
      return toFixed(Number(v));
    },
    info: "Water Pressure",
  },
};

export default function (param) {
  return measurements[param] || measurements["pm10"];
}
