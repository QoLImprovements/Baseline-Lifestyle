/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "6 samples, 3 brands; soya protein based. Grilled 6-10 minutes",
  "id": "cofid-current-15-656",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vegeburger, retail, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 8.0,
    "energy_kcal": 161.0,
    "fat_g": 7.2,
    "fibre_g": 4.5,
    "folate_ug": 95.0,
    "iron_mg": 4.5,
    "magnesium_mg": 80.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 240.0,
    "potassium_mg": 610.0,
    "protein_g": 16.6,
    "salt_g": 1.225,
    "sat_fat_g": 0.0,
    "sodium_mg": 490.0,
    "sugar_g": 3.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 2.18
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-656",
  "state": "Grilled",
  "subcategory": "DR",
  "tags": [
    "dr",
    "grilled",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
