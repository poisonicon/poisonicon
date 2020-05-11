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
      <path d="M10,307.0235V97.0578l87.9856,31.9948s25.9958,9.9984,17.9971,36.9939S73.99,285.0271,73.99,285.0271s-6.9988,21.9964-32.9946,21.9964Z" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M502,329.3014V119.3357l-87.9856,31.9948s-25.9958,9.9984-17.9971,36.994S438.0105,307.305,438.0105,307.305s6.9988,21.9964,32.9946,21.9964Z" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M394.4887,179.0444s-51.69-8.247-81.5382-28.5443-70.9884-7.45-70.9884-7.45-34.9943,8.895-66.989,62.9379,47.8965,48.607,61.4421,18.33c0,0,23.6731-.4546,28.5432-10.28L387.97,320.1558s21.552,19.4258,6.5185,38.8592-32.5462,6.9989-32.5462,6.9989l-65.9892-66.3222" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M357.9432,368.0136s-9.091,26.67-30.995,24.9959l-64.9894-61.7084" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M318.62,385.102s-8.6693,37.9026-42.6637,21.2389l-50.9917-50.3254" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M279.8779,409.1555s-23.9181,17.8484-60.912-9.1472S75.9892,289.9778,75.9892,289.9778" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <line x1="115.9827" y1="166.0465" x2="211.5809" y2="161.1583" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <line x1="438.0105" y1="307.305" x2="399.8172" y2="329.3014" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
    </svg>
  )
}