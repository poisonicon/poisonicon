// -----------------------------------------------------
// This file is generated by a script. DO NOT CHANGE IT!
// -----------------------------------------------------
import Nullstack from "nullstack";
export default ({width, height, length, title, rotation, animation, speed, class: klass, color = "currentColor"}) => {
  const transform = rotation ? `rotate(${rotation})` : false;
  const duration = {slow: "1.5s", fast: "0.5s"}[speed] || "1.0s";
  return (
    <svg width={width} height={height} transform={transform} class={klass} viewBox="0 0 512 512">
      {title && <title>{title}</title>}
      {animation === "spin" && <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur={duration} additive="sum" repeatCount="indefinite" />}
      <path d="M256.0491,165.8235c-6.0229-62.1643-55.5458-111.6161-113.0353-111.6161-61.5719,0-111.4858,55.5181-111.4858,124.0033,0,38.8968,16.1059,73.6046,41.2994,96.34l-.2914-.001L254.7788,457.7926,436.7424,275.829h-.0008c26.0153-22.7008,42.73-57.9881,42.73-97.6183,0-68.4852-49.9139-124.0033-111.4858-124.0033-57.8133,0-106.3487,48.947-111.9368,111.6161" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <polyline points="10 271.077 129.954 271.077 160.643 160.216 187.204 243.836 241.858 243.836 268.929 323.667 323.583 160.216 354.72 271.035 502 271.035" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
    </svg>
  )
}