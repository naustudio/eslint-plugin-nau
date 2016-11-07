# eslint-plugin-nau

Nau Studio Eslint plugin

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-nau`:

```
$ npm install eslint-plugin-nau --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-nau` globally.

## Usage

Add `nau` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "nau"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "nau/rule-name": 2
    }
}
```

## Supported Rules

### `nau/header`

This rule aims to make sure copyright and/or other contents to be filled in at in the comments at top of the JS files

Config:

```
    'nau/header': ['error', '© 2016 NauStud.io']
```






