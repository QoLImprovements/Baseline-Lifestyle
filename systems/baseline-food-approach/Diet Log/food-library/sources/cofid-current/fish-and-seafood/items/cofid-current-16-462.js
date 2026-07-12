/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Recipe, containing boal, hilsa, mackerel, rohu, onions, courgette, green beans, oil, water and spices",
  "id": "cofid-current-16-462",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, fish and vegetable, Bangladeshi, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 1.4,
    "energy_kcal": 118.0,
    "fat_g": 8.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.07,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 153.0,
    "potassium_mg": 234.0,
    "protein_g": 9.1,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-462",
  "state": "Unspecified",
  "subcategory": "J",
  "tags": [
    "fish-and-seafood",
    "j",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
