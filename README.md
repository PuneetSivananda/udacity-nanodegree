### Project Notes

- Create a API for image resizing

- Packages that might be used for handling the fs:
    * Inbuilt
        - path, os, fs
        - crud for fs
        - http/https
        - url  ??
        - tls/ssl  add, cors middleware
    * External
        - express


- Usecases
    - Resize feature endpoint  [O]
    - Caching for the image    [O]
    - Tests                    [X]

- API Endpoints Documentation
    - GET ImagePlaceHolder?file=%width=%&height=%

- Notes:
    - API returns image as a placeholder
    - URL Query Params
        - name: ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica']
        - width: pixels
        - height: pixels
    - if the processed image exists serve from cache

- Resize feature of the API:
    - Read photo from request body
    - From query params get width and height
    - Store this feature in process folder
    - User provides the image and returns the image in response
    - URL Query Params
        - name: ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica']
        - width: pixels
        - height: pixels