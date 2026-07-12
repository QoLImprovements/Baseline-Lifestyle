/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-chicken-bone-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171460",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "0-5-chicken-bone-removed",
      "kind": "unit",
      "label": "0.5 chicken, bone removed"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, light meat, meat and skin, cooked, fried, flour",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 1.82,
    "energy_kcal": 1030.0,
    "fat_g": 12.1,
    "fibre_g": 0.1,
    "folate_ug": 7.0,
    "iron_mg": 1.21,
    "magnesium_mg": 27.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 213.0,
    "potassium_mg": 239.0,
    "protein_g": 30.4,
    "salt_g": 0.1925,
    "sat_fat_g": 3.32,
    "sodium_mg": 77.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171460",
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
