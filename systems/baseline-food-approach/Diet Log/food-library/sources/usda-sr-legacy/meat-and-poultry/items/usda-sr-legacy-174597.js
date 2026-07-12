/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-25-cup",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174597",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "serving-25-cup",
      "kind": "unit",
      "label": "serving .25 cup"
    }
  ],
  "name": "Roast beef spread",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 3.73,
    "energy_kcal": 223.0,
    "fat_g": 16.3,
    "fibre_g": 0.2,
    "folate_ug": 8.0,
    "iron_mg": 2.06,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 116.0,
    "potassium_mg": 259.0,
    "protein_g": 15.3,
    "salt_g": 1.81,
    "sat_fat_g": 6.4,
    "sodium_mg": 724.0,
    "sugar_g": 0.71,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174597",
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
