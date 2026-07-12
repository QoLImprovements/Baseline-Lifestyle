/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "7 samples, 5 products",
  "id": "cofid-current-11-895",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flour, chapati, brown",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 73.0,
    "energy_kcal": 332.0,
    "fat_g": 1.9,
    "fibre_g": 7.9,
    "folate_ug": 28.0,
    "iron_mg": 4.63,
    "magnesium_mg": 110.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 377.0,
    "potassium_mg": 280.0,
    "protein_g": 10.3,
    "salt_g": 0.035,
    "sat_fat_g": 0.29,
    "sodium_mg": 14.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.17,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-895",
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
