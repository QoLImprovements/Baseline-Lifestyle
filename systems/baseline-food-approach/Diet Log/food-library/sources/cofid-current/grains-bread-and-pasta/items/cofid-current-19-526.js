/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Calculated from 50% doner kebab (19-129), 22% pitta bread and 28% salad",
  "id": "cofid-current-19-526",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Doner kebab in pitta bread with salad",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 12.5,
    "energy_kcal": 248.0,
    "fat_g": 16.0,
    "fibre_g": 0.9,
    "folate_ug": 25.0,
    "iron_mg": 1.5,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 133.0,
    "potassium_mg": 276.0,
    "protein_g": 14.1,
    "salt_g": 0.0,
    "sat_fat_g": 7.54,
    "sodium_mg": 0.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-526",
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
