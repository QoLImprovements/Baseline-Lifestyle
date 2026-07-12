/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "stick-2-25-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171103",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "stick-2-25-oz",
      "kind": "unit",
      "label": "stick (2.25 oz)"
    }
  ],
  "name": "Turkey sticks, breaded, battered, fried",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 17.0,
    "energy_kcal": 1170.0,
    "fat_g": 16.9,
    "fibre_g": 0.0,
    "folate_ug": 29.0,
    "iron_mg": 2.2,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 234.0,
    "potassium_mg": 260.0,
    "protein_g": 14.2,
    "salt_g": 2.095,
    "sat_fat_g": 4.38,
    "sodium_mg": 838.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171103",
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
