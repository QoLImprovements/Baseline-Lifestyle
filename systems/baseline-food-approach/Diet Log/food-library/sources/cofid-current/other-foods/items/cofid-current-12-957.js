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
  "id": "cofid-current-12-957",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Omelette, Spanish, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 5.9,
    "energy_kcal": 112.0,
    "fat_g": 7.6,
    "fibre_g": 0.0,
    "folate_ug": 26.0,
    "iron_mg": 1.04,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 226.0,
    "protein_g": 5.6,
    "salt_g": 0.1375,
    "sat_fat_g": 1.19,
    "sodium_mg": 55.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 80.0,
    "vitamin_c_mg": 29.0,
    "vitamin_e_mg": 1.8,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-957",
  "state": "Unspecified",
  "subcategory": "CD",
  "tags": [
    "cd",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
