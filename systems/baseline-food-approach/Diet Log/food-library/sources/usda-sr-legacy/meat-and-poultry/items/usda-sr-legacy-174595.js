/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-2-96-oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174595",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "serving-2-96-oz",
      "kind": "unit",
      "label": "serving 2.96 oz"
    }
  ],
  "name": "Bratwurst, veal, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 341.0,
    "fat_g": 31.7,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.74,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 231.0,
    "protein_g": 14.0,
    "salt_g": 0.15,
    "sat_fat_g": 14.9,
    "sodium_mg": 60.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174595",
  "state": "Cooked",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
