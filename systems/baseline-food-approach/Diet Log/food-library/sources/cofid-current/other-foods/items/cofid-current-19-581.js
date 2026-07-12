/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-19-581",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Frankfurter with bun",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 35.6,
    "energy_kcal": 264.0,
    "fat_g": 9.8,
    "fibre_g": 1.8,
    "folate_ug": 19.0,
    "iron_mg": 1.37,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 131.0,
    "potassium_mg": 153.0,
    "protein_g": 10.7,
    "salt_g": 1.26,
    "sat_fat_g": 3.32,
    "sodium_mg": 504.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-581",
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
