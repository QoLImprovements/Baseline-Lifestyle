/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Average of Cheshire, Lancashire and Wensleydale",
  "id": "cofid-current-12-368",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, white, average",
  "nutritionPerBasis": {
    "calcium_mg": 544.0,
    "carbs_g": 0.1,
    "energy_kcal": 381.0,
    "fat_g": 31.8,
    "fibre_g": 0.0,
    "folate_ug": 39.0,
    "iron_mg": 0.3,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 408.0,
    "potassium_mg": 82.0,
    "protein_g": 23.7,
    "salt_g": 1.255,
    "sat_fat_g": 21.1,
    "sodium_mg": 502.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 389.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-368",
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
