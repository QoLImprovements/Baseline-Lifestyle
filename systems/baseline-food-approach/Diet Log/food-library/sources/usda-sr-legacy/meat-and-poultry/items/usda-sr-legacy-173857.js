/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "package",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-173857",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 454.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "0-99-oz-1-serving",
      "kind": "unit",
      "label": "0.99 oz 1 serving"
    }
  ],
  "name": "Bologna, turkey",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 4.68,
    "energy_kcal": 874.0,
    "fat_g": 16.0,
    "fibre_g": 0.5,
    "folate_ug": 9.0,
    "iron_mg": 3.0,
    "magnesium_mg": 16.0,
    "omega3_g": 0.024,
    "phosphorus_mg": 114.0,
    "potassium_mg": 135.0,
    "protein_g": 11.4,
    "salt_g": 2.675,
    "sat_fat_g": 4.36,
    "sodium_mg": 1070.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 13.3,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173857",
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
