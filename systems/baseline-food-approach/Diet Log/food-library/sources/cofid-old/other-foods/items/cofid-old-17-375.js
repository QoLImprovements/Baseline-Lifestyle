/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples of different brands, including oil",
  "id": "cofid-old-17-375",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tomatoes, sun dried",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 5.4,
    "energy_kcal": 495.0,
    "fat_g": 51.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.9,
    "magnesium_mg": 27.0,
    "omega3_g": 0.72,
    "phosphorus_mg": 46.0,
    "potassium_mg": 460.0,
    "protein_g": 3.3,
    "salt_g": 2.5,
    "sat_fat_g": 6.7,
    "sodium_mg": 1000.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 23.98,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-375",
  "state": "Dried",
  "subcategory": "DG",
  "tags": [
    "dg",
    "dried",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
