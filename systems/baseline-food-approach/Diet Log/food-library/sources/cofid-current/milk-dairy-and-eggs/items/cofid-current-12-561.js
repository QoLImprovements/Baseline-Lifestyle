/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe including breadcrumbs, milk, cheese and eggs",
  "id": "cofid-current-12-561",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese pudding, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 224.0,
    "carbs_g": 11.7,
    "energy_kcal": 170.0,
    "fat_g": 9.3,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.78,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 198.0,
    "potassium_mg": 156.0,
    "protein_g": 10.6,
    "salt_g": 0.68,
    "sat_fat_g": 4.95,
    "sodium_mg": 272.0,
    "sugar_g": 3.1,
    "vitamin_a_ug": 108.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.81
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-561",
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
