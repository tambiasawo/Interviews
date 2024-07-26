# Take-Home Assignment: Buildings List Application

**Time Estimate:** This task should take approximately 2-3 hours to complete.

## Objective

You have been paired with a junior developer and tasked with creating a high-quality application that manipulates some buildings data via an in-house API. You both decided that the junior would produce a first draft and that you would then review and fix any problems. There are a couple obvious issues that the junior developer hasn't been able to fix on their own...

1. **Add Building:** This feature doesn't work quite right. Find and fix the bugs.
2. **Loading State:** The underlying API is a bit slow. Implement a loading state so the user knows what's going on.
> With those known issues out of the way, explore the application and implement whatever other changes seem necessary. If you can, provide some helpful feedback to the junior developer about what else you've fixed and why.
3. **Usability Improvements:** What other issues could use some attention (UX problems, bugs, code quality)? Improve or change whatever else seems necessary or valuable to you.


## Setup
Update `API_ADDRESS` in `constants.jsx` to use a unique identifier of your choosing. This will ensure that the data you're working with is yours and not that of another candidate. Then, set up your environment with:

```shell
npm install
```
```shell
npm start
```
---
## API Endpoints Documentation

#### Get all buildings
- __Method__: `GET`
- __Endpoint__: `/<job-candidate-name>/buildings`
- __Example Return Structure(on success)__:
    ```json
    [
        {
            "city": null,
            "country": null,
            "id": 1,
            "name": "Nakatomi Plaza",
            "postal_zip_code": null,
            "street_address": "2121 Avenue of the Stars"
        },
        {
            "city": "Vancouver",
            "country": "Canada",
            "id": 2,
            "name": "World Building",
            "postal_zip_code": "A1B 2C3",
            "street_address": "123 Waterfront Street"
        }
    ]
    ```

#### Add a building
- __Method__: `POST`
- __Endpoint__: `/<job-candidate-name>/buildings`
- __Request Body Parameters__: 
    - `street_address` (required) String
    - `name` (required) String
    - `country` (optional) String
    - `postal_zip_code` (optional) String
    - `street_address` (optional) String
- __Example Return Structure(on success)__:
    ```json
    {
        "city": null,
        "country": null,
        "id": 5,
        "name": "Example name",
        "postal_zip_code": null,
        "street_address": "123 Easy Street"
    }
    ```
- __Example Return Structure(on request error)__:
    ```json
    {
        "error": "Invalid request body"
    }
    ```
- __Example Return Structure(on field error)__:
    ```json
    {
        "errors": [
            {
                "field": "street_address",
                "message": "Expected street_address to be a non-empty string, got "
            }
        ]
    }    
    ```

#### Delete a building
- __Method__: `DELETE`
- __Endpoint__: `/<job-candidate-name>/buildings/<building-id>`
- __Example Return Structure(on success)__:
    ```json
    {
        "message": "Building deleted successfully!"
    }
    ```
- __Example Return Structure(on request error)__:
    ```json
    {
        "error": "Building <building-id> not found."
    }
    ```
