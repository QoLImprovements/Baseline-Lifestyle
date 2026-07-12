/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-whole",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2709560",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Plantain, raw",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 31.9,
    "energy_kcal": 122.0,
    "fat_g": 0.35,
    "fibre_g": 1.7,
    "folate_ug": 22.0,
    "iron_mg": 0.55,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 487.0,
    "protein_g": 1.3,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 17.5,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 18.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 28.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709560",
  "state": "Raw",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "other-starchy-vegetables",
    "potatoes-and-starchy-vegetables",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
