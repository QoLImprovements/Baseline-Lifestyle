/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170846",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    }
  ],
  "name": "Cheese, mozzarella, whole milk, low moisture",
  "nutritionPerBasis": {
    "calcium_mg": 575.0,
    "carbs_g": 2.47,
    "energy_kcal": 1330.0,
    "fat_g": 24.6,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.2,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 412.0,
    "potassium_mg": 75.0,
    "protein_g": 21.6,
    "salt_g": 1.775,
    "sat_fat_g": 15.6,
    "sodium_mg": 710.0,
    "sugar_g": 1.01,
    "vitamin_a_ug": 197.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170846",
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
