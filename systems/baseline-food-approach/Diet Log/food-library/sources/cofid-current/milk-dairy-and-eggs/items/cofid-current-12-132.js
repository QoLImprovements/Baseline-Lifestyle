/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10-20 samples",
  "id": "cofid-current-12-132",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Caerphilly",
  "nutritionPerBasis": {
    "calcium_mg": 550.0,
    "carbs_g": 0.1,
    "energy_kcal": 375.0,
    "fat_g": 31.3,
    "fibre_g": 0.0,
    "folate_ug": 50.0,
    "iron_mg": 0.7,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 400.0,
    "potassium_mg": 91.0,
    "protein_g": 23.2,
    "salt_g": 1.2,
    "sat_fat_g": 19.6,
    "sodium_mg": 480.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 350.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-132",
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
