/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 15-333 using 9% weight loss",
  "id": "cofid-old-15-336",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vegeburger mix, made up with water, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 14.3,
    "energy_kcal": 150.0,
    "fat_g": 5.2,
    "fibre_g": 0.0,
    "folate_ug": 22.0,
    "iron_mg": 3.7,
    "magnesium_mg": 62.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 420.0,
    "protein_g": 12.6,
    "salt_g": 1.075,
    "sat_fat_g": 1.8,
    "sodium_mg": 430.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "15-336",
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
