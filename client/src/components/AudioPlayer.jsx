import React, { useEffect } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css"; // Include the Plyr CSS

const AudioPlayer = () => {
	useEffect(() => {
		const player = new Plyr(
			"#home-audio-player",
			{
				controls: [
					"play",
					"progress",
					"current-time",
					"mute",
					"volume",
				],
			}
		);

		// Cleanup when the component unmounts
		return () => {
			player.destroy();
		};
	}, []);

	return (
		<div
			tabIndex="0"
			className="plyr plyr--full-ui plyr--audio plyr--html5 plyr--paused mt-11 min-w-[30vw] ">
			<div className="plyr__controls "></div>

			<audio
				playsInline
				id="home-audio-player"
				className="home-audio-player"
				data-cmp-info="9">
				<source src="https://media.voicemap.me/assets/audios/VoiceMap-Trailer-2023-7a2741779301ceb3e0be7a3c97b624449fae5fb71ec53bc3afcf06c5afa16f0a.mp3" />
			</audio>

			<button
				type="button"
				className="plyr__control plyr__control--overlaid "
				data-plyr="play"
				aria-label="Play">
				<svg
					aria-hidden="true"
					focusable="false">
					<use xlinkHref="#plyr-play"></use>
				</svg>
				<span className="plyr__sr-only">
					Play
				</span>
			</button>
		</div>
	);
};

export default AudioPlayer;
