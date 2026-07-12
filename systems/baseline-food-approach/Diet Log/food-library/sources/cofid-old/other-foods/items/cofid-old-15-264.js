/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "9 frozen samples, 3 brands; shallow fried then simmered for 35-40 minutes",
  "id": "cofid-old-15-264",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ratatouille, retail",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 3.7,
    "energy_kcal": 78.0,
    "fat_g": 6.6,
    "fibre_g": 0.0,
    "folate_ug": 41.0,
    "iron_mg": 0.6,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 220.0,
    "protein_g": 1.2,
    "salt_g": 0.0475,
    "sat_fat_g": 0.8,
    "sodium_mg": 19.0,
    "sugar_g": 3.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 2.66,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "15-264",
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
