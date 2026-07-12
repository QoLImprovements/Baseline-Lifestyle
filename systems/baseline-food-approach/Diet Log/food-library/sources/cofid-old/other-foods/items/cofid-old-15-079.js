/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe from manufacturer",
  "id": "cofid-old-15-079",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coleslaw, with vinaigrette, retail",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 12.4,
    "energy_kcal": 87.0,
    "fat_g": 4.0,
    "fibre_g": 0.0,
    "folate_ug": 24.0,
    "iron_mg": 0.4,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 190.0,
    "protein_g": 1.1,
    "salt_g": 0.325,
    "sat_fat_g": 0.5,
    "sodium_mg": 130.0,
    "sugar_g": 12.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 24.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "15-079",
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
