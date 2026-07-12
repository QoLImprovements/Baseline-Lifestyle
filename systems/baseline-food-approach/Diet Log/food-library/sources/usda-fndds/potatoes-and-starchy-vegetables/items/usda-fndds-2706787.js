/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-banquet-s-cookin-bag-4-5-oz",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706787",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "1-banquet-s-cookin-bag-4-5-oz",
      "kind": "unit",
      "label": "1 Banquet's Cookin' Bag (4.5 oz)"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey a la king with vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, cream, white, or soup-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 6.76,
    "energy_kcal": 187.0,
    "fat_g": 13.8,
    "fibre_g": 0.6,
    "folate_ug": 14.0,
    "iron_mg": 0.63,
    "magnesium_mg": 14.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 127.0,
    "potassium_mg": 187.0,
    "protein_g": 9.41,
    "salt_g": 1.07,
    "sat_fat_g": 4.49,
    "sodium_mg": 428.0,
    "sugar_g": 2.57,
    "vitamin_a_ug": 246.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 1.2,
    "vitamin_k_ug": 10.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706787",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
