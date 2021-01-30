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
        <path d="M269.4405,0V118.5651c32.2593-.9421,63.1553-5.487,90.94-13.1241a295.0234,295.0234,0,0,0-14.6359-33.91C324.5243,30.0489,297.7613,5.1132,269.4405,0Z" transform="translate(0.9855 0)" fill={color}/>
      <path d="M269.4405,267.1333V369.2226c34.8258.9738,68.24,5.9619,98.3474,14.4083,10.127-35.3264,15.8982-75.0178,16.7758-116.4976Z" transform="translate(0.9855 0)" fill={color}/>
      <path d="M269.4405,140.3673V245.334h115.132c-.8621-42.5368-6.87-83.2028-17.4427-119.2247C337.16,134.4581,303.9625,139.3966,269.4405,140.3673Z" transform="translate(0.9855 0)" fill={color}/>
      <path d="M156.3883,106.304A392.29,392.29,0,0,0,247.6411,118.65V0C219.32,5.1132,192.5578,30.0489,171.3369,71.5314A295.8655,295.8655,0,0,0,156.3883,106.304Z" transform="translate(0.9855 0)" fill={color}/>
      <path d="M149.0445,382.7438c30.2471-8.178,63.7257-12.9017,98.5966-13.6093V267.1333H132.5183C133.3886,308.2674,139.074,347.64,149.0445,382.7438Z" transform="translate(0.9855 0)" fill={color}/>
      <path d="M361.1716,404.3327c-27.9555-7.7536-59.1156-12.3608-91.7311-13.3078V512c28.3208-5.1131,55.0838-30.0484,76.3041-71.5309A297.27,297.27,0,0,0,361.1716,404.3327Z" transform="translate(0.9855 0)" fill={color}/>
      <path d="M247.6411,245.334V140.4547a412.839,412.839,0,0,1-97.9528-13.46C139.2774,162.7964,133.3645,203.147,132.51,245.334Z" transform="translate(0.9855 0)" fill={color}/>
      <path d="M247.6411,512V390.9448a392.0707,392.0707,0,0,0-91.9557,12.7475,297.9028,297.9028,0,0,0,15.6515,36.7768C192.5578,481.9516,219.32,506.8869,247.6411,512Z" transform="translate(0.9855 0)" fill={color}/>
      <path d="M110.7077,245.334c.8657-44.2894,7.1049-86.7931,18.1279-124.6439-25.535-8.6618-48.1687-19.9588-66.5666-33.49A256.1364,256.1364,0,0,0-.9855,245.334Z" transform="translate(0.9855 0)" fill={color}/>
      <path d="M135.5078,100.0161A317.9219,317.9219,0,0,1,151.9293,61.603c11.4088-22.3016,24.5018-40.49,38.7951-54.2005A257.1894,257.1894,0,0,0,77.435,71.2636C93.6007,82.7705,113.3,92.456,135.5078,100.0161Z" transform="translate(0.9855 0)" fill={color}/>
      <path d="M128.207,389.0935c-10.589-37.1583-16.6076-78.6984-17.4906-121.96H-.9855A256.0949,256.0949,0,0,0,60.759,423.5211C79.2847,409.58,102.2317,397.9689,128.207,389.0935Z" transform="translate(0.9855 0)" fill={color}/>
      <path d="M365.1522,61.603a316.8748,316.8748,0,0,1,16.0443,37.3407c20.5292-7.2441,38.8275-16.3321,54.06-27.0053A257.372,257.372,0,0,0,328.3636,9.3793C341.8754,22.8462,354.28,40.3508,365.1522,61.603Z" transform="translate(0.9855 0)" fill={color}/>
      <path d="M387.9165,119.5878c11.225,38.1284,17.5837,81.0242,18.4579,125.7462H512.9855A256.13,256.13,0,0,0,450.38,87.9312C432.9287,100.578,411.7233,111.2355,387.9165,119.5878Z" transform="translate(0.9855 0)" fill={color}/>
      <path d="M406.3656,267.1333c-.8916,43.69-7.0177,85.627-17.8028,123.065,24.2287,8.5619,45.7361,19.5239,63.3257,32.5572a256.0717,256.0717,0,0,0,61.097-155.6222Z" transform="translate(0.9855 0)" fill={color}/>
      <path d="M151.9293,450.397a319.745,319.745,0,0,1-17.1086-40.3643c-22.7769,7.8044-42.901,17.7812-59.0625,29.5338a257.2264,257.2264,0,0,0,115.6691,65.689C176.8612,491.47,163.5242,473.0624,151.9293,450.397Z" transform="translate(0.9855 0)" fill={color}/>
      <path d="M381.9608,410.8857a318.9357,318.9357,0,0,1-16.8086,39.5113C354.1008,472,341.4665,489.7345,327.6944,503.2875a257.418,257.418,0,0,0,109.2744-64.431C421.5869,427.774,402.9539,418.3613,381.9608,410.8857Z" transform="translate(0.9855 0)" fill={color}/>
      </svg>
    )
  }

}

export default Icon;