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
  "id": "usda-sr-legacy-173628",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 49.0,
      "key": "wing-bone-removed",
      "kind": "unit",
      "label": "wing, bone removed"
    }
  ],
  "name": "Chicken, broilers or fryers, wing, meat and skin, cooked, fried, batter",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 10.9,
    "energy_kcal": 1360.0,
    "fat_g": 21.8,
    "fibre_g": 0.3,
    "folate_ug": 18.0,
    "iron_mg": 1.29,
    "magnesium_mg": 16.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 121.0,
    "potassium_mg": 138.0,
    "protein_g": 19.9,
    "salt_g": 0.8,
    "sat_fat_g": 5.83,
    "sodium_mg": 320.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173628",
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
