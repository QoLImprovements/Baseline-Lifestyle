/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "8 samples, 5 brands; creamed and plain samples",
  "id": "cofid-current-17-314",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Horseradish sauce",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 17.9,
    "energy_kcal": 153.0,
    "fat_g": 8.4,
    "fibre_g": 2.5,
    "folate_ug": 0.0,
    "iron_mg": 0.6,
    "magnesium_mg": 18.0,
    "omega3_g": 0.66,
    "phosphorus_mg": 42.0,
    "potassium_mg": 220.0,
    "protein_g": 2.5,
    "salt_g": 2.275,
    "sat_fat_g": 1.1,
    "sodium_mg": 910.0,
    "sugar_g": 15.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-314",
  "state": "Unspecified",
  "subcategory": "WCN",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "wcn"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
