/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "21 samples, sliced and unsliced",
  "id": "cofid-current-11-981",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, wholemeal, average",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 42.0,
    "energy_kcal": 217.0,
    "fat_g": 2.5,
    "fibre_g": 7.0,
    "folate_ug": 40.0,
    "iron_mg": 2.4,
    "magnesium_mg": 66.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 202.0,
    "potassium_mg": 253.0,
    "protein_g": 9.4,
    "salt_g": 1.0,
    "sat_fat_g": 0.46,
    "sodium_mg": 400.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 2.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-981",
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
