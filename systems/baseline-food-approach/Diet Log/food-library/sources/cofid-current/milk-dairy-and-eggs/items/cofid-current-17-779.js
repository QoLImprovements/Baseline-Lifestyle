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
  "id": "cofid-current-17-779",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "White sauce, savoury, made with whole milk, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 136.0,
    "carbs_g": 11.6,
    "energy_kcal": 158.0,
    "fat_g": 10.8,
    "fibre_g": 0.3,
    "folate_ug": 5.0,
    "iron_mg": 0.18,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 182.0,
    "protein_g": 4.4,
    "salt_g": 0.2625,
    "sat_fat_g": 6.8,
    "sodium_mg": 105.0,
    "sugar_g": 4.9,
    "vitamin_a_ug": 128.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-779",
  "state": "Unspecified",
  "subcategory": "WCD",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "wcd"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
