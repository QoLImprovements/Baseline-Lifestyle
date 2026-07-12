/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-large",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707979",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    }
  ],
  "name": "Cookie, butter or sugar, with icing or filling other than chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 72.7,
    "energy_kcal": 433.0,
    "fat_g": 14.9,
    "fibre_g": 0.4,
    "folate_ug": 41.0,
    "iron_mg": 1.21,
    "magnesium_mg": 7.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 59.0,
    "potassium_mg": 67.0,
    "protein_g": 3.38,
    "salt_g": 0.51,
    "sat_fat_g": 6.9,
    "sodium_mg": 204.0,
    "sugar_g": 45.9,
    "vitamin_a_ug": 151.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.65,
    "vitamin_k_ug": 8.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707979",
  "state": "Unspecified",
  "subcategory": "Cookies and brownies",
  "tags": [
    "cookies-and-brownies",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
