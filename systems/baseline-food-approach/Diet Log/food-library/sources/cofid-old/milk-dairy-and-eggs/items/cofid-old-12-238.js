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
  "id": "cofid-old-12-238",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Jelly, made with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 16.7,
    "energy_kcal": 88.0,
    "fat_g": 1.7,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.4,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 66.0,
    "protein_g": 2.6,
    "salt_g": 0.0725,
    "sat_fat_g": 1.1,
    "sodium_mg": 29.0,
    "sugar_g": 16.7,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-238",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
