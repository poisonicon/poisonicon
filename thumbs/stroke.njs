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
        <path d="M471.4246,218.7165h-114.37A46.73,46.73,0,0,1,317.6223,197.27a47.7943,47.7943,0,0,1-3.28-45.8182,176.1326,176.1326,0,0,0,15.44-64.9368c0-46.43-15.9007-72.8791-45.9687-76.4452a6.9918,6.9918,0,0,0-1.2-.0694,9.4636,9.4636,0,0,0-6.3281,2.408,9.3131,9.3131,0,0,0-3.1575,7.0613V67.6275c0,35.198-39.1979,90.1226-72.09,130.0109a56.6521,56.6521,0,0,0-12.8983,35.9874V435.899A66.18,66.18,0,0,0,254.2421,502H405.3237a28.3306,28.3306,0,0,0,0-56.6611H367.557a9.4435,9.4435,0,1,1,0-18.887h66.0936a28.3269,28.3269,0,1,0,0-56.6538H405.3237a9.4436,9.4436,0,0,1,0-18.8871h47.2138a28.3269,28.3269,0,1,0,0-56.6537H414.7709a9.4435,9.4435,0,1,1,0-18.887h56.6537a28.3269,28.3269,0,1,0,0-56.6538Z" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M135.0479,218.7165H40.62a28.3228,28.3228,0,0,0-28.3268,28.3268c0,.2987-.0176.5931-.0448.8846.0272.2915.0448.5859.0448.8845V473.6658A28.329,28.329,0,0,0,40.62,502h94.4279a28.329,28.329,0,0,0,28.3268-28.3342V247.0433A28.3228,28.3228,0,0,0,135.0479,218.7165Z" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M87.834,467.2112a28.3306,28.3306,0,1,1,28.3268-28.3269A28.3275,28.3275,0,0,1,87.834,467.2112Z" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      </svg>
    )
  }

}

export default Icon;