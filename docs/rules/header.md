# `nau/header`

Check for copyright and other header comments

## Rule Details

This rule aims to make sure copyright and/or other contents to be filled in at in the comments at top of the JS files.

First, turn on the rule and provide require pattern:

```js
// in your .eslintrc.js
module.exports = {
    plugins: ['nau'],
    rules: {
        'nau/header': ['error', '© 2016 NauStud.io']
    }
}
```

The following patterns are considered warnings:

```js
/* Some comment but not includes the copyright text */
```

The following patterns are not warnings:

```js
/* © 2016 NauStud.io */
```

### Options

- String pattern to test against the header comment

## When Not To Use It

If you don't want to check for required pattern in header comments

## Further Reading

- [Nau dotfiles](https://github.com/naustudio/dotfiles)
