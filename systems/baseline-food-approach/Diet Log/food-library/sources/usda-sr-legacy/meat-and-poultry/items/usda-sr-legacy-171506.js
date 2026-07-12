/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171506",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "patty-4-oz-raw-yield-after-cooking",
      "kind": "unit",
      "label": "patty (4 oz, raw) (yield after cooking)"
    },
    {
      "gramsPerUnit": 330.0,
      "key": "unit-yield-from-1-lb-raw",
      "kind": "unit",
      "label": "unit, yield from 1 lb raw"
    }
  ],
  "name": "Turkey, Ground, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 0.0,
    "energy_kcal": 850.0,
    "fat_g": 10.4,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.52,
    "magnesium_mg": 30.0,
    "omega3_g": 0.167,
    "phosphorus_mg": 254.0,
    "potassium_mg": 294.0,
    "protein_g": 27.4,
    "salt_g": 0.195,
    "sat_fat_g": 2.67,
    "sodium_mg": 78.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171506",
  "state": "Cooked",
  "subcategory": "Poultry Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
