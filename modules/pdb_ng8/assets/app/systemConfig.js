/**
 * @file
 * This builds our system config and imports our main app file.
 */

(function (drupalSettings) {
  'use strict';

  const modulePath = drupalSettings.path.baseUrl + drupalSettings.pdb.ng8.module_path;
  const ext = (drupalSettings.pdb.ng8.development_mode === 0) ? 'js' : 'ts';

  // Source: http://gomakethings.com/vanilla-javascript-version-of-jquery-extend
  // Pass in the objects to merge as arguments.
  // For a deep extend, set the first argument to `true`.
  function extend() {
    // Variables.
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Check if a deep merge.
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }

    // Merge the object into the extended object.
    var merge = function (obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          // If deep merge and property is an object, merge properties.
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          }
          else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    // Loop through each object and conduct a merge.
    for (; i < length; i++) {
      var obj = arguments[i];
      merge(obj);
    }
    return extended;
  }

  var paths = {
    'app': modulePath + '/assets/app',
    'classes/*': modulePath + '/assets/classes/*',
    'rxjs': modulePath + '/node_modules/rxjs',
    'rxjs/operators': modulePath + '/node_modules/rxjs/operators',
    'components/*': modulePath + '/components/*/index',
    'components/*/globals': modulePath + '/components/*/globals',
    'helpers/*': modulePath + '/assets/helpers/*/index',
    '@angular/*': modulePath + '/node_modules/@angular/*',
  };

  var packages = {
    app: {
      main: 'app',
      defaultExtension: ext
    },
    '/': {
      defaultExtension: ext
    },
    rxjs: {
      main: 'index.js',
      defaultExtension: 'js'
    },
    "rxjs/operators": {
      main: 'index.js',
      defaultExtension: 'js'
    },
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'animations'
  ];

  // Add package entries for angular packages.
  ngPackageNames.forEach(function (pkgName) {
    // Bundled version (fewer requests).
    packages['@angular/' + pkgName] = {
      main: 'bundles/' + pkgName + '.umd.min',
      defaultExtension: 'js'
    };
  });

  var config = {
    // Use typescript for compilation.
    transpiler: 'ts',
    typescriptOptions: {
      "target": "es5",
      "module": "system",
    },
    // Packages defines our app package.
    packages: packages,
    paths: paths
  };

  if ('SystemJS' in drupalSettings) {
    config = extend(true, config, drupalSettings.SystemJS);
  }

  System.config(config);
  System.import('app').catch(console.error.bind(console));
  
})(drupalSettings);
