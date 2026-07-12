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
  "id": "cofid-current-11-1135",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yorkshire pudding, made with skimmed milk, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 25.9,
    "energy_kcal": 190.0,
    "fat_g": 7.4,
    "fibre_g": 1.1,
    "folate_ug": 9.0,
    "iron_mg": 0.8,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 126.0,
    "potassium_mg": 185.0,
    "protein_g": 6.8,
    "salt_g": 0.135,
    "sat_fat_g": 1.23,
    "sodium_mg": 54.0,
    "sugar_g": 3.6,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 3.07,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1135",
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
