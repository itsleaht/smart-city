// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'standard'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  "globals": {
    //GSAP Globals
    "TimelineLite" : false,
    "TimelineMax" : false,
    "TweenLite" : false,
    "TweenMax" : false,
    "Back" : false,
    "Bounce" : false,
    "Circ" : false,
    "Cubic" : false,
    "Ease" : false,
    "EaseLookup" : false,
    "Elastic" : false,
    "Expo" : false,
    "Linear" : false,
    "Power0" : false,
    "Power1" : false,
    "Power2" : false,
    "Power3" : false,
    "Power4" : false,
    "Quad" : false,
    "Quart" : false,
    "Quint" : false,
    "RoughEase" : false,
    "Sine" : false,
    "SlowMo" : false,
    "SteppedEase" : false,
    "Strong" : false,
    "Draggable" : false,
    "SplitText" : false,
    "VelocityTracker" : false,
    "CSSPlugin" : false,
    "ThrowPropsPlugin" : false,
    "BezierPlugin" : false,
    //Libs Globals
    "ease": false,
    "throttle": false
  }
}
