/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-17-379",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yeast, dried",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 3.5,
    "energy_kcal": 169.0,
    "fat_g": 1.5,
    "fibre_g": 0.0,
    "folate_ug": 4000.0,
    "iron_mg": 20.0,
    "magnesium_mg": 230.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1290.0,
    "potassium_mg": 2000.0,
    "protein_g": 35.6,
    "salt_g": 0.125,
    "sat_fat_g": 0.0,
    "sodium_mg": 50.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-379",
  "state": "Dried",
  "subcategory": "WY",
  "tags": [
    "dried",
    "other-foods",
    "wy"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
