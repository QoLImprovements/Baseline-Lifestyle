/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171048",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 1028.0,
      "key": "chicken",
      "kind": "unit",
      "label": "chicken"
    },
    {
      "gramsPerUnit": 308.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, meat and skin and giblets and neck, cooked, fried, batter",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 9.03,
    "energy_kcal": 1220.0,
    "fat_g": 17.5,
    "fibre_g": 0.0,
    "folate_ug": 32.0,
    "iron_mg": 1.79,
    "magnesium_mg": 21.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 158.0,
    "potassium_mg": 190.0,
    "protein_g": 22.8,
    "salt_g": 0.71,
    "sat_fat_g": 4.67,
    "sodium_mg": 284.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 181.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171048",
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
