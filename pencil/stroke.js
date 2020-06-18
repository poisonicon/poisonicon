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
      <polygon points="59.2 349.48 162.52 452.8 10 502 59.2 349.48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <rect x="96.2246" y="172.4916" width="339.4767" height="147.5986" transform="translate(-96.2552 260.2011) rotate(-45)" stroke-width={length || 20} stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M494.62,120.7l-22.14,22.14L369.16,39.52,391.3,17.38c9.84-9.84,24.6-9.84,34.44,0l68.88,68.88C504.46,96.1,504.46,110.86,494.62,120.7Z" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
    </svg>
  )
}