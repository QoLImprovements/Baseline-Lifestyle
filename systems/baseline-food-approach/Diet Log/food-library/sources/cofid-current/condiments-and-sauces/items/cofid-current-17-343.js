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
  "id": "cofid-current-17-343",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chutney, mango, sweet",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 48.3,
    "energy_kcal": 189.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.1,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 42.0,
    "protein_g": 0.7,
    "salt_g": 3.25,
    "sat_fat_g": 0.0,
    "sodium_mg": 1300.0,
    "sugar_g": 45.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-343",
  "state": "Unspecified",
  "subcategory": "WE",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "we"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
