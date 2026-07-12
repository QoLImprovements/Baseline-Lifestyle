/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-pheasant",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-174472",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 400.0,
      "key": "0-5-pheasant",
      "kind": "unit",
      "label": "0.5 pheasant"
    },
    {
      "gramsPerUnit": 371.0,
      "key": "unit-yield-from-1-lb-ready-to-eat-pheasant",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-eat pheasant)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Pheasant, raw, meat and skin",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 757.0,
    "fat_g": 9.29,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.15,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 214.0,
    "potassium_mg": 243.0,
    "protein_g": 22.7,
    "salt_g": 0.1,
    "sat_fat_g": 2.7,
    "sodium_mg": 40.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174472",
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
