/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "8 samples, 6 products",
  "id": "cofid-current-11-889",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flour, wheat, wholemeal",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 69.9,
    "energy_kcal": 327.0,
    "fat_g": 2.0,
    "fibre_g": 10.1,
    "folate_ug": 27.0,
    "iron_mg": 2.47,
    "magnesium_mg": 83.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 281.0,
    "potassium_mg": 358.0,
    "protein_g": 11.6,
    "salt_g": 0.005,
    "sat_fat_g": 0.29,
    "sodium_mg": 2.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-889",
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
