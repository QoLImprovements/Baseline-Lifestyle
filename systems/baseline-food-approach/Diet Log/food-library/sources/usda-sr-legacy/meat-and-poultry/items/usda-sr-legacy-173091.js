/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Beef Products",
  "id": "usda-sr-legacy-173091",
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
  "name": "Beef, New Zealand, imported, subcutaneous fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 0.0,
    "energy_kcal": 685.0,
    "fat_g": 72.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.38,
    "magnesium_mg": 5.0,
    "omega3_g": 0.537,
    "phosphorus_mg": 51.0,
    "potassium_mg": 93.0,
    "protein_g": 8.5,
    "salt_g": 0.065,
    "sat_fat_g": 31.5,
    "sodium_mg": 26.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173091",
  "state": "Raw",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
