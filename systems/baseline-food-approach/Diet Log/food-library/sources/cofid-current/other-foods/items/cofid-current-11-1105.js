/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Asian Sweetmeat, Recipe",
  "id": "cofid-current-11-1105",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pinni, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 59.5,
    "energy_kcal": 527.0,
    "fat_g": 31.4,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 1.0,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 124.0,
    "potassium_mg": 160.0,
    "protein_g": 5.4,
    "salt_g": 0.01,
    "sat_fat_g": 15.46,
    "sodium_mg": 4.0,
    "sugar_g": 40.9,
    "vitamin_a_ug": 314.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.25,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1105",
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
