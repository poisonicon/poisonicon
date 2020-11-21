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
      <path d="M79.9776,271.6767l-57.6-8.2342a14.4244,14.4244,0,0,1-12.373-14.639C13.3548,114.8959,120.9539,10,254.9739,10A243.4274,243.4274,0,0,1,381.0547,45.1482L410.7419,15.461a14.428,14.428,0,0,1,24.4645,8.15l20.3825,142.6906a14.4322,14.4322,0,0,1-16.3148,16.3148L296.5835,162.2336a14.43,14.43,0,0,1-8.15-24.4645l28.6167-28.6167a158.6017,158.6017,0,0,0-62.0766-12.668c-88.3543,0-159.7347,72.3451-158.54,160.7225A14.4326,14.4326,0,0,1,79.9776,271.6767Z" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M257.0534,502a244.0034,244.0034,0,0,1-125.9962-34.8244l-30.405,30.3907a14.4294,14.4294,0,0,1-24.4645-8.15L55.8062,346.725A14.4479,14.4479,0,0,1,72.121,330.41l142.6905,20.3969a14.43,14.43,0,0,1,8.15,24.4645l-27.7019,27.7019a158.754,158.754,0,0,0,61.7941,12.5421c87.4271,0,158.5547-71.1276,158.5547-158.5547,0-10.0821,9.0193-16.4541,16.4551-15.5124l57.5572,8.2208a14.4368,14.4368,0,0,1,12.3731,14.71C498.01,397.6249,390.4258,502,257.0534,502Z" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
    </svg>
  )
}