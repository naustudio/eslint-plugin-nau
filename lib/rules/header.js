/**
 * @fileoverview Check for copyright and other header comments
 * @author Thanh Tran
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
	meta: {
		docs: {
			description: 'Check for copyright and other header comments',
			category: 'Stylistic Issues',
			recommended: true
		},
		fixable: null,  // or 'code' or 'whitespace'
		schema: [
			{
				'type': 'string',
				'description': 'Header comment pattern, without comment delimiters',
				'minLength': 1,
			}
		]
	},

	create: function(context) {
		const options = context.options;
		const header = options[0];

		// console.log('header:', header);

		//----------------------------------------------------------------------
		// Public
		//----------------------------------------------------------------------

		return {
			Program: function(node) {
				if (!(header && header.length)) {
					context.report({node, message: 'Rule pattern not provided'});
					return;
				}

				let leadingComments;
				if (node.body.length) {
					leadingComments = context.getComments(node.body[0]).leading;
				} else {
					leadingComments = context.getComments(node).leading;
				}

				if (!leadingComments.length) {
					context.report({node, message: 'No header comments'});
				} else if (!leadingComments[0].value.includes(header)) {
					context.report({node, message: 'Pattern not found in header'});
				}
			}
		};
	}
};
