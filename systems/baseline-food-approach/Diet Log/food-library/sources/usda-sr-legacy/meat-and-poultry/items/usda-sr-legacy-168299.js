/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168299",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Pork, fresh, backribs, separable lean and fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 0.0,
    "energy_kcal": 224.0,
    "fat_g": 16.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.76,
    "magnesium_mg": 16.0,
    "omega3_g": 0.113,
    "phosphorus_mg": 154.0,
    "potassium_mg": 247.0,
    "protein_g": 19.1,
    "salt_g": 0.2175,
    "sat_fat_g": 5.78,
    "sodium_mg": 87.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168299",
  "state": "Raw",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
