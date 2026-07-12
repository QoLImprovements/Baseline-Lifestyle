/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "2-tbsp",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173446",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    }
  ],
  "name": "KRAFT CHEEZ WHIZ LIGHT Pasteurized Process Cheese Product",
  "nutritionPerBasis": {
    "calcium_mg": 418.0,
    "carbs_g": 16.2,
    "energy_kcal": 900.0,
    "fat_g": 9.5,
    "fibre_g": 0.2,
    "folate_ug": 0.0,
    "iron_mg": 0.16,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 943.0,
    "potassium_mg": 297.0,
    "protein_g": 16.3,
    "salt_g": 4.25,
    "sat_fat_g": 6.4,
    "sodium_mg": 1700.0,
    "sugar_g": 8.2,
    "vitamin_a_ug": 628.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173446",
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
