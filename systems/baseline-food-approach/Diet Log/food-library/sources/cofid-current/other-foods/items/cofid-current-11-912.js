/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "5 samples, radish filled flatbread",
  "id": "cofid-current-11-912",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mooli paratha, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 33.8,
    "energy_kcal": 171.0,
    "fat_g": 2.3,
    "fibre_g": 4.8,
    "folate_ug": 12.0,
    "iron_mg": 1.86,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 114.0,
    "potassium_mg": 235.0,
    "protein_g": 5.9,
    "salt_g": 0.9875,
    "sat_fat_g": 0.41,
    "sodium_mg": 395.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.87,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-912",
  "state": "Unspecified",
  "subcategory": "AF",
  "tags": [
    "af",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
