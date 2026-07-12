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
  "id": "usda-sr-legacy-173452",
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
      "gramsPerUnit": 100.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Cheese, parmesan, dry grated, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 1110.0,
    "carbs_g": 1.37,
    "energy_kcal": 1110.0,
    "fat_g": 20.0,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.9,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 729.0,
    "potassium_mg": 125.0,
    "protein_g": 20.0,
    "salt_g": 3.825,
    "sat_fat_g": 13.3,
    "sodium_mg": 1530.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 160.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173452",
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
