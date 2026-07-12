/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe. West Indian dish. Steamed spinach with onion and tomato.",
  "id": "cofid-current-15-822",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mchicha, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 215.0,
    "carbs_g": 4.0,
    "energy_kcal": 73.0,
    "fat_g": 4.7,
    "fibre_g": 0.0,
    "folate_ug": 69.0,
    "iron_mg": 3.82,
    "magnesium_mg": 71.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 666.0,
    "protein_g": 3.6,
    "salt_g": 0.4275,
    "sat_fat_g": 0.35,
    "sodium_mg": 171.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 681.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 2.86,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-822",
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
