/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "slice",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173447",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "KRAFT FREE Singles American Nonfat Pasteurized Process Cheese Product",
  "nutritionPerBasis": {
    "calcium_mg": 712.0,
    "carbs_g": 11.7,
    "energy_kcal": 619.0,
    "fat_g": 1.0,
    "fibre_g": 0.2,
    "folate_ug": 0.0,
    "iron_mg": 0.05,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 923.0,
    "potassium_mg": 236.0,
    "protein_g": 22.7,
    "salt_g": 3.25,
    "sat_fat_g": 0.7,
    "sodium_mg": 1300.0,
    "sugar_g": 6.7,
    "vitamin_a_ug": 2170.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173447",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
