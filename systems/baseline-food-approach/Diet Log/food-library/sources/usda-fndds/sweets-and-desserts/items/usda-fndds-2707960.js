/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707960",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
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
      "gramsPerUnit": 45.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Cookie, raisin",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 68.0,
    "energy_kcal": 401.0,
    "fat_g": 13.6,
    "fibre_g": 1.2,
    "folate_ug": 32.0,
    "iron_mg": 2.29,
    "magnesium_mg": 21.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 83.0,
    "potassium_mg": 140.0,
    "protein_g": 4.1,
    "salt_g": 1.045,
    "sat_fat_g": 3.46,
    "sodium_mg": 418.0,
    "sugar_g": 47.6,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 2.22,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707960",
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
