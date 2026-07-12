/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "unit-yield-from-1-lb-ready-to-cook-chicken",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-173620",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "neck-bone-removed",
      "kind": "unit",
      "label": "neck, bone removed"
    }
  ],
  "name": "Chicken, broilers or fryers, neck, meat and skin, cooked, fried, batter",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 8.7,
    "energy_kcal": 1380.0,
    "fat_g": 23.5,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 2.15,
    "magnesium_mg": 16.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 115.0,
    "potassium_mg": 151.0,
    "protein_g": 19.8,
    "salt_g": 0.69,
    "sat_fat_g": 6.22,
    "sodium_mg": 276.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173620",
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
