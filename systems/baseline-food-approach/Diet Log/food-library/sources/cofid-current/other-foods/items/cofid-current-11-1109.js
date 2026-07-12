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
  "id": "cofid-current-11-1109",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rock cakes, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 61.8,
    "energy_kcal": 386.0,
    "fat_g": 14.8,
    "fibre_g": 1.4,
    "folate_ug": 6.0,
    "iron_mg": 1.14,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 241.0,
    "potassium_mg": 226.0,
    "protein_g": 5.3,
    "salt_g": 0.955,
    "sat_fat_g": 4.9,
    "sodium_mg": 382.0,
    "sugar_g": 32.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1109",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
