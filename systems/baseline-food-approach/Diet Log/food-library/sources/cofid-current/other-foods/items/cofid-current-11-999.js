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
  "id": "cofid-current-11-999",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Risotto, plain, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 35.6,
    "energy_kcal": 184.0,
    "fat_g": 4.7,
    "fibre_g": 0.9,
    "folate_ug": 3.0,
    "iron_mg": 0.19,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 73.0,
    "protein_g": 3.3,
    "salt_g": 1.1175,
    "sat_fat_g": 0.67,
    "sodium_mg": 447.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.01,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-999",
  "state": "Unspecified",
  "subcategory": "AT",
  "tags": [
    "at",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
