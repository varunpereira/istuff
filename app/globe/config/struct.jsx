import logo from "~/globe/asset/logo_tab.png"
import nav from "~/globe/config/nav"
import footer from "~/globe/config/footer"
import def from "~/globe/config/def"
import home from "~/home/home"
// import sign_in from "~/login/sign_in"
// import sign_up from "~/login/sign_up"
// import chat from "~/chat/chat"
// import search from "~/search/result"
// import prod from "~/prod/long"
// import cart from "~/cart/cart"
// import paid from "~/cart/paid"

export default () => {
	return {
		page: () => [
			["*", def],
			["/", home],
			// ["/signin", sign_in],
			// ["/signup", sign_up],
			// ["/chat", chat],
			// ["/search/:theme/:term?/:page", search],
			// ["/prod/:_id", prod],
			// ["/cart", cart],
			// ["/cart/paid", paid],
		],
		title: () => "Netflix",
		color: () => "c_black",
		logo,
		nav,
		footer,
		style: () => "c_black tc_white ts_2 tf_1 min-w-[320px]",
	}
}