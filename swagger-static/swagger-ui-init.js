
window.onload = function() {
  // Build a system
  let url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  let options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "paths": {
      "/api/auth/login": {
        "post": {
          "operationId": "AppController_login",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateUserDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "get all reviews",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/IUser"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/api/profile": {
        "get": {
          "operationId": "AppController_getProfile",
          "parameters": [],
          "responses": {
            "201": {
              "description": "get all reviews",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/IUser"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/api/user": {
        "post": {
          "operationId": "UserController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateUserDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "get all reviews",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/IUser"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "User"
          ]
        }
      },
      "/api/partners/pagination": {
        "get": {
          "operationId": "PartnersController_findAllWithPagination",
          "parameters": [
            {
              "name": "page",
              "required": true,
              "in": "query",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "limit",
              "required": true,
              "in": "query",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "get all partners with pagination",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PartnerResponse"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Partners"
          ]
        }
      },
      "/api/partners": {
        "post": {
          "operationId": "PartnersController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreatePartnerDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "create partner",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Partner"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Partners"
          ]
        },
        "get": {
          "operationId": "PartnersController_findAll",
          "parameters": [],
          "responses": {
            "201": {
              "description": "get all partners",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Partner"
                    }
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Partners"
          ]
        }
      },
      "/api/partners/{id}": {
        "patch": {
          "operationId": "PartnersController_update",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdatePartnerDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "update partner",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Partner"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Partners"
          ]
        },
        "delete": {
          "operationId": "PartnersController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "delete partner"
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Partners"
          ]
        }
      },
      "/api/partners/upload": {
        "post": {
          "operationId": "PartnersController_uploadFile",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FileType"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "upload image",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UploadImageResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Partners"
          ]
        }
      },
      "/api/news/pagination": {
        "get": {
          "operationId": "NewsController_findAllWithPagination",
          "parameters": [
            {
              "name": "page",
              "required": true,
              "in": "query",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "limit",
              "required": true,
              "in": "query",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "get all posts by pages",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NewsResponse"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "News"
          ]
        }
      },
      "/api/news": {
        "post": {
          "operationId": "NewsController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateNewsDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "create post",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/News"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "News"
          ]
        },
        "get": {
          "operationId": "NewsController_findAll",
          "parameters": [],
          "responses": {
            "201": {
              "description": "get all news",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/News"
                    }
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "News"
          ]
        }
      },
      "/api/news/{id}": {
        "get": {
          "operationId": "NewsController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "get one post",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/News"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "News"
          ]
        },
        "patch": {
          "operationId": "NewsController_update",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateNewsDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "update news",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/News"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "News"
          ]
        },
        "delete": {
          "operationId": "NewsController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "delete news"
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "News"
          ]
        }
      },
      "/api/news/upload": {
        "post": {
          "operationId": "NewsController_uploadFile",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FileType"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "upload image",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UploadImageResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "News"
          ]
        }
      },
      "/api/excursions/pagination": {
        "get": {
          "operationId": "ExcursionsController_findAllWithPagination",
          "parameters": [
            {
              "name": "page",
              "required": true,
              "in": "query",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "limit",
              "required": true,
              "in": "query",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "get all posts by pages",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ExcursionResponse"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Excursions"
          ]
        }
      },
      "/api/excursions": {
        "post": {
          "operationId": "ExcursionsController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateExcursionDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "create excursion",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Excursion"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Excursions"
          ]
        },
        "get": {
          "operationId": "ExcursionsController_findAll",
          "parameters": [],
          "responses": {
            "201": {
              "description": "get all excursions",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Excursion"
                    }
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Excursions"
          ]
        }
      },
      "/api/excursions/{id}": {
        "get": {
          "operationId": "ExcursionsController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "get single excursion",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Excursion"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Excursions"
          ]
        },
        "patch": {
          "operationId": "ExcursionsController_update",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateExcursionDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "update review",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Excursion"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Excursions"
          ]
        },
        "delete": {
          "operationId": "ExcursionsController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "delete review"
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Excursions"
          ]
        }
      },
      "/api/excursions/upload": {
        "post": {
          "operationId": "ExcursionsController_uploadFile",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FileType"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "upload image",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UploadImageResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Excursions"
          ]
        }
      },
      "/api/gallery/pagination": {
        "get": {
          "operationId": "GalleryController_findAllWithPagination",
          "parameters": [
            {
              "name": "page",
              "required": true,
              "in": "query",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "limit",
              "required": true,
              "in": "query",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "get all images",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ImageResponse"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Gallery"
          ]
        }
      },
      "/api/gallery": {
        "post": {
          "operationId": "GalleryController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateGalleryDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "create gallery",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Gallery"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Gallery"
          ]
        },
        "get": {
          "operationId": "GalleryController_findAll",
          "parameters": [],
          "responses": {
            "201": {
              "description": "get all images",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Gallery"
                    }
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Gallery"
          ]
        }
      },
      "/api/gallery/{id}": {
        "get": {
          "operationId": "GalleryController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "get  image by id",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Gallery"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Gallery"
          ]
        },
        "delete": {
          "operationId": "GalleryController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "delete image"
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Gallery"
          ]
        }
      },
      "/api/gallery/upload": {
        "post": {
          "operationId": "GalleryController_uploadFile",
          "parameters": [],
          "responses": {
            "201": {
              "description": "upload image",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UploadImageResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Gallery"
          ]
        }
      },
      "/api/reviews": {
        "post": {
          "operationId": "ReviewsController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateReviewDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "create review",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Review"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Reviews"
          ]
        },
        "get": {
          "operationId": "ReviewsController_findAll",
          "parameters": [],
          "responses": {
            "201": {
              "description": "get all reviews",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Review"
                    }
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Reviews"
          ]
        }
      },
      "/api/reviews/{id}": {
        "get": {
          "operationId": "ReviewsController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "get single excursion",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Review"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Reviews"
          ]
        },
        "patch": {
          "operationId": "ReviewsController_update",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateReviewDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "update review",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Review"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Reviews"
          ]
        },
        "delete": {
          "operationId": "ReviewsController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "delete review"
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Reviews"
          ]
        }
      },
      "/api/contacts": {
        "post": {
          "operationId": "ContactsController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateContactDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "create contact",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Contacts"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          }
        },
        "get": {
          "operationId": "ContactsController_findAll",
          "parameters": [],
          "responses": {
            "201": {
              "description": "get all contacts",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Contacts"
                    }
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          }
        }
      },
      "/api/contacts/{id}": {
        "patch": {
          "operationId": "ContactsController_update",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateContactDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "update contact",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Contacts"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          }
        },
        "delete": {
          "operationId": "ContactsController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "delete contact"
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          }
        }
      },
      "/api/pdf": {
        "post": {
          "operationId": "PdfController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreatePdfDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "create pdf document",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PDF"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "PDF"
          ]
        },
        "get": {
          "operationId": "PdfController_findAll",
          "parameters": [],
          "responses": {
            "201": {
              "description": "get all pdfs",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/PDF"
                    }
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "PDF"
          ]
        }
      },
      "/api/pdf/{id}": {
        "get": {
          "operationId": "PdfController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "get single pdf",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/PDF"
                    }
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "PDF"
          ]
        },
        "patch": {
          "operationId": "PdfController_update",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdatePdfDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "update pdf",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PDF"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "PDF"
          ]
        },
        "delete": {
          "operationId": "PdfController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "delete pdf"
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "PDF"
          ]
        }
      },
      "/api/pdf/upload": {
        "post": {
          "operationId": "PdfController_uploadFile",
          "parameters": [],
          "responses": {
            "201": {
              "description": "upload pdf",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UploadImageResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "PDF"
          ]
        }
      },
      "/api/password/forgot": {
        "post": {
          "operationId": "PasswordController_forgotPassword",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ForgotPasswordDto"
                }
              }
            }
          },
          "responses": {
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Password"
          ]
        }
      },
      "/api/password/reset": {
        "post": {
          "operationId": "PasswordController_resetPassword",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ResetPasswordDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "reset password",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/IUser"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Password"
          ]
        }
      },
      "/api/password/change": {
        "post": {
          "operationId": "PasswordController_changePassword",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ChangePasswordDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "change password",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/IUser"
                  }
                }
              }
            },
            "404": {
              "description": "not found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "500": {
              "description": "internal server error"
            }
          },
          "tags": [
            "Password"
          ]
        }
      }
    },
    "info": {
      "title": "Cows Shelter example",
      "description": "The cows shelter API description",
      "version": "1.0",
      "contact": {}
    },
    "tags": [
      {
        "name": "cows",
        "description": ""
      }
    ],
    "servers": [],
    "components": {
      "schemas": {
        "CreateUserDto": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            }
          },
          "required": [
            "email",
            "password"
          ]
        },
        "IUser": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "access_token": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "email",
            "access_token"
          ]
        },
        "PartnerResponse": {
          "type": "object",
          "properties": {
            "partners": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "totalLength": {
              "type": "number"
            }
          },
          "required": [
            "partners",
            "totalLength"
          ]
        },
        "NotFoundResponse": {
          "type": "object",
          "properties": {
            "status_code": {
              "type": "number",
              "default": 404
            },
            "message": {
              "type": "string"
            }
          },
          "required": [
            "status_code",
            "message"
          ]
        },
        "CreatePartnerDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "logo": {
              "type": "string"
            },
            "link": {
              "type": "string"
            },
            "image_id": {
              "type": "string"
            }
          },
          "required": [
            "name",
            "logo",
            "link",
            "image_id"
          ]
        },
        "Partner": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "Partner`s name"
            },
            "logo": {
              "type": "string",
              "description": "Partner`s logo"
            },
            "link": {
              "type": "string",
              "description": "Link to partner`s website"
            },
            "image_id": {
              "type": "string",
              "description": "cloudinary public id of the image"
            }
          },
          "required": [
            "name",
            "logo",
            "link",
            "image_id"
          ]
        },
        "UpdatePartnerDto": {
          "type": "object",
          "properties": {}
        },
        "FileType": {
          "type": "object",
          "properties": {
            "file": {
              "type": "object"
            }
          },
          "required": [
            "file"
          ]
        },
        "UploadImageResponse": {
          "type": "object",
          "properties": {
            "imageUrl": {
              "type": "string"
            }
          },
          "required": [
            "imageUrl"
          ]
        },
        "NewsResponse": {
          "type": "object",
          "properties": {
            "news": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "totalLength": {
              "type": "number"
            }
          },
          "required": [
            "news",
            "totalLength"
          ]
        },
        "CreateNewsDto": {
          "type": "object",
          "properties": {
            "title_ua": {
              "type": "string"
            },
            "title_en": {
              "type": "string"
            },
            "subtitle_ua": {
              "type": "string"
            },
            "subtitle_en": {
              "type": "string"
            },
            "content_ua": {
              "type": "string"
            },
            "content_en": {
              "type": "string"
            },
            "image_url": {
              "type": "string"
            },
            "image_id": {
              "type": "string"
            }
          },
          "required": [
            "title_ua",
            "title_en",
            "subtitle_ua",
            "subtitle_en",
            "content_ua",
            "content_en",
            "image_url",
            "image_id"
          ]
        },
        "News": {
          "type": "object",
          "properties": {
            "title_en": {
              "type": "string",
              "description": "Title in Ua"
            },
            "title_ua": {
              "type": "string",
              "description": "Title in En"
            },
            "subtitle_en": {
              "type": "string",
              "description": "Subitle in Ua"
            },
            "subtitle_ua": {
              "type": "string",
              "description": "Subitle in En"
            },
            "content_en": {
              "type": "string",
              "description": "Text in Ua"
            },
            "content_ua": {
              "type": "string",
              "description": "Text in En"
            },
            "image_url": {
              "type": "string",
              "description": "Image Url"
            },
            "image_id": {
              "type": "string",
              "description": "Image Id"
            }
          },
          "required": [
            "title_en",
            "title_ua",
            "subtitle_en",
            "subtitle_ua",
            "content_en",
            "content_ua",
            "image_url",
            "image_id"
          ]
        },
        "UpdateNewsDto": {
          "type": "object",
          "properties": {
            "title_ua": {
              "type": "string"
            },
            "title_en": {
              "type": "string"
            },
            "subtitle_ua": {
              "type": "string"
            },
            "subtitle_en": {
              "type": "string"
            },
            "content_ua": {
              "type": "string"
            },
            "content_en": {
              "type": "string"
            },
            "image_url": {
              "type": "string"
            },
            "image_id": {
              "type": "string"
            }
          }
        },
        "ExcursionResponse": {
          "type": "object",
          "properties": {
            "excursions": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "totalLength": {
              "type": "number"
            }
          },
          "required": [
            "excursions",
            "totalLength"
          ]
        },
        "CreateExcursionDto": {
          "type": "object",
          "properties": {
            "title_ua": {
              "type": "string"
            },
            "title_en": {
              "type": "string"
            },
            "description_ua": {
              "type": "string"
            },
            "description_en": {
              "type": "string"
            },
            "amount_of_persons": {
              "type": "string"
            },
            "time_from": {
              "type": "string"
            },
            "time_to": {
              "type": "string"
            },
            "image_url": {
              "type": "string"
            },
            "image_id": {
              "type": "string"
            }
          },
          "required": [
            "title_ua",
            "title_en",
            "description_ua",
            "description_en",
            "amount_of_persons",
            "time_from",
            "time_to",
            "image_url",
            "image_id"
          ]
        },
        "Excursion": {
          "type": "object",
          "properties": {
            "title_en": {
              "type": "string",
              "description": "Title in En"
            },
            "title_ua": {
              "type": "string",
              "description": "Title in Ua"
            },
            "description_en": {
              "type": "string",
              "description": "Text in En"
            },
            "description_ua": {
              "type": "string",
              "description": "Text in Ua"
            },
            "amount_of_persons": {
              "type": "string",
              "description": "Amount of Persons for excursion"
            },
            "time_from": {
              "type": "string",
              "description": "Min duration of excursion"
            },
            "time_to": {
              "type": "string",
              "description": "Max duration of excursion"
            },
            "image_url": {
              "type": "string",
              "description": "Image Url"
            },
            "image_id": {
              "type": "string",
              "description": "cloudinary public id for image"
            }
          },
          "required": [
            "title_en",
            "title_ua",
            "description_en",
            "description_ua",
            "amount_of_persons",
            "time_from",
            "time_to",
            "image_url",
            "image_id"
          ]
        },
        "UpdateExcursionDto": {
          "type": "object",
          "properties": {}
        },
        "ImageResponse": {
          "type": "object",
          "properties": {
            "images": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "totalLength": {
              "type": "number"
            }
          },
          "required": [
            "images",
            "totalLength"
          ]
        },
        "CreateGalleryDto": {
          "type": "object",
          "properties": {
            "image_url": {
              "type": "string"
            },
            "image_id": {
              "type": "string"
            }
          },
          "required": [
            "image_url",
            "image_id"
          ]
        },
        "Gallery": {
          "type": "object",
          "properties": {
            "image_url": {
              "type": "string",
              "description": "Url of the image"
            },
            "image_id": {
              "type": "string",
              "description": "cloudinary public id of the image"
            }
          },
          "required": [
            "image_url",
            "image_id"
          ]
        },
        "CreateReviewDto": {
          "type": "object",
          "properties": {
            "name_ua": {
              "type": "string"
            },
            "name_en": {
              "type": "string"
            },
            "text_ua": {
              "type": "string"
            },
            "text_en": {
              "type": "string"
            }
          },
          "required": [
            "name_ua",
            "name_en",
            "text_ua",
            "text_en"
          ]
        },
        "Review": {
          "type": "object",
          "properties": {
            "name_ua": {
              "type": "string",
              "description": "Reviewer`s name in ukrainian"
            },
            "name_en": {
              "type": "string",
              "description": "Reviewer`s name in english"
            },
            "text_ua": {
              "type": "string",
              "description": "Review text  in ukrainian"
            },
            "text_en": {
              "type": "string",
              "description": "Review text in english"
            }
          },
          "required": [
            "name_ua",
            "name_en",
            "text_ua",
            "text_en"
          ]
        },
        "UpdateReviewDto": {
          "type": "object",
          "properties": {}
        },
        "CreateContactDto": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "phone": {
              "type": "string"
            }
          },
          "required": [
            "email",
            "phone"
          ]
        },
        "Contacts": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string",
              "description": "New email"
            },
            "phone": {
              "type": "string",
              "description": "New Phone"
            }
          },
          "required": [
            "email",
            "phone"
          ]
        },
        "UpdateContactDto": {
          "type": "object",
          "properties": {}
        },
        "CreatePdfDto": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string"
            },
            "document_url": {
              "type": "string"
            },
            "document_id": {
              "type": "string"
            }
          },
          "required": [
            "title",
            "document_url",
            "document_id"
          ]
        },
        "PDF": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "description": "Title of the document"
            },
            "document_url": {
              "type": "string",
              "description": "Url of the uploaded document"
            },
            "document_id": {
              "type": "string",
              "description": "Id of the uploaded document"
            }
          },
          "required": [
            "title",
            "document_url",
            "document_id"
          ]
        },
        "UpdatePdfDto": {
          "type": "object",
          "properties": {}
        },
        "ForgotPasswordDto": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            }
          },
          "required": [
            "email"
          ]
        },
        "ResetPasswordDto": {
          "type": "object",
          "properties": {
            "token": {
              "type": "string"
            },
            "password": {
              "type": "string"
            }
          },
          "required": [
            "token",
            "password"
          ]
        },
        "ChangePasswordDto": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            }
          },
          "required": [
            "email",
            "password"
          ]
        }
      }
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  let urls = options.swaggerUrls
  let customOptions = options.customOptions
  let spec1 = options.swaggerDoc
  let swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (let attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  let ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.initOAuth) {
    ui.initOAuth(customOptions.initOAuth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }
  
  window.ui = ui
}
