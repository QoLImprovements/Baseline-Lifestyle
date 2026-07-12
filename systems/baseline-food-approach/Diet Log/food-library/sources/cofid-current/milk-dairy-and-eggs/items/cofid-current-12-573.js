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
  "id": "cofid-current-12-573",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Custard, egg",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 10.9,
    "energy_kcal": 95.0,
    "fat_g": 3.4,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.37,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 186.0,
    "protein_g": 5.9,
    "salt_g": 0.1825,
    "sat_fat_g": 1.57,
    "sodium_mg": 73.0,
    "sugar_g": 10.9,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-573",
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
