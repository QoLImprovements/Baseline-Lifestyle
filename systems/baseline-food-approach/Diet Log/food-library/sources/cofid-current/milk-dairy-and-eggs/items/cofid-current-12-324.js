/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "7 samples, 4 brands",
  "id": "cofid-current-12-324",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, evaporated, light",
  "nutritionPerBasis": {
    "calcium_mg": 260.0,
    "carbs_g": 10.3,
    "energy_kcal": 107.0,
    "fat_g": 4.1,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.0,
    "magnesium_mg": 25.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 233.0,
    "potassium_mg": 336.0,
    "protein_g": 7.8,
    "salt_g": 0.2875,
    "sat_fat_g": 2.5,
    "sodium_mg": 115.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-324",
  "state": "Unspecified",
  "subcategory": "BAR",
  "tags": [
    "bar",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
