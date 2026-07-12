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
  "id": "usda-sr-legacy-170897",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Cheese, Swiss, nonfat or fat free",
  "nutritionPerBasis": {
    "calcium_mg": 961.0,
    "carbs_g": 3.4,
    "energy_kcal": 532.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.17,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 605.0,
    "potassium_mg": 111.0,
    "protein_g": 28.4,
    "salt_g": 2.5,
    "sat_fat_g": 0.0,
    "sodium_mg": 1000.0,
    "sugar_g": 1.33,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170897",
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
