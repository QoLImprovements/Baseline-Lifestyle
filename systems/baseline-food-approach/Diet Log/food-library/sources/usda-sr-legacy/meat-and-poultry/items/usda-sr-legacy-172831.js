/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "bird",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172831",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 627.0,
      "key": "bird",
      "kind": "unit",
      "label": "bird"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    },
    {
      "gramsPerUnit": 219.0,
      "key": "breast",
      "kind": "unit",
      "label": "breast"
    }
  ],
  "name": "Ruffed Grouse, breast meat, skinless, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 112.0,
    "fat_g": 0.88,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.58,
    "magnesium_mg": 32.0,
    "omega3_g": 0.028,
    "phosphorus_mg": 229.0,
    "potassium_mg": 311.0,
    "protein_g": 25.9,
    "salt_g": 0.125,
    "sat_fat_g": 0.13,
    "sodium_mg": 50.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172831",
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
