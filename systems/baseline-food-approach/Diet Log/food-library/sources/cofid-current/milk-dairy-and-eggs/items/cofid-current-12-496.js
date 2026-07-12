/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "9 samples, sampled in spring and autumn",
  "id": "cofid-current-12-496",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Halloumi",
  "nutritionPerBasis": {
    "calcium_mg": 794.0,
    "carbs_g": 1.7,
    "energy_kcal": 313.0,
    "fat_g": 23.5,
    "fibre_g": 0.0,
    "folate_ug": 40.0,
    "iron_mg": 0.0,
    "magnesium_mg": 40.0,
    "omega3_g": 0.15,
    "phosphorus_mg": 517.0,
    "potassium_mg": 88.0,
    "protein_g": 23.9,
    "salt_g": 3.0,
    "sat_fat_g": 16.58,
    "sodium_mg": 1200.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 322.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-496",
  "state": "Unspecified",
  "subcategory": "BL",
  "tags": [
    "bl",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
