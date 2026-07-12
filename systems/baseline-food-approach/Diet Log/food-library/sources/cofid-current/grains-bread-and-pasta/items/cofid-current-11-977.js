/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "20 samples",
  "id": "cofid-current-11-977",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, white, farmhouse or split tin",
  "nutritionPerBasis": {
    "calcium_mg": 172.0,
    "carbs_g": 49.9,
    "energy_kcal": 241.0,
    "fat_g": 2.0,
    "fibre_g": 2.9,
    "folate_ug": 23.0,
    "iron_mg": 1.3,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 135.0,
    "protein_g": 9.0,
    "salt_g": 1.0,
    "sat_fat_g": 0.49,
    "sodium_mg": 400.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-977",
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
