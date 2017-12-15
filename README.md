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