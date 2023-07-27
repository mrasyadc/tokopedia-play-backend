# tokopedia-play-backend
Midterm task of Generasi GIGIH 3.0 by GoTo Impact by Muhammad Rasyad Caesarardhi (GG3FSGP0448)

# Database Structure
Database are divided into 3 collections (Comment, Product, and Video)
<img width="443" alt="image" src="https://github.com/mrasyadc/tokopedia-play-backend/assets/56964497/e693de4f-5acc-4844-953c-69abde38b250">

- 1 video have many comments but not included in the document inside the video document but are separated. 1 comment are responsible for 1 comment inside a video. a comment is linked to a video.
- 1 video document can have many products. a document in video collection have array of product object ID linked to the product.

# API Structure
API Structure are defined in here
<img width="782" alt="image" src="https://github.com/mrasyadc/tokopedia-play-backend/assets/56964497/41066ef8-891b-42f6-87e7-2b8bbbe8db7a">

# API Spec

**GET /api/**
----
  Returns all videos available in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  [
   {title: "string", url: "string", products: [ObjectId from Product]},
   {title: "string", url: "string", products: [ObjectId from Product]},
   {title: "string", url: "string", products: [ObjectId from Product]}
  ]
}
```
**GET /api/products/:id**
----
  Returns the specified user.
* **URL Params**  
  *Required:* `id=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**
  ```
  {
    products: [
                {title: "string", productURL: "string", price: number},
                {title: "string", productURL: "string", price: number},
                {title: "string", productURL: "string", price: number},
    ]
  }
  ``` 
* **Error Response:**  
  * **Code:** 400  
  **Content:** `{ error : "Error messages" }`
