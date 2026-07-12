/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-not-packed",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172182",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 226.0,
      "key": "cup-not-packed",
      "kind": "unit",
      "label": "cup (not packed)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Cheese, cottage, lowfat, 2% milkfat",
  "nutritionPerBasis": {
    "calcium_mg": 111.0,
    "carbs_g": 4.76,
    "energy_kcal": 81.0,
    "fat_g": 2.27,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.13,
    "magnesium_mg": 9.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 150.0,
    "potassium_mg": 125.0,
    "protein_g": 10.4,
    "salt_g": 0.77,
    "sat_fat_g": 1.24,
    "sodium_mg": 308.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 68.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172182",
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
