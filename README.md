# Chapter 1

> Install the *Angular CLI* with the help of the NodeJS package manager: `npm install -g @angular/cli`.
>
> Create a new project in the root of your git repository by using the CLI: `ng new online-shop`.
>
> Navigate inside the project folder, Start the project and open its home page in your browser: `ng serve --start`.

# Chapter 2

> Create a new Angular Component for displaying a single product's details. You can use the CLI command `ng generate component <component-name>` to achieve this.
>
> Create an Angular component for displaying a list of products. Hint: use the `*ngFor` directive.
>
> Add some CSS to each of the components to make them look nicer.

# Chapter 3

> Add a button next to each product from the product list. You can use it to navigate to a specific product's detail page.
>
> From the detail page of the product, the user may add it to his shopping cart (by pressing a button).
>
> Add Routing to your project and implement a navigation between the list of all products and the product detail page. Use [`<router-outlet>`](https://angular.io/guide/router#router-outlet) as a placeholder for the currently displayed component in your app.
>
> Add a navigation which redirects users from the default path ('/') to the '/products' page and displays by default the list of all products.
>
> Enhance your app with routing parameters, such that you can navigate to a specific product's detail page. Hint: Use [`snapshot`](https://angular.io/guide/router#snapshot-the-no-observable-alternative) to capture the product's ID as a navigation parameter and display it in the details page.

# Chapter 4

> Use HttpClient to read the products from the backend to fill in the product list.
>
> When navigating to the product detail page, read the product information from the backend.
>
> Add a new "Delete" button on the detail page, which calls the backend to remove a product from the catalogue.
>
> Add a new "Checkout" button on the shopping cart page, which creates a new order on the backend. **Note**: The response of this request may require you to set the `responseType` flag on the HttpClient options parameters as here `this.httpClient.post('/api/orders', data, { responseType: 'text' })`.

# Chapter 5

> Add a new "Edit" button on the detail page. Pressing it should open a new view, which uses reactive forms to update the properties of the product. The view should have two buttons: "Cancel" (which undos all the changes) and "Save" (which calls the backend to persist the changes).
>
> Add some validation to your form (ex: check that the fields are not empty, that the price and weight inputs contain only numbers, etc.)
>
> Also create a new "Add" button on the product list. Pressing this button should open a view for creating a new product (which the same structure and buttons as the edit view).

# Chapter 6

> Create a new login view, containing a text input for the username, a password input for the password and a login button.
>
> Automatically redirect the user to the login view each time he opens or refreshes the application. When pressing the login button, send an appropriate request to the backend. If the request succeeds, redirect the user to the product page, otherwise display an error message.
>
> Use the roles returned by the backend to disable the edit, create and delete buttons if the user is not an administrator. Only allow customers to view the shopping cart and to add products in it.

# Chapter 7

> Add NGRX to your app by:
>  - Creating a reducer for each page,
>  - Adding actions for each user input handler, data load event, etc.
>  - Adding effects to react on the data loading actions and call the services,
>  - Dispatching the actions and selecting the state **only** inside the smart components.
>
> Hints:
>  - Make sure to also have a loading flag indicator in each page's state,
>  - Use the async pipe inside the smart components to not pass `Observables` to dumb components,
>  - Install the [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) Chrome plugin to be able to debug your store.
   >  - Also add the [Ngrx Store DevTools](https://ngrx.io/guide/store-devtools/install) to your application for it to work. 

# Chapter 8

> Install and use [Material Design](https://material.angular.io/guide/getting-started) in your Online Shop app. Replace some of your "plain" HTML components with [Material Components](https://material.angular.io/components/categories).
> For example: Replace your plain table with [Material Table](https://material.angular.io/components/table/overview) and your plain buttons with [Material Buttons](https://material.angular.io/components/button/overview)
