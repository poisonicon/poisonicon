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
      <path d="M196.99,411.21A38.6717,38.6717,0,1,0,235.66,449.8833,38.6731,38.6731,0,0,0,196.99,411.21Zm0,63.1281" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M91.4867,105.2029l29.8044,200.1228a63.4221,63.4221,0,0,0,62.5314,52.4967h206.88a63.3837,63.3837,0,0,0,60.8852-45.1216l49.8966-198.0235a13.2878,13.2878,0,0,0-1.9046-11.3091,12.8856,12.8856,0,0,0-10.1709-5.0873H90.8042L78.701,23.4468H10m417.3086,281.75" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M376.1805,411.21a38.6717,38.6717,0,1,0,38.67,38.6735,38.6737,38.6737,0,0,0-38.67-38.6735Zm0,63.1281" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
    </svg>
  )
}