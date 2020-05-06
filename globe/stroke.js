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
      <circle cx="256" cy="256" r="246" fill="none" stroke={color} stroke-miterlimit="10" stroke-width={length || 20}/>
      <path d="M437.0322,422.545c-37.8083-31.887-104.408-53.058-180.2668-53.058-76.4345,0-143.465,21.495-181.1186,53.7873" transform="translate(0 0)" fill="none" stroke={color} stroke-miterlimit="10" stroke-width={length || 20}/>
      <path d="M77.0141,87.2566c37.8977,31.6422,104.241,52.6167,179.7513,52.6167,74.9415,0,140.8449-20.663,178.8813-51.9068" transform="translate(0 0)" fill="none" stroke={color} stroke-miterlimit="10" stroke-width={length || 20}/>
      <ellipse cx="258.3311" cy="255.7857" rx="125.7359" ry="245.7857" fill="none" stroke={color} stroke-miterlimit="10" stroke-width={length || 20}/>
      <line x1="10" y1="256" x2="502" y2="256" fill="none" stroke={color} stroke-miterlimit="10" stroke-width={length || 20}/>
      <line x1="258.3311" y1="10" x2="258.3311" y2="501.5714" fill="none" stroke={color} stroke-miterlimit="10" stroke-width={length || 20}/>
    </svg>
  )
}