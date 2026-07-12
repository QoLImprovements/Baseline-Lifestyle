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
  "id": "cofid-old-12-239",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Jelly, made with semi-skimmed milk",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 16.8,
    "energy_kcal": 79.0,
    "fat_g": 0.7,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.4,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 71.0,
    "protein_g": 2.6,
    "salt_g": 0.0725,
    "sat_fat_g": 0.4,
    "sodium_mg": 29.0,
    "sugar_g": 16.8,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-239",
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
