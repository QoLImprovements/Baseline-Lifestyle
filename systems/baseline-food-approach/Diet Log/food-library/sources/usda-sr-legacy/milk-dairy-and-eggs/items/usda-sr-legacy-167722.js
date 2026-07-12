/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-167722",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 262.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Tofu yogurt",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 16.0,
    "energy_kcal": 94.0,
    "fat_g": 1.8,
    "fibre_g": 0.2,
    "folate_ug": 6.0,
    "iron_mg": 1.06,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 47.0,
    "protein_g": 3.5,
    "salt_g": 0.0875,
    "sat_fat_g": 0.259,
    "sodium_mg": 35.0,
    "sugar_g": 1.24,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167722",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
