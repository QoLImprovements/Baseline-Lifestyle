/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "12 samples, 10 samples",
  "id": "cofid-current-11-888",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flour, wheat, white, self raising",
  "nutritionPerBasis": {
    "calcium_mg": 280.0,
    "carbs_g": 79.6,
    "energy_kcal": 348.0,
    "fat_g": 1.5,
    "fibre_g": 4.0,
    "folate_ug": 18.0,
    "iron_mg": 1.74,
    "magnesium_mg": 25.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 463.0,
    "potassium_mg": 190.0,
    "protein_g": 8.9,
    "salt_g": 0.855,
    "sat_fat_g": 0.39,
    "sodium_mg": 342.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-888",
  "state": "Unspecified",
  "subcategory": "AA",
  "tags": [
    "aa",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
