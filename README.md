### notes
- window object are available when you define your environment in jest.config.js as `testEnvironment : 'jest-environment-jsdom'`, its a browser environment simulated provided by jest
- If importing css like common using loader, jest may point an error, because he tries to load using common JS, and it is just a css file, to work around this, we can use the moduleNameMapper option in jest.config.js, and this way, it will require this style-mock file, whenever the file ending matches .css
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
- Snapshots are good, but consider thinking about put them inline instead of creating a new file, because the files can become very long and unreadable

- Snapshots can be useful to test components, because they can test the render of the elements

### identity-obj-proxy
- This library allow us to identity object using ES6 proxies. Useful for mocking webpack imports. For instance, you can tell Jest to mock this object as imported CSS modules; then all your className lookups on the imported styles object will be returned as-is.


> Note: This project is intentionally over-engineered. The application itself is
> very simple, but the tooling around it is pretty complicated. The goal is to
> show what configuration would be like for a large real-world application
> without having all the extra complexities of a real-world application.


