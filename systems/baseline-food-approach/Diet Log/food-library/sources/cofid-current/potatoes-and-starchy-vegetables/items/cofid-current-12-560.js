/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-12-560",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, cheese and potato, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 12.6,
    "energy_kcal": 132.0,
    "fat_g": 7.2,
    "fibre_g": 1.1,
    "folate_ug": 17.0,
    "iron_mg": 0.39,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 293.0,
    "protein_g": 5.0,
    "salt_g": 0.2825,
    "sat_fat_g": 3.25,
    "sodium_mg": 113.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-560",
  "state": "Unspecified",
  "subcategory": "BV",
  "tags": [
    "bv",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
