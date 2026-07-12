/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Indian ice cream. Recipe",
  "id": "cofid-current-12-606",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Kulfi, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 158.0,
    "carbs_g": 13.8,
    "energy_kcal": 457.0,
    "fat_g": 42.4,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 0.33,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 161.0,
    "potassium_mg": 245.0,
    "protein_g": 5.7,
    "salt_g": 0.1375,
    "sat_fat_g": 24.22,
    "sodium_mg": 55.0,
    "sugar_g": 13.6,
    "vitamin_a_ug": 595.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 2.67,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-606",
  "state": "Unspecified",
  "subcategory": "BP",
  "tags": [
    "bp",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
