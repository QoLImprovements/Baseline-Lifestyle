/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 6 products, including fresh cream slices and horns",
  "id": "cofid-current-11-843",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastries, cream filled, retail",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 41.4,
    "energy_kcal": 415.0,
    "fat_g": 27.4,
    "fibre_g": 2.9,
    "folate_ug": 6.0,
    "iron_mg": 0.47,
    "magnesium_mg": 10.0,
    "omega3_g": 0.25,
    "phosphorus_mg": 86.0,
    "potassium_mg": 94.0,
    "protein_g": 3.3,
    "salt_g": 0.5125,
    "sat_fat_g": 16.05,
    "sodium_mg": 205.0,
    "sugar_g": 27.3,
    "vitamin_a_ug": 206.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.66,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-843",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
