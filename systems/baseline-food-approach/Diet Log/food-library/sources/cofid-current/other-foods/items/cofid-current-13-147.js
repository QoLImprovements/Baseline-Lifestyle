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
  "id": "cofid-current-13-147",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Agar, dried, soaked and drained",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 0.0,
    "energy_kcal": 2.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 3.5,
    "magnesium_mg": 75.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 20.0,
    "protein_g": 0.2,
    "salt_g": 0.025,
    "sat_fat_g": 0.0,
    "sodium_mg": 10.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-147",
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
