---
outline: deep
---
# PHP

It is also possible for the developer to send a request to Nudeny Rest API with PHP. All endpoints will still work with PHP.

::: tip
The examples provided here demonstrate the usage of APACHE in conjunction with XAMPP for serving web content.
:::

## Using Form data
### Creating Form in `index.php`

First, create a form inside your index.php file:

```html
<!DOCTYPE html>
<html>
<body>
  <form action="submit_form.php" method="post" enctype="multipart/form-data">
    <label for="image">Image:</label>
    <input type="file" id="files" name="files"><br>
    <input type="submit" value="Submit">
  </form>
</body>
</html>
```

Then, set the form action to submit_form.php, you can name it anything you want as long as the filename is the same.

### Inside the submit_form.php file:
```php
<?php
// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // File details
  $file = $_FILES['files'];
  $fileName = $file['name'];
  $fileType = $file['type'];
  $fileTmpName = $file['tmp_name'];
  $fileError = $file['error'];

  // Check for file upload errors
  if ($fileError === UPLOAD_ERR_OK) {
    // Prepare curl options
    $url = 'http://127.0.0.1:8000/classify/';
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array(
      'accept: application/json',
      'Content-Type: multipart/form-data'
    ));
    // Set the request body as a multipart/form-data
    $postData = array(
      'files' => curl_file_create($fileTmpName, $fileType, $fileName)
    );
    curl_setopt($curl, CURLOPT_POSTFIELDS, $postData);
    // Send the request
    $response = curl_exec($curl);

    // Check for curl errors
    if (curl_errno($curl)) {
      $error = curl_error($curl);
      // Handle the error, e.g. by logging or displaying an error message
      echo "cURL error: " . $error;
    }

    // Close curl
    curl_close($curl);

    // Handle the response
    if ($response) {
      // Handle the response, e.g. by parsing the JSON or displaying the result
      echo "Response: " . $response;
    } else {
      // Handle the error, e.g. by logging or displaying an error message
      echo "Error sending HTTP request";
    }
  } else {
    // Handle file upload error, e.g. by logging or displaying an error message
    echo "File upload failed with error code: " . $fileError;
  }
}
?>
```

In the example above, we perform a classification using the `/classify` endpoint. If you want to perform detection and censoring, just change the endpoint to `/detect` or `/censor`.

```php
$url = 'http://127.0.0.1:8000/<endpoint>/';
```

## Request URLs

The example above demonstrates how to make an API request with image file data sent through form data. It is also possible to perform requests with URL data for endpoints that require it. Here's an example in PHP:

```php
// Set the URL to make the API request
$url = "http://127.0.0.1:8000/classify-url/";

// Initialize cURL
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Set headers for the request
$headers = array(
    "Accept: application/json",
    "Content-Type: application/json",
);

curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

// Set the data for the request
$dataurl = base_url().'assets/img/posts/'.$post_image;
$data = <<<DATA
[
    {
        "source" : "$dataurl"
    }
]
DATA;

curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

// Execute the API request
$resp = curl_exec($curl);

// Close cURL
curl_close($curl);

// Parse the response data
$data_response = json_decode($resp);

```

If you want to perform a request to a different endpoint, such as `/classify-url` or `/censor-url`, you can simply update the $url variable accordingly.

```php
$url = 'http://127.0.0.1:8000/<endpoint>/';
```

In this example, we did not include an example of sending form data in `index.php` because it is not required when making requests to our URL endpoints. However, if you wish to send an image URL using an `input` text field, you can modify your `index.php` accordingly.