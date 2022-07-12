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
  - GET http://localhost:3000/api/v1/resize?name=encenadaport&width=300&height=300

- To Test the API Locally:

  - use this given endpoint to check if the API is up and running
    - http://localhost:3000/api/v1/health
  - to use the IMAGE Processing API visit this URL
    - http://localhost:3000/api/v1/resize?name=encenadaport&width=300&height=300
    - Image is created for the first time and served to the user
    - Subsequent requests the file is served from the local filesystem and not generated twice.
    - check the response time to confirm the same

- Query Params Sample values:
  - API returns image as a placeholder
  - URL Query Params
    - name: ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica']
    - width: 200
    - height: 400
