/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-2-slices",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172963",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "serving-2-slices",
      "kind": "unit",
      "label": "serving 2 slices"
    }
  ],
  "name": "Chicken breast, oven-roasted, fat-free, sliced",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 2.17,
    "energy_kcal": 79.0,
    "fat_g": 0.39,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.32,
    "magnesium_mg": 9.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 60.0,
    "potassium_mg": 67.0,
    "protein_g": 16.8,
    "salt_g": 2.725,
    "sat_fat_g": 0.13,
    "sodium_mg": 1090.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172963",
  "state": "Roasted",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "roasted",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
