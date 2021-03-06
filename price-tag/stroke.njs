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
        <path d="M297.09,166.7687a25.6942,25.6942,0,0,0-8.6975-19.22l-.792-1.75-97.1679-110.21A25.7569,25.7569,0,0,0,148.04,38.1975L49.9139,147.8825l-.8683,2.019a25.6466,25.6466,0,0,0-6.2465,14.5238l-.1165.271V436.3181A65.6819,65.6819,0,0,0,108.3645,502c.7017,0,1.3959-.0311,2.0923-.0529l.0546.0529h118.08l.0547-.0529c.6963.0218,1.3905.0529,2.0922.0529a65.6819,65.6819,0,0,0,65.6819-65.6819l1.184-268.413Z" transform="translate(0 0)" fill="none" stroke={color} stroke-miterlimit="10" stroke-width={length || 20}/>
      <path d="M169.0818,111.9321a33.9,33.9,0,1,1-32.8569,25.407" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M213.613,53.3394c7.2217-5.5968,16.18-13.0393,24.66-17.9351,53.5989-30.9453,111.2554-34.3269,127.47-6.2431S351.65,105.0976,298.0513,136.0429s-110.1936,33.2651-126.4078,5.1813c-3.534-6.1212-3.7962-18.49-3.1507-26.11" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M198.04,316.6865s-1.03-22.658-20.3407-27.0351c-21.0287-4.7666-29.095,12.1014-29.095,12.1014s-11.0878,18.0414,4.6184,32.46c0,0,5.953,7.3986,18.2,7.3986,12.4563,0,18.3783,7.5172,18.3783,7.5172s10.5566,9.7842,6.1795,26.0053c0,0-1.8024,11.0715-15.7061,16.221s-23.173-1.5085-23.173-1.5085c-15.1912-8.7906-12.2964-23.2093-12.2964-23.2093" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <line x1="170.2321" y1="285.5317" x2="170.2321" y2="272.6578" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <line x1="170.2321" y1="394.9597" x2="170.2321" y2="410.1724" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <line x1="147.7694" y1="222.3507" x2="194.8543" y2="222.3507" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <line x1="147.7694" y1="459.1319" x2="194.8543" y2="459.1319" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <line x1="341.1151" y1="288.8027" x2="370.1126" y2="272.6578" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <line x1="332.6199" y1="343.8768" x2="392.8736" y2="308.8247" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <line x1="344.2997" y1="393.7814" x2="415.1714" y2="351.2967" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M272.6422,75.8177l29.527,9.6117s20.4227,2.7873,46.6062,53.1211L461.5747,335.9548s27.042,49.7464-19.9483,81.7627L323.1793,486.73" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      </svg>
    )
  }

}

export default Icon;