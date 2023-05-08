---
outline: deep
---

# Dart

  

Dart is used for mobile development primarily through the Flutter framework, which is a UI toolkit developed by Google. Flutter allows developers to build natively compiled applications for mobile (iOS and Android), desktop, and web platforms from a single codebase using Dart as the programming language.

  

Nudeny API could also be implemented using Dart programming language.

  
  

## Installation

First you will need to install the Nudeny API in the pub dev:

With Dart:

```dart
dart pub add nudeny
```

or with Flutter:
```dart
flutter pub add nudeny
```

you can also install this package in your flutter project by modifying your `pubsec.yaml`

```yaml
dependencies:
    nudeny: ^0.0.1
```

then, run:

```
flutter pub get
```

  

## Nudeny Implementation

## Classification

### classify

To classify images in the `paths` list, you can use the `nudeny.classify(List<String>)` method. 

Parameters

| Name | Data Type | Description
| ----| ---- | ---- |
| `paths` | `List<String>` | List of image paths.

Return value `Map<dynamic>`

```dart
import 'package:nudeny/nudeny.dart'; 


void main() async { 
  var nudeny = Nudeny();
  var classifyResult = await nudeny.classify([ './Nudeny/testing/blackbuck.bmp', './Nudeny/testing/4f6e821141824b9ef81f82e7cf341288.jpg' ]); 
  print(classifyResult);
}
```

### classifyUrl
To classify images in the `urls`, you can use the `nudeny.classifyUrl(List<String>)` method.

Parameters
| Name | Data Type | Description
| ----| ---- | ---- |
| `urls` | `List<String>` | List of image urls.

Return value `Map<dynamic>`
```dart
import 'package:nudeny/nudeny.dart'; 

void main() async { 
  var nudeny = Nudeny();
  var classifyUrlResult = await nudeny.classifyUrl([
    "https://filesamples.com/samples/image/jfif/sample1.jfif",
    "https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png",
    "http://digitalcommunications.wp.st-andrews.ac.uk/files/2019/04/JPEG_compression_Example.jpg"
  ]);

  print(classifyUrlResult);
}
```


  

## Detection

### detect
to detect images in the `paths`, you can use the `nudeny.detect(List<String>)` method

Parameters

| Name | Data Type | Description
| ----| ---- | ---- |
| `paths` | `List<String>` | List of image paths.

Return value `Map<dynamic>`

```dart
import 'package:nudeny/nudeny.dart'; 


void main() async { 
  var nudeny = Nudeny();
  var detectResult = await nudeny.detect([
    './Nudeny/testing/blackbuck.bmp',
    './Nudeny/testing/4f6e821141824b9ef81f82e7cf341288.jpg'
  ]);

  print(detectResult);
}
```
### detectUrl

to detect images in the `urls`, you can use the `nudeny.detectUrl(List<String>)` method

Parameters

| Name | Data Type | Description
| ----| ---- | ---- |
| `urls` | `List<String>` | List of image urls.

Return value `Map<dynamic>`


```dart
import 'package:nudeny/nudeny.dart'; 


void main() async { 
  var nudeny = Nudeny();
  var detectUrlResult = await nudeny.detectUrl([
    "https://filesamples.com/samples/image/jfif/sample1.jfif",
    "https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png",
    "http://digitalcommunications.wp.st-andrews.ac.uk/files/2019/04/JPEG_compression_Example.jpg"
  ]);

  print(detectUrlResult);
}
```
  

## Censorship

### censor

to censor images in the `paths`, you can use the `nudeny.censor(List<String>)` method

Parameters

| Name | Data Type | Description
| ----| ---- | ---- |
| `paths` | `List<String>` | List of image paths.

Return value `Map<dynamic>`

```dart
import 'package:nudeny/nudeny.dart'; 


void main() async { 
  var nudeny = Nudeny();
  var censorResult = await nudeny.censor([
    './Nudeny/testing/blackbuck.bmp',
    './Nudeny/testing/4f6e821141824b9ef81f82e7cf341288.jpg'
  ]);

  print(censorResult);
}
```
### censorUrl

to censor images in the `urls`, you can use the `nudeny.censorUrl(List<String>)` method

Parameters

| Name | Data Type | Description
| ----| ---- | ---- |
| `urls` | `List<String>` | List of image urls.

Return value `Map<dynamic>`

```dart
import 'package:nudeny/nudeny.dart'; 


void main() async { 
  var nudeny = Nudeny();
  var censorUrlResult = await nudeny.censorUrl([
    "https://filesamples.com/samples/image/jfif/sample1.jfif",
    "https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png",
    "http://digitalcommunications.wp.st-andrews.ac.uk/files/2019/04/JPEG_compression_Example.jpg"
  ]);

  print(censorUrlResult);
}
```