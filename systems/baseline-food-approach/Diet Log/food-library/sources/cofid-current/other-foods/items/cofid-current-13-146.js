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
  "id": "cofid-current-13-146",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Agar, dried",
  "nutritionPerBasis": {
    "calcium_mg": 760.0,
    "carbs_g": 0.0,
    "energy_kcal": 16.0,
    "fat_g": 1.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 20.6,
    "magnesium_mg": 620.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 110.0,
    "protein_g": 1.3,
    "salt_g": 0.275,
    "sat_fat_g": 0.3,
    "sodium_mg": 110.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-146",
  "state": "Dried",
  "subcategory": "DG",
  "tags": [
    "dg",
    "dried",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
