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
  "id": "usda-fndds-2707988",
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
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
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
    }
  ],
  "name": "Cookie, sugar or plain, sugar free",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 50.5,
    "energy_kcal": 523.0,
    "fat_g": 31.0,
    "fibre_g": 3.4,
    "folate_ug": 83.0,
    "iron_mg": 2.48,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 132.0,
    "potassium_mg": 202.0,
    "protein_g": 10.3,
    "salt_g": 1.12,
    "sat_fat_g": 8.62,
    "sodium_mg": 448.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.51,
    "vitamin_k_ug": 34.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707988",
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
