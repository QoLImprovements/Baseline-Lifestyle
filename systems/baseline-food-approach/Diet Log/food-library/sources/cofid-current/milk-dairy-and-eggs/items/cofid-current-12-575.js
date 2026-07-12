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
  "id": "cofid-current-12-575",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Custard, made up with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 16.3,
    "energy_kcal": 114.0,
    "fat_g": 4.2,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.11,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 185.0,
    "protein_g": 4.0,
    "salt_g": 0.1675,
    "sat_fat_g": 2.64,
    "sodium_mg": 67.0,
    "sugar_g": 11.1,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-575",
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
