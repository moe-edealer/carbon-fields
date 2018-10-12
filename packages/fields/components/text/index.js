/**
 * External dependencies.
 */
import { Component } from '@carbon-fields/element';

class TextField extends Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return this.props.children();
	}
}

export default TextField;
