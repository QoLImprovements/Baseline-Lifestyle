/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-951",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bannocks, made with wheat flour, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 134.0,
    "carbs_g": 65.5,
    "energy_kcal": 292.0,
    "fat_g": 1.3,
    "fibre_g": 3.1,
    "folate_ug": 8.0,
    "iron_mg": 1.52,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 218.0,
    "potassium_mg": 309.0,
    "protein_g": 8.5,
    "salt_g": 0.38,
    "sat_fat_g": 0.46,
    "sodium_mg": 152.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-951",
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
