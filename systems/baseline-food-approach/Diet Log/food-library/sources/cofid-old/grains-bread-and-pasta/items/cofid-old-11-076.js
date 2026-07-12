/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "10 samples, 10 different shops",
  "id": "cofid-old-11-076",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, currant",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 50.7,
    "energy_kcal": 289.0,
    "fat_g": 7.6,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 1.6,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 220.0,
    "protein_g": 7.5,
    "salt_g": 0.725,
    "sat_fat_g": 1.6,
    "sodium_mg": 290.0,
    "sugar_g": 14.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-076",
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
