/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706735",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef with vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 5.24,
    "energy_kcal": 115.0,
    "fat_g": 7.16,
    "fibre_g": 1.1,
    "folate_ug": 12.0,
    "iron_mg": 0.75,
    "magnesium_mg": 10.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 74.0,
    "potassium_mg": 145.0,
    "protein_g": 7.8,
    "salt_g": 0.7675,
    "sat_fat_g": 1.65,
    "sodium_mg": 307.0,
    "sugar_g": 1.59,
    "vitamin_a_ug": 131.0,
    "vitamin_c_mg": 5.8,
    "vitamin_e_mg": 1.14,
    "vitamin_k_ug": 25.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706735",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-mixed-dishes",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
