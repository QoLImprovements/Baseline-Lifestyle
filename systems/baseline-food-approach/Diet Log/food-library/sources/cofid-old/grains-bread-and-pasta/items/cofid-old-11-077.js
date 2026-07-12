/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "10 samples, 10 different shops. Calculated using 12% weight loss",
  "id": "cofid-old-11-077",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, currant, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 96.0,
    "carbs_g": 56.8,
    "energy_kcal": 323.0,
    "fat_g": 8.5,
    "fibre_g": 0.0,
    "folate_ug": 21.0,
    "iron_mg": 1.8,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 250.0,
    "protein_g": 8.4,
    "salt_g": 0.825,
    "sat_fat_g": 1.8,
    "sodium_mg": 330.0,
    "sugar_g": 16.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-077",
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
