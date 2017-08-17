import { h, Component } from 'preact';
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
		const actionText = this.state.paused
			? 'Play'
			: 'Pause';
		return (
			<div class={style.home} onClick={this.togglePlay}>
				<div>{actionText}</div>
				<audio
					ref={c => this.audio = c}
					src="/assets/0.m4a"
					loop
				/>
			</div>
		);
	}
}
