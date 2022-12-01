/**
 * @fileoverview rule
 * @author rule
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/material-ui-path-imports"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});
ruleTester.run("rule", rule, {
  valid: [
    {
      code: `import Box from "@material-ui/core/Box";`
    },
    {
      code: `import Add from "@material-ui/icons/Add";`
    },
    {
      code: `import { Theme } from "@material-ui/core";`
    },
    {
      code: `import { SvgIconTypeMap } from "@material-ui/core";`
    },
    {
      code: `import { SvgIconTypeMap, Theme } from "@material-ui/core";`
    },
    {
      code: `import { Theme, SvgIconTypeMap } from "@material-ui/core";`
    },
    {
      code: `import { Other } from "other/package";`
    },
  ],

  invalid: [
    {
      code: `import { Add } from "@material-ui/icons";`,
      errors: [{ message: "error: !mui-toplevel-import", type: "" }],
      output: `import Add from "@material-ui/icons/Add";`
    },
    {
      code: `import { Box } from "@material-ui/core";`,
      errors: [{ message: "error: !mui-toplevel-import", type: "" }],
      output: `import Box from "@material-ui/core/Box";`
    },
    {
      code: `import { Add, Link } from "@material-ui/icons";`,
      errors: [{ message: "error: !mui-toplevel-import", type: "" }],
      output: `import Add from "@material-ui/icons/Add";
import Link from "@material-ui/icons/Link";`,
    },
    {
      code: `import { Box, Card } from "@material-ui/core";`,
      errors: [{ message: "error: !mui-toplevel-import", type: "" }],
      output: `import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";`
    },
    {
      code: `import { Box, Theme } from "@material-ui/core";`,
      errors: [{ message: "error: !mui-toplevel-import", type: "" }],
      output: `import Box from "@material-ui/core/Box";
import { Theme } from "@material-ui/core";`,
    },
    {
      code: `import { Box, Theme, SvgIconTypeMap } from "@material-ui/core";`,
      errors: [{ message: "error: !mui-toplevel-import", type: "" }],
      output: `import Box from "@material-ui/core/Box";
import { Theme, SvgIconTypeMap } from "@material-ui/core";`
    },
    {
      code: `import { Theme, Box, SvgIconTypeMap } from "@material-ui/core";`,
      errors: [{ message: "error: !mui-toplevel-import", type: "" }],
      output: `import Box from "@material-ui/core/Box";
import { Theme, SvgIconTypeMap } from "@material-ui/core";`
    },
    {
      code: `import { Theme, SvgIconTypeMap, Box } from "@material-ui/core";`,
      errors: [{ message: "error: !mui-toplevel-import", type: "" }],
      output: `import Box from "@material-ui/core/Box";
import { Theme, SvgIconTypeMap } from "@material-ui/core";`
    },
  ],
});
