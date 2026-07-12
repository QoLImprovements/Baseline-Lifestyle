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
  "id": "usda-sr-legacy-171446",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 751.0,
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
  "name": "Chicken, broilers or fryers, meat and skin and giblets and neck, stewed",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.06,
    "energy_kcal": 904.0,
    "fat_g": 12.4,
    "fibre_g": 0.0,
    "folate_ug": 27.0,
    "iron_mg": 1.53,
    "magnesium_mg": 19.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 144.0,
    "potassium_mg": 163.0,
    "protein_g": 24.5,
    "salt_g": 0.165,
    "sat_fat_g": 3.45,
    "sodium_mg": 66.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 174.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171446",
  "state": "Unspecified",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
