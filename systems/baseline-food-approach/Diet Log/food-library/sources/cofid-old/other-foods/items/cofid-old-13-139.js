/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "8 samples, 5 brands",
  "id": "cofid-old-13-139",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peas, petit pois, canned, drained",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 4.9,
    "energy_kcal": 45.0,
    "fat_g": 0.6,
    "fibre_g": 0.0,
    "folate_ug": 27.0,
    "iron_mg": 1.5,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 130.0,
    "protein_g": 5.2,
    "salt_g": 0.575,
    "sat_fat_g": 0.1,
    "sodium_mg": 230.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 75.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-139",
  "state": "Canned",
  "subcategory": "DF",
  "tags": [
    "canned",
    "df",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
