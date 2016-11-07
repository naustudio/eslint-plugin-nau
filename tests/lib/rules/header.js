/**
 * @fileoverview Check for copyright and other header comments
 * @author Thanh Tran
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/header');
var RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('header', rule, {

	valid: [
	{
		code: '/* © 2016 NauStud.io */',
/* © 2016 NauStud.io */
		options: ['© 2016 NauStud.io']
	},
	{
		code: '/**\n * © 2016 NauStud.io\n */',
/**
 * © 2016 NauStud.io
 */
		options: ['© 2016 NauStud.io']
	},
	{
		code: '/* © 2016 NauStud.io\n * @author Thanh\n */',
/* © 2016 NauStud.io
 * @author Thanh
 */
		options: ['© 2016 NauStud.io\n * @author']
	},
	{
		code: '/**\n * © 2016 NauStud.io\n * @author Thanh\n */',
/**
 * © 2016 NauStud.io
 * @author Thanh
 */
		options: ['© 2016 NauStud.io\n * @author']
	},
	{
		code: '/* © 2016 NauStud.io\n * @author Thanh\n *\n * Static configs, can be overwritten by env variables\n */',
		options: ['© 2016 NauStud.io\n * @author']
	},
	{
		code: '// © 2016 NauStud.io\n\nfunction foo() { return "bar"; }',
// © 2016 NauStud.io
		options: ['© 2016 NauStud.io']
	},
	{
		code: '// © 2016 NauStud.io\n\nfunction foo() { return "bar"; }',
// © 2016 NauStud.io
		options: ['© 2016 NauStud.io']
	}],

	invalid: [
	{
		code: '/* no pattern defined*/',
		options: [/*no options*/],
		errors: [{ message: 'Rule pattern not provided' }],
	},
	{
		code: 'function foo() { return \'bar\'; }',
		options: ['© 2016 NauStud.io\n * @author'],
		errors: [{ message: 'No header comments' }],
	},
	{
		code: '/** Some description\n * but no copyright messages\n */\n\nfunction foo() { return "bar"; }',
		options: ['© 2016 NauStud.io\n * @author'],
		errors: [{ message: 'Pattern not found in header' }],
	}]
});
