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
  "id": "cofid-current-12-595",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Raita, yogurt and gram flour, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 8.1,
    "energy_kcal": 103.0,
    "fat_g": 6.6,
    "fibre_g": 1.4,
    "folate_ug": 15.0,
    "iron_mg": 0.48,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 185.0,
    "protein_g": 3.3,
    "salt_g": 0.07,
    "sat_fat_g": 3.83,
    "sodium_mg": 28.0,
    "sugar_g": 5.3,
    "vitamin_a_ug": 92.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-595",
  "state": "Unspecified",
  "subcategory": "BV",
  "tags": [
    "bv",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
