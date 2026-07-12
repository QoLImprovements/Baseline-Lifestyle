/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe. West Indian dish. Red kidney beans. Recipe from a personal collection",
  "id": "cofid-current-15-853",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Red pea loaf",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 15.6,
    "energy_kcal": 127.0,
    "fat_g": 3.4,
    "fibre_g": 0.0,
    "folate_ug": 41.0,
    "iron_mg": 2.46,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 143.0,
    "potassium_mg": 397.0,
    "protein_g": 9.2,
    "salt_g": 0.07,
    "sat_fat_g": 0.78,
    "sodium_mg": 28.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.65,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-853",
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
