/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "link",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172964",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 76.0,
      "key": "link",
      "kind": "unit",
      "label": "link"
    }
  ],
  "name": "Frankfurter, pork",
  "nutritionPerBasis": {
    "calcium_mg": 267.0,
    "carbs_g": 0.28,
    "energy_kcal": 269.0,
    "fat_g": 23.7,
    "fibre_g": 0.1,
    "folate_ug": 3.0,
    "iron_mg": 3.7,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 171.0,
    "potassium_mg": 264.0,
    "protein_g": 12.8,
    "salt_g": 2.04,
    "sat_fat_g": 8.72,
    "sodium_mg": 816.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 79.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172964",
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
