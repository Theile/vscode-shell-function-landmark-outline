# Shell script function and landmark outline 1.0.0

## `shell-function-landmark-outline`

Provide outline view for Shell script functions and landmarks.

### Function

Whenever a function is defined in the script it will be placed in the outline.

### Landmarks

Landmarks are shell script comments that begin with a certain landmark identifier. When one of the below landmarks are used they will appear in the outline with an icon:

- `# MARK:`
- `# NOTE:`
- `# REVIEW:`
- `# TODO:`
- `# FIXME:`
- `# !!!:`
- `# ???:`

![screenshot1](images/screenshot.png)

I figured out to improve the regex and make it more advanced in selecting icons for the various landmarks. Had to use a later version of typescript.

**Based on shell-function-outline v1.2.2 by jannek@aalto 2021**
**Based on perl-outline v0.0.7 by hitode909.**
**They deserves all credit.**
