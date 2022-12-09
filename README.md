# cypress-to-do
 
Initially I started with playwright but stumbled upon an error (most likely caused by my lack of hands-on experience with it), so instead of wasting time I just went with the one I already know, cypress. The playwright try is here https://github.com/andrei1015/playwright-to-do/blob/main/tests/positives.spec.ts and most likely either today or this weekend I will do the playwright part, for my own knowledge, but not with a 2 hour limit

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


The code I wrote is not of the highest quality. For example I should also make sure I leave a clean state at the end of the test, because the application is using proper storage that persists even a browser closing, which can easily cause issues since the locators do not use n-ths or anything like that, everything assumes we are working with a single task.

I have also created a separate file for the locators.

COVERAGE

Have done the basic tests, create, edit, complete, delete a task.
