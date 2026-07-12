/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "13 cans, 6 brands",
  "id": "cofid-old-12-120",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cream, sterilised, canned",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 3.7,
    "energy_kcal": 239.0,
    "fat_g": 23.9,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.8,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 73.0,
    "potassium_mg": 110.0,
    "protein_g": 2.5,
    "salt_g": 0.1325,
    "sat_fat_g": 14.9,
    "sodium_mg": 53.0,
    "sugar_g": 3.7,
    "vitamin_a_ug": 276.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-120",
  "state": "Canned",
  "subcategory": "BJL",
  "tags": [
    "bjl",
    "canned",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
