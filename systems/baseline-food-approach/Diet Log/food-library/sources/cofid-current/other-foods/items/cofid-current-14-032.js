/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 450g fruit, 770g water, 54g sugar",
  "id": "cofid-current-14-032",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Apricots, dried, stewed with sugar",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 22.0,
    "energy_kcal": 92.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.6,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 740.0,
    "protein_g": 1.9,
    "salt_g": 0.0525,
    "sat_fat_g": 0.0,
    "sodium_mg": 21.0,
    "sugar_g": 22.0,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-032",
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
