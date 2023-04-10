---
outline: deep
---
# Endpoints

The table below lists the available endpoints for the Nudeny API. Each endpoint serves a specific purpose in detecting and censoring nudity in images. The API supports both local image files and URLs as input. The response of each endpoint includes information about the detected or censored image, such as bounding boxes for the exposed parts and URLs of the censored version of the image.

::: tip
if you don't notice, every method are `POST` request.
:::

| Endpoint | Method | Description
| ----- | ----- | ----- |
| /classify | POST | This endpoint classifies images to determine if they contain nudity, sexy or are safe for work.|
| /classify-url | POST | This endpoint is similar to the classify endpoint, but instead of providing a local image file, you provide an image URL in the request body. |
|/detect |POST | This endpoint is used to detect exposed body parts such as male and female genitalia, buttocks, and female breasts. The response contains the bounding boxes for the detected exposed parts.
|/detect-url |POST | This endpoint is similar to the detect endpoint, but instead of providing a local image file, you provide an image URL in the request body.
|/censor |POST | This endpoint detects exposed body parts such as male and female genitalia, buttocks, and female breasts. The response contains the bounding boxes for the detected exposed parts, as well as the image URL of the censored version of the image(s).
|/censor-url |POST | This endpoint is similar to the censor endpoint, but instead of providing a local image file, you provide an image URL in the request body.

## Sample Response JSON
The JSON responses format below is for five different HTTP POST requests related to image classification, detection, and censorship. Each request provides a JSON object containing an array of predictions for one or more images, including information about the image file or URL, the class of the image (e.g., "safe", "nude", "sexy"), and any detected exposed body parts. The response formats differ slightly depending on the specific endpoint, such as whether the image is being classified, detected, or censored, and whether the input is a local file or URL.


### POST `/classify`
```JSON
{
  "Prediction": [
    {
      "filename": "sample.jpg",
      "class": "safe"
    },
    {
      "filename": "sample2.png",
      "class": "nude"
    }
  ]
}
```
### POST `/classify-url`
```JSON
{
  "Prediction": [
    {
      "source": "...URL",
      "class": "nude"
    },
    {
      "source": "...URL",
      "class": "nude"
    }
  ]
}
```
### POST `/detect`
```JSON
{
  "Prediction": [
    {
      "filename": "sample.jpg",
      "exposed_parts": {
        "female_breast": [],
        "female_genitalia": [],
        "male_genitalia": [
          {
            "confidence_score": 61.76939010620117,
            "top": 75,
            "left": 102,
            "bottom": 121,
            "right": 129
          }
        ],
        "buttocks": []
      }
    },
    {
      "filename": "sample2.png",
      "exposed_parts": {
        "female_breast": [],
        "female_genitalia": [],
        "male_genitalia": [],
        "buttocks": [
          {
            "confidence_score": 83.09783339500427,
            "top": 819,
            "left": 621,
            "bottom": 1100,
            "right": 925
          },
          {
            "confidence_score": 82.38601088523865,
            "top": 835,
            "left": 49,
            "bottom": 1125,
            "right": 381
          }
        ]
      }
    }
  ]
}
```
### POST `/detect-url`
```JSON
{
  "Prediction": [
    {
      "source": "...URL",
      "exposed_parts": {
        "female_breast": [
          {
            "confidence_score": 81.59351348876953,
            "top": 293,
            "left": 87,
            "bottom": 413,
            "right": 390
          }
        ],
        "female_genitalia": [
          {
            "confidence_score": 66.92414283752441,
            "top": 446,
            "left": 183,
            "bottom": 533,
            "right": 255
          }
        ],
        "male_genitalia": [],
        "buttocks": []
      }
    },
    {
      "source": "...URL",
      "exposed_parts": {
        "female_breast": [
          {
            "confidence_score": 86.64460182189941,
            "top": 970,
            "left": 2387,
            "bottom": 1504,
            "right": 3099
          }
        ],
        "female_genitalia": [],
        "male_genitalia": [],
        "buttocks": []
      }
    }
  ]
}
```
### POST `/censor`
```JSON
{
  "Prediction": [
    {
      "filename": "sample.jpg",
      "url": "URL OF THE CENSORED IMAGE",
      "exposed_parts": {
        "female_breast": [],
        "female_genitalia": [],
        "male_genitalia": [
          {
            "confidence_score": 61.76939010620117,
            "top": 75,
            "left": 102,
            "bottom": 121,
            "right": 129
          }
        ],
        "buttocks": []
      }
    },
    {
      "filename": "sample.png",
      "url": "URL OF THE CENSORED IMAGE",
      "exposed_parts": {
        "female_breast": [],
        "female_genitalia": [],
        "male_genitalia": [],
        "buttocks": [
          {
            "confidence_score": 83.09783339500427,
            "top": 819,
            "left": 621,
            "bottom": 1100,
            "right": 925
          },
          {
            "confidence_score": 82.38601088523865,
            "top": 835,
            "left": 49,
            "bottom": 1125,
            "right": 381
          }
        ]
      }
    }
  ]
}
```
### POST `/censor-url`
```JSON
{
  "Prediction": [
    {
      "source": "...URL",
      "url": "URL OF THE CENSORED IMAGE",
      "exposed_parts": {
        "female_breast": [
          {
            "confidence_score": 81.59351348876953,
            "top": 293,
            "left": 87,
            "bottom": 413,
            "right": 390
          }
        ],
        "female_genitalia": [
          {
            "confidence_score": 66.92414283752441,
            "top": 446,
            "left": 183,
            "bottom": 533,
            "right": 255
          }
        ],
        "male_genitalia": [],
        "buttocks": []
      }
    },
    {
      "source": "...URL",
      "url": "URL OF THE CENSORED IMAGE",
      "exposed_parts": {
        "female_breast": [
          {
            "confidence_score": 86.64460182189941,
            "top": 970,
            "left": 2387,
            "bottom": 1504,
            "right": 3099
          }
        ],
        "female_genitalia": [],
        "male_genitalia": [],
        "buttocks": []
      }
    }
  ]
}
```