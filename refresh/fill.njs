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
        <path d="M72.8222,272.314l-59.941-8.569A15.0107,15.0107,0,0,1,.0052,248.511C3.4912,109.16,115.4642,0,254.9322,0a253.3229,253.3229,0,0,1,131.206,36.577l30.894-30.894a15.0145,15.0145,0,0,1,25.459,8.481l21.211,148.491a15.0189,15.0189,0,0,1-16.978,16.978l-148.491-21.211a15.0169,15.0169,0,0,1-8.481-25.459l29.78-29.78A165.048,165.048,0,0,0,254.9322,90c-91.946,0-166.228,75.286-164.985,167.256A15.0193,15.0193,0,0,1,72.8222,272.314Z" transform="translate(0 0)" fill={color}/>
      <path d="M257.0962,512a253.9228,253.9228,0,0,1-131.118-36.24l-31.641,31.626a15.0159,15.0159,0,0,1-25.459-8.481l-21.21-148.492a15.0353,15.0353,0,0,1,16.978-16.978l148.491,21.226a15.0169,15.0169,0,0,1,8.481,25.459L192.79,408.948A165.2067,165.2067,0,0,0,257.0962,422c90.981,0,165-74.019,165-165,0-10.492,9.386-17.123,17.124-16.143l59.897,8.555a15.0236,15.0236,0,0,1,12.876,15.308C507.8482,403.382,395.89,512,257.0962,512Z" transform="translate(0 0)" fill={color}/>
      </svg>
    )
  }

}

export default Icon;