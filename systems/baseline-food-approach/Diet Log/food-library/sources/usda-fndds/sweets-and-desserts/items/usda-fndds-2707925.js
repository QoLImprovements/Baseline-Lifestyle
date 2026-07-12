/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-bar",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707925",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "1-large-s-mores-cookie",
      "kind": "unit",
      "label": "1 large S'mores cookie"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "1-medium-s-mores-cookie",
      "kind": "unit",
      "label": "1 medium S'mores cookie"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "1-suddenly-s-mores-cookie",
      "kind": "unit",
      "label": "1 Suddenly S'mores cookie"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cookie, graham cracker with chocolate and marshmallow",
  "nutritionPerBasis": {
    "calcium_mg": 122.0,
    "carbs_g": 69.0,
    "energy_kcal": 465.0,
    "fat_g": 18.6,
    "fibre_g": 2.8,
    "folate_ug": 33.0,
    "iron_mg": 2.46,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 167.0,
    "potassium_mg": 245.0,
    "protein_g": 6.36,
    "salt_g": 0.5525,
    "sat_fat_g": 9.96,
    "sodium_mg": 221.0,
    "sugar_g": 43.9,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707925",
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
