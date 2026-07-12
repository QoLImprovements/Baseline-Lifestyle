/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "18 samples, soft, not grated",
  "id": "cofid-current-12-360",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Mozzarella, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 362.0,
    "carbs_g": 0.0,
    "energy_kcal": 257.0,
    "fat_g": 20.3,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 0.0,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 267.0,
    "potassium_mg": 51.0,
    "protein_g": 18.6,
    "salt_g": 0.9875,
    "sat_fat_g": 13.75,
    "sodium_mg": 395.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 283.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-360",
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
