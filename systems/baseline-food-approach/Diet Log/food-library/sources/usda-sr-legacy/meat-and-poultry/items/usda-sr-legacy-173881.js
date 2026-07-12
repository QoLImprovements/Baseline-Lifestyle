/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-173881",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ham, smoked, extra lean, low sodium",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 10.7,
    "energy_kcal": 141.0,
    "fat_g": 2.71,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.76,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 286.0,
    "potassium_mg": 330.0,
    "protein_g": 18.5,
    "salt_g": 2.65,
    "sat_fat_g": 1.79,
    "sodium_mg": 1060.0,
    "sugar_g": 10.7,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173881",
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
