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
  "id": "usda-sr-legacy-171627",
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
      "gramsPerUnit": 21.0,
      "key": "slice-4-1-4-x-4-1-4-x-1-16",
      "kind": "unit",
      "label": "slice (4-1/4\" x 4-1/4\" x 1/16\")"
    }
  ],
  "name": "Ham, chopped, not canned",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 221.0,
    "fat_g": 16.7,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.83,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 155.0,
    "potassium_mg": 319.0,
    "protein_g": 16.5,
    "salt_g": 2.975,
    "sat_fat_g": 6.1,
    "sodium_mg": 1190.0,
    "sugar_g": 5.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171627",
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
