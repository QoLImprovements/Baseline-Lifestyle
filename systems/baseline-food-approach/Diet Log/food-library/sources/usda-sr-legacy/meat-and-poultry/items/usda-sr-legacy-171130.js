/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "breast",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171130",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1171.0,
      "key": "breast",
      "kind": "unit",
      "label": "breast"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Turkey, retail parts, breast, meat and skin, with added solution, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.03,
    "energy_kcal": 603.0,
    "fat_g": 6.75,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.43,
    "magnesium_mg": 23.0,
    "omega3_g": 0.149,
    "phosphorus_mg": 171.0,
    "potassium_mg": 221.0,
    "protein_g": 20.8,
    "salt_g": 0.315,
    "sat_fat_g": 1.24,
    "sodium_mg": 126.0,
    "sugar_g": 0.01,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171130",
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
