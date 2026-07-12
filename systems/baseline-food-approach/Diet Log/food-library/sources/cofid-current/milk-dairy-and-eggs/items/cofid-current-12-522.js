/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "12 samples, Ideal, Carnation and own brands",
  "id": "cofid-current-12-522",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, evaporated, whole",
  "nutritionPerBasis": {
    "calcium_mg": 290.0,
    "carbs_g": 12.7,
    "energy_kcal": 166.0,
    "fat_g": 9.4,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.26,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 260.0,
    "potassium_mg": 360.0,
    "protein_g": 8.4,
    "salt_g": 0.45,
    "sat_fat_g": 5.9,
    "sodium_mg": 180.0,
    "sugar_g": 12.7,
    "vitamin_a_ug": 122.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.5
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-522",
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
