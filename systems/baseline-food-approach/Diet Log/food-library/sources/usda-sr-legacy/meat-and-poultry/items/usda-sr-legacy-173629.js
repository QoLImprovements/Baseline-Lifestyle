/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "wing-bone-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-173629",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "wing-bone-removed",
      "kind": "unit",
      "label": "wing, bone removed"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, wing, meat and skin, cooked, fried, flour",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 2.39,
    "energy_kcal": 1340.0,
    "fat_g": 22.2,
    "fibre_g": 0.1,
    "folate_ug": 6.0,
    "iron_mg": 1.25,
    "magnesium_mg": 19.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 150.0,
    "potassium_mg": 177.0,
    "protein_g": 26.1,
    "salt_g": 0.1925,
    "sat_fat_g": 6.06,
    "sodium_mg": 77.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173629",
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
