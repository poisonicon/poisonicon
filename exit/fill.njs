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
        <path d="M504.1856,202.7652l-93.648-84.3035a23.6357,23.6357,0,1,0-31.6916,35.0747l48.0568,43.2616H281.71a23.6162,23.6162,0,1,0,0,47.2324H427.2243L378.7369,288.23a23.6358,23.6358,0,0,0,31.91,34.8764l93.6479-85.3649a23.5861,23.5861,0,0,0-.109-34.976Z" transform="translate(0 0)" fill={color}/>
      <path d="M342.5064,302.9779a23.66,23.66,0,0,0-47.32,0v81.8072a10.5872,10.5872,0,0,0,.0472,1.61c.0166,2.0877-.6239,6.846-2.7856,9.0812-2.3217,2.4013-7.7238,2.76-10.7377,2.76H226.336V104.4041c0-30.5734-20.3389-48.739-37.145-57.1716H281.71c3.0139,0,8.416.3584,10.7377,2.76,2.1617,2.2357,2.8022,6.993,2.7856,9.0816a10.5908,10.5908,0,0,0-.0472,1.61v75.143a23.66,23.66,0,0,0,47.32,0V61.2472c.2246-5.74-.085-26.9073-15.2636-43.2675C319.6328,9.7772,305.5559,0,281.71,0H59.8444C38.2869,0,20.4009,9.7177,9.4816,27.3635A67.2628,67.2628,0,0,0,.1622,53.1716,23.5483,23.5483,0,0,0,0,55.9313V417.1006c0,34.0313,26.7239,50.6263,41.5166,54.91l118.554,38.8137A23.6893,23.6893,0,0,0,167.4445,512c23.2867,0,42.2361-11.167,51.99-30.6375a66.9732,66.9732,0,0,0,6.9016-28.1448v-7.7491H281.71c23.8459,0,37.9228-9.7776,45.5328-17.98,15.1786-16.3607,15.4882-37.5267,15.2636-43.2675Zm-163.4906,150.24s-.0028-.08,0-.2334Z" transform="translate(0 0)" fill={color}/>
      </svg>
    )
  }

}

export default Icon;