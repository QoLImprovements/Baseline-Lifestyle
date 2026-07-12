/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Lettuce, cucumber, pepper and celery. Recipe from review of recipe collection",
  "id": "cofid-current-15-648",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salad, green",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 1.6,
    "energy_kcal": 13.0,
    "fat_g": 0.4,
    "fibre_g": 0.0,
    "folate_ug": 32.0,
    "iron_mg": 0.29,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 172.0,
    "protein_g": 1.0,
    "salt_g": 0.02,
    "sat_fat_g": 0.04,
    "sodium_mg": 8.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 35.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-648",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
