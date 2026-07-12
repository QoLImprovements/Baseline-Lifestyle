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
  "id": "cofid-current-12-603",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Welsh rarebit, wholemeal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 331.0,
    "carbs_g": 22.1,
    "energy_kcal": 387.0,
    "fat_g": 27.4,
    "fibre_g": 3.5,
    "folate_ug": 32.0,
    "iron_mg": 1.37,
    "magnesium_mg": 46.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 295.0,
    "potassium_mg": 185.0,
    "protein_g": 14.4,
    "salt_g": 1.4525,
    "sat_fat_g": 16.59,
    "sodium_mg": 581.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 315.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-603",
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
