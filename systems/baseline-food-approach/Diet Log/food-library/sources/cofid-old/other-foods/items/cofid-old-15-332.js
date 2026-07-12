/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 6 brands",
  "id": "cofid-old-15-332",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vegeburger mix",
  "nutritionPerBasis": {
    "calcium_mg": 240.0,
    "carbs_g": 34.5,
    "energy_kcal": 364.0,
    "fat_g": 12.6,
    "fibre_g": 0.0,
    "folate_ug": 110.0,
    "iron_mg": 8.9,
    "magnesium_mg": 150.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 430.0,
    "potassium_mg": 1020.0,
    "protein_g": 30.4,
    "salt_g": 2.625,
    "sat_fat_g": 4.3,
    "sodium_mg": 1050.0,
    "sugar_g": 4.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "15-332",
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
