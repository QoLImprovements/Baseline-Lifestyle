/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-174518",
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
    },
    {
      "gramsPerUnit": 454.0,
      "key": "thigh",
      "kind": "unit",
      "label": "thigh"
    }
  ],
  "name": "Turkey, retail parts, thigh, meat only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 0.0,
    "energy_kcal": 484.0,
    "fat_g": 3.69,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.42,
    "magnesium_mg": 22.0,
    "omega3_g": 0.043,
    "phosphorus_mg": 177.0,
    "potassium_mg": 269.0,
    "protein_g": 20.6,
    "salt_g": 0.1875,
    "sat_fat_g": 0.782,
    "sodium_mg": 75.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174518",
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
