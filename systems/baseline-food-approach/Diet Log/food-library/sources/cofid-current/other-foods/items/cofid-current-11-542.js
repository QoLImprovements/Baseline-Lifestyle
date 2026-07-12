/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated using a weight loss of 12.6%",
  "id": "cofid-current-11-542",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Muffins, English style, white, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 51.0,
    "energy_kcal": 261.0,
    "fat_g": 2.7,
    "fibre_g": 3.0,
    "folate_ug": 47.0,
    "iron_mg": 1.49,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 102.0,
    "potassium_mg": 142.0,
    "protein_g": 11.3,
    "salt_g": 1.2325,
    "sat_fat_g": 0.43,
    "sodium_mg": 493.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 74.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-542",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
