# cypress-to-do
 
Initially I started with playwright but stumbled upon an error (most likely caused by my lack of hands-on experience with it), so instead of wasting time I just went with the one I already know, cypress.

```
npm init
```


```
npx cypress open
```
or
```
npx cypress run
```

There might be a bug (or could just be that they never bothered to add this) but refreshing the page after editing an entry, shows the edit hasn't saved. Works if you toggle completion though. They seeem to have also removed some features with updates, specifically the option to sort out completed/not-completed tasks.

I have also chosen to disable test isolation. This is a personal preference as I think it makes everything easier and more readable (in the case of a report for example)

CI/CD would just be copy-pasting this file: https://github.com/andrei1015/ui-api-js/blob/main/.github/workflows/cypress-tests.yml
