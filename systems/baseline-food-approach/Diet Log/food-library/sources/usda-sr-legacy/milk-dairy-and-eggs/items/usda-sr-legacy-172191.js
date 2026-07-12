/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "egg",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172191",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "egg",
      "kind": "unit",
      "label": "egg"
    }
  ],
  "name": "Egg, quail, whole, fresh, raw",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 0.41,
    "energy_kcal": 663.0,
    "fat_g": 11.1,
    "fibre_g": 0.0,
    "folate_ug": 66.0,
    "iron_mg": 3.65,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 226.0,
    "potassium_mg": 132.0,
    "protein_g": 13.0,
    "salt_g": 0.3525,
    "sat_fat_g": 3.56,
    "sodium_mg": 141.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 156.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.08,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172191",
  "state": "Raw",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
