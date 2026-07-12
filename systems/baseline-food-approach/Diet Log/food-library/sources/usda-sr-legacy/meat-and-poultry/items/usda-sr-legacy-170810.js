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
  "id": "usda-sr-legacy-170810",
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
  "name": "Beef, chuck for stew, separable lean and fat, choice, raw",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.12,
    "energy_kcal": 130.0,
    "fat_g": 4.81,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 2.09,
    "magnesium_mg": 21.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 217.0,
    "potassium_mg": 373.0,
    "protein_g": 21.6,
    "salt_g": 0.1975,
    "sat_fat_g": 1.99,
    "sodium_mg": 79.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170810",
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
