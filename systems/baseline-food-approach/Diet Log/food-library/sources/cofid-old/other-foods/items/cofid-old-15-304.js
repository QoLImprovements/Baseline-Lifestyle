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
  "id": "cofid-old-15-304",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salad, Waldorf, retail",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 8.6,
    "energy_kcal": 397.0,
    "fat_g": 39.6,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 0.8,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 210.0,
    "protein_g": 2.1,
    "salt_g": 0.55,
    "sat_fat_g": 5.4,
    "sodium_mg": 220.0,
    "sugar_g": 8.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 8.91,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "15-304",
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
