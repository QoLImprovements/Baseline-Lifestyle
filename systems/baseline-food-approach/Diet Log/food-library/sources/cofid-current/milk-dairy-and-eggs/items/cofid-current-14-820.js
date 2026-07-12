/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Analysis and literature sources; drained fluid from fresh coconut",
  "id": "cofid-current-14-820",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coconut milk",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 4.9,
    "energy_kcal": 22.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.1,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 280.0,
    "protein_g": 0.3,
    "salt_g": 0.275,
    "sat_fat_g": 0.2,
    "sodium_mg": 110.0,
    "sugar_g": 4.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-820",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
