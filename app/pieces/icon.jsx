export var MenuIcon = (props) => (
	<svg class={props?.style} viewBox="0 0 24 24" x="0" y="0">
		<path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
	</svg>
)

export var BellIcon = (props) => (
	<svg viewBox="0 0 100 100" x="0" y="0" class={props?.style}>
		<path d="M61.7,69.5H81.2L75.7,64a8.3,8.3,0,0,1-2.3-5.6V46.1A23.4,23.4,0,0,0,57.8,24V22.7a7.8,7.8,0,1,0-15.6,0V24A23.4,23.4,0,0,0,26.6,46.1V58.4A8.3,8.3,0,0,1,24.3,64l-5.5,5.5H38.3m23.4,0v3.9a11.7,11.7,0,0,1-23.4,0V69.5m23.4,0H38.3" />
	</svg>
)

export var SearchIcon = (props) => (
	<svg class={props?.style} viewBox="0 0 100 100" x="0" y="0">
		<path d="M40.6,21.9A18.8,18.8,0,1,0,59.4,40.6,18.7,18.7,0,0,0,40.6,21.9Zm-28,18.7A28.1,28.1,0,1,1,63.5,56.9L86.1,79.4a4.7,4.7,0,0,1-6.7,6.7L56.9,63.5A28,28,0,0,1,12.6,40.6Z"></path>
	</svg>
)

export var ChevronRightIcon = (props) => (
	<svg class={props?.style} viewbox="0 0 100 100" x="0" y="0">
		<path d="M27.7,13.4,64.3,50,27.7,86.6" stroke-linecap="round" stroke-linejoin="round"></path>
	</svg>
)

export var DownTriangleIcon = (props) => (
	<svg class={props?.style} viewbox="0 0 100 100" x="0" y="0">
		<polygon points="0 0 50 100 100 0 0 0"></polygon>
	</svg>
)

export var CrossIcon = (props) => (
	<svg class={props?.style} viewbox="0 0 100 100" x="0" y="0">
		<path
			d="M13.7,86.3,86.3,13.7m-72.6,0L86.3,86.3"
			stroke-linecap="round"
			stroke-linejoin="round"></path>
	</svg>
)

export var PlayIcon = (props) => (
	<svg class={props?.style} viewBox="0 0 512 512">
		<path d="M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z" />
	</svg>
)

export var PauseIcon = (props) => (
	<svg class={props?.style} viewBox="0 0 512 512">
		<g>
			<path d="M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6   C218.6,448,224,442.6,224,435.8z" />
			<path d="M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1   C384,69.4,378.6,64,371.8,64z" />
		</g>
	</svg>
)

export var VolumeIcon = (props) => (
	<svg class={props?.style} viewbox="0 0 100 100" x="0" y="0">
		<path d="M47.8,25.8a3.6,3.6,0,0,0-3.8.8L31.1,39.5H22A3.5,3.5,0,0,0,18.5,43V57A3.5,3.5,0,0,0,22,60.5h9.1L44,73.4a3.6,3.6,0,0,0,3.8.8A3.5,3.5,0,0,0,50,71V29A3.5,3.5,0,0,0,47.8,25.8Z"></path>
		<path d="M65.7,41.6a18.8,18.8,0,0,0-4.4-6.4,3.5,3.5,0,0,0-4.9,4.9,14.2,14.2,0,0,1,2.9,4.3A13.1,13.1,0,0,1,60.5,50a14,14,0,0,1-4.1,9.9,3.5,3.5,0,0,0,4.9,4.9A20.9,20.9,0,0,0,67.5,50,19.8,19.8,0,0,0,65.7,41.6Z"></path>
		<path d="M71.2,25.3a3.5,3.5,0,0,0-4.9,4.9,28,28,0,0,1,0,39.6,3.5,3.5,0,0,0,4.9,4.9,34.8,34.8,0,0,0,0-49.4Z"></path>
	</svg>
)

export var MuteIcon = (props) => (
	<svg class={props?.style} viewbox="0 0 100 100" x="0" y="0">
		<path
			d="M49.6,24.1a4.1,4.1,0,0,0-4.1.8L31.6,38.8H22a3.8,3.8,0,0,0-3.8,3.7v15A3.8,3.8,0,0,0,22,61.2h9.6L45.5,75.1a4.1,4.1,0,0,0,4.1.8,3.8,3.8,0,0,0,2.3-3.5V27.6A3.8,3.8,0,0,0,49.6,24.1Z"
			fill-rule="evenodd"></path>
		<path
			d="M75.8,50l4.9-4.8a3.9,3.9,0,0,0,0-5.3,3.7,3.7,0,0,0-5.3,0l-4.9,4.8-4.8-4.8a3.7,3.7,0,0,0-5.3,0,3.9,3.9,0,0,0,0,5.3L65.3,50l-4.9,4.8a3.9,3.9,0,0,0,0,5.3,3.7,3.7,0,0,0,5.3,0l4.8-4.8,4.9,4.8a3.7,3.7,0,0,0,5.3,0,3.9,3.9,0,0,0,0-5.3Z"
			fill-rule="evenodd"></path>
	</svg>
)

export var HelpIcon = (props) => (
	<svg class={props?.style} viewbox="0 0 100 100" x="0" y="0">
		<path
			d="M82,50A32,32,0,1,1,50,18,32,32,0,0,1,82,50ZM50,38a4,4,0,0,0-3.5,2,4,4,0,0,1-5.4,1.5A4,4,0,0,1,39.6,36,12,12,0,0,1,62,42a11.9,11.9,0,0,1-8,11.3V54a4,4,0,0,1-8,0V50a4,4,0,0,1,4-4,4,4,0,0,0,0-8Zm0,32a4,4,0,1,0-4-4A4,4,0,0,0,50,70Z"
			fill-rule="evenodd"></path>
	</svg>
)

export var ArrowLeftIcon = (props) => (
	<svg class={props?.style} viewbox="0 0 100 100" x="0" y="0">
		<path
			d="M43.3,73.5,19.8,50m0,0L43.3,26.5M19.8,50H80.2"
			stroke-linecap="round"
			stroke-linejoin="round"></path>
	</svg>
)
