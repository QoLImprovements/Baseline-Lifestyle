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
  "id": "usda-sr-legacy-171063",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 278.0,
      "key": "0-5-chicken-bone-removed",
      "kind": "unit",
      "label": "0.5 chicken, bone removed"
    },
    {
      "gramsPerUnit": 167.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, broilers or fryers, dark meat, meat and skin, cooked, fried, batter",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 9.38,
    "energy_kcal": 1250.0,
    "fat_g": 18.6,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 1.44,
    "magnesium_mg": 20.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 145.0,
    "potassium_mg": 185.0,
    "protein_g": 21.8,
    "salt_g": 0.7375,
    "sat_fat_g": 4.95,
    "sodium_mg": 295.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171063",
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
