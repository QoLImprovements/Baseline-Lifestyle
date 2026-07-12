/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "5 samples, 4 products",
  "id": "cofid-current-11-906",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bran, wheat",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 20.6,
    "energy_kcal": 186.0,
    "fat_g": 5.5,
    "fibre_g": 41.3,
    "folate_ug": 76.0,
    "iron_mg": 8.6,
    "magnesium_mg": 389.0,
    "omega3_g": 0.21,
    "phosphorus_mg": 1078.0,
    "potassium_mg": 1269.0,
    "protein_g": 14.8,
    "salt_g": 0.0075,
    "sat_fat_g": 0.89,
    "sodium_mg": 3.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.02,
    "vitamin_k_ug": 10.4
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-906",
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
