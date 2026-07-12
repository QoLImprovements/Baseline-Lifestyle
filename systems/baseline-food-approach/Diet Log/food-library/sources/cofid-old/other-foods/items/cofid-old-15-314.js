/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples of the same brand (Cross and Blackwell)",
  "id": "cofid-old-15-314",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soya mince, granules",
  "nutritionPerBasis": {
    "calcium_mg": 240.0,
    "carbs_g": 11.0,
    "energy_kcal": 263.0,
    "fat_g": 5.4,
    "fibre_g": 0.0,
    "folate_ug": 35.0,
    "iron_mg": 9.0,
    "magnesium_mg": 270.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 570.0,
    "potassium_mg": 2160.0,
    "protein_g": 43.2,
    "salt_g": 11.05,
    "sat_fat_g": 0.7,
    "sodium_mg": 4420.0,
    "sugar_g": 5.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "15-314",
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
