---
outline: deep
---

# Python

  

## Basic Usage of Nudeny API


The Nudeny API can be easily accessed using Python's `requests` module. To use the module, install it by running:

```
npm install requests
```
Then, import it and create a `form_data` object containing the file(s) you want to analyze. You can then make a POST request to the Nudeny API with this object:
```python
import requests

form_data = {
    "files": open("./images/mch05.jpg", "rb"),
    "files": open(
        "./images/1661045266_4-titis-org-p-nude-male-posing-chastnaya-erotika-5.jpg",
        "rb",
    ),
}
response = requests.post("https://ec2-18-136-200-224.ap-southeast-1.compute.amazonaws.com/censor/", files=form_data)

print(response.content)

```
With the basic usage of the Nudeny API in Python, you can easily create a request to the API using the `requests` method. However, if you want to save the censored version of an image to your local machine, the Nudeny API module for Python can greatly simplify the process by abstracting away some of the underlying code. This makes it easier to use the Nudeny API to censor images and protect your content, without needing to worry about the details of the implementation.

## Installation

To install the Nudeny API module for Python, run:
```
pip install nudeny
```
:::tip
we recommend setting-up virtual environment so that the dependency is not installed globally 
:::

## Classification use case

The Nudeny API provides a classification functionality that can classify images as safe or unsafe. You can use the `Classify` class to access this functionality.

### imageClassify 

 Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `paths` | `list` | List of all Image path

Return value `dict`

Example:

```python
from nudeny import Classify

classify = Classify()

paths = [
    './sample.jpg',
    './sample2.png',
]

response = classify.imageClassify(paths=paths)
print(response)
```

### imageClassifyUrl 

 Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `paths` | `list` | List of Image URL or data URI

Return value `dict`

Example:
```python
from nudeny import Classify

classify = Classify()

urls = [
    '...URL',
    '...URL'
]

response = classify.imageClassifyUrl(urls=urls)
print(response)
```
## Detection use case

The Nudeny API provides a detection functionality that can detect exposed skin in images. You can use the `Detect` class to access this functionality.

### detectExposed


 Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `paths` | `list` | List of Image path

Return value `dict`

Example:
```python
from nudeny import Detect

detect = Detect()

paths = [
    './sample.jpg',
    './sample2.png',
]

response = detect.detectExposed(paths=paths)
print(response)
```
### detectExposedFromUrl

 Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `paths` | `list` | List of Image URL or data URI

Return value `dict`

Example:
```python
from nudeny import Detect

detect = Detect()

urls = [
    '...URL',
    '...URL'
]

response = detect.detectExposedFromUrl(urls=urls)
print(response)
```
## Censor use case
The Nudeny API provides a censoring functionality that can censor images containing exposed skin. You can use the `Detect` class to access this functionality

### censorExposed

 Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `paths` | `list` | List of Image path
 | `save_path`| `str` | Save path

Return value `dict`


Example:
```python
from nudeny import Detect

detect = Detect()

paths = [
    './sample.jpg',
    './sample2.png',
]
save_path = './Path'

response = detect.censorExposed(paths=paths, save_path=save_path)
print(response)
```
### censorExposedFromUrl

 Parameters
 | Name | Data Type | Description
 | ----| ---- | ---- |
 | `paths` | `list` | List of Image URL or data URI
 | `save_path`| `str` | Save path

Return value `dict`

Example:
```python
from nudeny import Detect

detect = Detect()

urls = [
    '...URL',
    '...URL'
]
save_path = './Path'

response = detect.censorExposedFromUrl(urls=urls, save_path=save_path)
print(response)
```

In both cases, the `save_path` argument specifies where to save the censored image.
