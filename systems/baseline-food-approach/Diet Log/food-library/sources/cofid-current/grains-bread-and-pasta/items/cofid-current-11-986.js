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
  "id": "cofid-current-11-986",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread rolls, wholemeal",
  "nutritionPerBasis": {
    "calcium_mg": 87.0,
    "carbs_g": 46.1,
    "energy_kcal": 244.0,
    "fat_g": 3.3,
    "fibre_g": 5.5,
    "folate_ug": 57.0,
    "iron_mg": 2.4,
    "magnesium_mg": 61.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 197.0,
    "potassium_mg": 248.0,
    "protein_g": 10.4,
    "salt_g": 0.95,
    "sat_fat_g": 0.8,
    "sodium_mg": 380.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-986",
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
