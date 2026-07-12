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
  "id": "cofid-current-11-962",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Dumplings, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 25.4,
    "energy_kcal": 211.0,
    "fat_g": 11.7,
    "fibre_g": 1.2,
    "folate_ug": 2.0,
    "iron_mg": 0.57,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 132.0,
    "potassium_mg": 52.0,
    "protein_g": 2.7,
    "salt_g": 0.345,
    "sat_fat_g": 6.63,
    "sodium_mg": 138.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-962",
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
