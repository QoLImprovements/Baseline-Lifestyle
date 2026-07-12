/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 cans, 2 brands",
  "id": "cofid-current-12-520",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, condensed, whole, sweetened",
  "nutritionPerBasis": {
    "calcium_mg": 290.0,
    "carbs_g": 55.5,
    "energy_kcal": 310.0,
    "fat_g": 8.0,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 0.23,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 240.0,
    "potassium_mg": 360.0,
    "protein_g": 7.4,
    "salt_g": 0.225,
    "sat_fat_g": 4.99,
    "sodium_mg": 90.0,
    "sugar_g": 55.5,
    "vitamin_a_ug": 122.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.36
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-520",
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
