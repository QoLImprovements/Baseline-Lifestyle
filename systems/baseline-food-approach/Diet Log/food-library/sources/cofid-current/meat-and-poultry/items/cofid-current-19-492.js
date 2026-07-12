/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "8 samples, 3 brands, chilled and frozen",
  "id": "cofid-current-19-492",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Burger, beef, 98-99% beef, raw",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.1,
    "energy_kcal": 291.0,
    "fat_g": 24.7,
    "fibre_g": 0.5,
    "folate_ug": 9.0,
    "iron_mg": 1.7,
    "magnesium_mg": 16.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 150.0,
    "potassium_mg": 290.0,
    "protein_g": 17.1,
    "salt_g": 0.725,
    "sat_fat_g": 10.71,
    "sodium_mg": 290.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-492",
  "state": "Raw",
  "subcategory": "MBG",
  "tags": [
    "mbg",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
