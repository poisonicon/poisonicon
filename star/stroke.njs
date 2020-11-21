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
      <path d="M488.9457,185.96l-151.248-23.1035L269.9014,18.455c-5.0648-10.7855-22.7524-10.7855-27.8173,0L174.3072,162.8561,23.0591,185.96a15.3685,15.3685,0,0,0-8.6677,25.9352L124.2691,324.52,98.293,483.7459a15.3864,15.3864,0,0,0,22.6128,15.9247l135.0966-74.6573L391.099,499.6911a15.3868,15.3868,0,0,0,22.6128-15.9259L387.7357,324.54,497.6134,211.9153a15.3885,15.3885,0,0,0-8.6677-25.9557Zm0,0" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
    </svg>
  )
}