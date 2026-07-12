/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe. Greek dish. Macaroni, lentil and vegetables with white sauce.",
  "id": "cofid-current-15-835",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastichio",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 17.2,
    "energy_kcal": 150.0,
    "fat_g": 6.3,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 1.39,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 122.0,
    "potassium_mg": 229.0,
    "protein_g": 7.0,
    "salt_g": 0.2225,
    "sat_fat_g": 3.71,
    "sodium_mg": 89.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 91.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-835",
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
