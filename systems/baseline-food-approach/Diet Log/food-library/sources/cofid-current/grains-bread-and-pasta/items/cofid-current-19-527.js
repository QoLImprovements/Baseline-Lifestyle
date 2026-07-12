/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Calculated from 60% chilli con carne (19-208) and 40% boiled white rice",
  "id": "cofid-current-19-527",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chilli con carne, retail, reheated, with rice",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 18.1,
    "energy_kcal": 116.0,
    "fat_g": 2.7,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.92,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 70.0,
    "potassium_mg": 187.0,
    "protein_g": 5.8,
    "salt_g": 0.47,
    "sat_fat_g": 1.17,
    "sodium_mg": 188.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-527",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "grains-bread-and-pasta",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
