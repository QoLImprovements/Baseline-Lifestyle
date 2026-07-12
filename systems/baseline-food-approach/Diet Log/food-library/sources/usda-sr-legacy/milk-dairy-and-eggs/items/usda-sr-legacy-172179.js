/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "4-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172179",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "cup-large-curd-not-packed",
      "kind": "unit",
      "label": "cup, large curd (not packed)"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "cup-small-curd-not-packed",
      "kind": "unit",
      "label": "cup, small curd (not packed)"
    }
  ],
  "name": "Cheese, cottage, creamed, large or small curd",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 3.38,
    "energy_kcal": 412.0,
    "fat_g": 4.3,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.07,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 159.0,
    "potassium_mg": 104.0,
    "protein_g": 11.1,
    "salt_g": 0.7875,
    "sat_fat_g": 1.72,
    "sodium_mg": 315.0,
    "sugar_g": 2.67,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172179",
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
