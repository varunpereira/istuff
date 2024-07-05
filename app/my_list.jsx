import {
	state,
	react,
	construct,
	destruct,
	write,
	path,
	page,
	req,
	dir,
	num,
	D,
	T,
	B,
	V,
	P,
} from "~/config/shop"
import {db} from "~/config/db"
import {chunk_dir} from "~/config/funcs"

export default () => {
	var nav = path?.nav()
	var shows = state()
	var sel_tape = state()
	var sel_slide = state(false)
	var show_vid = state(false)

	construct(async () => {
		page.title = `My List - Netflix`
		var my_list = db?.get_all(`my_list`)
		var all_shows = db?.get_all(`shows`)
		var my_list = all_shows?.filter((v) => my_list?.show_ids?.includes(v?.id))
		shows(chunk_dir(my_list))
	})

	react(() => {
		if (num.is_int(sel_tape())) {
			var timer = setTimeout(() => {
				show_vid(true)
			}, 2000)
			destruct(() => clearTimeout(timer))
		} else {
			show_vid(false)
		}
	})

	return (
		<>
			<T style={`fit_1 pt-[6rem] ml-[4rem] ts_3`}>My List</T>
			<D style={`fit_1 pt-[2rem] hover:px-0 ay_mid w-full h-full overflow-x-hidden`}>
				{shows()?.map((v, i) => (
					<D
						style={`z_fit z-[${
							i === sel_tape() ? "1" : "0"
						}] w-full h-[14rem] ax_mid sx_mid mt-[-3rem] `}>
						{/* rep piece */}
						{v.map((v2, i2) => (
							<D
								hover_in={() => {
									sel_tape(i)
									sel_slide(i2)
								}}
								hover_out={() => {
									sel_tape(false)
									sel_slide(false)
								}}
								click={() => nav(`/watch/${v2?.id}`)}
								style={`a_norm w-[14rem] h-[7rem] ${i2 && `ml-[.3rem]`} cursor_pointer trans_end
								hover:trans_start hover:w-[28rem] hover:h-[14rem] overflow-hidden`}>
								{sel_slide() === i2 && sel_tape() === i && show_vid() === true ? (
									<>
										<video
											src={v2?.snip_link?.trim() !== "" ? v2?.snip_link : "/shows/def.mp4"}
											playsInline
											autoPlay
											muted
											loop
											class="c_full z-[4] w-[30rem] h-[14rem] z_fit z-[3]"
										/>
										<T style={`ml-[.5rem] mt-[-3rem] z-[5] a_null z_fit z-[4]`}>{v2?.title}</T>
									</>
								) : (
									<P value={v2?.cover_link} style={`w-full h-full`} />
								)}
							</D>
						))}
					</D>
				))}
			</D>
		</>
	)
}