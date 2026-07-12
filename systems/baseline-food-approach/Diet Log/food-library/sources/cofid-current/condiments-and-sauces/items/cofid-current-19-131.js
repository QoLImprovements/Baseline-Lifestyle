/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "8 samples, 3 brands. 11-35% meat, chilled and frozen",
  "id": "cofid-current-19-131",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Faggots in gravy, retail, reheated",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 12.6,
    "energy_kcal": 148.0,
    "fat_g": 7.5,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 1.7,
    "magnesium_mg": 10.0,
    "omega3_g": 0.17,
    "phosphorus_mg": 80.0,
    "potassium_mg": 120.0,
    "protein_g": 8.2,
    "salt_g": 1.35,
    "sat_fat_g": 2.5,
    "sodium_mg": 540.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 1110.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-131",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "condiments-and-sauces",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
