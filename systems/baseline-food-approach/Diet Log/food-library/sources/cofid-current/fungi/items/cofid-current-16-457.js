/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-16-457",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, prawn and mushroom, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 2.7,
    "energy_kcal": 164.0,
    "fat_g": 14.3,
    "fibre_g": 1.1,
    "folate_ug": 16.0,
    "iron_mg": 0.91,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 105.0,
    "potassium_mg": 337.0,
    "protein_g": 5.7,
    "salt_g": 0.1825,
    "sat_fat_g": 1.01,
    "sodium_mg": 73.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 3.73,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-457",
  "state": "Raw",
  "subcategory": "J",
  "tags": [
    "fungi",
    "j",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
