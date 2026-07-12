/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "thigh",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171118",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "thigh",
      "kind": "unit",
      "label": "thigh"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, broiler, rotisserie, BBQ, thigh, meat only",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 808.0,
    "fat_g": 10.7,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.97,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 216.0,
    "potassium_mg": 262.0,
    "protein_g": 24.1,
    "salt_g": 0.8375,
    "sat_fat_g": 2.78,
    "sodium_mg": 335.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171118",
  "state": "Unspecified",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
