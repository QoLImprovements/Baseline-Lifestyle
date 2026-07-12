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
  "id": "usda-sr-legacy-173860",
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
  "name": "Corned beef loaf, jellied",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 640.0,
    "fat_g": 6.1,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 2.04,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 73.0,
    "potassium_mg": 101.0,
    "protein_g": 22.9,
    "salt_g": 2.3825,
    "sat_fat_g": 2.6,
    "sodium_mg": 953.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173860",
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
