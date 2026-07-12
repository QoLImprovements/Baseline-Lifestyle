/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "7 samples, 5 product",
  "id": "cofid-current-11-896",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flour, gram",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 57.0,
    "energy_kcal": 353.0,
    "fat_g": 5.4,
    "fibre_g": 10.1,
    "folate_ug": 193.0,
    "iron_mg": 2.63,
    "magnesium_mg": 62.0,
    "omega3_g": 0.15,
    "phosphorus_mg": 220.0,
    "potassium_mg": 297.0,
    "protein_g": 22.7,
    "salt_g": 0.005,
    "sat_fat_g": 0.61,
    "sodium_mg": 2.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.54,
    "vitamin_k_ug": 8.92
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-896",
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
