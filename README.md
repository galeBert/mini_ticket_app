This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Testing User Login

I have provide 2 harcoded user in 
<details>
<summary>`/app/constant/index`</summary>

```bash
export const users = [
  {
    email: 'visi8@example.com',
    password: '123456',
  },
  {
    email: 'albert@example.com',
    password: '123456',
  },
];
```
</details>

you can use that user to test login functionality user will stay logged in when the screen is reloaded because I use Async storage to handle a "session-like" feeling,
# note for Logout
to logout please tap home page header title (I didn't add an implicit logout since the rule is to try to strictly follow the [Figma Design]([https://reactnative.dev/docs/integration-with-existing-apps](https://www.figma.com/design/wmaD2QKI0MjIDpwuKPX4MJ/Test-Developer?node-id=0-1&t=RPOaLYNyD0OIdVJp-0)))

# You can try several login tests

- try to log in using the right email and password (output: success)
- try to log in using the right email and but wrong password (output: error message on password input)
- try to log in using the wrong email and random password (output: error message on password email)

# Note for register
- The register feature is only to make simple auth and didn't actually save the user to hardcoded user list data
- therefore if you try to register with a registered email it will throw an error

### Try QR scaning
to try a QR feature I have provide 3 QR that can be tested

### Here is the valid QR for  open ticket posts with ID: 3
<img width="339" alt="qr-valid-id-3" src="https://github.com/user-attachments/assets/ed13e9bb-c60d-475c-9d88-0bdf62dca9de">

### Here is the valid QR for  open ticket posts with ID: 1

<img width="351" alt="qr-valid-id-1" src="https://github.com/user-attachments/assets/29bd9f78-822c-4e2b-bb1e-34f102d68837">

### Here is the invalid QR that contains a link to YouTube, but it will open an error modal instead of opening using our app

<img width="336" alt="qr-invalid-youtube" src="https://github.com/user-attachments/assets/1eadc8e5-57b6-4653-8750-3dbb08075a2c">

### Here is the invalid QR for  open ticket posts with id: 7 but will return Not Found instead

<img width="343" alt="qr-invalid-id-7" src="https://github.com/user-attachments/assets/4cbafe87-b2da-40c3-9a2c-59fd7d5449c4">


### note: all QR provided generated with https://www.qrcode-monkey.com/

## Design Choices

for the design I use in the QR scanner page, I'm using a simple and minimal approach but yet with informative text and a helper
the reason is that a feature like QR cannot have a too crowded UI or color because it will distract the user and make the user experience bad, since the UI mostly is only the camera which means a user needs to focus looks what showing on the camera instead of what the UI, and using a readable color like red for error so the user doesn't really need to read the text, but when only see the color user will know its an error

## Challenges

the real thing about this project is to try to adapt with bare react native (react-native-cli) unlike expo this bare react makes me need to read a lot of docs, and it sure does take some time,  but after all, since this is React I can get used to with it by times

the other challenge I faced was with bare react native made me can't use react-expo to debug the app, This meant I had to go back to using the Android studio VM simulator, and it was so heavy and means slowed the debug process, but after everything went well 

### Note
thanks to the Visi8 team for giving me this challenge it's so much fun in the process of making it, and also I learned alot and made me realize react native is exciting I think I will keep practicing using react native, I hope this assignment can help the Visi8 team see skill the potential I have, and let grow together

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
