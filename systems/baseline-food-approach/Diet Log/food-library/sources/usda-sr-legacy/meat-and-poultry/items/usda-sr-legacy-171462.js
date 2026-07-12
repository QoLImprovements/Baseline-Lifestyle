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
  "id": "usda-sr-legacy-171462",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "0-5-chicken-bone-removed",
      "kind": "unit",
      "label": "0.5 chicken, bone removed"
    }
  ],
  "name": "Chicken, broilers or fryers, light meat, meat and skin, cooked, stewed",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 841.0,
    "fat_g": 9.97,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.98,
    "magnesium_mg": 20.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 146.0,
    "potassium_mg": 167.0,
    "protein_g": 26.1,
    "salt_g": 0.1575,
    "sat_fat_g": 2.8,
    "sodium_mg": 63.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171462",
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
