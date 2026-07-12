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
  "id": "usda-sr-legacy-172180",
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
      "gramsPerUnit": 226.0,
      "key": "cup-not-packed",
      "kind": "unit",
      "label": "cup (not packed)"
    }
  ],
  "name": "Cheese, cottage, creamed, with fruit",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 4.61,
    "energy_kcal": 97.0,
    "fat_g": 3.85,
    "fibre_g": 0.2,
    "folate_ug": 11.0,
    "iron_mg": 0.16,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 90.0,
    "protein_g": 10.7,
    "salt_g": 0.86,
    "sat_fat_g": 2.31,
    "sodium_mg": 344.0,
    "sugar_g": 2.38,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172180",
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
