/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "drumstick-bone-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-173611",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 49.0,
      "key": "drumstick-bone-removed",
      "kind": "unit",
      "label": "drumstick, bone removed"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, drumstick, meat and skin, cooked, fried, flour",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 1.63,
    "energy_kcal": 1020.0,
    "fat_g": 13.7,
    "fibre_g": 0.1,
    "folate_ug": 10.0,
    "iron_mg": 1.34,
    "magnesium_mg": 23.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 176.0,
    "potassium_mg": 229.0,
    "protein_g": 27.0,
    "salt_g": 0.2225,
    "sat_fat_g": 3.66,
    "sodium_mg": 89.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173611",
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
