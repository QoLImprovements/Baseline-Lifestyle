/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "15 samples. Calculated using weight loss of 18%",
  "id": "cofid-current-11-1001",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, white, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 216.0,
    "carbs_g": 56.2,
    "energy_kcal": 267.0,
    "fat_g": 2.0,
    "fibre_g": 3.0,
    "folate_ug": 30.0,
    "iron_mg": 1.95,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 116.0,
    "potassium_mg": 167.0,
    "protein_g": 9.7,
    "salt_g": 1.225,
    "sat_fat_g": 0.35,
    "sodium_mg": 490.0,
    "sugar_g": 4.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1001",
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
