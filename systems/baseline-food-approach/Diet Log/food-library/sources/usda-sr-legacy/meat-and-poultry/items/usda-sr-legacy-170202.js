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
  "id": "usda-sr-legacy-170202",
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
    }
  ],
  "name": "Beef, cured, luncheon meat, jellied",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 464.0,
    "fat_g": 3.3,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 3.45,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 139.0,
    "potassium_mg": 402.0,
    "protein_g": 19.0,
    "salt_g": 3.3,
    "sat_fat_g": 1.41,
    "sodium_mg": 1320.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170202",
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
