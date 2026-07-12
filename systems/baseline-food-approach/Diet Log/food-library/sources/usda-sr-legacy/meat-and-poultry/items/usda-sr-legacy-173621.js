/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "neck-bone-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-173621",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "neck-bone-removed",
      "kind": "unit",
      "label": "neck, bone removed"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, neck, meat and skin, cooked, fried, flour",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 4.24,
    "energy_kcal": 1390.0,
    "fat_g": 23.6,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 2.42,
    "magnesium_mg": 19.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 132.0,
    "potassium_mg": 180.0,
    "protein_g": 24.0,
    "salt_g": 0.205,
    "sat_fat_g": 6.32,
    "sodium_mg": 82.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173621",
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
