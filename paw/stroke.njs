// -----------------------------------------------------
// This file is generated by a script. DO NOT CHANGE IT!
// -----------------------------------------------------
import Nullstack from "nullstack";

class Icon extends Nullstack {

  render({width, height, length, title, rotation, animation, speed, class: klass, color = "currentColor"}) {
    const transform = rotation ? `rotate(${rotation})` : false;
    const duration = {slow: "1.5s", fast: "0.5s"}[speed] || "1.0s";
    return (
      <svg width={width} height={height} transform={transform} class={klass} viewBox="0 0 512 512">
        {title && <title>{title}</title>}
        {animation === "spin" && <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur={duration} additive="sum" repeatCount="indefinite" />}
        <path d="M256.0264,226.6537c-58.2829,0-162.2335,84.7681-162.2335,189.4886,0,104.5609,72.559,27.093,162.2335,27.093,89.5123,0,162.2335,77.4679,162.2335-27.093,0-104.72-104.072-189.4886-162.2335-189.4886Z" transform="translate(0 0)" fill="none" stroke={color} stroke-miterlimit="10" stroke-width={length || 20}/>
      <path d="M316.7018,194.3288c30.2975,8.0713,64.0421-19.3459,75.2771-61.1618,11.0716-41.9781-4.2987-82.5352-34.5566-90.6078-30.2554-8.07-64,19.3076-75.235,61.1631-11.0728,41.9768,4.2579,82.5352,34.5145,90.6065Z" transform="translate(0 0)" fill="none" stroke={color} stroke-miterlimit="10" stroke-width={length || 20}/>
      <path d="M195.1888,194.3288c30.2567-8.0713,45.79-48.63,34.5553-90.4444-11.235-42.0176-44.9783-69.3953-75.2758-61.3252-30.2566,8.0726-45.7495,48.63-34.5157,90.6078s44.98,69.3953,75.2362,61.1618Z" transform="translate(0 0)" fill="none" stroke={color} stroke-miterlimit="10" stroke-width={length || 20}/>
      <path d="M109.3278,208.4428c-19.3063-33.2978-54.3493-49.1149-78.4-35.1631-24.0914,13.911-27.9049,52.1177-8.72,85.3746,19.1429,33.2582,54.3481,49.1174,78.2365,35.1643,24.0927-13.9518,28.0671-52.1164,8.8833-85.3758Z" transform="translate(0 0)" fill="none" stroke={color} stroke-miterlimit="10" stroke-width={length || 20}/>
      <path d="M481.0036,173.28c-24.0506-13.9518-59.0936,1.7032-78.2366,35.0022-19.1837,33.2569-15.3715,71.5849,8.68,85.5367,24.0915,13.79,59.0924-1.9061,78.2762-35.1643,19.3471-33.2569,15.3727-71.6257-8.72-85.3746Z" transform="translate(0 0)" fill="none" stroke={color} stroke-miterlimit="10" stroke-width={length || 20}/>
      </svg>
    )
  }

}

export default Icon;