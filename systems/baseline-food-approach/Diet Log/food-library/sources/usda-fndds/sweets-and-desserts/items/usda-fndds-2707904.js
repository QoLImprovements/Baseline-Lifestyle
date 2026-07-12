/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-small-or-bite-size",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707904",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-small-or-bite-size",
      "kind": "unit",
      "label": "1 small or bite size"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Cookie, brownie, without icing",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 63.9,
    "energy_kcal": 405.0,
    "fat_g": 16.3,
    "fibre_g": 2.1,
    "folate_ug": 47.0,
    "iron_mg": 2.25,
    "magnesium_mg": 31.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 101.0,
    "potassium_mg": 149.0,
    "protein_g": 4.8,
    "salt_g": 0.715,
    "sat_fat_g": 4.24,
    "sodium_mg": 286.0,
    "sugar_g": 36.6,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707904",
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
