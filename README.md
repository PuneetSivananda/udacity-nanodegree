### Project README

- Packages that might be used for handling the fs:
    * Inbuilt
        - path, os, fs
        - crud for fs
        - http/https
    * External
        - express


- Usecases
    - Resize feature endpoint  [O]
    - Caching for the image    [O]
    - Tests                    [O]

- API Endpoints Documentation
    - GET ImagePlaceHolder?file=%width=%&height=%

- To Test the API Locally:
    - use this given endpoint to check if the API is up and running
        - http://localhost:3000/api/v1/ping
    - to use the IMAGE Processing API visit this URL
        - http://localhost:3000/api/v1/resize?name=encendaport&width=300&height=300
        - Imageis created for the first time and served to the user
        - Subsequent requests the file is served from the local filesystem and not generated twice.
        - check the response time to confirm the same

- Query Params Sample values:
    - API returns image as a placeholder
    - URL Query Params
        - name: ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica']
        - width: 200
        - height: 400

