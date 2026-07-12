/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "8 samples, 6 brands",
  "id": "cofid-current-17-701",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Dressing, French",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 11.7,
    "energy_kcal": 335.0,
    "fat_g": 32.2,
    "fibre_g": 0.5,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.3,
    "salt_g": 1.5,
    "sat_fat_g": 0.0,
    "sodium_mg": 600.0,
    "sugar_g": 6.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-701",
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
