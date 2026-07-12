/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Calculated from 37% shish kebab (19-150), 27% pitta bread and 36% salad",
  "id": "cofid-current-19-525",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Shish kebab in pitta bread with salad",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 15.4,
    "energy_kcal": 149.0,
    "fat_g": 4.1,
    "fibre_g": 1.2,
    "folate_ug": 30.0,
    "iron_mg": 1.52,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 127.0,
    "potassium_mg": 283.0,
    "protein_g": 13.6,
    "salt_g": 0.75,
    "sat_fat_g": 1.51,
    "sodium_mg": 300.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-525",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "grains-bread-and-pasta",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
