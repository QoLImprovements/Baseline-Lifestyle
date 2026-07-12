/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "4-tsp",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172214",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "4-tsp",
      "kind": "unit",
      "label": "4 tsp"
    }
  ],
  "name": "Cream substitute, flavored, powdered",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 75.4,
    "energy_kcal": 2020.0,
    "fat_g": 21.5,
    "fibre_g": 1.2,
    "folate_ug": 1.0,
    "iron_mg": 0.63,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 90.0,
    "protein_g": 0.68,
    "salt_g": 0.3075,
    "sat_fat_g": 19.4,
    "sodium_mg": 123.0,
    "sugar_g": 58.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 9.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172214",
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
