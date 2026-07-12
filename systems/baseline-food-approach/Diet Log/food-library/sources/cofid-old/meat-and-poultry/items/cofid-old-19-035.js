/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "11 samples, 4 brands. 80% meat, chilled and frozen",
  "id": "cofid-old-19-035",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Burger, beef, low fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 0.2,
    "energy_kcal": 158.0,
    "fat_g": 9.5,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 2.7,
    "magnesium_mg": 20.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 170.0,
    "potassium_mg": 330.0,
    "protein_g": 17.9,
    "salt_g": 1.575,
    "sat_fat_g": 4.4,
    "sodium_mg": 630.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-035",
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
