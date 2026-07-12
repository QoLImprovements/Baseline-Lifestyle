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
  "id": "usda-sr-legacy-171631",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 101.0,
      "key": "link",
      "kind": "unit",
      "label": "link"
    }
  ],
  "name": "Sausage, Italian, pork, mild, raw",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 2.97,
    "energy_kcal": 1210.0,
    "fat_g": 24.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.77,
    "magnesium_mg": 16.0,
    "omega3_g": 0.178,
    "phosphorus_mg": 126.0,
    "potassium_mg": 211.0,
    "protein_g": 13.9,
    "salt_g": 1.4075,
    "sat_fat_g": 8.62,
    "sodium_mg": 563.0,
    "sugar_g": 1.19,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171631",
  "state": "Raw",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "raw",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
