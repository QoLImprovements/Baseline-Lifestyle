/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "9 samples, 4 brands",
  "id": "cofid-current-17-718",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pickle, sweet",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 28.0,
    "energy_kcal": 111.0,
    "fat_g": 0.1,
    "fibre_g": 1.2,
    "folate_ug": 0.0,
    "iron_mg": 0.6,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 94.0,
    "protein_g": 0.6,
    "salt_g": 2.825,
    "sat_fat_g": 0.0,
    "sodium_mg": 1130.0,
    "sugar_g": 24.6,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-718",
  "state": "Unspecified",
  "subcategory": "WCG",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "wcg"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
