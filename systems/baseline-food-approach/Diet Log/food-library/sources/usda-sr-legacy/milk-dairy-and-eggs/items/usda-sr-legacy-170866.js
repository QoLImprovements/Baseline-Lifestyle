/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "package-yields",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170866",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "package-yields",
      "kind": "unit",
      "label": "package yields"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Dessert topping, powdered, 1.5 ounce prepared with 1/2 cup milk",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 17.1,
    "energy_kcal": 811.0,
    "fat_g": 12.7,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.04,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 86.0,
    "potassium_mg": 151.0,
    "protein_g": 3.61,
    "salt_g": 0.165,
    "sat_fat_g": 10.7,
    "sodium_mg": 66.0,
    "sugar_g": 17.1,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170866",
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
