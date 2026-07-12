/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "9 samples, 5 brands",
  "id": "cofid-current-17-708",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Relish, corn/cucumber/onion",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 36.6,
    "energy_kcal": 144.0,
    "fat_g": 0.3,
    "fibre_g": 1.5,
    "folate_ug": 0.0,
    "iron_mg": 0.3,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 110.0,
    "protein_g": 1.0,
    "salt_g": 1.05,
    "sat_fat_g": 0.0,
    "sodium_mg": 420.0,
    "sugar_g": 28.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-708",
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
