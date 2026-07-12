/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Breakfast milk, average of 6 samples of summer and winter milk",
  "id": "cofid-current-12-321",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, Channel Islands, whole, pasteurised",
  "nutritionPerBasis": {
    "calcium_mg": 129.0,
    "carbs_g": 4.3,
    "energy_kcal": 72.0,
    "fat_g": 4.7,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.0,
    "magnesium_mg": 12.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 106.0,
    "potassium_mg": 131.0,
    "protein_g": 3.5,
    "salt_g": 0.0975,
    "sat_fat_g": 3.02,
    "sodium_mg": 39.0,
    "sugar_g": 4.3,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.87
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-321",
  "state": "Unspecified",
  "subcategory": "BAB",
  "tags": [
    "bab",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
