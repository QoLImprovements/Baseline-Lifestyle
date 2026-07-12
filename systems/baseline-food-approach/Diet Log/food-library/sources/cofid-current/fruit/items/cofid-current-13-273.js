/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Literature sources.",
  "id": "cofid-current-13-273",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mango, unripe, green flesh, raw",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 11.2,
    "energy_kcal": 46.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.7,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 110.0,
    "protein_g": 0.5,
    "salt_g": 0.0625,
    "sat_fat_g": 0.1,
    "sodium_mg": 25.0,
    "sugar_g": 5.6,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 90.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-273",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "fruit",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
