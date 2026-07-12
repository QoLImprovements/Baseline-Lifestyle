/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "8 samples, 2 brands; assorted flavours",
  "id": "cofid-old-15-323",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vegebanger mix",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 28.8,
    "energy_kcal": 393.0,
    "fat_g": 15.3,
    "fibre_g": 0.0,
    "folate_ug": 110.0,
    "iron_mg": 7.3,
    "magnesium_mg": 130.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 360.0,
    "potassium_mg": 970.0,
    "protein_g": 36.9,
    "salt_g": 3.275,
    "sat_fat_g": 4.95,
    "sodium_mg": 1310.0,
    "sugar_g": 3.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "15-323",
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
