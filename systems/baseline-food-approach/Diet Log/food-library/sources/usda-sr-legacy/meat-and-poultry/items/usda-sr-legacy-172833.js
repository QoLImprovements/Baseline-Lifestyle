/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172833",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "serving-3-oz",
      "kind": "unit",
      "label": "serving ( 3 oz )"
    },
    {
      "gramsPerUnit": 109.0,
      "key": "patty-yield-from-135-8-g-raw-meat",
      "kind": "unit",
      "label": "patty (yield from 135.8 g raw meat)"
    }
  ],
  "name": "Emu, ground, cooked, pan-broiled",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.0,
    "energy_kcal": 683.0,
    "fat_g": 4.65,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 5.01,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 269.0,
    "potassium_mg": 375.0,
    "protein_g": 28.4,
    "salt_g": 0.1625,
    "sat_fat_g": 1.24,
    "sodium_mg": 65.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172833",
  "state": "Grilled",
  "subcategory": "Poultry Products",
  "tags": [
    "grilled",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
