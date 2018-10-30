/* Remove when https://github.com/babel/babel-eslint/issues/530 is fixed */
/* eslint template-curly-spacing: 'off' */
/* eslint indent: 'off' */

/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withStore from '../../components/with-store';

class RadioField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param {Object} e
	 * @return {void}
	 */
	handleChange = ( e ) => {
		const { field, onChange } = this.props;

		onChange( field.id, e.target.value );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { field } = this.props;

		return (
			<FieldBase field={ field } >
				{ field.options.map( ( { value, label } ) => (
					<label key={ `${ field.id }-${ value }` }>
						<input
							type="radio"
							id={ `${ field.id }-${ value }` }
							name={ `${ field.base_name }-${ value }` }
							checked={ field.value === value }
							value={ value }
							onChange={ this.handleChange }
							{ ...field.attributes }
						/>

						{ label }

						{ field.required && <span className="carbon-required">*</span> }
					</label>
				) ) }
			</FieldBase>
		);
	}
}

addFilter( 'carbon-fields.radio-field.metabox', 'carbon-fields/metaboxes', ( OriginalRadioField ) => withStore( ( props ) => {
	return (
		<OriginalRadioField { ...props }>
			{ ( { field, handleChange } ) => (
				<RadioField
					field={ field }
					onChange={ handleChange }
				/>
			) }
		</OriginalRadioField>
	);
} ) );
