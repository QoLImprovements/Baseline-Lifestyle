/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice-4-1-4-x-4-1-4-x-1-16",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174571",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "slice-4-1-4-x-4-1-4-x-1-16",
      "kind": "unit",
      "label": "slice (4-1/4\" x 4-1/4\" x 1/16\")"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Luncheon meat, pork, canned",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 2.1,
    "energy_kcal": 1400.0,
    "fat_g": 30.3,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.72,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 215.0,
    "protein_g": 12.5,
    "salt_g": 3.225,
    "sat_fat_g": 10.8,
    "sodium_mg": 1290.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174571",
  "state": "Canned",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "canned",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
