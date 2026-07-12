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
  "id": "usda-sr-legacy-172374",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "drumstick-bone-removed",
      "kind": "unit",
      "label": "drumstick, bone removed"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, drumstick, meat and skin, cooked, fried, batter",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 8.28,
    "energy_kcal": 1120.0,
    "fat_g": 15.8,
    "fibre_g": 0.3,
    "folate_ug": 18.0,
    "iron_mg": 1.35,
    "magnesium_mg": 20.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 147.0,
    "potassium_mg": 186.0,
    "protein_g": 22.0,
    "salt_g": 0.6725,
    "sat_fat_g": 4.14,
    "sodium_mg": 269.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172374",
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
