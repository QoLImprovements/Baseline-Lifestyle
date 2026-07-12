/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, sampled in spring and autumn",
  "id": "cofid-current-12-485",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Red Leicester",
  "nutritionPerBasis": {
    "calcium_mg": 723.0,
    "carbs_g": 0.1,
    "energy_kcal": 403.0,
    "fat_g": 33.6,
    "fibre_g": 0.0,
    "folate_ug": 30.0,
    "iron_mg": 0.3,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 495.0,
    "potassium_mg": 76.0,
    "protein_g": 25.0,
    "salt_g": 1.6625,
    "sat_fat_g": 21.1,
    "sodium_mg": 665.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 340.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-485",
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
