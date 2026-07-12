/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "11 samples, 11 products",
  "id": "cofid-current-17-648",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chocolate, milk",
  "nutritionPerBasis": {
    "calcium_mg": 226.0,
    "carbs_g": 56.0,
    "energy_kcal": 519.0,
    "fat_g": 31.1,
    "fibre_g": 2.3,
    "folate_ug": 9.0,
    "iron_mg": 2.05,
    "magnesium_mg": 57.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 224.0,
    "potassium_mg": 451.0,
    "protein_g": 7.3,
    "salt_g": 0.2225,
    "sat_fat_g": 18.71,
    "sodium_mg": 89.0,
    "sugar_g": 56.0,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.6,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-648",
  "state": "Unspecified",
  "subcategory": "SEA",
  "tags": [
    "milk-dairy-and-eggs",
    "sea",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
