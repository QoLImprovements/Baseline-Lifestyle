/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "8 samples, 4 brands, including Nimble and Weight Watchers",
  "id": "cofid-current-11-976",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, white, Danish style",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 44.5,
    "energy_kcal": 228.0,
    "fat_g": 2.7,
    "fibre_g": 3.1,
    "folate_ug": 44.0,
    "iron_mg": 1.7,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 110.0,
    "protein_g": 9.1,
    "salt_g": 1.0,
    "sat_fat_g": 0.5,
    "sodium_mg": 400.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-976",
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
