# Checkly Monitoring-as-Code: Demo Project

This example project shows how you can use the Checkly CLI in a monitoring as code (MaC) workflow, with this project you can:

1. Write API Checks and Playwright-powered Browser Checks!
2. Test -> Deploy: now you have your app monitored around the clock. All from your code base.
3. You can have all your tests under one folder and if a new one is added it will be picked up automatically next time you test/deploy to Checkly.
4. Have email alerts sent to you whenever a test fail or recover (email address is recommended to be stored at environment variables).
5. Integrate with github actions (on push) to deploy/run all Checkly tests.


## Project Structure

This project has the basic boilerplate files needed to get you started.

```
.
├── README.md
├── __checks__
.... tests file are put here
├── checkly.config.ts
└── package.json
```

- Running `npx checkly test` will look for `.check.ts` files and `.spec.ts` in `__checks__` directories and execute them in a dry run.

- Running `ALERT_EMAIL=alerts@acme.org npx checkly deploy` will deploy your checks to Checkly, attach email alert channel, and run them on a 10m schedule in the 
region `us-east-1` and `eu-west-1`

- Pushing code will cause a github CI action to run that will run Checkly checks and deploy to Checkly is checks are successful. Note you need to add CHECKLY_API_KEY and CHECKLY_ACCOUNT_ID to your github repository secrets.

[Check the docs for the full CLI reference](https://www.checklyhq.com/docs/cli/command-line-reference/).

## Adding and running `@playwright/test`

You can add `@playwright/test` to this project to get full code completion and run `.spec.ts` files for local debugging.
It's best to install the Playwright npm package version that matches your [Checkly runtime](https://www.checklyhq.com/docs/cli/npm-packages/).

```bash
npm install --save-dev @playwright/test@1.38.1
```

## Questions?

Check [our CLI docs](https://www.checklyhq.com/docs/cli/), the [main Checkly docs](https://checklyhq.com/docs) or 
join our [Slack community](https://checklyhq.com/slack).
