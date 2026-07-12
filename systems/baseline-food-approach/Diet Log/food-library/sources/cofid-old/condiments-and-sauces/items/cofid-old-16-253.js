/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "10 samples, 5 brands",
  "id": "cofid-old-16-253",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cockles, bottled in vinegar, drained",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 0.0,
    "energy_kcal": 60.0,
    "fat_g": 0.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 35.0,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 460.0,
    "protein_g": 13.3,
    "salt_g": 1.65,
    "sat_fat_g": 0.2,
    "sodium_mg": 660.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "16-253",
  "state": "Unspecified",
  "subcategory": "JM",
  "tags": [
    "condiments-and-sauces",
    "jm",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
