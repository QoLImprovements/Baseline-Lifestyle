/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup-chopped-or-diced",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171058",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "cup-chopped-or-diced",
      "kind": "unit",
      "label": "cup, chopped or diced"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, giblets, cooked, fried",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 4.35,
    "energy_kcal": 1160.0,
    "fat_g": 13.5,
    "fibre_g": 0.0,
    "folate_ug": 379.0,
    "iron_mg": 10.3,
    "magnesium_mg": 25.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 286.0,
    "potassium_mg": 330.0,
    "protein_g": 32.5,
    "salt_g": 0.2825,
    "sat_fat_g": 3.8,
    "sodium_mg": 113.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3580.0,
    "vitamin_c_mg": 8.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171058",
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
