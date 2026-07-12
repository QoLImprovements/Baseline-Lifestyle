/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-current-11-985",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread rolls, white, crusty",
  "nutritionPerBasis": {
    "calcium_mg": 177.0,
    "carbs_g": 54.9,
    "energy_kcal": 262.0,
    "fat_g": 2.2,
    "fibre_g": 2.9,
    "folate_ug": 31.0,
    "iron_mg": 1.7,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 104.0,
    "potassium_mg": 164.0,
    "protein_g": 9.2,
    "salt_g": 1.0,
    "sat_fat_g": 0.51,
    "sodium_mg": 400.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-985",
  "state": "Unspecified",
  "subcategory": "AG",
  "tags": [
    "ag",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
