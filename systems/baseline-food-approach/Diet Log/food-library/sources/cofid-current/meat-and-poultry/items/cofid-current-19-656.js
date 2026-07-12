/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "6 samples of thick sausages. 50-55% meat, chilled",
  "id": "cofid-current-19-656",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sausages, beef, raw",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 8.4,
    "energy_kcal": 258.0,
    "fat_g": 19.5,
    "fibre_g": 1.5,
    "folate_ug": 12.0,
    "iron_mg": 1.36,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 173.0,
    "potassium_mg": 185.0,
    "protein_g": 12.7,
    "salt_g": 0.95,
    "sat_fat_g": 7.59,
    "sodium_mg": 380.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 33.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-656",
  "state": "Raw",
  "subcategory": "MI",
  "tags": [
    "meat-and-poultry",
    "mi",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
