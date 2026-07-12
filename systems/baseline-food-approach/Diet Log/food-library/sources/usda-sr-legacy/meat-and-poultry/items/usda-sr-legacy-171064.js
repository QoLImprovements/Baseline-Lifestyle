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
  "id": "usda-sr-legacy-171064",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 184.0,
      "key": "0-5-chicken-bone-removed",
      "kind": "unit",
      "label": "0.5 chicken, bone removed"
    }
  ],
  "name": "Chicken, broilers or fryers, dark meat, meat and skin, cooked, fried, flour",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 4.08,
    "energy_kcal": 1190.0,
    "fat_g": 16.9,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 1.5,
    "magnesium_mg": 24.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 176.0,
    "potassium_mg": 230.0,
    "protein_g": 27.2,
    "salt_g": 0.2225,
    "sat_fat_g": 4.58,
    "sodium_mg": 89.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171064",
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
