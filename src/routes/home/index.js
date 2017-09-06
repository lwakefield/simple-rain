import { h, Component } from 'preact';
import rain from '../../assets/rain.svg'

import style from './style';

export default class Home extends Component {
	state = { paused: true }

	togglePlay = () => {
		this.audio.paused
			? this.audio.play()
			: this.audio.pause();
		this.setState({ paused: this.audio.paused });
	}

	render() {
		const iconState = this.state.paused ? 'icon-paused' : 'icon-playing'
		return (
			<div class={style.home} onClick={this.togglePlay}>
				<img src={rain} class={style[iconState]} />
				<audio
					ref={c => this.audio = c}
					src={`${process.env.PUBLIC_PATH}assets/0.m4a`}
					loop
				/>
			</div>
		);
	}
}
