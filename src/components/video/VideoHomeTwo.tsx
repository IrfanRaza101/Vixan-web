"use client";
import ModalVideo from "@/modal/modalVideo";

const VideoHomeTwo = () => {
	return (
		<>
			<div className="cs_height_100 cs_height_lg_60"></div>
			<div className="cs_parallax">
				<ModalVideo>
					<a
						href="https://www.youtube.com/watch?v=zE_WFiHnSlY"
						className="cs_digital_agency cs_video_block cs_style1 cs_video_open cs_bg cs_parallax_bg"
						style={{
							backgroundImage: `url(/assets/img/video_block_2.jpg)`,
							cursor: "pointer",
						}}
					>
						<span className="cs_player_btn cs_accent_color">
							<span></span>
						</span>
					</a>
				</ModalVideo>
			</div>
		</>
	);
};

export default VideoHomeTwo;
