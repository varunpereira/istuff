import {
	state,
	react,
	construct,
	destruct,
	write,
	path,
	page,
	timer,
	req,
	D,
	T,
	B,
	P,
	I,
	V,
} from "~/config/shop"
import {MuteIcon, VolumeIcon} from "~/common/icon"
import {db} from "~/config/db"

export default (props) => {
	var nav = path?.nav()
	var mute = state(true)
	var video
	var playing = state(false)
	var {show_id, ratio} = props
	var show = state()
	const videoBuffer = state([])
	const chunkSize = state((1024 * 1024) / 5) // .2mb

	construct(() => {
		show(db?.get_one_by_id(`shows`, show_id()))
		video.addEventListener("progress", loadVideoChunk)
	})

	// destruct(() => {
	// 	video.removeEventListener("progress", loadVideoChunk)
	// })

	var loadVideoChunk = () => {
		return
	  const bufferedEnd = video.buffered.length > 0 ? video.buffered.end(video.buffered.length - 1) : 0;
	  if (bufferedEnd < video.duration) {
	    const nextChunkStart = bufferedEnd;
	    const nextChunkEnd = Math.min(nextChunkStart + chunkSize(), video.duration);
	    fetch(video.src)
	      .then(response => response.arrayBuffer())
	      .then(buffer => {
	        videoBuffer([...videoBuffer(), buffer]);
	        if (nextChunkEnd < video.duration) {
	          loadVideoChunk();
	        } else {
	          const videoBlob = new Blob(videoBuffer(), { type: "video/mp4" });
	          video.src = URL.createObjectURL(videoBlob);
	          video.load();
	        }
	      })
	      .catch(error => console.error("Error loading video chunk:", error));
	  }
	}

	react(() => {
		if (playing()) {
			video?.play()
		} else video?.pause()
	})

	return (
		<>
			<D
				style={`p_put z=1 pl=0 pt=12 x=15 ts_2 tw_5 v3:x=30 y_full v2:il=1 v3:il=2 v4:il=2.5 v5:il=3`}>
				<P value={show()?.logo_link} />
				<T style={`oy=1`}>{show()?.details}</T>
				<D style={`ax_r`}>
					<B
						click={() => nav(`/watch/${show()?.id}`)}
						style={`c_black opacity-[.7] d=.1 ix=1.5 iy=.4 ix=3`}>
						<T>Play</T>
					</B>
					<B
						style={`ol=.75 c_black opacity-[.7] ix=1.5 d=.1 iy=.4 ix=3`}>
						My List
					</B>
				</D>
			</D>
			<B
				style={`p_put z=1 pr=2.5 pt=30 x=1.75 y=1.75 c_black d=999 opacity-[.7] `}
				click={() => mute(!mute())}>
				{mute() ? <MuteIcon style="shape_c=white" /> : <VolumeIcon style="shape_c=white" />}
			</B>
			{/* <D
				style={"p_put pt=0 bg-gradient-to-b from-[#141414] to-transparent x_full y=4"}
			/> */}
			<video
				src={show()?.snip_link}
				preload="none"
				ref={video}
				playsInline
				autoPlay
				muted={mute()}
				loop
				class={`x_full y=50 ${ratio === `16:9` ? `f_full` : `f_norm`}`}
			/>
			{/* <D
				style={
					"p_put z=0 pt=38 bg-gradient-to-b from-transparent to-[#141414] x_full y=12"
				}
			/> */}
		</>
	)
}
