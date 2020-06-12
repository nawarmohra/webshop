<h1>Skateboard Shop</h1>

Av: Nawar Mohra, Amir Shishengari och Frida Baldvinsdottir<br>
Systemutveckling Ramverk, 25 yhp<br>
Wie19, Medieinstitutet<br>

Skateboard Shop är en e-handel som säljer skateboards online. E-handeln är byggd i React, Material UI, Typescript, Formik, Yup och CSS.

Beskrivning

Detta är en laboration som vi har fått som grupparbete om tre. Uppgiften går ut på att bygga en e-handel med hjälp av React, Typescript och valfritt designsystem. Webbshopen består av en startsida där alla våra produkter listas, en produktsida där en utvald produkt visas och en utcheckningssida där kunden har möjligheten att slutföra sitt köp. Vi skulle använda oss av ett designsystem för att skapa layouten samt grafiska element. Vi valde designsystemet Material UI.

Tekniker vi har använt

Vi har använt oss av Material UI för designen av webbshopen. Formik är en komponent till Material UI för att skapa formulär och Yup för valideringsregler i samtliga fält i formuläret. 
Startsida: Här listar vi samtliga produkter. Vi har en kundvagnsikon som man kan klicka på för att komma till kundvagnen. Produktilderna är klickbara och då får du upp den enskilda produkten och dess information.
Kundvagn: Här listas produkterna som du lagt i kundvagnen med miniatyrbild till vänster, produktnamn, pris, antal. Här har du möjlighet att både öka och minska antal för varje produkt eller genom att klicka på papperskorgen ta bort produkten ur kundvagnen. Totalpriset visas för samtliga varor i kundvagnen.
Checkout: Formulär som kunden fyller i. Formulärfälten har valideringsregler vilket gör att kunden kan endast genomföra sin beställning om alla fält är ifyllda. Här har kunden möjlighet att välja fraktsätt (Postnord, DHL, Schenker) och betalsätt (Kontokort, faktura, Swish)
Tack för ditt köp-sida: Enkel sida med text.

Project Screen Shots


Installation- och Setupinstruktioner

Node och Npm, installation: 
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
React och typescript: https://reactjs.org/docs/getting-started.html
Material UI: https://material-ui.com/getting-started/installation/
Formik: https://www.npmjs.com/package/formik-typed
Yup: https://www.npmjs.com/package/@types/yup

Körinstruktioner

När ovanstående är installerat i programmet körs appen i gång genom att skriva npm start i terminalen.




____________________________________________________________________________________

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

