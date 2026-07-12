/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "8 samples, 8 products, including liquorice and mint, excluding premium",
  "id": "cofid-current-17-646",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Toffees, mixed",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 62.9,
    "energy_kcal": 387.0,
    "fat_g": 15.9,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.3,
    "magnesium_mg": 11.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 65.0,
    "potassium_mg": 132.0,
    "protein_g": 2.1,
    "salt_g": 0.78,
    "sat_fat_g": 8.6,
    "sodium_mg": 312.0,
    "sugar_g": 39.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-646",
  "state": "Unspecified",
  "subcategory": "SEC",
  "tags": [
    "other-foods",
    "sec",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
