/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "5 samples, 2 products, frozen",
  "id": "cofid-current-16-404",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Calamari, coated in batter, baked",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 25.9,
    "energy_kcal": 288.0,
    "fat_g": 17.5,
    "fibre_g": 1.9,
    "folate_ug": 3.0,
    "iron_mg": 0.52,
    "magnesium_mg": 33.0,
    "omega3_g": 0.25,
    "phosphorus_mg": 259.0,
    "potassium_mg": 88.0,
    "protein_g": 8.5,
    "salt_g": 2.955,
    "sat_fat_g": 2.07,
    "sodium_mg": 1182.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-404",
  "state": "Baked",
  "subcategory": "JM",
  "tags": [
    "baked",
    "jm",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
