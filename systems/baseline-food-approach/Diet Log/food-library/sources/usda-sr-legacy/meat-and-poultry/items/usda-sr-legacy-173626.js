/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "thigh-bone-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-173626",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "thigh-bone-removed",
      "kind": "unit",
      "label": "thigh, bone removed"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, thigh, meat and skin, cooked, stewed",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 971.0,
    "fat_g": 14.7,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.37,
    "magnesium_mg": 19.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 139.0,
    "potassium_mg": 170.0,
    "protein_g": 23.3,
    "salt_g": 0.1775,
    "sat_fat_g": 4.11,
    "sodium_mg": 71.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173626",
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
