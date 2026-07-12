/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from poached 16-076",
  "id": "cofid-current-16-077",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Halibut, flesh only, poached, weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 1.0,
    "energy_kcal": 142.0,
    "fat_g": 5.3,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.5,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 230.0,
    "potassium_mg": 450.0,
    "protein_g": 22.7,
    "salt_g": 0.24,
    "sat_fat_g": 2.5,
    "sodium_mg": 96.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.95,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-077",
  "state": "Poached",
  "subcategory": "JA",
  "tags": [
    "ja",
    "other-foods",
    "poached"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
