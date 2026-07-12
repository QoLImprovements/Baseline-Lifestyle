/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "8 samples, 7 products",
  "id": "cofid-current-15-635",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coleslaw, not low calorie, retail",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 6.0,
    "energy_kcal": 173.0,
    "fat_g": 16.3,
    "fibre_g": 1.2,
    "folate_ug": 56.0,
    "iron_mg": 0.25,
    "magnesium_mg": 8.0,
    "omega3_g": 1.1,
    "phosphorus_mg": 21.0,
    "potassium_mg": 156.0,
    "protein_g": 0.8,
    "salt_g": 0.74,
    "sat_fat_g": 1.65,
    "sodium_mg": 296.0,
    "sugar_g": 6.0,
    "vitamin_a_ug": 153.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 3.93,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-635",
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
