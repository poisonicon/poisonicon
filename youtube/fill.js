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
      <path d="M434.7579,77.2744H77.2421A77.2421,77.2421,0,0,0,0,154.5165v202.967a77.2421,77.2421,0,0,0,77.2421,77.2421H434.7579A77.2421,77.2421,0,0,0,512,357.4835V154.5165A77.2421,77.2421,0,0,0,434.7579,77.2744ZM346.9208,264.8787,217.78,344.6632a10.4334,10.4334,0,0,1-15.9186-8.8768V173.908c2.5378-7.8289,10.425-9.9637,15.9186-6.5707l129.14,79.7887a10.4316,10.4316,0,0,1,0,17.7527Z" transform="translate(0 0)" fill={color}/>
    </svg>
  )
}