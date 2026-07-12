/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-69-oz-1-serving",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174613",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "1-69-oz-1-serving",
      "kind": "unit",
      "label": "1.69 oz (1 serving)"
    }
  ],
  "name": "Turkey, white, rotisserie, deli cut",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 7.7,
    "energy_kcal": 112.0,
    "fat_g": 3.0,
    "fibre_g": 0.4,
    "folate_ug": 4.0,
    "iron_mg": 2.2,
    "magnesium_mg": 20.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 158.0,
    "potassium_mg": 349.0,
    "protein_g": 13.5,
    "salt_g": 3.0,
    "sat_fat_g": 0.118,
    "sodium_mg": 1200.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174613",
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
