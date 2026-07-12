/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "15 samples",
  "id": "cofid-current-11-980",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, white, sliced",
  "nutritionPerBasis": {
    "calcium_mg": 177.0,
    "carbs_g": 46.1,
    "energy_kcal": 219.0,
    "fat_g": 1.6,
    "fibre_g": 2.5,
    "folate_ug": 25.0,
    "iron_mg": 1.6,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 137.0,
    "protein_g": 7.9,
    "salt_g": 1.0,
    "sat_fat_g": 0.29,
    "sodium_mg": 400.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.42
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-980",
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
