### notes
- window object are available when you define your environment in jest.config.js as `testEnvironment : 'jest-environment-jsdom'`, its a browser environment simulated provided by jest
- If importing css like common using loader, jest may point an error, because he tries to load using common JS, and it is just a css file, to work around this, we can use the moduleNameMapper option in jest.config.js, and this way, it will require this style-mock file, whenever the file ending matches .css
```
moduleNameMapper: {
  '\\.css$' : require.resolve('./test/style-mock.js')
}
```

> Note: This project is intentionally over-engineered. The application itself is
> very simple, but the tooling around it is pretty complicated. The goal is to
> show what configuration would be like for a large real-world application
> without having all the extra complexities of a real-world application.


