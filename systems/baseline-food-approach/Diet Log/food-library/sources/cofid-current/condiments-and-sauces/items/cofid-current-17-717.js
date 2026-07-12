/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "7 samples, 4 brands",
  "id": "cofid-current-17-717",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Dressing, thousand island",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 15.9,
    "energy_kcal": 210.0,
    "fat_g": 16.4,
    "fibre_g": 0.4,
    "folate_ug": 4.0,
    "iron_mg": 0.3,
    "magnesium_mg": 9.0,
    "omega3_g": 1.44,
    "phosphorus_mg": 34.0,
    "potassium_mg": 130.0,
    "protein_g": 0.7,
    "salt_g": 1.175,
    "sat_fat_g": 2.04,
    "sodium_mg": 470.0,
    "sugar_g": 13.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.4,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-717",
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
