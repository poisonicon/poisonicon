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
      <path d="M415.1283,103.1234v-25C415.1283,35.0467,382.9726,0,343.4489,0H167.5954C128.0717,0,95.916,35.0467,95.916,78.1238v25Z" transform="translate(0 0)" fill={color}/>
      <path d="M428.5084,127.7708H83.4916A71.7612,71.7612,0,0,0,11.8121,199.45V314.1372a71.7613,71.7613,0,0,0,71.68,71.6794H95.916v-76.458H87.3144a14.3359,14.3359,0,0,1,0-28.6718H423.73a14.3359,14.3359,0,0,1,0,28.6718h-8.6015v76.458h13.38a71.7613,71.7613,0,0,0,71.68-71.6794V199.45A71.7612,71.7612,0,0,0,428.5084,127.7708ZM134.7822,213.6847H80.6244a10.4117,10.4117,0,0,1,0-20.8234h54.1578a10.4117,10.4117,0,1,1,0,20.8234Z" transform="translate(0 0)" fill={color}/>
      <path d="M120.4474,308.8429V480.4212c0,17.44,13.13,31.5788,29.3264,31.5788H358.969c16.196,0,29.3264-14.1389,29.3264-31.5788V308.8429ZM295.1023,454.144H213.64a12.3217,12.3217,0,1,1,0-24.6385h81.4623a12.3217,12.3217,0,1,1,0,24.6385Zm0-67.3684H213.64a12.3217,12.3217,0,1,1,0-24.6385h81.4623a12.3217,12.3217,0,1,1,0,24.6385Z" transform="translate(0 0)" fill={color}/>
    </svg>
  )
}