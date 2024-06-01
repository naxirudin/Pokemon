# Pokemon React Native App

![ALT TEXT](https://raw.githubusercontent.com/naxirudin/Pokemon/main/Home.png?token=GHSAT0AAAAAACTCEZJGIN7XUPE7PZMHJZWQZS3K4FQ)
![ALT TEXT](https://raw.githubusercontent.com/naxirudin/Pokemon/main/Details.png?token=GHSAT0AAAAAACTCEZJGHECFYC2GI2AMZQRAZS3K65Q)
![ALT TEXT](https://raw.githubusercontent.com/naxirudin/Pokemon/main/Test%20Coverage.png?token=GHSAT0AAAAAACTCEZJH3K5DLYDHZ7QK4DXWZS3K7SA)

This is a React Native application for displaying Pokemon details using the PokeAPI. The app includes features such as viewing a list of Pokemon and viewing detailed information about each Pokemon.

## Table of Contents

- [Installation](#installation)
- [Running the App](#running-the-app)
- [Testing](#testing)
- [App Screenshots](#app-screenshots)

## Installation

Follow these steps to set up the project on your local machine:

1. Clone the repository:

    ```sh
    git clone https://github.com/naxirudin/Pokemon.git
    cd Pokemon
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Install CocoaPods dependencies (iOS only):

    ```sh
    cd ios
    pod install
    cd ..
    ```

## Running the App

### Running on Android

1. Start the Metro bundler:

    ```sh
    npm start
    ```

2. In a new terminal, run the Android app:

    ```sh
    npx react-native run-android
    ```

### Running on iOS

1. Start the Metro bundler:

    ```sh
    npm start
    ```

2. In a new terminal, run the iOS app:

    ```sh
    npx react-native run-ios
    ```

## Testing

This project uses Jest for testing. You can run the tests with the following command:

```sh
npm test
