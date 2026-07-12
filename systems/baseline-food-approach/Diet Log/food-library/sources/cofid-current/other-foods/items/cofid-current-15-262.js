/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Quorn in korma curry sauce. Recipe from manufacturer",
  "id": "cofid-current-15-262",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Quorn korma",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 16.7,
    "energy_kcal": 140.0,
    "fat_g": 7.0,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.4,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 99.0,
    "protein_g": 3.7,
    "salt_g": 0.45,
    "sat_fat_g": 3.7,
    "sodium_mg": 180.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-262",
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
