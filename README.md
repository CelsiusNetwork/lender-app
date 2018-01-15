# lender-app[DRAFT document]
> A Lender is a crypto-assets holder who chooses to participate in the Celsius lending pool, using the Celsius wallet app. The Lender will be required to transfer the desired crypto-assets amount from her current wallet or storage to Celsius. The funds remain liquid and available as there will be an option to withdraw the funds at any time. However, the system accounts for lending-seniority when allocating daily interest and a Lender who withdraws crypto-assets from the account will lose all seniority privileges, thus earning lower daily sums.
Lender is a cloud-enabled, iOS and Android ready, offline-storage, react-native ecosystem powered application.

lender-app epics summary:
  - Register and Verify new Lender
  - Visualize DEG value and Lenders' DEG earnings
  - Show Landers' income history
  - ETH and DEG wallet

### Tech

* [react](https://github.com/facebook/react)
* [react-native](https://github.com/facebook/react-native)
* [react-navigation](https://github.com/react-community/react-navigation) - Router
* [redux](https://github.com/reactjs/redux) -  State container
* [react-redux](https://github.com/reactjs/react-redux) - React bindings for Redux
* [redux-thunk](https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559) - write action creators that return a function instead of an action
* [expo](https://docs.expo.io/versions/latest/index.html) - set of tools, libraries and services for building native iOS and Android experiance by writing JavaScript
* [native-base](https://docs.nativebase.io/) - cross-platform UI components for React Native
* web3
* [redux-persist](https://www.npmjs.com/package/redux-persist) - allows us to save the Redux store in the device local storage and restore it later

### Dev setup

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
$ npm start
```

Sentry
------------------

Sourcemaps for Other Platforms
------------------------------

Currently automatic sourcemap handling is only implemented for iOS with
Xcode and Android with gradle.  If you manually invoke the `react-native
packager <https://github.com/facebook/react-native/tree/master/packager>`__
you can however get sourcemaps anyways by passing `--sourcemap-output` to it.

If you do get sourcemaps you can upload them with ``sentry-cli``.  However
make sure to pass ``--rewrite`` to the ``upload-sourcemaps`` command which
will fix up the sourcemaps before upload (inlines sources etc.).

Example:

    react-native bundle \
      --dev false \
      --platform android \
      --entry-file index.android.js \
      --bundle-output android.main.bundle \
      --sourcemap-output android.main.bundle.map

To then upload you should use this:

    node_modules/@sentry/cli/bin/sentry-cli releases \
        files RELEASE_NAME \
        upload-sourcemaps \
        --dist DISTRIBUTION_NAME \
        --strip-prefix /path/to/project/root \
        --rewrite /path/to/your/files

The values for ``RELEASE_NAME`` and ``DISTRIBUTION_NAME`` are as follows:

``RELEASE_NAME``:
    the bundle ID or package name (reverse dns notation of your app)
    followed by a dash and the human readable version name that is set for
    your release.  So for instance ``com.example.myapp-1.0``.

``DISTRIBUTION_NAME``:
    This is the version code or build id depending on your platform.  So
    for instance just set this to whatever is set in your `Info.plist` or
    what your gradle setup generates (eg: ``52``).
