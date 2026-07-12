/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "14 samples of 6 rolls, different shops",
  "id": "cofid-current-11-983",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread rolls, brown, soft",
  "nutritionPerBasis": {
    "calcium_mg": 201.0,
    "carbs_g": 44.8,
    "energy_kcal": 236.0,
    "fat_g": 3.2,
    "fibre_g": 4.3,
    "folate_ug": 57.0,
    "iron_mg": 2.4,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 234.0,
    "protein_g": 9.9,
    "salt_g": 0.95,
    "sat_fat_g": 1.1,
    "sodium_mg": 380.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-983",
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
