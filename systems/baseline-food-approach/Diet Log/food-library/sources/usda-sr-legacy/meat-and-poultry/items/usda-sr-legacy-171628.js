/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice-1-oz-4-x-4-x-3-32-thick",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-171628",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice-1-oz-4-x-4-x-3-32-thick",
      "kind": "unit",
      "label": "slice (1 oz) (4\" x 4\" x 3/32\" thick)"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "2-slices",
      "kind": "unit",
      "label": "2 slices"
    }
  ],
  "name": "Ham and cheese loaf or roll",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 4.0,
    "energy_kcal": 1010.0,
    "fat_g": 18.7,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.91,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 253.0,
    "potassium_mg": 294.0,
    "protein_g": 13.6,
    "salt_g": 2.5,
    "sat_fat_g": 6.97,
    "sodium_mg": 1000.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171628",
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
