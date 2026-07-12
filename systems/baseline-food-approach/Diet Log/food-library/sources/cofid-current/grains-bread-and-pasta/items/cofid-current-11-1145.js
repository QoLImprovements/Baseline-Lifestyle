/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Average of 5 main types of white bread",
  "id": "cofid-current-11-1145",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, white, average",
  "nutritionPerBasis": {
    "calcium_mg": 155.0,
    "carbs_g": 48.7,
    "energy_kcal": 236.0,
    "fat_g": 2.1,
    "fibre_g": 2.9,
    "folate_ug": 29.0,
    "iron_mg": 1.5,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 96.0,
    "potassium_mg": 134.0,
    "protein_g": 8.7,
    "salt_g": 1.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 400.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1145",
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
