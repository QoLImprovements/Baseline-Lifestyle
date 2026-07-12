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
  "id": "cofid-current-12-956",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Omelette, curried, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 3.5,
    "energy_kcal": 370.0,
    "fat_g": 36.0,
    "fibre_g": 0.0,
    "folate_ug": 24.0,
    "iron_mg": 4.48,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 134.0,
    "potassium_mg": 232.0,
    "protein_g": 8.4,
    "salt_g": 0.96,
    "sat_fat_g": 20.52,
    "sodium_mg": 384.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 462.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.49,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-956",
  "state": "Unspecified",
  "subcategory": "CDE",
  "tags": [
    "cde",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
