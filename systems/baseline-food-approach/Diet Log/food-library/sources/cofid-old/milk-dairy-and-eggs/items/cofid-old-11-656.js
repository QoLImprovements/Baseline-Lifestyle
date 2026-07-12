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
  "id": "cofid-old-11-656",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Doughnuts, custard-filled",
  "nutritionPerBasis": {
    "calcium_mg": 79.0,
    "carbs_g": 42.5,
    "energy_kcal": 358.0,
    "fat_g": 19.4,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 1.09,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 85.0,
    "potassium_mg": 95.0,
    "protein_g": 5.9,
    "salt_g": 0.5,
    "sat_fat_g": 5.2,
    "sodium_mg": 200.0,
    "sugar_g": 15.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.51,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-656",
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
