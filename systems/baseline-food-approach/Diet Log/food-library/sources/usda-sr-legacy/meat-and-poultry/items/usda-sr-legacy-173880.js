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
  "id": "usda-sr-legacy-173880",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sausage, chicken or turkey, Italian style, lower sodium",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 14.2,
    "energy_kcal": 765.0,
    "fat_g": 4.46,
    "fibre_g": 0.0,
    "folate_ug": 71.0,
    "iron_mg": 1.29,
    "magnesium_mg": 43.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 286.0,
    "potassium_mg": 1060.0,
    "protein_g": 21.4,
    "salt_g": 1.115,
    "sat_fat_g": 0.893,
    "sodium_mg": 446.0,
    "sugar_g": 0.81,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.35,
    "vitamin_k_ug": 34.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173880",
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
