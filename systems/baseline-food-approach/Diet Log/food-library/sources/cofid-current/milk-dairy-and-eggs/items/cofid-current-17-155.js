/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "225ml coffee infusion with 15g single cream",
  "id": "cofid-current-17-155",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coffee, infusion, average, with single cream",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.3,
    "energy_kcal": 14.0,
    "fat_g": 1.2,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.1,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 94.0,
    "protein_g": 0.4,
    "salt_g": 0.0075,
    "sat_fat_g": 0.7,
    "sodium_mg": 3.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-155",
  "state": "Unspecified",
  "subcategory": "PAC",
  "tags": [
    "milk-dairy-and-eggs",
    "pac",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
