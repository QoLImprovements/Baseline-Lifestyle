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
  "id": "usda-sr-legacy-171471",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "0-5-back-bone-removed",
      "kind": "unit",
      "label": "0.5 back, bone removed"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, back, meat and skin, cooked, fried, flour",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 6.5,
    "energy_kcal": 1380.0,
    "fat_g": 20.7,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 1.62,
    "magnesium_mg": 23.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 166.0,
    "potassium_mg": 226.0,
    "protein_g": 27.8,
    "salt_g": 0.225,
    "sat_fat_g": 5.61,
    "sodium_mg": 90.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171471",
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
