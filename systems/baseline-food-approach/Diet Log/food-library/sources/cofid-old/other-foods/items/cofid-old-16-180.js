/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Samples purchased whole from West Indian outlets, flesh only",
  "id": "cofid-old-16-180",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Herrings, flesh only, dried, salted",
  "nutritionPerBasis": {
    "calcium_mg": 200.0,
    "carbs_g": 0.0,
    "energy_kcal": 168.0,
    "fat_g": 7.4,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 1.9,
    "magnesium_mg": 73.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 250.0,
    "potassium_mg": 150.0,
    "protein_g": 25.3,
    "salt_g": 13.025,
    "sat_fat_g": 0.0,
    "sodium_mg": 5210.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "16-180",
  "state": "Dried",
  "subcategory": "JC",
  "tags": [
    "dried",
    "jc",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
