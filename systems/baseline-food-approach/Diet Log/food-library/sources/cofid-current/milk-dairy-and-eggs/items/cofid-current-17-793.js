/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-793",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Egg nog, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 9.6,
    "energy_kcal": 98.0,
    "fat_g": 2.3,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.23,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 132.0,
    "protein_g": 4.0,
    "salt_g": 0.125,
    "sat_fat_g": 1.08,
    "sodium_mg": 50.0,
    "sugar_g": 9.6,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-793",
  "state": "Unspecified",
  "subcategory": "QI",
  "tags": [
    "milk-dairy-and-eggs",
    "qi",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
