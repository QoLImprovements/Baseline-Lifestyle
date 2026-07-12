/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice-4-dia-x-1-8-thick",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-173856",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "slice-4-dia-x-1-8-thick",
      "kind": "unit",
      "label": "slice (4\" dia x 1/8\" thick)"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice-medium-4-1-2-dia-x-1-8-thick-1-oz",
      "kind": "unit",
      "label": "slice, medium (4-1/2\" dia x 1/8\" thick) (1 oz)"
    }
  ],
  "name": "Bologna, pork",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.73,
    "energy_kcal": 247.0,
    "fat_g": 19.9,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.77,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 139.0,
    "potassium_mg": 281.0,
    "protein_g": 15.3,
    "salt_g": 2.2675,
    "sat_fat_g": 6.84,
    "sodium_mg": 907.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173856",
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
