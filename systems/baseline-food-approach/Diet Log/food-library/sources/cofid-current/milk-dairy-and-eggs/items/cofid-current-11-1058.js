/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1058",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tart, custard, large, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 25.2,
    "energy_kcal": 275.0,
    "fat_g": 17.4,
    "fibre_g": 1.7,
    "folate_ug": 6.0,
    "iron_mg": 0.68,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.0,
    "potassium_mg": 141.0,
    "protein_g": 5.8,
    "salt_g": 0.3725,
    "sat_fat_g": 6.63,
    "sodium_mg": 149.0,
    "sugar_g": 5.9,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.78,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1058",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
