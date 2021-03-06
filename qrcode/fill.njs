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
        <rect x="64.1662" y="63.5915" width="171.0843" height="171.287" rx="20.4344" fill={color}/>
      <path d="M298.685,63.5915H425.9A21.9339,21.9339,0,0,1,447.834,85.5253V212.9441A21.9344,21.9344,0,0,1,425.9,234.8785H298.685a21.9344,21.9344,0,0,1-21.9344-21.9344V85.5258A21.9344,21.9344,0,0,1,298.685,63.5915Z" fill={color}/>
      <path d="M88.1,276.4616H211.3162A23.9343,23.9343,0,0,1,235.25,300.3959V423.8143a23.9338,23.9338,0,0,1-23.9338,23.9338H88.1a23.9343,23.9343,0,0,1-23.9343-23.9343V300.3954A23.9338,23.9338,0,0,1,88.1,276.4616Z" fill={color}/>
      <path d="M444.0685,432.3063v-58.53a11.6844,11.6844,0,0,0-11.6715-11.6705H380.468V292.4377a17.9545,17.9545,0,0,0-17.934-17.935H292.73a17.9554,17.9554,0,0,0-17.935,17.935v69.92a17.9552,17.9552,0,0,0,17.935,17.934h69.55v52.015a11.6852,11.6852,0,0,0,11.6715,11.6715H432.397A11.6852,11.6852,0,0,0,444.0685,432.3063Zm-19.9994-8.3279H382.2785V382.1047h41.7906Z" transform="translate(0 0)" fill={color}/>
      <path d="M10.0082,136.0374a10,10,0,0,0,10-10V45.5291c0-8.7844,2.2411-15.3453,6.6609-19.5,7.0252-6.6048,17.9648-6.0115,18.0019-6.0076q.3837.0293.768.0293h79.038a10,10,0,1,0,0-19.9994H45.7551c-3.4169-.19-19.9886-.4438-32.5761,11.2116C4.44,19.3546.0085,30.8835.0085,45.5291v80.5086A10,10,0,0,0,10.0082,136.0374Z" transform="translate(0 0)" fill={color}/>
      <path d="M125.8819,491.9928h-80.4c-8.7522,0-15.2925-2.2362-19.4388-6.6462-6.62-7.0418-6.0233-18.0288-6.0218-18.0669q.0293-.3822.0293-.7656V387.37a10,10,0,0,0-19.9994,0v78.8285c-.19,3.4237-.4448,20.0355,11.2277,32.64,8.0837,8.7282,19.5912,13.1539,34.203,13.1539h80.4a10,10,0,0,0,0-19.9994Z" transform="translate(0 0)" fill={color}/>
      <path d="M386.1192,20.0079h80.4c8.7517,0,15.2925,2.2363,19.4388,6.6463,6.62,7.0417,6.0233,18.0282,6.0213,18.0663q-.0292.3824-.0293.7661v79.1439a10,10,0,1,0,19.9994,0V45.802c.1894-3.4232.4453-20.036-11.2272-32.64C492.6382,4.4342,481.1307.0085,466.5189.0085h-80.4a10,10,0,1,0,0,19.9994Z" transform="translate(0 0)" fill={color}/>
      <path d="M501.9924,375.9633a10,10,0,0,0-10,10v80.5082c0,8.7849-2.2411,15.3462-6.6609,19.5013-7.0262,6.6033-17.9721,6.0037-18.0014,6.0067-.2558-.02-.5127-.0293-.7685-.0293H387.5244a10,10,0,1,0,0,19.9993h78.7211c.45.0254,1.1259.0508,1.9911.0508,5.7166,0,19.6527-1.14,30.585-11.2614,8.739-8.0925,13.1705-19.6214,13.1705-34.2674V385.963A10,10,0,0,0,501.9924,375.9633Z" transform="translate(0 0)" fill={color}/>
      </svg>
    )
  }

}

export default Icon;