/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "6 samples, 3 brands",
  "id": "cofid-current-11-462",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, malt, fruited",
  "nutritionPerBasis": {
    "calcium_mg": 104.0,
    "carbs_g": 64.9,
    "energy_kcal": 295.0,
    "fat_g": 2.3,
    "fibre_g": 3.5,
    "folate_ug": 34.0,
    "iron_mg": 1.7,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 125.0,
    "potassium_mg": 234.0,
    "protein_g": 7.8,
    "salt_g": 0.615,
    "sat_fat_g": 0.52,
    "sodium_mg": 246.0,
    "sugar_g": 22.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-462",
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
