# Pull request

## Naming strategy

Prefix all tasks with `feature/`. \
Prefix all bugfixes with `bug/`. \
Branch-name should include acronym for BeetleJuice `BJ`. \
And a reference to Trello task id. \
<ins>Optionally</ins>: add a suffix with underscore and short description of the task/bug you're working on.

Examples: \
`feature/BJ-69` \
`bug/BJ-420_whitescreen_in_your_mom`

## Branching Strategy

Make sure you're always up to date with `master`. \

```
git pull origin master
```

## Commit messages

Should have the format following:

```
git commit -m "BJ-xxx: Short description of task or bug fixed on this line
>
> Additional info depending on how big this task was.
> Multiple lines allowed.
>
"
```

## Code-review

Add someone as a reviewer, GG.
