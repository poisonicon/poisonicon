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
      <path d="M156.6984,362.8452v6.9665c0,20.0139,22.6821,40.1654,46.0715,40.1654H400.5953L476.2364,454.44l-11.027-44.4625h2.9042c23.3887,0,33.8864-20.1515,33.8864-40.1654v-160.8c0-19.9941-10.4977-34.4941-33.8864-34.4941H454.9273m13.1863,0" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M367.33,57.56H66.8631C40.4331,57.56,10,81.0078,10,103.6905v182.05c0,20.8384,25.7432,35.9469,50.5056,38.2427L44.4163,385.0649l103.0915-60.6308H367.33c26.3714,0,50.8194-16.0893,50.8194-38.6936v-182.05c0-22.6827-24.448-46.13-50.8194-46.13Zm-254.63,153.6767a27.137,27.137,0,1,1,27.1366-27.1366,27.0777,27.0777,0,0,1-27.1366,27.1366Zm101.3262,0a27.137,27.137,0,1,1,27.1373-27.1366,27.1278,27.1278,0,0,1-27.1373,27.1366Zm101.4047,0a27.137,27.137,0,1,1,27.1372-27.1366A27.1278,27.1278,0,0,1,315.43,211.2371Zm0,0" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
    </svg>
  )
}