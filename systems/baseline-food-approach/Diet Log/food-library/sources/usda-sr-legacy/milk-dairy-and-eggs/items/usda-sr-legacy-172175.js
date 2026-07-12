/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cubic-inch",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172175",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "cup-crumbled-not-packed",
      "kind": "unit",
      "label": "cup, crumbled, not packed"
    }
  ],
  "name": "Cheese, blue",
  "nutritionPerBasis": {
    "calcium_mg": 528.0,
    "carbs_g": 2.34,
    "energy_kcal": 353.0,
    "fat_g": 28.7,
    "fibre_g": 0.0,
    "folate_ug": 36.0,
    "iron_mg": 0.31,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 387.0,
    "potassium_mg": 256.0,
    "protein_g": 21.4,
    "salt_g": 2.875,
    "sat_fat_g": 18.7,
    "sodium_mg": 1150.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 198.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172175",
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
