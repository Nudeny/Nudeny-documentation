---
outline: deep
---
# JavaScript

Integrating Nudeny API into your JavaScript project is a breeze, thanks to its comprehensive documentation and well-organized codebase. Regardless of whether you're working with client-side or backend JavaScript (NodeJS), Nudeny API offers seamless implementation process.

## Basic Client-side JavaScript implementation

To use Nudeny API in your client-side JavaScript code, you will first need to create an HTML form that allows users to upload files:

```HTML
<form id="nudeny-form" method="POST"> 
	<input type="file" name="files" /> 
	<input type="submit" /> 
</form>
```
Next, you can use JavaScript to access the form and submit it to the Nudeny API for classification. The following code uses the Fetch API to send the form data as a POST request to the Nudeny API server running on endpoint POST `/classify`:

```JavaScript
const form = document.getElementById("nudeny-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    fetch("http://ec2-18-136-200-224.ap-southeast-1.compute.amazonaws.com/classify/", {
        method: "POST",
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
});
```
The code above attaches an event listener to the form's submit button. When the button is clicked, it prevents the default form submission behavior and instead sends a POST request to the Nudeny API server with the form data. The server will classify the uploaded file(s) and return the result as a JSON object. The code then logs the result to the console.

Here's an example of what the result JSON object might look like:
```JSON
{
  Prediction: [
      {
          filename: "sample-image.jpg",
          class: "nude",
      },
  ],
},
```
If you prefer to use the async/await syntax in JavaScript, you can use the following code instead:
```JavaScript
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    try {
        const response = await fetch("http://ec2-18-136-200-224.ap-southeast-1.compute.amazonaws.com/classify/", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
});

```
This code does the same thing as the previous example, but uses the `async` and `await` keywords to handle the asynchronous nature of the Fetch API.

## Nudeny Implementation using Node JS

To integrate Nudeny API into your Node.js project, you can install the `nudeny` package using the Node Package Manager (NPM). First, open the terminal and run the following command:
```
npm install nudeny
```
After installing `nudeny`, you can require it in your code using the `require` keyword:
```
const nudeny = require('nudeny')
```
Next, you can create an array of file paths or URLs that you want to classify:

::: warning
Some images used in this example contains nudity.
:::
```JavaScript
const PATHS = [
    "./images/4f6e821141824b9ef81f82e7cf341288.jpg",
    "./images/1661045266_4-titis-org-p-nude-male-posing-chastnaya-erotika-5.jpg",
    "./images/84359657870617d4692b724f4935ac5b.jpg",
    "./images/mch05.jpg",
    "./images/s-l1600.jpg",
    "./images/View_of_Pacific_Star_Building_at_Gil_Puyat_Avenue_as_of_June_2015.jpg",
    "./images/Wainwright_124825_2.JPG.jpg",
    "./images/Wild-Chameleon-Reptile-With-Beautiful-Colors-400x300.jpg",
];

const URLS = [
    "https://filesamples.com/samples/image/jfif/sample1.jfif",
    "https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png",
    "http://digitalcommunications.wp.st-andrews.ac.uk/files/2019/04/JPEG_compression_Example.jpg",
    "https://filesamples.com/samples/image/jpeg/sample_640%C3%97426.jpeg",
    "https://people.math.sc.edu/Burkardt/data/bmp/blackbuck.bmp",
    "https://static-ca-cdn.eporner.com/gallery/XI/9y/GKjer8q9yXI/770450-completely-nude-p.jpg",
    "https://external-preview.redd.it/v6wIR5kXQvzMKryDJfDmEqt0so9TLuNE0XN1Ps73O-M.jpg?auto=webp&v=enabled&s=d21bbcd1707686d4a63447fb8e5ab6e10111470d",
    "https://external-preview.redd.it/sxXLzNmT8CM9klV5vAzLKy9gIJKDfyK4Kfg0G4lLzXc.jpg?auto=webp&v=enabled&s=147af31c35a1cf56645dd9592f4ed03cad38b0c1",
];

```
## Classification
### classify
To classify images in the `PATHS` array, you can use the `nudeny.classify()` method.

 Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `paths` | `array` | Array of image file paths.

