/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "8 samples, 4 brands",
  "id": "cofid-current-17-707",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mint sauce",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 21.5,
    "energy_kcal": 101.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 7.4,
    "magnesium_mg": 46.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 210.0,
    "protein_g": 1.6,
    "salt_g": 1.2,
    "sat_fat_g": 0.0,
    "sodium_mg": 480.0,
    "sugar_g": 21.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-707",
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
