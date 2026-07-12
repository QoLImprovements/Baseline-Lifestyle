/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "2 brands",
  "id": "cofid-current-17-362",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mustard powder",
  "nutritionPerBasis": {
    "calcium_mg": 330.0,
    "carbs_g": 20.7,
    "energy_kcal": 452.0,
    "fat_g": 28.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 9.5,
    "magnesium_mg": 260.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 940.0,
    "protein_g": 28.9,
    "salt_g": 0.0125,
    "sat_fat_g": 1.5,
    "sodium_mg": 5.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-362",
  "state": "Unspecified",
  "subcategory": "WY",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "wy"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
