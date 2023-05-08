---
outline: deep
---
# PHP

The Nudeny PHP Library provides a set of tools to enable classification and detection capabilities in your PHP projects. To get started, simply import the Nudeny class into your code and use its static methods to perform classification and detection tasks.

::: tip
The examples provided here demonstrate the usage of APACHE in conjunction with XAMPP for serving web content.
:::

## Installation

```
composer require nudeny/nudeny
```

## Using Form data
### Creating Form in `index.php`


First, create a form inside your index.php file:

```html
<!DOCTYPE html>
<html>
<body>
    <form action="submit_form.php" method="post" enctype="multipart/form-data">
        <label for="image">Image:</label>
        <input type="file" id="files" name="image"><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
```

Then, set the form action to submit_form.php, you can name it anything you want as long as the filename is the same.

### Inside the submit_form.php file:
```php
<?php
require_once 'Nudeny.php';

use Nudeny\Nudeny\Nudeny;

    $file = $_FILES['image'];
    $response = Nudeny::classifyMultiPartForm($file);
    echo $response;
```

In the example above, use the `$_FILES` superglobal array to retrieve the uploaded image file, and pass it as a parameter to the `classifyMultiPartForm` static method of the `Nudeny` class. This method performs the classification and returns a response.

## Classification

 ### classifyUrl

Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `urls` | `array` | array of image URLs

 return value `JSON string`

 example: 
 ```php
 <?php
require_once 'Nudeny.php';

use Nudeny\Nudeny\Nudeny;

    $file = $_FILES['image'];
    $response = Nudeny::classifyUrl(array("test", 'test'));
    echo $response;
 ```
 ### classifyMultiPartForm 

Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `file` | `$_FILE` | file superglobal containing image from form

 return value `JSON string`

 example: 
 ```php
 <?php
require_once 'Nudeny.php';

use Nudeny\Nudeny\Nudeny;

    $file = $_FILES['image'];
    $response = Nudeny::classifyMultiPartForm($file);
    echo $response;
 ```
 ## Detection
 ### detectUrl

Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `urls` | `array` | array of image URLs

 return value `JSON string`

 example: 
 ```php
 <?php
require_once 'Nudeny.php';

use Nudeny\Nudeny\Nudeny;

    $file = $_FILES['image'];
    $response = Nudeny::detectUrl(array("test", 'test'));
    echo $response;
```
 ### detectMultiPartForm

Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `file` | `$_FILE` | file superglobal containing image from form

 return value `JSON string`

 example: 
 ```php
 <?php
require_once 'Nudeny.php';

use Nudeny\Nudeny\Nudeny;

    $file = $_FILES['image'];
    $response = Nudeny::detectMultiPartForm($file);
    echo $response;
```
 ## Censor
 ### censorUrl

Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `urls` | `array` | array of image URLs

 return value `JSON string`

 example: 
 ```php
 <?php
require_once 'Nudeny.php';

use Nudeny\Nudeny\Nudeny;

    $file = $_FILES['image'];
    $response = Nudeny::censorUrl(array("test", 'test'));
    echo $response;
```
 ### censorMultiPartForm

Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `file` | `$_FILE` | array of image URLs

 return value `JSON string`

 example: 
 ```php
 <?php
require_once 'Nudeny.php';

use Nudeny\Nudeny\Nudeny;

    $file = $_FILES['image'];
    $response = Nudeny::censorMultiPartForm($file);
    echo $response;
```

::: tip
When working with JSON data in your PHP applications, you can use the built-in `json_decode()` function to convert a JSON string into a PHP array.
:::