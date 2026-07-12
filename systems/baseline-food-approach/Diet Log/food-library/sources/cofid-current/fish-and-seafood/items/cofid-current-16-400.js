/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "9 samples, 9 products, frozen and chilled",
  "id": "cofid-current-16-400",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tuna, flesh only, baked",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 136.0,
    "fat_g": 0.8,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.93,
    "magnesium_mg": 41.0,
    "omega3_g": 0.11,
    "phosphorus_mg": 290.0,
    "potassium_mg": 450.0,
    "protein_g": 32.3,
    "salt_g": 0.1575,
    "sat_fat_g": 0.29,
    "sodium_mg": 63.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 78.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-400",
  "state": "Baked",
  "subcategory": "JC",
  "tags": [
    "baked",
    "fish-and-seafood",
    "jc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
