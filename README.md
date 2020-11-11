### notes

- window object are available when you define your environment in jest.config.js
  as `testEnvironment : 'jest-environment-jsdom'`, its a browser environment
  simulated provided by jest
- If importing css like common using loader, jest may point an error, because he
  tries to load using common JS, and it is just a css file, to work around this,
  we can use the moduleNameMapper option in jest.config.js, and this way, it
  will require this style-mock file, whenever the file ending matches .css

```
moduleNameMapper: {
  '\\.css$' : require.resolve('./test/style-mock.js')
}
```

- You can debug a component in jest by using the following:

```
test('renders', () => {
  const {debug} =  render(<AutoScalingText />)
  debug()
})
```

- Snapshots are good, but consider thinking about put them inline instead of
  creating a new file, because the files can become very long and unreadable

- Snapshots can be useful to test components, because they can test the render
  of the elements, I should add here that when you're using
  toMatchInlineSnapshot(), you are required to have Prettier installed in your
  project because jest is updating the code in your test file and it wants to
  make sure that it doesn't change more than it has to with regard to your
  formatting. If you don't have Prettier installed, then you have to use
  toMatchSnapshot()

- We can configure webpack to resolve specific folders, so we can include
  everything in these folders without specifing all the relative imports, this
  is useful to speed up development

```
resolve: {
    modules: ['node_modules', path.join(__dirname, 'src'), 'shared'],
}
// ...
import CalculatorDisplay from 'calculator-display' // this file is on the shared folder, but can be used anywhere
```

- We can configure jest to resolve the same modules as in webpack with the
  "moduleDirectories" option:

```
moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared']
```

- When handling DOM assertions we can use @testing-library/jest-dom library, and
  there is even a option pre-built for extend the expect assertion from jest
  with @testing-library/jest-dom/extend-expect, also we can configure it
  directly in jest.config.js to always load this file, using the
  setupFilesAfterEnv of jest config

```
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
```

- We can use node --inspect-brk to run our codes with debugger from the chrome
  engine of our browser

- When using coverage to see how much of our code is covered by tests, we should
  specify which part of our application matters to be covered, or files like our
  utilities files will be included and obfuse our percentage. We can specify
  this in jest.config.js:

```
  collectCoverageFrom: ['**/src/**/*.js'],
```

### identity-obj-proxy

- This library allow us to identity object using ES6 proxies. Useful for mocking
  webpack imports. For instance, you can tell Jest to mock this object as
  imported CSS modules; then all your className lookups on the imported styles
  object will be returned as-is.

### jest-emotion

- This library help to identify what part of the css actually changed between
  different snapshots, it is very useful to speed up tests

### eslint-import-resolver-jest

- We can add this library to resolve files from jest, so our eslint does not
  warning against imports that are only in the jest config, also we can write it
  on the jsconfig.js to make our editor map the files when we click over it

> Note: This project is intentionally over-engineered. The application itself is
> very simple, but the tooling around it is pretty complicated. The goal is to
> show what configuration would be like for a large real-world application
> without having all the extra complexities of a real-world application.
