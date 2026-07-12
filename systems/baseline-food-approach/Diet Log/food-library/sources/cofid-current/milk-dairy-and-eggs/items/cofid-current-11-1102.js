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
  "id": "cofid-current-11-1102",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pancakes, savoury, made with skimmed milk, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 131.0,
    "carbs_g": 26.7,
    "energy_kcal": 193.0,
    "fat_g": 7.3,
    "fibre_g": 1.1,
    "folate_ug": 12.0,
    "iron_mg": 0.79,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 195.0,
    "protein_g": 6.9,
    "salt_g": 0.1375,
    "sat_fat_g": 1.22,
    "sodium_mg": 55.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.08,
    "vitamin_k_ug": 0.58
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1102",
  "state": "Unspecified",
  "subcategory": "AT",
  "tags": [
    "at",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
