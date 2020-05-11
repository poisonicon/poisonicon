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
      <path d="M283.8193,512H228.1807a27.4138,27.4138,0,0,1-27.3828-27.3828V311.2021H27.3828A27.4138,27.4138,0,0,1,0,283.8193V228.1807a27.4135,27.4135,0,0,1,27.3828-27.3828H200.7979V27.3828A27.4135,27.4135,0,0,1,228.1807,0h55.6386a27.4138,27.4138,0,0,1,27.3828,27.3828V200.7979H484.6172A27.4138,27.4138,0,0,1,512,228.1807v55.6386a27.4142,27.4142,0,0,1-27.3828,27.3828H311.2021V484.6172A27.4142,27.4142,0,0,1,283.8193,512Z" transform="translate(0 0)" fill={color}/>
    </svg>
  )
}