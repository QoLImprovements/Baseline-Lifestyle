/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Mashed potatoes and white potato mixtures",
  "id": "usda-fndds-2709554",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Stewed potatoes",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 16.3,
    "energy_kcal": 103.0,
    "fat_g": 3.39,
    "fibre_g": 2.1,
    "folate_ug": 13.0,
    "iron_mg": 0.38,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 435.0,
    "protein_g": 1.99,
    "salt_g": 0.3675,
    "sat_fat_g": 0.443,
    "sodium_mg": 147.0,
    "sugar_g": 0.96,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 15.1,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709554",
  "state": "Unspecified",
  "subcategory": "Mashed potatoes and white potato mixtures",
  "tags": [
    "mashed-potatoes-and-white-potato-mixtures",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
