/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-52-oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172013",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "3-52-oz",
      "kind": "unit",
      "label": "3.52 oz"
    }
  ],
  "name": "Bologna, beef and pork",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 5.49,
    "energy_kcal": 1290.0,
    "fat_g": 24.6,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.21,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 163.0,
    "potassium_mg": 315.0,
    "protein_g": 15.2,
    "salt_g": 2.4,
    "sat_fat_g": 9.3,
    "sodium_mg": 960.0,
    "sugar_g": 4.42,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172013",
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
