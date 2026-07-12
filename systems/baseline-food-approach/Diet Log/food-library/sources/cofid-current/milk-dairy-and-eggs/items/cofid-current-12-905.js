/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "8 samples, 4 brands",
  "id": "cofid-current-12-905",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yogurt, low fat, toffee",
  "nutritionPerBasis": {
    "calcium_mg": 159.0,
    "carbs_g": 18.0,
    "energy_kcal": 91.0,
    "fat_g": 0.9,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.11,
    "magnesium_mg": 16.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 132.0,
    "potassium_mg": 220.0,
    "protein_g": 3.8,
    "salt_g": 0.1675,
    "sat_fat_g": 0.62,
    "sodium_mg": 67.0,
    "sugar_g": 16.8,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-905",
  "state": "Unspecified",
  "subcategory": "BNH",
  "tags": [
    "bnh",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
