/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-173874",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Chicken breast, deli, rotisserie seasoned, sliced, prepackaged",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 2.92,
    "energy_kcal": 98.0,
    "fat_g": 1.86,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.39,
    "magnesium_mg": 26.0,
    "omega3_g": 0.024,
    "phosphorus_mg": 257.0,
    "potassium_mg": 360.0,
    "protein_g": 17.4,
    "salt_g": 2.575,
    "sat_fat_g": 0.564,
    "sodium_mg": 1030.0,
    "sugar_g": 0.75,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173874",
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
