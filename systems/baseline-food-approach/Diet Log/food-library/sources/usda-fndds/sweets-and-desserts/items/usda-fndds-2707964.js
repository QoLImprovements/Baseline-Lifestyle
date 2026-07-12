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
  "id": "usda-fndds-2707964",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 6.3,
      "key": "1-girl-scout-cookie",
      "kind": "unit",
      "label": "1 Girl Scout cookie"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    }
  ],
  "name": "Cookie, shortbread",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 63.8,
    "energy_kcal": 514.0,
    "fat_g": 26.2,
    "fibre_g": 1.3,
    "folate_ug": 81.0,
    "iron_mg": 2.98,
    "magnesium_mg": 14.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 66.0,
    "potassium_mg": 88.0,
    "protein_g": 5.37,
    "salt_g": 0.8825,
    "sat_fat_g": 8.1,
    "sodium_mg": 353.0,
    "sugar_g": 21.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.44,
    "vitamin_k_ug": 11.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707964",
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
