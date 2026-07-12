/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "7 samples, 4 brands, pre-packed, sliced",
  "id": "cofid-current-11-975",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, wheatgerm",
  "nutritionPerBasis": {
    "calcium_mg": 212.0,
    "carbs_g": 39.5,
    "energy_kcal": 220.0,
    "fat_g": 3.1,
    "fibre_g": 5.7,
    "folate_ug": 38.0,
    "iron_mg": 2.9,
    "magnesium_mg": 64.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 219.0,
    "potassium_mg": 269.0,
    "protein_g": 11.1,
    "salt_g": 0.975,
    "sat_fat_g": 0.72,
    "sodium_mg": 390.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-975",
  "state": "Unspecified",
  "subcategory": "AF",
  "tags": [
    "af",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
