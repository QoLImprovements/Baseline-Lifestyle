/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "4 samples, 2 products, 81% extraction",
  "id": "cofid-current-11-892",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flour, wheat, brown",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 72.5,
    "energy_kcal": 339.0,
    "fat_g": 2.0,
    "fibre_g": 7.7,
    "folate_ug": 44.0,
    "iron_mg": 2.38,
    "magnesium_mg": 72.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 256.0,
    "potassium_mg": 295.0,
    "protein_g": 12.2,
    "salt_g": 0.005,
    "sat_fat_g": 0.29,
    "sodium_mg": 2.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-892",
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
