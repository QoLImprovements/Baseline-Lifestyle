/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-back-bone-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171470",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "0-5-back-bone-removed",
      "kind": "unit",
      "label": "0.5 back, bone removed"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, back, meat and skin, cooked, fried, batter",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 10.2,
    "energy_kcal": 1380.0,
    "fat_g": 21.9,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 1.49,
    "magnesium_mg": 19.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 137.0,
    "potassium_mg": 180.0,
    "protein_g": 22.0,
    "salt_g": 0.7925,
    "sat_fat_g": 5.83,
    "sodium_mg": 317.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171470",
  "state": "Fried",
  "subcategory": "Poultry Products",
  "tags": [
    "fried",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
