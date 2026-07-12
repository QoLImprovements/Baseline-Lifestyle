/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "7 samples, 5 brands of thin and thick sausages. 50-65% meat, chilled/frozen",
  "id": "cofid-current-19-658",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sausages, pork, reduced fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 8.7,
    "energy_kcal": 141.0,
    "fat_g": 5.6,
    "fibre_g": 2.3,
    "folate_ug": 6.0,
    "iron_mg": 1.0,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 188.0,
    "potassium_mg": 188.0,
    "protein_g": 14.4,
    "salt_g": 1.25,
    "sat_fat_g": 2.09,
    "sodium_mg": 500.0,
    "sugar_g": 3.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-658",
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
