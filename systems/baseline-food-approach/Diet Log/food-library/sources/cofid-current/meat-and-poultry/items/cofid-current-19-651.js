/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 6 brands containing onion, frozen and chilled",
  "id": "cofid-current-19-651",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Burger, beef, 62-85% beef, raw",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 4.9,
    "energy_kcal": 219.0,
    "fat_g": 15.2,
    "fibre_g": 0.7,
    "folate_ug": 12.0,
    "iron_mg": 2.1,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 210.0,
    "protein_g": 15.9,
    "salt_g": 0.825,
    "sat_fat_g": 5.72,
    "sodium_mg": 330.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-651",
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
