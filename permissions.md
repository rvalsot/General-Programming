# File Attributes

Files, aside from content, name, location and type, also have owner, group, permission, timestamps, and other information.

## Permissions

Modified using the all mighty `chmod`.

__Permissions__:
* `r` → read
* `w` → write
* `x` → execute

__Roles__:
* `u` → for users
* `g` → for group
* `o` → for others
* `a` → Anybody

In the terminal:
``` bash
# Adding single set
$ chmod user+permission, /path/filename
# Adding multiple set
$ chmod user+permission, user+permission, /path/filename

# Remove permissions
$ chmod user-permission /path/filename

# Copycat another file permissions
$ chmod --reference=original_file target_file

# Permissions to all the files under a directory
$ chmod -R permission directory_name/

# Permissions to directory, but not files
$ chmod user+X *
```

| Number | Sequence | Permission     |
| :----: | ----- | ----------------- |
| `0`    | `---` | no rights			   |
| `1`    | `--x` | execute only		   |
| `2`    | `-w-` | write only			   |
| `3`    | `-wx` | execute & write	 |
| `4`    | `r--` | read only			   |
| `5`    | `r-x` | read & execute		 |
| `6`    | `rw-` | read & write		   |
| `7`    | `rwx` | all rights			   |


Usual flags:

| Flag | Usage |
| ---- | ----- |
| `-R` | Recursive, include objects and subdirectories |
| `-f` | Force |
| `-v` | Verbose, show objects processed |
