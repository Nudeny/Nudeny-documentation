# Dart

Dart is used for mobile development primarily through the Flutter framework, which is a UI toolkit developed by Google. Flutter allows developers to build natively compiled applications for mobile (iOS and Android), desktop, and web platforms from a single codebase using Dart as the programming language.

Nudeny API could also be implemented using Dart programming language.

:::tip
For now the example provided here are for endpoints for URL only.
:::

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

void main() async {
  // Define the data to be sent in the request body
  var data = [{'source': 'IMAGE URL'}];

  // Send a POST request using the http package
  var resp = await http.post(
    Uri.parse('http://127.0.0.1:8000/classify-url/'), // URL for the API endpoint
    headers: {'Content-Type': 'application/json; charset=UTF-8'}, // Set request headers
    body: json.encode(data), // Encode the data as JSON and set as request body
  );

  // Print the response body
  print(resp.body);
}

```

In this code, we are using the http package in Dart to send a POST request to a specific API endpoint `http://127.0.0.1:8000/classify-url/`. The request body is set as JSON-encoded data using the `json.encode()` function from the dart:convert library. The response from the API is then printed to the console using `print()` function.

You can change the endpoints to `/detect-url` or `/censor-url` to perform image detection or censorship tasks on the provided URL.