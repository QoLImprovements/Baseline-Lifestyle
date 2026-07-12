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
  "id": "cofid-current-17-782",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chevda/chevra/chewra, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 35.5,
    "energy_kcal": 487.0,
    "fat_g": 31.8,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 3.83,
    "magnesium_mg": 124.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 302.0,
    "potassium_mg": 584.0,
    "protein_g": 18.6,
    "salt_g": 0.285,
    "sat_fat_g": 4.71,
    "sodium_mg": 114.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 79.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 14.18
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-782",
  "state": "Unspecified",
  "subcategory": "SNC",
  "tags": [
    "other-foods",
    "snc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
