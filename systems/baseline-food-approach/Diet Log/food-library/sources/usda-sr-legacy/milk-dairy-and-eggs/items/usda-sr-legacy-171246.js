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
  "id": "usda-sr-legacy-171246",
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
      "gramsPerUnit": 85.0,
      "key": "package-3-oz",
      "kind": "unit",
      "label": "package (3 oz)"
    }
  ],
  "name": "Cheese, neufchatel",
  "nutritionPerBasis": {
    "calcium_mg": 117.0,
    "carbs_g": 3.59,
    "energy_kcal": 1060.0,
    "fat_g": 22.8,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 0.13,
    "magnesium_mg": 10.0,
    "omega3_g": 0.117,
    "phosphorus_mg": 138.0,
    "potassium_mg": 152.0,
    "protein_g": 9.15,
    "salt_g": 0.835,
    "sat_fat_g": 12.8,
    "sodium_mg": 334.0,
    "sugar_g": 3.19,
    "vitamin_a_ug": 241.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171246",
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
