/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174573",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "slice-15-per-8-oz-package",
      "kind": "unit",
      "label": "slice (15 per 8 oz package)"
    }
  ],
  "name": "Mortadella, beef, pork",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 3.05,
    "energy_kcal": 1300.0,
    "fat_g": 25.4,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.4,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 163.0,
    "protein_g": 16.4,
    "salt_g": 3.125,
    "sat_fat_g": 9.51,
    "sodium_mg": 1250.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174573",
  "state": "Unspecified",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "sausages-and-luncheon-meats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
