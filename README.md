**All credits go to https://github.com/kajirikajiri/eslint-plugin-mui-path-imports**

`import { Box } from '@material-ui/core';`

`to`

`import Box from '@material-ui/core/Box';`

# Material-UI path imports

[![CI:UT](https://github.com/kajirikajiri/eslint-plugin-mui-path-imports/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/kajirikajiri/eslint-plugin-mui-path-imports/actions/workflows/npm-publish.yml)

Use path import to avoid pulling in unused modules. Decreases waiting time.

Reduces about 10000 modules.

BEFORE
```
event - compiled successfully in 287 ms (11756 modules)
wait  - compiling...
event - compiled successfully in 384 ms (11756 modules)
wait  - compiling...
event - compiled successfully in 301 ms (11756 modules)
wait  - compiling...
event - compiled successfully in 298 ms (11756 modules)
```

AFTER
```
event - compiled successfully in 69 ms (1867 modules)
wait  - compiling...
event - compiled successfully in 72 ms (1867 modules)
wait  - compiling...
event - compiled successfully in 64 ms (1867 modules)
wait  - compiling...
event - compiled successfully in 84 ms (1867 modules)
```

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-material-path-imports`:

```sh
npm install eslint-plugin-material-path-imports --save-dev
```

## Usage

Add `plugin` and `rules` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "material-ui-path-imports"
    ],
    "rules": {
        "material-ui-path-imports/material-ui-path-imports": "error"
    }
}
```

And eslint --fix

```javascript
import { Box } from '@material-ui/core';
↓
import Box from "@material-ui/core/Box";
```
