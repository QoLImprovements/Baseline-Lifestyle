/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-current-17-763",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Creme egg",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 71.0,
    "energy_kcal": 425.0,
    "fat_g": 15.9,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.8,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 145.0,
    "protein_g": 4.0,
    "salt_g": 0.1575,
    "sat_fat_g": 9.7,
    "sodium_mg": 63.0,
    "sugar_g": 58.0,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.07,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-763",
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
