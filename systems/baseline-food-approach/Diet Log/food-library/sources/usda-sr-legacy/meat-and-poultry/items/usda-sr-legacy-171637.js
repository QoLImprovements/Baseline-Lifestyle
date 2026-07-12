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
  "id": "usda-sr-legacy-171637",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Bologna, meat and poultry",
  "nutritionPerBasis": {
    "calcium_mg": 125.0,
    "carbs_g": 6.31,
    "energy_kcal": 1170.0,
    "fat_g": 23.8,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.24,
    "magnesium_mg": 15.0,
    "omega3_g": 0.228,
    "phosphorus_mg": 212.0,
    "potassium_mg": 320.0,
    "protein_g": 10.3,
    "salt_g": 3.45,
    "sat_fat_g": 7.39,
    "sodium_mg": 1380.0,
    "sugar_g": 1.97,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171637",
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
