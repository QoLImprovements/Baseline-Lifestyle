/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170863",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Cheese, American, nonfat or fat free",
  "nutritionPerBasis": {
    "calcium_mg": 789.0,
    "carbs_g": 10.5,
    "energy_kcal": 529.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.0,
    "magnesium_mg": 115.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 316.0,
    "potassium_mg": 393.0,
    "protein_g": 21.0,
    "salt_g": 3.3,
    "sat_fat_g": 0.0,
    "sodium_mg": 1320.0,
    "sugar_g": 5.26,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170863",
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
