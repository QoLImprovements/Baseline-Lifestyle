/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-168591",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Seeds, lotus seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 17.3,
    "energy_kcal": 372.0,
    "fat_g": 0.53,
    "fibre_g": 0.0,
    "folate_ug": 28.0,
    "iron_mg": 0.95,
    "magnesium_mg": 56.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 168.0,
    "potassium_mg": 367.0,
    "protein_g": 4.13,
    "salt_g": 0.0025,
    "sat_fat_g": 0.088,
    "sodium_mg": 1.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168591",
  "state": "Raw",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
