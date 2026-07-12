/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "18 samples, 10 products, Quaker and other/own brands",
  "id": "cofid-current-11-788",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Porridge oats, unfortified",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 70.7,
    "energy_kcal": 381.0,
    "fat_g": 8.1,
    "fibre_g": 7.8,
    "folate_ug": 32.0,
    "iron_mg": 3.64,
    "magnesium_mg": 114.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 387.0,
    "potassium_mg": 372.0,
    "protein_g": 10.9,
    "salt_g": 0.0025,
    "sat_fat_g": 1.28,
    "sodium_mg": 1.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-788",
  "state": "Unspecified",
  "subcategory": "A",
  "tags": [
    "a",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
