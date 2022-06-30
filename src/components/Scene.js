import React from 'react';
import ViewGL from './ViewGL';

export default class Scene extends React.Component {

	constructor(props) {
		super(props);
		this.canvas = React.createRef();
	}

	componentDidMount() {
		// Get canvas, pass to custom class
		const canvas = this.canvas.current;
		this.viewGL = new ViewGL(canvas);
		// Init any event listeners
		window.addEventListener('mousemove', this.mouseMove);
		window.addEventListener('resize', this.handleResize);
		window.addEventListener('resize', this.handleResize)
	}

	componentDidUpdate(prevProps, prevState) {
		// Pass updated props to 
		const newValue = this.props.whateverProperty;
		this.viewGL.updateValue(newValue);
	}

	componentWillUnmount() {
		// Remove any event listeners
		window.removeEventListener('mousemove', this.mouseMove);
		window.removeEventListener('resize', this.handleResize);
	}

	// ******************* EVENT LISTENERS ******************* //
	mouseMove = (event) => {
		this.viewGL.onMouseMove();
	}

	handleResize = () => {
		this.viewGL.onResize();
	};

	render() {
		return (
			<div className="canvasContainer">
				<canvas ref={this.canvas} />
			</div>
		);
	}
}

