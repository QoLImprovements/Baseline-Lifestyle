/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "10 assorted samples",
  "id": "cofid-old-17-342",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chutney, mango, oily",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 49.5,
    "energy_kcal": 285.0,
    "fat_g": 10.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.3,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 57.0,
    "protein_g": 0.4,
    "salt_g": 2.725,
    "sat_fat_g": 0.0,
    "sodium_mg": 1090.0,
    "sugar_g": 49.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-342",
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
