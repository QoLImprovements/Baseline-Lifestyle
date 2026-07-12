/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-chicken-skin-only",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171454",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "0-5-chicken-skin-only",
      "kind": "unit",
      "label": "0.5 chicken, skin only"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, skin only, cooked, fried, flour",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 9.34,
    "energy_kcal": 2100.0,
    "fat_g": 42.6,
    "fibre_g": 0.0,
    "folate_ug": 33.0,
    "iron_mg": 1.52,
    "magnesium_mg": 17.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 126.0,
    "potassium_mg": 125.0,
    "protein_g": 19.1,
    "salt_g": 0.1325,
    "sat_fat_g": 11.7,
    "sodium_mg": 53.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171454",
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
