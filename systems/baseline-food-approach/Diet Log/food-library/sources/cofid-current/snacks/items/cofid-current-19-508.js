/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "g",
  "description": "Including Peperami and own brand equivalents",
  "id": "cofid-current-19-508",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salami snack",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 1.9,
    "energy_kcal": 504.0,
    "fat_g": 44.0,
    "fibre_g": 0.5,
    "folate_ug": 1.0,
    "iron_mg": 2.2,
    "magnesium_mg": 19.0,
    "omega3_g": 0.33,
    "phosphorus_mg": 180.0,
    "potassium_mg": 330.0,
    "protein_g": 25.1,
    "salt_g": 4.0,
    "sat_fat_g": 16.79,
    "sodium_mg": 1600.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.77,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-508",
  "state": "Unspecified",
  "subcategory": "MI",
  "tags": [
    "mi",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
