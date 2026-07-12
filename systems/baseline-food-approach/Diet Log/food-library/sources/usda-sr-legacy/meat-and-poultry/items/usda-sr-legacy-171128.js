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
  "id": "usda-sr-legacy-171128",
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
      "gramsPerUnit": 217.0,
      "key": "drumstick",
      "kind": "unit",
      "label": "drumstick"
    }
  ],
  "name": "Turkey, drumstick, from whole bird, meat only, with added solution, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.0,
    "energy_kcal": 663.0,
    "fat_g": 6.0,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 1.07,
    "magnesium_mg": 24.0,
    "omega3_g": 0.097,
    "phosphorus_mg": 208.0,
    "potassium_mg": 227.0,
    "protein_g": 26.1,
    "salt_g": 0.5025,
    "sat_fat_g": 1.81,
    "sodium_mg": 201.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171128",
  "state": "Roasted",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
