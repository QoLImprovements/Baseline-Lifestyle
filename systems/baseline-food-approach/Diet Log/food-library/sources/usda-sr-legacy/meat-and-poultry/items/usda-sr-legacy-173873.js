/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-173873",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Bologna, chicken, pork",
  "nutritionPerBasis": {
    "calcium_mg": 196.0,
    "carbs_g": 4.19,
    "energy_kcal": 1410.0,
    "fat_g": 30.6,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 1.12,
    "magnesium_mg": 16.0,
    "omega3_g": 0.205,
    "phosphorus_mg": 223.0,
    "potassium_mg": 162.0,
    "protein_g": 10.3,
    "salt_g": 3.1,
    "sat_fat_g": 9.86,
    "sodium_mg": 1240.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 13.2,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173873",
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
