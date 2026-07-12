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
  "id": "usda-sr-legacy-171049",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 212.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 708.0,
      "key": "chicken",
      "kind": "unit",
      "label": "chicken"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, broilers or fryers, meat and skin and giblets and neck, cooked, fried, flour",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 3.27,
    "energy_kcal": 1140.0,
    "fat_g": 15.3,
    "fibre_g": 0.0,
    "folate_ug": 31.0,
    "iron_mg": 1.99,
    "magnesium_mg": 25.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 194.0,
    "potassium_mg": 237.0,
    "protein_g": 28.6,
    "salt_g": 0.215,
    "sat_fat_g": 4.16,
    "sodium_mg": 86.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 248.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171049",
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
