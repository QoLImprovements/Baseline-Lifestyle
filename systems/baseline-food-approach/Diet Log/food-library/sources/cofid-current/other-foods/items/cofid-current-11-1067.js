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
  "id": "cofid-current-11-1067",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flan case, sponge, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 54.4,
    "energy_kcal": 293.0,
    "fat_g": 5.6,
    "fibre_g": 1.0,
    "folate_ug": 16.0,
    "iron_mg": 1.55,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 133.0,
    "potassium_mg": 130.0,
    "protein_g": 9.6,
    "salt_g": 0.23,
    "sat_fat_g": 1.58,
    "sodium_mg": 92.0,
    "sugar_g": 34.6,
    "vitamin_a_ug": 74.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1067",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
