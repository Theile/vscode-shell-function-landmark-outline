# Shell script function and landmark outline

## `shell-function-landmark-outline`

Provide outline view for Shell script functions and landmarks.

Regex:
```
^([ \t]*)(function[ \t]+)?([_A-Za-z][_A-Za-z0-9]+)[ \t]*(\(\))?[ \t*]*([{(])[^(]?

'^([ \t]*|[ \t]*\#*[ \t]*)((function[ \t]+)?([_A-Za-z][_A-Za-z0-9]+)[ \t]*(\(\))?[ \t*]*([{(])[^(]?|MARK:.*|NOTE:.*|REVIEW:.*|TODO:.*|FIXME:.*|!!!:.*|\?\?\?:.*)'
 
'^([ \t]*|[ \t]*\#*[ \t]*)((function[ \t]+)?([_A-Za-z][_A-Za-z0-9]+)[ \t]*(\(\))?[ \t*]*([{])[^(]?|MARK:.*|NOTE:.*|REVIEW:.*|TODO:.*|FIXME:.*|!!!:.*|\?\?\?:.*)'
```

### Landmarks

Landmarks are shell script comments that begin with a certain landmark identifier:

- `# MARK:` Shown as
- `# NOTE:` Shown as
- `# REVIEW:` Shown as
- `# TODO:` Shown as
- `# FIXME:` Shown as
- `# !!!:` Shown as
- `# ???:` Shown as

**Based on shell-function-outline v1.2.2 by jannek@aalto 2021**
**Based on perl-outline v0.0.7 by hitode909.**
**They deserves all credit.**

![screenshot1](images/screenshot.png)