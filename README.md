# Shell script functions and tags outline 1.0.0

## `shell-function-tag-outline`

[![GitHub release](https://img.shields.io/github/release/Theile/vscode-shell-function-tag-outline.svg?style=plastic)](https://github.com/Theile/vscode-shell-function-tag-outline/releases)
[![GitHub license](https://img.shields.io/github/license/Theile/vscode-shell-function-tag-outline.svg?style=plastic)](https://github.com/Theile/vscode-shell-function-tag-outline/blob/master/LICENSE.md)
[![GitHub stars](https://img.shields.io/github/stars/Theile/vscode-shell-function-tag-outline.svg?style=plastic)](https://github.com/Theile/vscode-shell-function-tag-outline/stargazers)
[![GitHub issues](https://img.shields.io/github/forks/Theile/vscode-shell-function-tag-outline.svg?style=plastic)](https://github.com/Theile/vscode-shell-function-tag-outline/forks)
[![GitHub issues](https://img.shields.io/github/issues/Theile/vscode-shell-function-tag-outline.svg?style=plastic)](https://github.com/Theile/vscode-shell-function-tag-outline/issues)

Provide outline view for Shell script functions and tags.

### Functions

Whenever a function is defined in the script it will be placed in the outline.

### Comment tags

These special comments begin with a certain *tag* identifier. When one of the below *tags* are used they will appear in the outline with an icon:

- `# MARK:`
- `# NOTE:`
- `# REVIEW:`
- `# TODO:`
- `# FIXME:`
- `# HACK:`
- `# BUG:`
- `# OPTIMIZE:`
- `# !!!:`
- `# ???:`


![screenshot1](images/screenshot.png)


**Based on shell-function-outline v1.2.2 by jannek@aalto 2021**
**Based on perl-outline v0.0.7 by hitode909.**
**They deserves much credit.**

## Future idea

Some editors handle this comment tag dash with a separator before the line:

- `# MARK: - Headline notation`

Could be interesting if that could be implemented.
