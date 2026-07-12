/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-169079",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "tbsp-whipped",
      "kind": "unit",
      "label": "tbsp, whipped"
    }
  ],
  "name": "Cheese, cream, low fat",
  "nutritionPerBasis": {
    "calcium_mg": 148.0,
    "carbs_g": 6.73,
    "energy_kcal": 872.0,
    "fat_g": 16.7,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 0.17,
    "magnesium_mg": 8.0,
    "omega3_g": 0.083,
    "phosphorus_mg": 152.0,
    "potassium_mg": 247.0,
    "protein_g": 7.85,
    "salt_g": 0.7925,
    "sat_fat_g": 10.0,
    "sodium_mg": 317.0,
    "sugar_g": 3.3,
    "vitamin_a_ug": 161.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169079",
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
