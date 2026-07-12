/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tbsp",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173453",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Cream substitute, flavored, liquid",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 35.1,
    "energy_kcal": 251.0,
    "fat_g": 13.5,
    "fibre_g": 1.1,
    "folate_ug": 1.0,
    "iron_mg": 0.59,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 96.0,
    "protein_g": 0.69,
    "salt_g": 0.1675,
    "sat_fat_g": 2.64,
    "sodium_mg": 67.0,
    "sugar_g": 33.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.58,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173453",
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