Return value `promise`

Example:
```JavaScript
 nudeny.classify(PATHS)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
```
### classifyURL
To classify images in the `URLS` array, you can use the `nudeny.classifyUrl()` method.

 Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `urls` | `array` | Array of image url source.

Return value `promise`

Example:
```JavaScript
nudeny.classifyUrl(URLS)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
 ```
 ### classifyMultiPartForm

 Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `form` | `object` | Multipart/form data containing image files.

Return value `promise`

Example: 

To send form data using Node.js, you will need to install the `form-data` package:
 ```
 npm install form-data
 ```

 ```JavaScript
 const FormData = require("form-data");
const formData = new FormData();
const fs = require("fs");

PATHS.forEach((path) => {
    const stream = fs.createReadStream(path);
    formData.append("files", stream);
});

nudeny
    .classifyMultiPartForm(formData)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));

 ```
 Here, we're creating a new `FormData` object and adding each file in the `PATHS` array to it using a `forEach` loop. We're using the `fs` (file system) module in Node.js to create a read stream for each file and adding it to the `FormData` object.

Finally, we're passing the `FormData` object to the `classifyMultiPartForm` method of the `nudeny` object. This method sends a multi-part form to the Nudeny API for censoring. If the API call is successful, the response data is logged to the console. If there's an error, the error is logged to the console.


## Detection 

The implementation for the detection is similar to the classification. First, you can detect images in the `PATHS` array like this:

### detect

 Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `paths` | `array` | Array of image file paths.

Return value `promise`

Example:
```JavaScript
nudeny
    .detect(PATHS)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
```
### detectUrl
To detect images from `URLS`, you can use the following code.

 Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `urls` | `array` | Array of image url source.

Return value `promise`


Example:
```JavaScript
nudeny
    .detectUrl(URLS)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
```
Example:
### detectMultiPartForm

 Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `form` | `object` | Multipart/form data containing image files.

Return value `promise`

Example:

If you want to send form data using Node.js, you will need to install the `form-data` package:
```
npm install form-data
```
Then, you can use the following code to detect images from multiple paths:
```Javascript
const FormData = require("form-data");
const formData = new FormData();
const fs = require("fs");

PATHS.forEach((path) => {
    const stream = fs.createReadStream(path);
    formData.append("files", stream);
});

nudeny
    .detectMultiPartForm(formData)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
```
In this code, we create a new `FormData` object and append each file in the `PATHS` array to it. Then, we pass the `formData` object to the `detectMultiPartForm` method to detect images from multiple paths. The response is then logged to the console if successful, or an error message is logged if there was an error.

## Censorship
The `nudeny` package also provides methods for censoring inappropriate content in images. The implementation for the censoring is similar to the classification and detection methods:

### censor 
This method will censor inappropriate content in the images specified by the `PATHS` array.

 Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `paths` | `array` | Array of image file paths.

Return value `promise`

Example:

```JavaScript
nudeny
    .censor(PATHS)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
```
### censorUrl
If you want to use URLs instead of local files, you can use the `censorUrl` method. This method will censor inappropriate content in the images  specified by the `URLS` array.

 Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `urls` | `array` | Array of image url source.

Return value `promise`

Example:

```JavaScript
nudeny
    .censorUrl(URLS)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
```

### censorMultiPartForm 
 Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `form` | `object` | Multipart/form data containing image files.

Return value `promise`

Example:
If you want to use a multi-part form to send the images to be censored, you can use the `censorMultiPartForm` method:
```JavaScript
const FormData = require("form-data");
const formData = new FormData();
const fs = require("fs");

PATHS.forEach((path) => {
    const stream = fs.createReadStream(path);
    formData.append("files", stream);
});

nudeny
    .censorMultiPartForm(formData)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));

```
This method will censor inappropriate content in the images specified by the `FormData` object, which is created by appending the files from the `PATHS` array.


