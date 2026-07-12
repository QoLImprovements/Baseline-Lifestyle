/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-large-sandwich",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707912",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "1-little-debbie-cookie",
      "kind": "unit",
      "label": "1 Little Debbie cookie"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    }
  ],
  "name": "Cookie, chocolate chip sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 63.5,
    "energy_kcal": 425.0,
    "fat_g": 17.6,
    "fibre_g": 0.0,
    "folate_ug": 56.0,
    "iron_mg": 1.06,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 94.0,
    "protein_g": 2.94,
    "salt_g": 0.6975,
    "sat_fat_g": 5.88,
    "sodium_mg": 279.0,
    "sugar_g": 38.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.84,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707912",
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
