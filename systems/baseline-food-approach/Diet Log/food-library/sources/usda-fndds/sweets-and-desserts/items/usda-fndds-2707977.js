/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-vienna-finger",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707977",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.5,
      "key": "1-vienna-finger",
      "kind": "unit",
      "label": "1 Vienna finger"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 12.2,
      "key": "1-snackwell-s-cookie",
      "kind": "unit",
      "label": "1 Snackwell's cookie"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    }
  ],
  "name": "Cookie, vanilla sandwich, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 78.2,
    "energy_kcal": 423.0,
    "fat_g": 10.4,
    "fibre_g": 2.1,
    "folate_ug": 93.0,
    "iron_mg": 2.25,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 104.0,
    "protein_g": 4.17,
    "salt_g": 0.885,
    "sat_fat_g": 3.18,
    "sodium_mg": 354.0,
    "sugar_g": 37.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.31,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707977",
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
