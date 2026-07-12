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
  "id": "usda-sr-legacy-171106",
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
  "name": "Poultry, mechanically deboned, from mature hens, raw",
  "nutritionPerBasis": {
    "calcium_mg": 187.0,
    "carbs_g": 0.0,
    "energy_kcal": 1020.0,
    "fat_g": 20.0,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.22,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 132.0,
    "potassium_mg": 104.0,
    "protein_g": 14.7,
    "salt_g": 0.1,
    "sat_fat_g": 4.73,
    "sodium_mg": 40.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171106",
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
