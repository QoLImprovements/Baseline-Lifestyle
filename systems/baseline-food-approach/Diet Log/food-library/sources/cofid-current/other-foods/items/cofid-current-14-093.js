/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 450g fruit, 450g water, 54g sugar",
  "id": "cofid-current-14-093",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Figs, dried, stewed with sugar",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 34.3,
    "energy_kcal": 143.0,
    "fat_g": 0.8,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.2,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 510.0,
    "protein_g": 1.9,
    "salt_g": 0.08,
    "sat_fat_g": 0.0,
    "sodium_mg": 32.0,
    "sugar_g": 34.3,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-093",
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
