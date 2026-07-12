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
  "id": "cofid-current-12-602",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Welsh rarebit, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 378.0,
    "carbs_g": 23.1,
    "energy_kcal": 398.0,
    "fat_g": 28.4,
    "fibre_g": 1.2,
    "folate_ug": 25.0,
    "iron_mg": 0.94,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 249.0,
    "potassium_mg": 126.0,
    "protein_g": 13.9,
    "salt_g": 1.48,
    "sat_fat_g": 17.38,
    "sodium_mg": 592.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 331.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-602",
  "state": "Unspecified",
  "subcategory": "BV",
  "tags": [
    "bv",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
