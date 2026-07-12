/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "4 samples, 3 brands, baked or grilled",
  "id": "cofid-current-15-658",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sausages, vegetarian, baked/grilled",
  "nutritionPerBasis": {
    "calcium_mg": 136.0,
    "carbs_g": 9.2,
    "energy_kcal": 179.0,
    "fat_g": 9.4,
    "fibre_g": 0.0,
    "folate_ug": 34.0,
    "iron_mg": 3.1,
    "magnesium_mg": 54.0,
    "omega3_g": 0.19,
    "phosphorus_mg": 193.0,
    "potassium_mg": 351.0,
    "protein_g": 14.9,
    "salt_g": 1.375,
    "sat_fat_g": 2.33,
    "sodium_mg": 550.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-658",
  "state": "Baked",
  "subcategory": "DR",
  "tags": [
    "baked",
    "dr",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
