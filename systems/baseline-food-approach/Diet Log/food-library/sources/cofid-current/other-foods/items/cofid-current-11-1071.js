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
  "id": "cofid-current-11-1071",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flapjacks, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 61.6,
    "energy_kcal": 464.0,
    "fat_g": 24.0,
    "fibre_g": 3.1,
    "folate_ug": 6.0,
    "iron_mg": 2.09,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 152.0,
    "potassium_mg": 190.0,
    "protein_g": 4.4,
    "salt_g": 0.6775,
    "sat_fat_g": 7.45,
    "sodium_mg": 271.0,
    "sugar_g": 34.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1071",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
