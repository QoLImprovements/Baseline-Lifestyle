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
  "id": "cofid-current-12-487",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Double Gloucester",
  "nutritionPerBasis": {
    "calcium_mg": 660.0,
    "carbs_g": 0.1,
    "energy_kcal": 413.0,
    "fat_g": 35.0,
    "fibre_g": 0.0,
    "folate_ug": 30.0,
    "iron_mg": 0.4,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 460.0,
    "potassium_mg": 79.0,
    "protein_g": 24.4,
    "salt_g": 1.6825,
    "sat_fat_g": 21.93,
    "sodium_mg": 673.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 369.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-487",
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
