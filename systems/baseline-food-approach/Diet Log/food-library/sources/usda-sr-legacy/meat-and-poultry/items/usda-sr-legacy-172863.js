/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "thigh-without-skin",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172863",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "thigh-without-skin",
      "kind": "unit",
      "label": "thigh without skin"
    },
    {
      "gramsPerUnit": 181.0,
      "key": "thigh",
      "kind": "unit",
      "label": "thigh"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Chicken, dark meat, thigh, meat and skin, with added solution, raw",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.0,
    "energy_kcal": 197.0,
    "fat_g": 14.6,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.57,
    "magnesium_mg": 16.0,
    "omega3_g": 0.158,
    "phosphorus_mg": 147.0,
    "potassium_mg": 191.0,
    "protein_g": 16.6,
    "salt_g": 0.3775,
    "sat_fat_g": 3.98,
    "sodium_mg": 151.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172863",
  "state": "Raw",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
