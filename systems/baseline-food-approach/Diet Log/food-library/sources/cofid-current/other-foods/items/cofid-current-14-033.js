/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 450g fruit, 770g water",
  "id": "cofid-current-14-033",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Apricots, dried, stewed without sugar",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 17.8,
    "energy_kcal": 77.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.7,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 770.0,
    "protein_g": 2.0,
    "salt_g": 0.055,
    "sat_fat_g": 0.0,
    "sodium_mg": 22.0,
    "sugar_g": 17.8,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-033",
  "state": "Dried",
  "subcategory": "FA",
  "tags": [
    "dried",
    "fa",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
