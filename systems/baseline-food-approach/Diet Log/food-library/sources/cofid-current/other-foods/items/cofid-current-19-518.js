/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 8 brands",
  "id": "cofid-current-19-518",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Scotch eggs, retail",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 13.1,
    "energy_kcal": 241.0,
    "fat_g": 16.0,
    "fibre_g": 1.7,
    "folate_ug": 42.0,
    "iron_mg": 1.8,
    "magnesium_mg": 15.0,
    "omega3_g": 0.58,
    "phosphorus_mg": 170.0,
    "potassium_mg": 130.0,
    "protein_g": 12.0,
    "salt_g": 0.825,
    "sat_fat_g": 4.3,
    "sodium_mg": 330.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-518",
  "state": "Unspecified",
  "subcategory": "MI",
  "tags": [
    "mi",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
