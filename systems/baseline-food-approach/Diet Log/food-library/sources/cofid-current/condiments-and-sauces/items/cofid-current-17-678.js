/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Estimated from brown sauce and label data",
  "id": "cofid-current-17-678",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Brown sauce, reduced salt/sugar",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 20.0,
    "energy_kcal": 88.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.8,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 221.0,
    "protein_g": 0.7,
    "salt_g": 0.975,
    "sat_fat_g": 0.0,
    "sodium_mg": 390.0,
    "sugar_g": 14.1,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-678",
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
