/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "22 samples, early and late winter, including Navel and Valencia",
  "id": "cofid-current-14-327",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Oranges, flesh only",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 8.2,
    "energy_kcal": 36.0,
    "fat_g": 0.2,
    "fibre_g": 1.2,
    "folate_ug": 33.0,
    "iron_mg": 0.11,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 122.0,
    "protein_g": 0.8,
    "salt_g": 0.0025,
    "sat_fat_g": 0.05,
    "sodium_mg": 1.0,
    "sugar_g": 8.2,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 52.0,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 0.05
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-327",
  "state": "Unspecified",
  "subcategory": "FA",
  "tags": [
    "fa",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
