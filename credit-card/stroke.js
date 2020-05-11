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
      <path d="M502,164.0312V111.504c0-9.9177-7.7259-17.9575-17.2561-17.9575H27.2561c-9.53,0-17.2561,8.04-17.2561,17.9575v52.5272Z" transform="translate(0 0)" fill="none" stroke={color} stroke-miterlimit="10" stroke-width={length || 20}/>
      <path d="M10,240.6873V400.4959c0,9.9177,7.7258,17.9576,17.2561,17.9576H484.7439c9.53,0,17.2561-8.04,17.2561-17.9576V240.6873Z" transform="translate(0 0)" fill="none" stroke={color} stroke-miterlimit="10" stroke-width={length || 20}/>
      <rect x="56.1174" y="337.4355" width="73.1267" height="35.9152" fill="none" stroke={color} stroke-miterlimit="10" stroke-width={length || 20}/>
      <rect x="165.6411" y="337.4355" width="95.4214" height="35.9152" fill="none" stroke={color} stroke-miterlimit="10" stroke-width={length || 20}/>
    </svg>
  )
}