# Shell script function and landmark outline 0.9.0

## `shell-function-landmark-outline`

Provide outline view for Shell script functions and landmarks.

Regex:
```
^([ \t]*)(function[ \t]+)?([_A-Za-z][_A-Za-z0-9]+)[ \t]*(\(\))?[ \t*]*([{(])[^(]?

'^([ \t]*|[ \t]*\#*[ \t]*)((function[ \t]+)?([_A-Za-z][_A-Za-z0-9]+)[ \t]*(\(\))?[ \t*]*([{(])[^(]?|MARK:.*|NOTE:.*|REVIEW:.*|TODO:.*|FIXME:.*|!!!:.*|\?\?\?:.*)'
 
'^([ \t]*|[ \t]*\#*[ \t]*)((function[ \t]+)?([_A-Za-z][_A-Za-z0-9]+)[ \t]*(\(\))?[ \t*]*([{])[^(]?|MARK:.*|NOTE:.*|REVIEW:.*|TODO:.*|FIXME:.*|!!!:.*|\?\?\?:.*)'


^([ \t]*|[ \t]*\#+[ \t]+)(function[ \t]+)?(MARK|NOTE|REVIEW|TODO|FIXME|!!!|\?\?\?)?(:[ \t]*)?([_A-Za-z][_A-Za-z0-9]+)[ \t]*(\(\))?[ \t*]*([{(])[^(]?

type = matched[8]+matched[10]
name = matched[6]+matched[12]
^(([ \t]*)(function[ \t]+)?()()([_A-Za-z][_A-Za-z0-9]+)[ \t]*(\(\))+[ \t*]*([{\(])[^(]?|([ \t]*[#]+[ \t]+)(MARK|NOTE|REVIEW|TODO|FIXME|!!!|\?\?\?)(:[ \t]*)(.*)()())

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