/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-lb",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171504",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "0-5-lb",
      "kind": "unit",
      "label": "0.5 lb"
    }
  ],
  "name": "Turkey, mechanically deboned, from turkey frames, raw",
  "nutritionPerBasis": {
    "calcium_mg": 145.0,
    "carbs_g": 0.0,
    "energy_kcal": 841.0,
    "fat_g": 16.0,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.61,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 115.0,
    "potassium_mg": 173.0,
    "protein_g": 13.3,
    "salt_g": 0.12,
    "sat_fat_g": 5.31,
    "sodium_mg": 48.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171504",
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
