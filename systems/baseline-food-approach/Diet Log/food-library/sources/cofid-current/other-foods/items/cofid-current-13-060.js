/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "No seed coat. Literature sources",
  "id": "cofid-current-13-060",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Black gram, duhli urad dahl, split, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 44.0,
    "energy_kcal": 298.0,
    "fat_g": 1.4,
    "fibre_g": 0.0,
    "folate_ug": 132.0,
    "iron_mg": 6.3,
    "magnesium_mg": 130.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 270.0,
    "potassium_mg": 800.0,
    "protein_g": 27.2,
    "salt_g": 0.1,
    "sat_fat_g": 0.2,
    "sodium_mg": 40.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-060",
  "state": "Dried",
  "subcategory": "DB",
  "tags": [
    "db",
    "dried",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
